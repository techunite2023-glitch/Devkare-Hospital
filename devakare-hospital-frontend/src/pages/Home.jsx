import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiPhone, FiArrowRight, FiChevronLeft, FiChevronRight,
  FiCheckCircle, FiAward, FiUsers, FiStar,
} from 'react-icons/fi'
import {
  MdPregnantWoman, MdScience, MdFamilyRestroom, MdHealthAndSafety,
  MdChildCare, MdMonitorHeart, MdMedicalServices, MdLocalHospital,
  MdVerified
} from 'react-icons/md'
import { pageTransition, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem, viewportConfig } from '../utils/animations'

// ── Hero slides ────────────────────────────────────────────────────────────
const slides = [
  {
    img:   '/images/infrastructure/hospital-front.jpeg',
    badge: 'Miraj\'s Trusted Hospital Since 2013',
    title: ['Compassionate &', 'Trusted Healthcare'],
    sub:   'Devkare Hospital brings expert gynecological, obstetric, and laparoscopic care with a gentle, patient-first approach.',
  },
  {
    img:   '/images/infrastructure/hospital1.jpeg',
    badge: 'Modern Infrastructure',
    title: ['State-of-the-Art', 'Medical Facilities'],
    sub:   'Equipped with the latest technology and an experienced team committed to your complete well-being.',
  },
  {
    img:   '/images/infrastructure/hospitalnight.jpeg',
    badge: 'Available 24/7',
    title: ['Your Health is', 'Our Priority'],
    sub:   'Round-the-clock emergency support, maternity care, and specialized medical services under one roof.',
  },
]

// ── Stats ──────────────────────────────────────────────────────────────────
const stats = [
  { icon: <MdLocalHospital size={28} />, value: '12+', label: 'Years of Service',           sub: '२०१३ पासून' },
  { icon: <MdPregnantWoman size={28} />, value: '5000+', label: 'Happy Deliveries',        sub: 'आनंदी बाळंतपण' },
  { icon: <MdScience size={28} />,       value: '1000+', label: 'Laparoscopic Surgeries',  sub: 'शस्त्रक्रिया' },
  { icon: <FiStar size={28} />,          value: '98%',   label: 'Patient Satisfaction',    sub: 'रुग्ण समाधान' },
]

// ── Services preview ───────────────────────────────────────────────────────
const servicesPreview = [
  { icon: <MdPregnantWoman size={34} />,  title: 'Maternity & Obstetrics', marathi: 'प्रसूती सेवा',      color: 'bg-blue-50 text-blue-600' },
  { icon: <MdScience size={34} />,        title: 'Laparoscopic Surgery',   marathi: 'लॅपरोस्कोपी',       color: 'bg-teal-50 text-teal-600' },
  { icon: <MdFamilyRestroom size={34} />, title: 'IVF & Fertility',        marathi: 'वंध्यत्व उपचार',     color: 'bg-purple-50 text-purple-600' },
  { icon: <MdHealthAndSafety size={34} />,title: 'Gynecology',             marathi: 'स्त्रीरोगशास्त्र',   color: 'bg-pink-50 text-pink-600' },
  { icon: <MdMonitorHeart size={34} />,   title: 'High-Risk Pregnancy',    marathi: 'उच्च-जोखीम गर्भधारणा',color: 'bg-orange-50 text-orange-600' },
  { icon: <MdLocalHospital size={34} />,  title: 'Emergency Care 24/7',    marathi: 'आपत्कालीन सेवा',     color: 'bg-red-50 text-red-600' },
]

// ── Why choose us ──────────────────────────────────────────────────────────
const whyUs = [
  { icon: <MdVerified size={32} />,  title: 'Certified Specialists', desc: 'Board-certified gynecologists and obstetricians with 10+ years of clinical expertise.' },
  { icon: <FiAward size={32} />,     title: 'Award-Winning Care',    desc: 'Recognized as best laparoscopy hospital in 2019 and top-rated fertility center in 2023.' },
  { icon: <FiUsers size={32} />,     title: 'Patient-First Approach',desc: 'Every treatment is personalized. We treat every patient with dignity, care, and respect.' },
  { icon: <FiCheckCircle size={32}/>,title: 'Modern Infrastructure', desc: 'State-of-the-art operation theatres, labor rooms, NICU, and diagnostic facilities.' },
]

// ── About points ───────────────────────────────────────────────────────────
const aboutPoints = [
  'Patient-focused, ethical medical care',
  'Expert gynecology & obstetrics team',
  'Modern laparoscopic surgical facilities',
  'Safe, clean & supportive environment',
  'Transparent & dignified treatment',
  'IVF & fertility support',
]

