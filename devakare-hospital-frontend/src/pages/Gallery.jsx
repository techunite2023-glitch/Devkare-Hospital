import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiChevronLeft, FiChevronRight, FiZoomIn } from 'react-icons/fi'
import { MdFilterList } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { FiPhone } from 'react-icons/fi'
import PageBanner from '../components/PageBanner'
import { pageTransition, fadeInUp, staggerContainer, staggerItem, viewportConfig } from '../utils/animations'

// ── All gallery images organized by category ────────────────────────────────
const allImages = [
  // Infrastructure
  { src: '/images/infrastructure/hospital-front.jpeg', cat: 'infrastructure', label: 'Hospital Front View' },
  { src: '/images/infrastructure/hospital.jpeg',       cat: 'infrastructure', label: 'Hospital Building' },
  { src: '/images/infrastructure/hospital1.jpeg',      cat: 'infrastructure', label: 'Hospital Exterior' },
  { src: '/images/infrastructure/hospitalnight.jpeg',  cat: 'infrastructure', label: 'Hospital at Night' },
  { src: '/images/infrastructure/reception.jpeg',      cat: 'infrastructure', label: 'Reception Area' },
  { src: '/images/infrastructure/doctorcabin.jpeg',    cat: 'infrastructure', label: "Doctor's Cabin" },
  { src: '/images/infrastructure/nursing-station.jpeg',cat: 'infrastructure', label: 'Nursing Station' },
  { src: '/images/infrastructure/medical.jpeg',        cat: 'infrastructure', label: 'Medical Equipment' },
  { src: '/images/infrastructure/1.jpeg',              cat: 'infrastructure', label: 'Ward Room 1' },
  { src: '/images/infrastructure/2.jpeg',              cat: 'infrastructure', label: 'Ward Room 2' },
  { src: '/images/infrastructure/3.jpeg',              cat: 'infrastructure', label: 'Ward Room 3' },
  { src: '/images/infrastructure/4.jpeg',              cat: 'infrastructure', label: 'Ward Room 4' },
  { src: '/images/infrastructure/5.jpeg',              cat: 'infrastructure', label: 'Ward Room 5' },
  { src: '/images/infrastructure/6.jpeg',              cat: 'infrastructure', label: 'Ward Room 6' },
  { src: '/images/infrastructure/7.jpeg',              cat: 'infrastructure', label: 'Ward Room 7' },
  { src: '/images/infrastructure/8.jpeg',              cat: 'infrastructure', label: 'Ward Room 8' },
  { src: '/images/infrastructure/9.jpeg',              cat: 'infrastructure', label: 'Ward Room 9' },

  // Facilities
  { src: '/images/facilities/facility1.jpeg',  cat: 'facilities', label: 'Facility 1'  },
  { src: '/images/facilities/facility2.jpeg',  cat: 'facilities', label: 'Facility 2'  },
  { src: '/images/facilities/facility3.jpeg',  cat: 'facilities', label: 'Facility 3'  },
  { src: '/images/facilities/facility4.jpeg',  cat: 'facilities', label: 'Facility 4'  },
  { src: '/images/facilities/facility5.jpeg',  cat: 'facilities', label: 'Facility 5'  },
  { src: '/images/facilities/facility6.jpeg',  cat: 'facilities', label: 'Facility 6'  },
  { src: '/images/facilities/facility7.jpeg',  cat: 'facilities', label: 'Facility 7'  },
  { src: '/images/facilities/facility8.jpeg',  cat: 'facilities', label: 'Facility 8'  },
  { src: '/images/facilities/facility9.jpeg',  cat: 'facilities', label: 'Facility 9'  },
  { src: '/images/facilities/facility10.jpeg', cat: 'facilities', label: 'Facility 10' },
  { src: '/images/facilities/facility11.jpeg', cat: 'facilities', label: 'Facility 11' },
  { src: '/images/facilities/facility12.jpeg', cat: 'facilities', label: 'Facility 12' },

  // Procedures
  { src: '/images/procedures/procedure2.jpeg', cat: 'procedures', label: 'Surgical Procedure 1' },
  { src: '/images/procedures/procedure3.jpeg', cat: 'procedures', label: 'Surgical Procedure 2' },
  { src: '/images/procedures/procedure4.jpeg', cat: 'procedures', label: 'Surgical Procedure 3' },
  { src: '/images/procedures/procedure5.jpeg', cat: 'procedures', label: 'Consultation'         },
  { src: '/images/procedures/procedure6.jpeg', cat: 'procedures', label: 'Maternity Procedure'  },
  { src: '/images/procedures/procedure7.jpeg', cat: 'procedures', label: 'Laparoscopy'          },

  // Events
  { src: '/images/events/event1.jpeg', cat: 'events', label: 'Hospital Event 1' },
  { src: '/images/events/event2.jpeg', cat: 'events', label: 'Hospital Event 2' },
  { src: '/images/events/event4.jpeg', cat: 'events', label: 'Hospital Event 3' },
  { src: '/images/events/event5.jpeg', cat: 'events', label: 'Hospital Event 4' },
  { src: '/images/events/event6.jpeg', cat: 'events', label: 'Hospital Event 5' },

  // Surgeries
  { src: '/images/surgeries/surgeries1.jpeg',  cat: 'surgeries', label: 'Surgery 1' },
  { src: '/images/surgeries/surgeries2.jpeg',  cat: 'surgeries', label: 'Surgery 2' },
  { src: '/images/surgeries/surgeries3.jpeg',  cat: 'surgeries', label: 'Surgery 3' },
  { src: '/images/surgeries/surgeries4.jpeg',  cat: 'surgeries', label: 'Surgery 4' },
  { src: '/images/surgeries/surgeries5.jpeg',  cat: 'surgeries', label: 'Surgery 5' },
  { src: '/images/surgeries/surgeries6.jpeg',  cat: 'surgeries', label: 'Surgery 6' },
  { src: '/images/surgeries/surgeries7.jpeg',  cat: 'surgeries', label: 'Surgery 7' },
  { src: '/images/surgeries/surgeries8.jpeg',  cat: 'surgeries', label: 'Surgery 8' },
  { src: '/images/surgeries/surgeries9.jpeg',  cat: 'surgeries', label: 'Surgery 9' },
  { src: '/images/surgeries/surgeries10.jpeg',  cat: 'surgeries', label: 'Surgery 10' },
  { src: '/images/surgeries/surgeries11.jpeg',  cat: 'surgeries', label: 'Surgery 11' },
  { src: '/images/surgeries/surgeries12.jpeg',  cat: 'surgeries', label: 'Surgery 12' },
  { src: '/images/surgeries/surgeries13.jpeg',  cat: 'surgeries', label: 'Surgery 13' },
  { src: '/images/surgeries/surgeries14.jpeg',  cat: 'surgeries', label: 'Surgery 14' },
  { src: '/images/surgeries/surgeries15.jpeg',  cat: 'surgeries', label: 'Surgery 15' },
  { src: '/images/surgeries/surgeries16.jpeg',  cat: 'surgeries', label: 'Surgery 16' },
  { src: '/images/surgeries/surgeries17.jpeg',  cat: 'surgeries', label: 'Surgery 17' },
  { src: '/images/surgeries/surgeries18.jpeg',  cat: 'surgeries', label: 'Surgery 18' },
  { src: '/images/surgeries/surgeries19.jpeg',  cat: 'surgeries', label: 'Surgery 19' },
  { src: '/images/surgeries/surgeries20.jpeg',  cat: 'surgeries', label: 'Surgery 20' },
  { src: '/images/surgeries/surgeries-baby.jpeg', cat: 'surgeries', label: 'New Born Baby' },

  // Posters
  { src: '/images/posters/why-devkare1.jpeg',  cat: 'posters', label: 'Why Devkare 1'      },
  { src: '/images/posters/why-devkare2.jpeg',  cat: 'posters', label: 'Why Devkare 2'      },
  { src: '/images/posters/myth-fact.jpeg',     cat: 'posters', label: 'Myth vs Fact'       },
  { src: '/images/posters/facilities.jpeg',    cat: 'posters', label: 'Facilities Poster'  },
  { src: '/images/posters/artboard.jpeg',      cat: 'posters', label: 'Hospital Artboard'  },
  { src: '/images/posters/august.jpeg',        cat: 'posters', label: 'August Awareness'   },
  { src: '/images/posters/ad1.jpeg',           cat: 'posters', label: 'Hospital Ad'        },
  { src: '/images/posters/poster4.jpeg',       cat: 'posters', label: 'Health Poster'      },
  { src: '/images/posters/poster5.jpeg',       cat: 'posters', label: 'Hospital Poster'    },
  { src: '/images/posters/hospitalcard.jpeg',  cat: 'posters', label: 'Hospital Card'      },
  { src: '/images/infrastructure/marathi-poster.jpeg', cat: 'posters', label: 'Marathi Info Poster' },
]

