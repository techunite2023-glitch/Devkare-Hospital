import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiPhone, FiArrowRight, FiCheckCircle, FiChevronDown,
} from 'react-icons/fi'
import {
  MdPregnantWoman, MdScience, MdFamilyRestroom, MdHealthAndSafety,
  MdMonitorHeart, MdLocalHospital, MdMedicalServices, MdChildCare,
  MdSpa, MdBiotech,
} from 'react-icons/md'
import PageBanner from '../components/PageBanner'
import {
  pageTransition, fadeInUp, fadeInLeft, fadeInRight,
  staggerContainer, staggerItem, viewportConfig,
} from '../utils/animations'

// ── Services data ──────────────────────────────────────────────────────────
const services = [
  {
    id: 1,
    icon: <MdPregnantWoman size={36} />,
    title: 'Maternity & Obstetrics',
    marathi: 'प्रसूती व प्रसूतिशास्त्र',
    color: 'bg-blue-50 text-blue-600 border-blue-100',
    accent: 'bg-blue-500',
    desc: 'Comprehensive care throughout your pregnancy journey — from prenatal consultations to safe delivery and postnatal recovery.',
    points: [
      'Antenatal care & monitoring',
      'Normal & C-section deliveries',
      'High-risk pregnancy management',
      'Postpartum care & counseling',
      'Fetal well-being assessment',
      'Nutritional guidance',
    ],
    img: '/images/procedures/procedure2.jpeg',
  },
  {
    id: 2,
    icon: <MdScience size={36} />,
    title: 'Laparoscopic Surgery',
    marathi: 'लॅपरोस्कोपिक शस्त्रक्रिया',
    color: 'bg-teal-50 text-teal-600 border-teal-100',
    accent: 'bg-teal-500',
    desc: 'Minimally invasive surgical procedures with faster recovery, less pain, and shorter hospital stays using advanced laparoscopic technology.',
    points: [
      'Laparoscopic hysterectomy',
      'Ovarian cyst removal',
      'Fibroid surgery (myomectomy)',
      'Endometriosis treatment',
      'Tubal ligation',
      'Diagnostic laparoscopy',
    ],
    img: '/images/procedures/procedure3.jpeg',
  },
  {
    id: 3,
    icon: <MdFamilyRestroom size={36} />,
    title: 'IVF & Fertility',
    marathi: 'IVF व वंध्यत्व उपचार',
    color: 'bg-purple-50 text-purple-600 border-purple-100',
    accent: 'bg-purple-500',
    desc: 'Specialized fertility treatments including In-Vitro Fertilization (IVF) and comprehensive family planning support for couples.',
    points: [
      'IVF & ICSI procedures',
      'Ovulation induction',
      'Semen analysis & treatment',
      'Fertility counseling',
      'Intrauterine insemination (IUI)',
      'Egg freezing & cryopreservation',
    ],
    img: '/images/procedures/procedure4.jpeg',
  },
  {
    id: 4,
    icon: <MdHealthAndSafety size={36} />,
    title: 'Gynecology',
    marathi: 'स्त्रीरोगशास्त्र',
    color: 'bg-pink-50 text-pink-600 border-pink-100',
    accent: 'bg-pink-500',
    desc: "Expert gynecological care for women of all ages — from adolescence through menopause — with compassion and clinical precision.",
    points: [
      'Menstrual disorders treatment',
      'PCOD / PCOS management',
      'Cervical cancer screening (PAP smear)',
      'Uterine & cervical procedures',
      'Menopause management',
      'Pelvic floor disorders',
    ],
    img: '/images/procedures/procedure5.jpeg',
  },
  {
    id: 5,
    icon: <MdMonitorHeart size={36} />,
    title: 'High-Risk Pregnancy',
    marathi: 'उच्च-जोखीम गर्भधारणा',
    color: 'bg-orange-50 text-orange-600 border-orange-100',
    accent: 'bg-orange-500',
    desc: 'Specialized monitoring and management for pregnancies with complications, ensuring the best possible outcomes for mother and baby.',
    points: [
      'Gestational diabetes management',
      'Hypertension in pregnancy',
      'Twin & multiple pregnancy care',
      'Preterm labor management',
      'Placenta previa management',
      'Foetal growth restriction care',
    ],
    img: '/images/procedures/procedure6.jpeg',
  },
  {
    id: 6,
    icon: <MdLocalHospital size={36} />,
    title: 'Emergency Care 24/7',
    marathi: 'आपत्कालीन सेवा',
    color: 'bg-red-50 text-red-600 border-red-100',
    accent: 'bg-red-500',
    desc: 'Round-the-clock emergency obstetric and gynecological care, always ready when you need us most.',
    points: [
      '24/7 emergency labor room',
      'Emergency C-section facility',
      'Obstetric hemorrhage management',
      'Neonatal emergency care',
      'Immediate surgical intervention',
      'ICU support for critical cases',
    ],
    img: '/images/procedures/procedure7.jpeg',
  },
  {
    id: 7,
    icon: <MdChildCare size={36} />,
    title: 'Neonatal & NICU Care',
    marathi: 'नवजात शिशू सेवा',
    color: 'bg-cyan-50 text-cyan-600 border-cyan-100',
    accent: 'bg-cyan-500',
    desc: 'Dedicated neonatal intensive care for premature and critically ill newborns, with skilled nursing and specialist supervision.',
    points: [
      'NICU for premature babies',
      'Neonatal resuscitation',
      'Phototherapy for jaundice',
      'Ventilator support',
      'Neonatal infection management',
      'Kangaroo Mother Care support',
    ],
    img: '/images/infrastructure/nursing-station.jpeg',
  },
  {
    id: 8,
    icon: <MdMedicalServices size={36} />,
    title: 'Preventive Health',
    marathi: 'प्रतिबंधात्मक आरोग्य',
    color: 'bg-green-50 text-green-600 border-green-100',
    accent: 'bg-green-500',
    desc: 'Proactive health assessments, screenings, and consultations designed to detect issues early and maintain long-term wellness.',
    points: [
      "Women's health checkup packages",
      'Cancer screening programs',
      'Bone density screening',
      'Thyroid & hormonal testing',
      'Preconception counseling',
      'Nutritional & lifestyle advice',
    ],
    img: '/images/infrastructure/medical.jpeg',
  },
]

