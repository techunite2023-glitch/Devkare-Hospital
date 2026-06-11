import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiPhone, FiMail, FiMenu, FiX, FiMapPin,
  FiChevronRight, FiFacebook, FiInstagram
} from 'react-icons/fi'

const navLinks = [
  { to: '/',           label: 'Home'       },
  { to: '/about',      label: 'About'      },
  { to: '/services',   label: 'Services'   },
  { to: '/doctors',    label: 'Doctors'    },
  { to: '/facilities', label: 'Facilities' },
  { to: '/gallery',    label: 'Gallery'    },
  { to: '/contact',    label: 'Contact'    },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* ── Top bar ─────────────────────────── */}
      <div className="bg-navy text-white text-xs sm:text-sm hidden sm:block">
        <div className="container-custom flex justify-between items-center py-2.5">
          <div className="flex items-center gap-1.5 opacity-90">
            <FiMapPin size={13} />
            <span className="font-devanagari">
              Sangli-Miraj Road, Near Mahsul Bhavan, Chandawadi, Miraj – 416410
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href="tel:+918237890812" className="flex items-center gap-1.5 hover:text-gold-light transition-colors">
              <FiPhone size={13} /> +91 82378 90812
            </a>
            <a href="mailto:devkarehospital@gmail.com" className="flex items-center gap-1.5 hover:text-gold-light transition-colors">
              <FiMail size={13} /> devkarehospital@gmail.com
            </a>
            <div className="flex items-center gap-3 pl-3 border-l border-white/20">
              <a href="#" aria-label="Facebook" className="hover:text-gold-light transition-colors"><FiFacebook size={14} /></a>
              <a href="#" aria-label="Instagram" className="hover:text-gold-light transition-colors"><FiInstagram size={14} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Navbar ──────────────────────── */}
      <nav className={`sticky top-0 z-50 transition-all duration-400 ${
        scrolled ? 'navbar-scrolled' : 'bg-white shadow-sm'
      }`}>
        <div className="container-custom flex items-center justify-between py-3 lg:py-4">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/images/logo/logo-light.jpeg"
              alt="Devkare Hospital Logo"
              className="h-12 w-auto rounded-lg object-contain"
              onError={(e) => { e.target.style.display = 'none' }}
            />
            <div className="leading-tight">
              <div className="font-playfair font-bold text-lg text-primary-600 group-hover:text-primary-700 transition-colors">
                Devkare Hospital
              </div>
              <div className="text-[11px] text-gray-500 font-devanagari tracking-wide">
                Laparoscopy &amp; Maternity Center
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      {isActive && (
                        <motion.div
                          layoutId="nav-indicator"
                          className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-primary-500 rounded-full"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact#book-appointment" className="btn-primary text-sm py-2.5 px-5">
              <FiPhone size={14} /> Book Appointment
            </Link>
          </div>
 
          {/* Hamburger */}
          <button
            className="lg:hidden p-2 rounded-xl text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28 }}
              className="lg:hidden overflow-hidden border-t border-gray-100 bg-white"
            >
              <div className="container-custom py-4 flex flex-col gap-1">
                {navLinks.map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    end={to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-primary-50 text-primary-600'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                      }`
                    }
                  >
                    {label}
                    <FiChevronRight size={16} className="opacity-50" />
                  </NavLink>
                ))}
                <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2">
                  <Link to="/contact#book-appointment" onClick={() => setOpen(false)} className="btn-primary justify-center text-sm py-3">
                    <FiPhone size={14} /> Book Appointment
                  </Link>
                  <a href="mailto:devkarehospital@gmail.com" className="btn-outline-primary justify-center text-sm py-2.5">
                    <FiMail size={14} /> devkarehospital@gmail.com
                  </a>
                </div>
                <div className="mt-2 pt-3 border-t border-gray-100 text-xs text-gray-400 text-center font-devanagari">
                  संगली-मिरज रोड, मिरज – 416410
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}