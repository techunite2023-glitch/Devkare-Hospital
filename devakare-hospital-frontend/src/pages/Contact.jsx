import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  FiPhone, FiMail, FiMapPin, FiClock, FiSend,
  FiCheckCircle, FiFacebook, FiInstagram, FiAlertCircle,
} from 'react-icons/fi'
import {
  MdDirections, MdLocalHospital, MdWhatsapp,
} from 'react-icons/md'
import PageBanner from '../components/PageBanner'
import {
  pageTransition, fadeInUp, fadeInLeft, fadeInRight,
  staggerContainer, staggerItem, viewportConfig,
} from '../utils/animations'

// ── Contact info blocks ────────────────────────────────────────────────────
const contactCards = [
  {
    icon: <FiPhone size={26} />,
    title: 'Phone',
    marathi: 'फोन नंबर',
    lines: ['+91 82378 90812'],
    link: 'tel:+918237890812',
    color: 'bg-blue-50 text-blue-600 border-blue-100',
    cta: 'Call Now',
  },
  {
    icon: <FiMail size={26} />,
    title: 'Email',
    marathi: 'ईमेल',
    lines: ['tejshewale10@gmail.com'],
    link: 'mailto:tejshewale10@gmail.com',
    color: 'bg-teal-50 text-teal-600 border-teal-100',
    cta: 'Send Email',
  },
  {
    icon: <FiMapPin size={26} />,
    title: 'Address',
    marathi: 'पत्ता',
    lines: [
      'Plot No. 1/4, Sangli-Miraj Road,',
      'Near Mahsul Bhavan, Chandawadi,',
      'Miraj – 416410, Maharashtra',
    ],
    link: 'https://maps.google.com/?q=Devkare+Hospital+Miraj',
    color: 'bg-pink-50 text-pink-600 border-pink-100',
    cta: 'Get Directions',
  },
  {
    icon: <FiClock size={26} />,
    title: 'Working Hours',
    marathi: 'कामाचे तास',
    lines: ['Mon–Sat: 9:00 AM – 7:00 PM', 'Emergency: 24 × 7'],
    link: 'tel:+918237890812',
    color: 'bg-orange-50 text-orange-600 border-orange-100',
    cta: 'Book Appointment',
  },
]

