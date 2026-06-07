import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiChevronLeft, FiChevronRight, FiZoomIn } from 'react-icons/fi'

/**
 * Lightbox component.
 * Props:
 *   images   {Array<{src, label}>}
 *   index    {number|null}
 *   onClose  {fn}
 *   onNav    {fn(dir: -1|1)}
 */
export default function Lightbox({ images, index, onClose, onNav }) {
  // Keyboard navigation
  const handleKey = useCallback((e) => {
    if (e.key === 'Escape')     onClose()
    if (e.key === 'ArrowLeft')  onNav(-1)
    if (e.key === 'ArrowRight') onNav(1)
  }, [onClose, onNav])

  useEffect(() => {
    if (index !== null) {
      document.addEventListener('keydown', handleKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [index, handleKey])

  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div
          className="lightbox-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            onClick={onClose}
          >
            <FiX size={20} />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-4 text-white/60 text-sm">
            {index + 1} / {images.length}
          </div>

          {/* Previous */}
          <button
            className="absolute left-2 sm:left-6 z-10 w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            onClick={(e) => { e.stopPropagation(); onNav(-1) }}
          >
            <FiChevronLeft size={22} />
          </button>

          {/* Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="relative flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[index]?.src}
                alt={images[index]?.label}
                className="lightbox-img"
                draggable={false}
              />
              {images[index]?.label && (
                <p className="mt-3 text-white/70 text-sm font-medium bg-black/30 px-4 py-1.5 rounded-full">
                  {images[index].label}
                </p>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Next */}
          <button
            className="absolute right-2 sm:right-6 z-10 w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            onClick={(e) => { e.stopPropagation(); onNav(1) }}
          >
            <FiChevronRight size={22} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}