// ── Procedures gallery ─────────────────────────────────────────────────────
const procedureImgs = [
  { src: '/images/procedures/procedure2.jpeg', label: 'Surgical Procedure' },
  { src: '/images/procedures/procedure3.jpeg', label: 'OT Suite' },
  { src: '/images/procedures/procedure4.jpeg', label: 'Fertility Lab' },
  { src: '/images/procedures/procedure5.jpeg', label: 'Gynecology Consultation' },
  { src: '/images/procedures/procedure6.jpeg', label: 'Maternity Ward' },
  { src: '/images/procedures/procedure7.jpeg', label: 'Laparoscopy' },
]

// ── FAQ data ───────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'Do you provide 24-hour maternity services?',
    a: 'Yes, our labor room and emergency maternity services are available 24 hours a day, 7 days a week, including on public holidays.',
  },
  {
    q: 'What is laparoscopic surgery and how is it different?',
    a: 'Laparoscopic surgery is a minimally invasive technique using small incisions and a tiny camera. It results in faster recovery, less pain, smaller scars, and shorter hospital stays compared to open surgery.',
  },
  {
    q: 'Do you offer IVF treatment at the hospital?',
    a: 'Yes, Devkare Hospital has an IVF center operational since 2017. We provide IVF, IUI, ICSI and other assisted reproductive techniques with personalized treatment plans.',
  },
  {
    q: 'How do I book an appointment?',
    a: 'You can call us at +91 82378 90812, email devkarehospital@gmail.com, or visit us directly at our hospital. Our reception team will schedule a convenient appointment for you.',
  },
  {
    q: 'Is the hospital wheelchair accessible?',
    a: 'Yes, Devkare Hospital has wheelchair-accessible entrances, corridors, and wards to ensure comfortable access for all patients.',
  },
]

// ─── FAQ item ──────────────────────────────────────────────────────────────
function FaqItem({ q, a, i }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-card"
      variants={staggerItem}
    >
      <button
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-playfair font-semibold text-gray-800 text-base leading-snug">{q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 mt-0.5 text-primary-500"
        >
          <FiChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: 'easeInOut' }}
          >
            <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════