// ── Categories ─────────────────────────────────────────────────────────────
const categories = [
  { id: 'infrastructure', label: 'Infrastructure',  marathi: 'इमारत' },
  { id: 'facilities',     label: 'Facilities',      marathi: 'सुविधा' },
  { id: 'procedures',     label: 'Procedures',      marathi: 'प्रक्रिया' },
  { id: 'events',         label: 'Events',          marathi: 'कार्यक्रम' },
  { id: 'posters',        label: 'Posters',         marathi: 'पोस्टर' },
]

// ── Lightbox component ────────────────────────────────────────────────────
function Lightbox({ images, index, onClose, onNext, onPrev }) {
  if (index === null) return null
  const img = images[index]

  return (
    <AnimatePresence>
      <motion.div
        className="lightbox-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Close */}
        <button
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center z-10 transition-colors"
          onClick={onClose}
        >
          <FiX size={20} />
        </button>

        {/* Prev */}
        <button
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center z-10 transition-colors"
          onClick={(e) => { e.stopPropagation(); onPrev() }}
        >
          <FiChevronLeft size={22} />
        </button>

        {/* Image */}
        <motion.div
          key={index}
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          <img src={img.src} alt={img.label} className="lightbox-img" />
          <div className="text-center mt-3">
            <span className="text-white/70 text-sm">{img.label}</span>
            <span className="text-white/40 text-xs ml-3">{index + 1} / {images.length}</span>
          </div>
        </motion.div>

        {/* Next */}
        <button
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center z-10 transition-colors"
          onClick={(e) => { e.stopPropagation(); onNext() }}
        >
          <FiChevronRight size={22} />
        </button>
      </motion.div>
    </AnimatePresence>
  )
}

