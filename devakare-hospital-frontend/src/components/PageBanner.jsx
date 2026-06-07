import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiChevronRight, FiHome } from 'react-icons/fi'

/**
 * Reusable page-hero banner for all inner pages.
 *
 * Props:
 *   title     {string}  – main heading
 *   subtitle  {string}  – optional subtitle / Marathi line
 *   image     {string}  – background image path
 *   breadcrumb{string}  – current page label for breadcrumb
 */
export default function PageBanner({ title, subtitle, image, breadcrumb }) {
  return (
    <div
      className="relative h-56 sm:h-72 flex items-end overflow-hidden"
      style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/92 via-primary-600/80 to-primary-400/60" />

      {/* Decorative circles */}
      <div className="absolute top-4 right-16 w-40 h-40 rounded-full border border-white/10 hidden sm:block" />
      <div className="absolute top-10 right-24 w-24 h-24 rounded-full border border-white/10 hidden sm:block" />

      <div className="container-custom relative z-10 pb-8 pt-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-white/60 mb-3">
          <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
            <FiHome size={12} /> Home
          </Link>
          <FiChevronRight size={12} />
          <span className="text-gold-light font-medium">{breadcrumb}</span>
        </nav>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="mt-2 text-gold-light font-devanagari text-base sm:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  )
}