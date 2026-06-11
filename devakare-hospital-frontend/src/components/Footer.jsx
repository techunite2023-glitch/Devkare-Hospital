import { Link } from 'react-router-dom'
import {
  FiPhone, FiMail, FiMapPin, FiClock,
  FiFacebook, FiInstagram, FiYoutube, FiArrowRight
} from 'react-icons/fi'

const quickLinks = [
  { to: '/',           label: 'Home'       },
  { to: '/about',      label: 'About Us'   },
  { to: '/services',   label: 'Services'   },
  { to: '/doctors',    label: 'Our Doctors'},
  { to: '/facilities', label: 'Facilities' },
  { to: '/gallery',    label: 'Gallery'    },
  { to: '/contact',    label: 'Contact Us' },
]

const services = [
  'Maternity & Obstetrics', 'Laparoscopic Surgery',
  'IVF & Fertility', 'Gynecology',
  'High-Risk Pregnancy', 'Newborn Care',
  'Preventive Health Checks', 'Emergency Care',
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Wave Divider */}
      <div className="overflow-hidden -mb-px">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-10 -translate-y-0">
          <path d="M0,30 C400,60 1040,0 1440,30 L1440,0 L0,0 Z" fill="#f7f9fd" />
        </svg>
      </div>

      <div className="container-custom pt-12 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ── Brand ── */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo/logo-light.jpeg"
                alt="Devkare Hospital"
                className="h-12 w-auto rounded-lg object-contain bg-white/10 p-1"
                onError={(e) => { e.target.style.display = 'none' }}
              />
              <div>
                <div className="font-playfair font-bold text-lg text-white">Devkare Hospital</div>
                <div className="text-xs text-gold-light font-devanagari">Laparoscopy & Maternity Center</div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-5">
              Miraj's trusted center for gynecological, obstetric, and laparoscopic care — delivering
              compassionate healthcare since 2013.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Facebook"  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-gold-500 flex items-center justify-center transition-colors">
                <FiFacebook size={16} />
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-lg bg-white/10 hover:bg-gold-500 flex items-center justify-center transition-colors">
                <FiInstagram size={16} />
              </a>
              <a href="#" aria-label="YouTube"   className="w-8 h-8 rounded-lg bg-white/10 hover:bg-gold-500 flex items-center justify-center transition-colors">
                <FiYoutube size={16} />
              </a>
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-5 text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="flex items-center gap-2 text-sm text-white/70 hover:text-gold-light transition-colors group"
                  >
                    <FiArrowRight size={13} className="text-gold-500 group-hover:translate-x-1 transition-transform" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ── */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-5 text-white">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s} className="flex items-center gap-2 text-sm text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-5 text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm text-white/70">
                <FiMapPin size={15} className="text-gold-light mt-0.5 flex-shrink-0" />
                <span>
                  Plot No. 1/4, Sangli-Miraj Road,<br />
                  Near Mahsul Bhavan, Chandawadi,<br />
                  Miraj – 416410, Maharashtra
                </span>
              </div>
              <a href="tel:+918237890812" className="flex items-center gap-3 text-sm text-white/70 hover:text-gold-light transition-colors">
                <FiPhone size={15} className="text-gold-light flex-shrink-0" />
                +91 82378 90812
              </a>
              <a href="mailto:devkarehospital@gmail.com" className="flex items-center gap-3 text-sm text-white/70 hover:text-gold-light transition-colors">
                <FiMail size={15} className="text-gold-light flex-shrink-0" />
                devkarehospital@gmail.com
              </a>
              <div className="flex items-start gap-3 text-sm text-white/70">
                <FiClock size={15} className="text-gold-light mt-0.5 flex-shrink-0" />
                <div>
                  <div>Mon–Sat: 9AM–2PM &amp; 5PM–9PM</div>
                  <div className="text-white/50">Sunday: Emergency Only</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Devkare Hospital Laparoscopy &amp; Maternity Center. All Rights Reserved.</p>
          <p className="font-devanagari">सर्व हक्क राखीव | देवकारे हॉस्पिटल, मिरज</p>
        </div>
      </div>
    </footer>
  )
}