export default function Services() {
  return (
    <motion.div {...pageTransition}>
      <PageBanner
        title="Our Services"
        subtitle="सेवा | Compassionate Care for Every Woman"
        image="/images/infrastructure/hospital.jpeg"
        breadcrumb="Services"
      />

      {/* ═══════ INTRO ══════════════════════════════════════════════════ */}
      <section className="py-20 bg-cream">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-14"
            variants={fadeInUp} initial="hidden" animate="visible"
          >
            <span className="section-badge">सेवा | Medical Services</span>
            <h2 className="section-title mb-4">
              Comprehensive Care Under <span className="text-primary-500">One Roof</span>
            </h2>
            <div className="divider divider-center mb-5" />
            <p className="section-subtitle mx-auto">
              From routine gynecological consultations to complex laparoscopic surgeries and
              advanced IVF treatments — Devkare Hospital delivers expert, patient-centered
              care across all aspects of women's health.
            </p>
          </motion.div>

          {/* ── Service cards ── */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}
          >
            {services.slice(0, 8).map((s) => (
              <motion.div
                key={s.id}
                variants={staggerItem}
                className="card-base p-6 group cursor-default flex flex-col"
              >
                <div className={`w-14 h-14 rounded-2xl ${s.color} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {s.icon}
                </div>
                <h3 className="font-playfair font-semibold text-base text-gray-900 mb-1">{s.title}</h3>
                <p className="text-xs text-gray-400 font-devanagari mb-3">{s.marathi}</p>
                <div className={`w-8 h-0.5 rounded-full ${s.accent} mb-4 group-hover:w-16 transition-all duration-300`} />
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{s.desc.slice(0, 100)}…</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ DETAILED SERVICE BLOCKS ════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig}
          >
            <span className="section-badge">तपशीलवार माहिती | Detailed Services</span>
            <h2 className="section-title mb-4">
              What We <span className="text-primary-500">Specialize In</span>
            </h2>
            <div className="divider divider-center" />
          </motion.div>

          <div className="flex flex-col gap-16">
            {services.slice(0, 6).map((s, i) => (
              <div
                key={s.id}
                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10`}
              >
                {/* Image */}
                <motion.div
                  className="lg:w-5/12 w-full rounded-2xl overflow-hidden shadow-hover"
                  variants={i % 2 === 0 ? fadeInLeft : fadeInRight}
                  initial="hidden" whileInView="visible" viewport={viewportConfig}
                >
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-64 sm:h-80 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>

                {/* Content */}
                <motion.div
                  className="lg:w-7/12 w-full"
                  variants={i % 2 === 0 ? fadeInRight : fadeInLeft}
                  initial="hidden" whileInView="visible" viewport={viewportConfig}
                >
                  <div className={`w-14 h-14 rounded-2xl ${s.color} border flex items-center justify-center mb-4`}>
                    {s.icon}
                  </div>
                  <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{s.title}</h3>
                  <p className="text-sm text-gray-400 font-devanagari mb-3">{s.marathi}</p>
                  <div className={`w-12 h-1 rounded-full ${s.accent} mb-5`} />
                  <p className="text-gray-600 leading-relaxed mb-6">{s.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                    {s.points.map((pt, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                        <FiCheckCircle size={14} className="text-primary-500 flex-shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <a href="tel:+918237890812" className="btn-primary text-sm">
                    <FiPhone size={14} /> Book Appointment
                  </a>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ PROCEDURE IMAGE STRIP ══════════════════════════════════ */}
      <section className="py-16 bg-cream overflow-hidden">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-10"
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig}
          >
            <span className="section-badge">प्रक्रिया | Our Procedures</span>
            <h2 className="section-title mb-4">
              Inside Our <span className="text-primary-500">Facilities</span>
            </h2>
            <div className="divider divider-center" />
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}
          >
            {procedureImgs.map((p, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="relative group overflow-hidden rounded-2xl"
              >
                <img
                  src={p.src}
                  alt={p.label}
                  className="w-full h-44 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-semibold">{p.label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ MARATHI INFO POSTER ════════════════════════════════════ */}
      <section className="py-16 bg-gradient-to-br from-navy to-primary-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/infrastructure/hospital.jpeg')] bg-cover" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={viewportConfig}
            >
              <img
                src="/images/posters/facilities.jpeg"
                alt="Hospital Facilities"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
            <motion.div
              variants={fadeInRight} initial="hidden" whileInView="visible" viewport={viewportConfig}
            >
              <span className="section-badge bg-gold-500/20 text-gold-light border-gold-500/30">
                आमच्या सेवा | Our Services
              </span>
              <h2 className="font-playfair text-3xl font-bold text-white mb-4">
                सर्वोत्तम स्त्री <span className="text-gold-light">आरोग्य सेवा</span>
              </h2>
              <p className="text-white/80 leading-relaxed mb-4 font-devanagari text-sm">
                देवकरे हॉस्पिटलमध्ये आम्ही सर्वोत्तम स्त्री आरोग्य सेवा प्रदान करतो.
                आमच्याकडे अनुभवी डॉक्टर, आधुनिक उपकरणे आणि समर्पित नर्सिंग टीम आहे.
              </p>
              <p className="text-white/80 leading-relaxed mb-6 font-devanagari text-sm">
                गर्भधारणा, प्रसूती, IVF, लॅपरोस्कोपी आणि इतर स्त्रीरोग उपचारांसाठी
                आम्ही मिरजमधील सर्वात विश्वासू केंद्र आहोत.
              </p>
              <a href="tel:+918237890812" className="btn-gold">
                <FiPhone size={16} /> अपॉइंटमेंट घ्या
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ FAQ ════════════════════════════════════════════════════ */}
      <section className="py-20 bg-cream">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12"
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig}
          >
            <span className="section-badge">प्रश्नोत्तरे | FAQ</span>
            <h2 className="section-title mb-4">
              Frequently Asked <span className="text-primary-500">Questions</span>
            </h2>
            <div className="divider divider-center" />
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              className="flex flex-col gap-4"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}
            >
              {faqs.map((faq, i) => (
                <FaqItem key={i} q={faq.q} a={faq.a} i={i} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ CTA ════════════════════════════════════════════════════ */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-500">
        <motion.div
          className="container-custom text-center"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig}
        >
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-4">
            Need a Consultation?
          </h2>
          <p className="text-white/80 text-base mb-8 font-devanagari max-w-xl mx-auto">
            आजच आमच्याशी संपर्क करा आणि तज्ञ डॉक्टरांचा सल्ला घ्या
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+918237890812" className="btn-gold shadow-gold">
              <FiPhone size={16} /> +91 82378 90812
            </a>
            <Link to="/contact" className="btn-outline">
              Send a Message <FiArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>
    </motion.div>
  )
}
