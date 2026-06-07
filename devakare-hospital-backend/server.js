import express from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// ── Middleware ──────────────────────────────────────────────────────────────
app.use(express.json())
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  methods: ['POST'],
}))

// ── Rate limiter: max 5 requests per IP per 15 minutes ─────────────────────
const appointmentLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: { error: 'Too many requests. Please try again after 15 minutes.' },
  standardHeaders: true,
  legacyHeaders: false,
})

// ── Nodemailer transporter (Gmail SMTP) ────────────────────────────────────
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS, // Gmail App Password (16-char, no spaces needed)
  },
})

// Verify connection on startup
transporter.verify((error) => {
  if (error) {
    console.error('❌ SMTP connection failed:', error.message)
    console.error('   Check your SMTP_USER and SMTP_PASS in .env')
  } else {
    console.log('✅ SMTP connected — ready to send emails')
  }
})

// ── Validation helper ──────────────────────────────────────────────────────
function validateAppointment(data) {
  const errors = {}
  const { name, phone, email, service, message } = data

  if (!name || name.trim().length < 2)
    errors.name = 'Full name is required (min 2 characters).'

  if (!phone || !/^[6-9]\d{9}$/.test(phone.replace(/[\s\-+()]/g, '').replace(/^91/, '')))
    errors.phone = 'A valid 10-digit Indian mobile number is required.'

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = 'A valid email address is required.'

  if (!service || service.trim() === '')
    errors.service = 'Please select a service.'

  if (!message || message.trim().length < 10)
    errors.message = 'Message must be at least 10 characters.'

  return errors
}

// ── HTML email templates ───────────────────────────────────────────────────
function hospitalEmailHTML(data) {
  const { name, phone, email, service, message } = data
  const now = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <style>
        body { font-family: Arial, sans-serif; color: #333; margin: 0; padding: 0; }
        .header { background: #1a5276; color: #fff; padding: 24px 32px; }
        .header h1 { margin: 0; font-size: 20px; }
        .header p { margin: 4px 0 0; font-size: 13px; opacity: 0.8; }
        .body { padding: 28px 32px; }
        .badge { display: inline-block; background: #e8f5e9; color: #2e7d32;
                 border: 1px solid #a5d6a7; border-radius: 4px;
                 padding: 4px 12px; font-size: 12px; font-weight: bold;
                 margin-bottom: 20px; }
        table { width: 100%; border-collapse: collapse; margin-top: 8px; }
        td { padding: 10px 14px; font-size: 14px; border-bottom: 1px solid #f0f0f0; }
        td:first-child { font-weight: bold; color: #555; width: 160px; background: #fafafa; }
        .message-row td { vertical-align: top; }
        .footer { background: #f8f9fa; border-top: 1px solid #e9ecef;
                  padding: 16px 32px; font-size: 12px; color: #888; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🏥 Devkare Hospital — New Appointment Request</h1>
        <p>Received on ${now} (IST)</p>
      </div>
      <div class="body">
        <div class="badge">📋 ACTION REQUIRED — Review &amp; Call Patient</div>
        <table>
          <tr><td>Patient Name</td><td>${name}</td></tr>
          <tr><td>Phone</td><td><a href="tel:${phone}">${phone}</a></td></tr>
          <tr><td>Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td>Service</td><td>${service}</td></tr>
          <tr class="message-row"><td>Message</td><td>${message.replace(/\n/g, '<br/>')}</td></tr>
        </table>
      </div>
      <div class="footer">
        Sent automatically from the Devkare Hospital website contact form.
      </div>
    </body>
    </html>
  `
}

function patientConfirmationHTML(data) {
  const { name, service } = data
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <style>
        body { font-family: Arial, sans-serif; color: #333; margin: 0; padding: 0; }
        .header { background: #1a5276; color: #fff; padding: 24px 32px; }
        .header h1 { margin: 0; font-size: 20px; }
        .body { padding: 28px 32px; line-height: 1.7; }
        .highlight { background: #e8f5e9; border-left: 4px solid #2e7d32;
                     padding: 14px 18px; border-radius: 4px; margin: 20px 0; }
        .contact-box { background: #f4f6f8; border-radius: 8px;
                       padding: 16px 20px; margin-top: 20px; font-size: 14px; }
        .contact-box p { margin: 6px 0; }
        .footer { border-top: 1px solid #e9ecef; padding: 16px 32px;
                  font-size: 12px; color: #888; }
        .marathi { font-size: 13px; color: #666; margin-top: 16px; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🏥 Devkare Hospital — Appointment Confirmed</h1>
      </div>
      <div class="body">
        <p>Dear <strong>${name}</strong>,</p>
        <p>Thank you for reaching out to <strong>Devkare Hospital — Laparoscopy &amp; Maternity Centre</strong>.</p>
        <div class="highlight">
          ✅ We have received your appointment request for <strong>${service}</strong>.<br/>
          Our team will contact you within <strong>24 hours</strong> to confirm your appointment time.
        </div>
        <p>If you need immediate assistance, please call us directly:</p>
        <div class="contact-box">
          <p>📞 <strong>+91 82378 90812</strong></p>
          <p>📍 Plot No. 1/4, Sangli-Miraj Road, Near Mahsul Bhavan, Chandawadi, Miraj – 416410</p>
          <p>🕐 Mon–Sat: 9:00 AM – 7:00 PM &nbsp;|&nbsp; Emergency: 24 × 7</p>
        </div>
        <p class="marathi">आम्ही लवकरच आपल्याशी संपर्क करू. धन्यवाद!</p>
      </div>
      <div class="footer">
        This is an automated confirmation from Devkare Hospital. Please do not reply to this email.
      </div>
    </body>
    </html>
  `
}

// ── POST /api/appointment ──────────────────────────────────────────────────
app.post('/api/appointment', appointmentLimiter, async (req, res) => {
  const { name, phone, email, service, message } = req.body

  // 1. Validate
  const errors = validateAppointment({ name, phone, email, service, message })
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ success: false, errors })
  }

  try {
    const fromAddress = `"${process.env.FROM_NAME || 'Devkare Hospital'}" <${process.env.SMTP_USER}>`

    // 2. Email to hospital staff
    await transporter.sendMail({
      from: fromAddress,
      to: process.env.NOTIFY_TO,
      replyTo: email,          // staff can reply directly to the patient
      subject: `New Appointment – ${name} (${service})`,
      html: hospitalEmailHTML({ name, phone, email, service, message }),
    })

    // 3. Confirmation email to patient
    await transporter.sendMail({
      from: fromAddress,
      to: email,
      subject: 'Appointment Request Received – Devkare Hospital',
      html: patientConfirmationHTML({ name, service }),
    })

    console.log(`✅ Appointment emails sent for: ${name} | ${service} | ${phone}`)
    return res.status(200).json({
      success: true,
      message: 'Appointment request sent successfully.',
    })

  } catch (err) {
    console.error('❌ Email send failed:', err.message)
    return res.status(500).json({
      success: false,
      error: 'Failed to send email. Please try calling us directly.',
    })
  }
})

// ── Health check ───────────────────────────────────────────────────────────
app.get('/api/health', (_, res) => res.json({ status: 'ok' }))

// ── Start server ───────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`)
})
