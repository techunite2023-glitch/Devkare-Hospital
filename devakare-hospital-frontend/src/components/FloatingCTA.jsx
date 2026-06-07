import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPhone, FiArrowUp } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export default function FloatingCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 350)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1,   y: 0  }}
          exit={{   opacity: 0, scale: 0.7,  y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3"
        >
          {/* WhatsApp */}
          <a
            href="https://wa.me/918237890812"
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp"
            className="w-12 h-12 rounded-2xl bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <FaWhatsapp size={22} />
          </a>

          {/* Call */}
          <a
            href="tel:+918237890812"
            title="Call Now"
            className="ring-pulse flex items-center gap-2 px-4 py-3 rounded-2xl bg-gold-500 hover:bg-gold-600 text-white font-semibold text-sm shadow-gold hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <FiPhone size={18} />
            <span className="hidden sm:inline">Call Now</span>
          </a>

          {/* Scroll to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            title="Back to top"
            className="w-10 h-10 rounded-xl bg-primary-500 hover:bg-primary-600 text-white flex items-center justify-center shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-0.5"
          >
            <FiArrowUp size={18} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}