// ── Gallery preview ────────────────────────────────────────────────────────
const galleryPreview = [
  '/images/infrastructure/hospital1.jpeg',
  '/images/facilities/facility1.jpeg',
  '/images/facilities/facility3.jpeg',
  '/images/events/event1.jpeg',
  '/images/facilities/facility5.jpeg',
  '/images/events/event2.jpeg',
]

// ═══════════════════════════════════════════════════════════════════════════
export default function Home() {
  const [cur, setCur]           = useState(0)
  const [animating, setAnimating] = useState(false)
  const [countStart, setCountStart] = useState(false)

  const go = (next) => {
    if (animating) return
    setAnimating(true)
    setCur(next)
    setTimeout(() => setAnimating(false), 700)
  }

  useEffect(() => {
    const t = setInterval(() => go((cur + 1) % slides.length), 5500)
    return () => clearInterval(t)
  })

  return (
    <motion.div {...pageTransition}>
      {/* ═══════ HERO ════════════════════════════════════════════════════ */}
      <section className="relative h-[92vh] min-h-[560px] max-h-[900px] flex flex-col justify-end overflow-hidden">
        {/* Background slides */}
        {slides.map((s, i) => (
          <motion.div
            key={i}
            className="hero-slide-bg"
            style={{ backgroundImage: `url(${s.img})` }}
            animate={{ opacity: i === cur ? 1 : 0 }}
            transition={{ duration: 1.1 }}
          />
        ))}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-primary-600/60 to-transparent" />

        {/* Content */}
        <div className="container-custom relative z-10 pb-20 pt-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={cur}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.65 }}
              className="max-w-2xl"
            >
              <span className="inline-flex items-center gap-2 bg-gold-500/90 text-white text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-5 shadow-gold">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse-slow" />
                {slides[cur].badge}
              </span>

              <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                {slides[cur].title[0]}<br />
                <span className="text-gold-light">{slides[cur].title[1]}</span>
              </h1>

              <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
                {slides[cur].sub}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link to="/contact#book-appointment" className="btn-primary text-sm sm:text-base py-3 px-7">
                  <FiPhone size={16} /> Book Appointment
                </Link>
                <Link to="/about" className="btn-outline text-sm sm:text-base py-3 px-7">
                  Learn More
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide nav */}
          <div className="absolute bottom-8 right-6 sm:right-10 flex items-center gap-3 z-10">
            <button
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              onClick={() => go((cur - 1 + slides.length) % slides.length)}
            >
              <FiChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === cur ? 'w-7 h-2.5 bg-gold-500' : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
            <button
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              onClick={() => go((cur + 1) % slides.length)}
            >
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ═══════ STATS BAR ══════════════════════════════════════════════ */}
      <motion.section
        className="bg-white shadow-card"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
            {stats.map((s, i) => (
              <motion.div key={i} variants={staggerItem} className="flex items-center gap-4 px-4 py-7 sm:px-8">
                <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-500 flex items-center justify-center flex-shrink-0">
                  {s.icon}
                </div>
                <div>
                  <div className="font-playfair text-2xl sm:text-3xl font-bold text-primary-600">{s.value}</div>
                  <div className="text-sm font-semibold text-gray-700">{s.label}</div>
                  <div className="text-xs text-gray-400 font-devanagari">{s.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ═══════ ABOUT PREVIEW ══════════════════════════════════════════ */}
      <section className="py-20 bg-cream overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Images */}
            <motion.div
              className="relative"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden aspect-[3/4] row-span-2">
                  <img src="/images/infrastructure/hospital-front.jpeg" alt="Hospital Front" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <img src="/images/infrastructure/reception.jpeg" alt="Reception" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <img src="/images/infrastructure/doctorcabin.jpeg" alt="Doctor Cabin" className="w-full h-full object-cover" />
                </div>
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-hover p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                  <MdVerified size={22} className="text-primary-500" />
                </div>
                <div>
                  <div className="font-bold text-primary-600 text-lg leading-none">12+</div>
                  <div className="text-xs text-gray-500 font-devanagari">वर्षांचा अनुभव</div>
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={viewportConfig}>
              <span className="section-badge">आमच्याबद्दल | About Us</span>
              <h2 className="section-title mb-4">
                Dedicated to <span className="text-primary-500">Compassionate</span> Healthcare
              </h2>
              <div className="divider mb-6" />
              <p className="text-gray-600 leading-relaxed mb-4">
                Devkare Hospital is a trusted private healthcare facility located at Sangli-Miraj Road, Miraj,
                Maharashtra. We are a specialized maternity and laparoscopy center known for quality care,
                experienced doctors, and a supportive team.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our hospital delivers expert gynecological, obstetric, and surgical services — including
                normal deliveries, high-risk pregnancies, IVF support, and minimally invasive procedures.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                {aboutPoints.map((p, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <FiCheckCircle size={16} className="text-primary-500 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn-primary">
                Read More About Us <FiArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ SERVICES PREVIEW ═══════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-14"
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig}
          >
            <span className="section-badge">सेवा | Our Services</span>
            <h2 className="section-title mb-4">
              Specialized <span className="text-primary-500">Medical Services</span>
            </h2>
            <div className="divider divider-center mb-4" />
            <p className="section-subtitle mx-auto">
              From maternity care to advanced laparoscopic surgeries, we provide a full range of
              women's healthcare with expertise and compassion.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}
          >
            {servicesPreview.map((s, i) => (
              <motion.div key={i} variants={staggerItem} className="card-base p-6 group cursor-default">
                <div className={`w-14 h-14 rounded-2xl ${s.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {s.icon}
                </div>
                <h3 className="font-playfair font-semibold text-lg text-gray-900 mb-1">{s.title}</h3>
                <p className="text-sm text-gray-400 font-devanagari mb-3">{s.marathi}</p>
                <div className="w-8 h-0.5 rounded-full bg-gold-500 group-hover:w-16 transition-all duration-300" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-10"
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig}
          >
            <Link to="/services" className="btn-primary">
              View All Services <FiArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════ MARATHI POSTER FEATURE ═════════════════════════════════ */}
      <section className="py-16 bg-gradient-to-br from-navy to-primary-600 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/infrastructure/hospital.jpeg')] bg-cover bg-center" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={viewportConfig}>
              <span className="section-badge bg-gold-500/20 text-gold-light border-gold-500/30">
                देवकरे हॉस्पिटल | Our Hospital
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-4">
                Compassionate Care for <span className="text-gold-light">Every Woman</span>
              </h2>
              <p className="text-white/80 text-base leading-relaxed mb-6 font-devanagari">
                आमचे ध्येय प्रत्येक रुग्णाला सर्वोत्तम वैद्यकीय सेवा प्रदान करणे आहे.
                आम्ही रुग्णाच्या आरोग्यास प्राधान्य देतो आणि प्रत्येक उपचारात आपुलकी ठेवतो.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link to="/contact#book-appointment" className="btn-gold">
                  <FiPhone size={16} /> Appointment
                </Link>
                <Link to="/about" className="btn-outline">
                  Know More
                </Link>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={viewportConfig}>
              <img
                src="/images/infrastructure/marathi-poster.jpeg"
                alt="Hospital Info Marathi"
                className="rounded-2xl shadow-2xl w-full object-cover max-h-80 object-center"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ WHY CHOOSE US ══════════════════════════════════════════ */}
      <section className="py-20 bg-cream">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-14"
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig}
          >
            <span className="section-badge">आम्हाला का निवडा | Why Choose Us</span>
            <h2 className="section-title mb-3">
              Why Patients Choose <span className="text-primary-500">Devkare Hospital</span>
            </h2>
            <div className="divider divider-center" />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}
          >
            {whyUs.map((w, i) => (
              <motion.div key={i} variants={staggerItem} className="text-center p-6 card-base">
                <div className="w-16 h-16 rounded-2xl bg-primary-50 text-primary-500 flex items-center justify-center mx-auto mb-4">
                  {w.icon}
                </div>
                <h3 className="font-playfair font-semibold text-base text-gray-900 mb-2">{w.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ GALLERY PREVIEW ════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10"
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig}
          >
            <div>
              <span className="section-badge">गॅलरी | Gallery</span>
              <h2 className="section-title">Our <span className="text-primary-500">Moments & Milestones</span></h2>
            </div>
            <Link to="/gallery" className="btn-outline-primary shrink-0">
              View Full Gallery <FiArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}
          >
            {galleryPreview.map((src, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className={`overflow-hidden rounded-2xl group cursor-pointer ${i === 0 ? 'row-span-2' : ''}`}
              >
                <Link to="/gallery">
                  <img
                    src={src}
                    alt={`Hospital ${i + 1}`}
                    className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                      i === 0 ? 'h-full min-h-[300px]' : 'h-44 sm:h-52'
                    }`}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ APPOINTMENT CTA BANNER ═════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white translate-x-1/3 translate-y-1/3" />
        </div>

        <motion.div
          className="container-custom text-center relative z-10"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig}
        >
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Book Your Appointment?
          </h2>
          <p className="text-white/80 text-base sm:text-lg mb-8 max-w-xl mx-auto font-devanagari">
            आजच अपॉइंटमेंट बुक करा आणि आमच्या तज्ञ डॉक्टरांशी भेटा
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact#book-appointment" className="btn-gold shadow-gold">
              <FiPhone size={16} /> Book Appointment
            </Link>
            <Link to="/contact" className="btn-outline">
              Send Message <FiArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>
    </motion.div>
  )
}