// ── Validation helpers ─────────────────────────────────────────────────────
function validateForm(form, captchaAnswer, captchaCorrect) {
  const errors = {}

  const name = form.name.trim()
  if (!name) {
    errors.name = 'Full name is required.'
  } else if (name.length < 2) {
    errors.name = 'Name must be at least 2 characters.'
  } else if (!/^[a-zA-Z\u0900-\u097F\s.'-]+$/.test(name)) {
    errors.name = 'Name contains invalid characters.'
  }

  const phone = form.phone.trim()
  if (!phone) {
    errors.phone = 'Phone number is required.'
  } else if (!/^[6-9]\d{9}$/.test(phone.replace(/[\s\-+()]/g, '').replace(/^91/, ''))) {
    errors.phone = 'Enter a valid 10-digit Indian mobile number.'
  }

  const email = form.email.trim()
  if (!email) {
    errors.email = 'Email address is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Enter a valid email address (e.g. name@example.com).'
  }

  if (!form.service) {
    errors.service = 'Please select a service.'
  }

  const message = form.message.trim()
  if (!message) {
    errors.message = 'Message is required.'
  } else if (message.length < 10) {
    errors.message = 'Message must be at least 10 characters.'
  }

  // CAPTCHA
  const userAnswer = parseInt(captchaAnswer, 10)
  if (captchaAnswer === '') {
    errors.captcha = 'Please solve the verification question.'
  } else if (isNaN(userAnswer) || userAnswer !== captchaCorrect) {
    errors.captcha = 'Incorrect answer. Please try again.'
  }

  return errors
}

// ── Generate a simple math captcha ────────────────────────────────────────
function generateCaptcha() {
  const a = Math.floor(Math.random() * 9) + 1
  const b = Math.floor(Math.random() * 9) + 1
  return { a, b, answer: a + b }
}

// ═══════════════════════════════════════════════════════════════════════════
export default function Contact() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', service: '', message: '',
  })
  const [errors, setErrors]           = useState({})
  const [submitted, setSubmitted]     = useState(false)
  const [loading, setLoading]         = useState(false)
  const [captchaAnswer, setCaptchaAnswer] = useState('')
  const [captcha, setCaptcha]         = useState(() => generateCaptcha())

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha())
    setCaptchaAnswer('')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    // Clear the specific field error as user types
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleCaptchaChange = (e) => {
    setCaptchaAnswer(e.target.value)
    if (errors.captcha) setErrors(prev => ({ ...prev, captcha: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const validationErrors = validateForm(form, captchaAnswer, captcha.answer)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      const firstErrorEl = document.querySelector('[data-error-field]')
      if (firstErrorEl) firstErrorEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }

    setLoading(true)

    try {
      const res = await fetch('http://localhost:5000/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          service: form.service,
          message: form.message,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        // Server-side validation errors
        if (data.errors) {
          setErrors(data.errors)
        } else {
          setErrors({ form: data.error || 'Something went wrong. Please try again.' })
        }
        return
      }

      setSubmitted(true)
      refreshCaptcha()
    } catch (err) {
      setErrors({ form: 'Could not connect to server. Please call us directly at +91 82378 90812.' })
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setSubmitted(false)
    setErrors({})
    setForm({ name: '', phone: '', email: '', service: '', message: '' })
    refreshCaptcha()
  }

  return (
    <motion.div {...pageTransition}>
      <PageBanner
        title="Contact Us"
        subtitle="संपर्क करा | We're Here for You"
        image="/images/infrastructure/hospital-front.jpeg"
        breadcrumb="Contact"
      />

      {/* ═══════ CONTACT CARDS ══════════════════════════════════════════ */}
      <section className="py-16 bg-cream">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12"
            variants={fadeInUp} initial="hidden" animate="visible"
          >
            <span className="section-badge">संपर्क | Get in Touch</span>
            <h2 className="section-title mb-4">
              Reach <span className="text-primary-500">Devkare Hospital</span>
            </h2>
            <div className="divider divider-center mb-5" />
            <p className="section-subtitle mx-auto text-sm">
              We're always here to help. Whether it's a routine consultation, emergency care,
              or a general inquiry — reach out and we'll respond promptly.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            variants={staggerContainer} initial="hidden" animate="visible"
          >
            {contactCards.map((c, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="card-base p-6 flex flex-col items-center text-center group"
              >
                <div className={`w-14 h-14 rounded-2xl ${c.color} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {c.icon}
                </div>
                <h3 className="font-playfair font-semibold text-base text-gray-900 mb-1">{c.title}</h3>
                <p className="text-xs text-gray-400 font-devanagari mb-3">{c.marathi}</p>
                <div className="space-y-1 mb-4 flex-1">
                  {c.lines.map((l, j) => (
                    <p key={j} className="text-sm text-gray-600 leading-relaxed">{l}</p>
                  ))}
                </div>
                <a
                  href={c.link}
                  target={c.link.startsWith('https') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-primary-500 hover:text-primary-600 flex items-center gap-1 transition-colors"
                >
                  {c.cta} →
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ FORM + MAP ═════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Contact Form */}
            <motion.div
              variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={viewportConfig}
            >
              <span className="section-badge">संपर्क फॉर्म | Send Message</span>
              <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-3">
                Book an <span className="text-primary-500">Appointment</span>
              </h2>
              <div className="divider mb-6" />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
                >
                  <FiCheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                  <h3 className="font-playfair font-bold text-xl text-gray-900 mb-2">Appointment Requested!</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Thank you, <strong>{form.name}</strong>! Your appointment request has been
                    sent to Devkare Hospital. You will also receive a confirmation email shortly.
                  </p>
                  <p className="text-gray-500 text-xs font-devanagari">
                    आम्ही लवकरच आपल्याशी संपर्क करू.
                  </p>
                  <button
                    className="mt-5 btn-primary text-sm"
                    onClick={resetForm}
                  >
                    Book Another Appointment
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>

                  {/* Name + Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div data-error-field>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all
                          ${errors.name
                            ? 'border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-100 bg-red-50'
                            : 'border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100'
                          }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <FiAlertCircle size={12} /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div data-error-field>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all
                          ${errors.phone
                            ? 'border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-100 bg-red-50'
                            : 'border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100'
                          }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <FiAlertCircle size={12} /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div data-error-field>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all
                        ${errors.email
                          ? 'border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-100 bg-red-50'
                          : 'border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100'
                        }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <FiAlertCircle size={12} /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Service */}
                  <div data-error-field>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Service Required <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all bg-white
                        ${errors.service
                          ? 'border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-100 bg-red-50'
                          : 'border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100'
                        }`}
                    >
                      <option value="">Select a service…</option>
                      <option>Maternity & Obstetrics</option>
                      <option>Laparoscopic Surgery</option>
                      <option>IVF & Fertility</option>
                      <option>Gynecology Consultation</option>
                      <option>High-Risk Pregnancy</option>
                      <option>Emergency Care</option>
                      <option>General Inquiry</option>
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <FiAlertCircle size={12} /> {errors.service}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div data-error-field>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Please describe your concern or query…"
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all resize-none
                        ${errors.message
                          ? 'border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-100 bg-red-50'
                          : 'border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100'
                        }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <FiAlertCircle size={12} /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* ── CAPTCHA ───────────────────────────────────────── */}
                  <div
                    data-error-field
                    className={`rounded-xl border p-4 transition-all
                      ${errors.captcha ? 'border-red-200 bg-red-50' : 'border-gray-200 bg-gray-50'}`}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      🔐 Human Verification <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center gap-4 flex-wrap">
                      <div className="flex items-center gap-3">
                        <div className="px-5 py-2.5 bg-white border border-gray-300 rounded-xl shadow-sm select-none">
                          <span className="font-mono text-xl font-bold text-gray-800 tracking-widest">
                            {captcha.a} + {captcha.b} = ?
                          </span>
                        </div>
                        <input
                          type="number"
                          value={captchaAnswer}
                          onChange={handleCaptchaChange}
                          placeholder="Answer"
                          min="0"
                          max="99"
                          className={`w-20 px-3 py-2.5 rounded-xl border text-sm text-center outline-none transition-all font-mono font-bold
                            ${errors.captcha
                              ? 'border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-100'
                              : 'border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 bg-white'
                            }`}
                        />
                      </div>
                      <button
                        type="button"
                        onClick={refreshCaptcha}
                        className="text-xs text-primary-500 hover:text-primary-600 underline underline-offset-2 transition-colors"
                      >
                        ↺ New question
                      </button>
                    </div>
                    {errors.captcha && (
                      <p className="mt-2 text-xs text-red-500 flex items-center gap-1">
                        <FiAlertCircle size={12} /> {errors.captcha}
                      </p>
                    )}
                    <p className="mt-2 text-xs text-gray-400">
                      Solve the math question to verify you're not a bot.
                    </p>
                  </div>

                  {/* Server error */}
                  {errors.form && (
                    <div className="flex items-start gap-2 text-xs text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                      <FiAlertCircle size={14} className="flex-shrink-0 mt-0.5" />
                      <span>{errors.form}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center py-3.5 text-sm"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Sending…
                      </span>
                    ) : (
                      <><FiSend size={15} /> Send Appointment Request</>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Map + Info */}
            <motion.div
              variants={fadeInRight} initial="hidden" whileInView="visible" viewport={viewportConfig}
              className="flex flex-col gap-6"
            >
              {/* Google Maps Embed */}
              <div className="rounded-2xl overflow-hidden shadow-hover h-72 sm:h-80 bg-gray-100">
                <iframe
                  title="Devkare Hospital Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0!2d74.6584!3d16.8287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1239d5e6f1b5b%3A0x5b1b2b3c4d5e6f7a!2sDevkare+Hospital!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Hospital address card */}
              <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <MdLocalHospital size={24} className="text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-bold text-lg text-gray-900 mb-1">
                      Devkare Hospital
                    </h3>
                    <p className="text-xs text-gray-400 font-devanagari mb-2">लॅपरोस्कोपी आणि मातृत्व केंद्र</p>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">
                      Plot No. 1/4, Sangli-Miraj Road, Near Mahsul Bhavan,
                      Chandawadi, Miraj – 416410, Maharashtra, India.
                    </p>
                    <p className="text-xs text-gray-500 font-devanagari mb-4">
                      प्लॉट क्र. 1/4, संगली-मिरज रोड, महसूल भवन जवळ, चांदवाडी, मिरज – 416410
                    </p>
                    <a
                      href="https://maps.google.com/?q=Devkare+Hospital+Miraj"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-xs py-2.5 inline-flex"
                    >
                      <MdDirections size={14} /> Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick contact buttons */}
              <div className="grid grid-cols-3 gap-3">
                <a
                  href="tel:+918237890812"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-blue-50 border border-blue-100 hover:bg-blue-100 transition-colors text-center"
                >
                  <FiPhone size={20} className="text-blue-600" />
                  <span className="text-xs font-medium text-blue-700">Call</span>
                </a>
                <a
                  href="https://wa.me/918237890812"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-green-50 border border-green-100 hover:bg-green-100 transition-colors text-center"
                >
                  <MdWhatsapp size={22} className="text-green-600" />
                  <span className="text-xs font-medium text-green-700">WhatsApp</span>
                </a>
                <a
                  href="mailto:devkarehospital@gmail.com"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-orange-50 border border-orange-100 hover:bg-orange-100 transition-colors text-center"
                >
                  <FiMail size={20} className="text-orange-600" />
                  <span className="text-xs font-medium text-orange-700">Email</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ MARATHI ADDRESS SECTION ════════════════════════════════ */}
      <section className="py-16 bg-gradient-to-br from-navy to-primary-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/infrastructure/hospital.jpeg')] bg-cover" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={viewportConfig}
            >
              <img
                src="/images/infrastructure/marathi-poster.jpeg"
                alt="Hospital Info in Marathi"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>

            <motion.div
              variants={fadeInRight} initial="hidden" whileInView="visible" viewport={viewportConfig}
            >
              <span className="section-badge bg-gold-500/20 text-gold-light border-gold-500/30">
                मराठी पत्ता | Address in Marathi
              </span>
              <h2 className="font-playfair text-3xl font-bold text-white mb-4">
                आमचे <span className="text-gold-light">हॉस्पिटल</span>
              </h2>
              <div className="space-y-4 text-white/80 font-devanagari text-sm leading-relaxed">
                <div className="flex items-start gap-3">
                  <FiMapPin size={16} className="text-gold-light flex-shrink-0 mt-1" />
                  <p>
                    देवकरे हॉस्पिटल, लॅपरोस्कोपी आणि मातृत्व केंद्र<br />
                    प्लॉट क्र. 1/4, संगली-मिरज रोड,<br />
                    महसूल भवन जवळ, चांदवाडी,<br />
                    मिरज – 416410, महाराष्ट्र
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <FiPhone size={16} className="text-gold-light flex-shrink-0" />
                  <a href="tel:+918237890812" className="text-white hover:text-gold-light transition-colors">
                    +91 82378 90812
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FiMail size={16} className="text-gold-light flex-shrink-0" />
                  <a href="mailto:devkarehospital@gmail.com" className="text-white hover:text-gold-light transition-colors text-xs">
                    devkarehospital@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FiClock size={16} className="text-gold-light flex-shrink-0" />
                  <p>सोम–शनि: सकाळी 9:00 – सायंकाळी 7:00 | आपत्काल: 24 × 7</p>
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <a href="#" className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                  <FiFacebook size={16} />
                </a>
                <a href="#" className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                  <FiInstagram size={16} />
                </a>
                <a href="https://wa.me/918237890812" className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                  <MdWhatsapp size={18} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ OPENING HOURS TABLE ════════════════════════════════════ */}
      <section className="py-16 bg-cream">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <motion.div
              className="text-center mb-8"
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig}
            >
              <span className="section-badge">वेळापत्रक | Timings</span>
              <h2 className="font-playfair text-2xl font-bold text-gray-900 mb-3">
                OPD & Emergency <span className="text-primary-500">Hours</span>
              </h2>
              <div className="divider divider-center" />
            </motion.div>

            <motion.div
              className="card-base overflow-hidden"
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig}
            >
              <div className="bg-gradient-to-r from-primary-600 to-primary-500 px-6 py-4 text-white">
                <div className="grid grid-cols-2 text-sm font-semibold">
                  <span>Day</span>
                  <span>Timing</span>
                </div>
              </div>
              {[
                { day: 'Monday – Friday',         timing: '9:00 AM – 7:00 PM',  open: true },
                { day: 'Saturday',                timing: '9:00 AM – 6:00 PM',  open: true },
                { day: 'Sunday',                  timing: 'By Appointment Only', open: true },
                { day: 'Emergency (24×7)',        timing: 'Always Open',         open: true, highlight: true },
                { day: 'Public Holidays (Emergency)', timing: 'Always Available', open: true },
              ].map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-2 px-6 py-4 text-sm border-b border-gray-50 last:border-b-0 ${
                    row.highlight
                      ? 'bg-green-50 font-semibold text-green-700'
                      : i % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'
                  }`}
                >
                  <span className={row.highlight ? 'text-green-700' : 'text-gray-700'}>{row.day}</span>
                  <span className={row.highlight ? 'text-green-600 flex items-center gap-1.5' : 'text-primary-600 font-medium'}>
                    {row.highlight && <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-slow" />}
                    {row.timing}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}