// ═══════════════════════════════════════════════════════════════════════════
export default function Gallery() {
  const [activeCat, setActiveCat] = useState('infrastructure')
  const [lightboxIdx, setLightboxIdx] = useState(null)

  const filtered = allImages.filter(img => img.cat === activeCat)

  const openLightbox = useCallback((i) => setLightboxIdx(i), [])
  const closeLightbox = useCallback(() => setLightboxIdx(null), [])
  const nextImg = useCallback(() =>
    setLightboxIdx(i => (i + 1) % filtered.length), [filtered.length])
  const prevImg = useCallback(() =>
    setLightboxIdx(i => (i - 1 + filtered.length) % filtered.length), [filtered.length])

  return (
    <motion.div {...pageTransition}>
      <PageBanner
        title="Photo Gallery"
        subtitle="गॅलरी | Our Moments & Milestones"
        image="/images/infrastructure/hospital1.jpeg"
        breadcrumb="Gallery"
      />

      {/* ═══════ GALLERY INTRO ══════════════════════════════════════════ */}
      <section className="pt-14 pb-6 bg-cream">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-10"
            variants={fadeInUp} initial="hidden" animate="visible"
          >
            <span className="section-badge">गॅलरी | Photo Gallery</span>
            <h2 className="section-title mb-4">
              Our Hospital in <span className="text-primary-500">Pictures</span>
            </h2>
            <div className="divider divider-center mb-5" />
            <p className="section-subtitle mx-auto text-sm">
              Explore our facilities, surgical suites, team moments, events, and awareness
              campaigns — all captured in our growing photo gallery.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-10"
            variants={fadeInUp} initial="hidden" animate="visible"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveCat(cat.id); setLightboxIdx(null) }}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
                  activeCat === cat.id
                    ? 'bg-primary-500 text-white border-primary-500 shadow-card'
                    : 'bg-white text-gray-600 border-gray-200 hover:bg-primary-50 hover:text-primary-600 hover:border-primary-200'
                }`}
              >
                <MdFilterList size={14} />
                {cat.label}
                <span className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${
                  activeCat === cat.id ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-400'
                }`}>
                  {cat.id === 'all' ? allImages.length : allImages.filter(img => img.cat === cat.id).length}
                </span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ MASONRY GALLERY ════════════════════════════════════════ */}
      <section className="pb-20 bg-cream">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCat}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="gallery-grid-masonry"
            >
              {filtered.map((img, i) => (
                <div key={`${activeCat}-${i}`} className="gal-item">
                  <div
                    className="relative group overflow-hidden rounded-2xl cursor-pointer shadow-card hover:shadow-hover transition-all duration-300"
                    onClick={() => openLightbox(i)}
                  >
                    <img
                      src={img.src}
                      alt={img.label}
                      className="w-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => { e.target.closest('.gal-item').style.display = 'none' }}
                    />
                    <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white flex flex-col items-center gap-2">
                        <FiZoomIn size={28} />
                        <span className="text-xs font-medium">{img.label}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <div className="text-5xl mb-4">🖼️</div>
              <p>No images in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* ═══════ SPECIAL POSTERS GRID ═══════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12"
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig}
          >
            <span className="section-badge">पोस्टर | Awareness Posters</span>
            <h2 className="section-title mb-4">
              Health <span className="text-primary-500">Awareness</span> Campaigns
            </h2>
            <div className="divider divider-center" />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}
          >
            {[
              '/images/posters/myth-fact.jpeg',
              '/images/posters/why-devkare1.jpeg',
              '/images/posters/why-devkare2.jpeg',
              '/images/posters/artboard.jpeg',
              '/images/posters/august.jpeg',
              '/images/posters/facilities.jpeg',
            ].map((src, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="overflow-hidden rounded-2xl shadow-card hover:shadow-hover transition-all group cursor-pointer"
                onClick={() => {
                  const idx = allImages.findIndex(img => img.src === src)
                  if (idx !== -1) { setActiveCat('posters'); setLightboxIdx(allImages.filter(img => img.cat === 'posters').findIndex(img => img.src === src)) }
                }}
              >
                <img
                  src={src}
                  alt={`Poster ${i + 1}`}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ EVENTS HIGHLIGHTS ══════════════════════════════════════ */}
      <section className="py-20 bg-cream">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12"
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig}
          >
            <span className="section-badge">कार्यक्रम | Events</span>
            <h2 className="section-title mb-4">
              Our <span className="text-primary-500">Events & Programs</span>
            </h2>
            <div className="divider divider-center" />
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}
          >
            {[
              '/images/events/event1.jpeg',
              '/images/events/event2.jpeg',
              '/images/events/event4.jpeg',
              '/images/events/event5.jpeg',
              '/images/events/event6.jpeg',
            ].map((src, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className={`overflow-hidden rounded-2xl shadow-card group cursor-pointer ${i === 0 ? 'row-span-2' : ''}`}
              >
                <img
                  src={src}
                  alt={`Event ${i + 1}`}
                  className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                    i === 0 ? 'h-full min-h-[280px]' : 'h-44 sm:h-52'
                  }`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ CTA ════════════════════════════════════════════════════ */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-500">
        <motion.div
          className="container-custom text-center"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig}
        >
          <h2 className="font-playfair text-3xl font-bold text-white mb-4">
            Want to Visit Our Hospital?
          </h2>
          <p className="text-white/80 mb-8 font-devanagari">
            आमच्या हॉस्पिटलला भेट द्या आणि आमच्या सुविधा पाहा
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+918237890812" className="btn-gold shadow-gold">
              <FiPhone size={16} /> Call Us
            </a>
            <Link to="/contact" className="btn-outline">
              Get Directions
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={filtered}
        index={lightboxIdx}
        onClose={closeLightbox}
        onNext={nextImg}
        onPrev={prevImg}
      />
    </motion.div>
  )
}
