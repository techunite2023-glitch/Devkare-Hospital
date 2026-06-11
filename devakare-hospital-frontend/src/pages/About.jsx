import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiCheckCircle, FiArrowRight, FiPhone } from 'react-icons/fi'
import { MdVerified } from 'react-icons/md'
import PageBanner from '../components/PageBanner'
import {
  pageTransition, fadeInUp, fadeInLeft, fadeInRight,
  staggerContainer, staggerItem, viewportConfig,
} from '../utils/animations'

// ── About points ────────────────────────────────────────
const points = [
  'Patient-focused, ethical medical care',
  'Expert gynecology & obstetrics team',
  'Modern laparoscopic surgical facilities',
  'Safe, clean & supportive environment',
  'Personalized attention for every patient',
  'Transparent and dignified treatment',
  'IVF & fertility support',
  'Wheelchair-accessible facilities',
]

// ── Mission / Vision ────────────────────────────────────
const mvCards = [
  {
    emoji: '🎯',
    title: 'Our Mission',
    marathi: 'आमचे ध्येय',
    desc: 'To provide compassionate, patient-centered, high-quality healthcare services in a safe, transparent, and supportive environment — treating every patient with dignity and respect.',
    color: 'from-primary-50 to-primary-100 border-primary-200',
    titleColor: 'text-primary-600',
  },
  {
    emoji: '🌟',
    title: 'Our Vision',
    marathi: 'आमची दृष्टी',
    desc: 'To become the most trusted women\'s healthcare and fertility center in Miraj region, known for clinical excellence, ethical practices, and unwavering commitment to patient well-being.',
    color: 'from-gold-50 to-yellow-50 border-gold-200',
    titleColor: 'text-gold-600',
  },
  {
    emoji: '💎',
    title: 'Our Values',
    marathi: 'आमची मूल्ये',
    desc: 'Compassion • Integrity • Excellence • Respect • Innovation — these five values guide every decision, every treatment, and every interaction at Devkare Hospital.',
    color: 'from-teal-50 to-cyan-50 border-teal-200',
    titleColor: 'text-teal-600',
  },
]

// ── History timeline ─────────────────────────────────────
const timeline = [
  {
    year: '2013',
    title: 'Opening of Devkare Hospital',
    desc: 'Devkare Hospital was founded with a vision to provide quality gynecological and maternity care to women of Miraj and surrounding areas.',
    icon: '🏥',
    marathi: 'देवकरे हॉस्पिटलची स्थापना',
  },
  {
    year: '2017',
    title: 'IVF Technology Introduced',
    desc: 'Embraced advanced IVF technology, marking a major milestone in offering comprehensive fertility treatments and family planning solutions.',
    icon: '🔬',
    marathi: 'IVF तंत्रज्ञान सुरू',
  },
  {
    year: '2019',
    title: 'Best Laparoscopy Hospital Award',
    desc: 'Recognized and awarded for excellence in laparoscopic procedures, becoming the leading minimally invasive surgical center in the Miraj region.',
    icon: '🏆',
    marathi: 'सर्वोत्तम लॅपरोस्कोपी हॉस्पिटल पुरस्कार',
  },
  {
    year: '2021',
    title: 'Infrastructure Upgrade',
    desc: 'Significant expansion and modernization — new operation theaters, patient rooms, NICU, and advanced diagnostic equipment.',
    icon: '🏗️',
    marathi: 'पायाभूत सुविधांचे आधुनिकीकरण',
  },
  {
    year: '2023',
    title: 'Top-Rated Gynecology & Fertility Center',
    desc: 'Recognized as one of the highest-rated specialized gynecological and fertility centers in Miraj with outstanding patient satisfaction.',
    icon: '⭐',
    marathi: 'सर्वोच्च मूल्यांकित स्त्रीरोग केंद्र',
  },
  {
    year: '2025',
    title: 'Relocation to New Premises',
    desc: 'Hospital shifted to a brand-new, modern, purpose-built facility offering expanded services, more patient beds, and state-of-the-art equipment.',
    icon: '🌟',
    marathi: 'नवीन हॉस्पिटल इमारतीत स्थलांतर',
  },
]

// ═══════════════════════════════════════════════════════════════════════════
export default function About() {
  return (
    <motion.div {...pageTransition}>
      <PageBanner
        title="About Devkare Hospital"
        subtitle="आमच्याबद्दल | Compassionate & Trusted Healthcare"
        image="/images/infrastructure/hospital1.jpeg"
        breadcrumb="About"
      />

      {/* ═══════ ABOUT CONTENT ══════════════════════════════════════════ */}
      <section className="py-20 bg-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image grid */}
            <motion.div
              className="relative"
              variants={fadeInLeft} initial="hidden" animate="visible"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden col-span-2 aspect-video">
                  <img src="/images/infrastructure/hospital-front.jpeg" alt="Devkare Hospital Front" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <img src="/images/infrastructure/reception.jpeg" alt="Reception" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <img src="/images/infrastructure/doctorcabin.jpeg" alt="Doctor Cabin" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-hover p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center">
                  <MdVerified size={26} className="text-primary-500" />
                </div>
                <div>
                  <div className="font-bold text-primary-600 text-xl leading-none">12+</div>
                  <div className="text-xs text-gray-500">Years of Excellence</div>
                  <div className="text-xs text-gray-400 font-devanagari">उत्कृष्टतेची वर्षे</div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div variants={fadeInRight} initial="hidden" animate="visible">
              <span className="section-badge">आमच्याबद्दल | About Us</span>
              <h2 className="section-title mb-4">
                Dedicated to <span className="text-primary-500">Compassionate</span> Healthcare
              </h2>
              <div className="divider mb-6" />
              <p className="text-gray-600 leading-relaxed mb-4">
                Devkare Hospital is a private healthcare facility located at Mahatma Phule Udyan, Plot No. 1/4,
                Sangli-Miraj Road, Near Mahsul Bhavan, Chandawadi, Miraj, Maharashtra 416410, India.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We are a well-rated local hospital in Miraj known especially for women's health, gynecology,
                obstetrics, and related surgical services like laparoscopic procedures. The hospital has received
                positive reviews for quality care, experienced doctors, and a supportive staff.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                With wheelchair-accessible facilities, modern operation theatres, a dedicated NICU, and a
                compassionate nursing team, Devkare Hospital promotes healing through trust, transparency,
                and personalized care.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                {points.map((p, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <FiCheckCircle size={15} className="text-primary-500 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <a href="tel:+918237890812" className="btn-primary">
                  <FiPhone size={15} /> Contact Us
                </a>
                <Link to="/doctors" className="btn-outline-primary">
                  Meet Our Doctors <FiArrowRight size={15} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ MISSION / VISION / VALUES ══════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-14"
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig}
          >
            <span className="section-badge">ध्येय व दृष्टी | Mission & Vision</span>
            <h2 className="section-title mb-4">
              What <span className="text-primary-500">Drives Us</span>
            </h2>
            <div className="divider divider-center" />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}
          >
            {mvCards.map((c, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className={`rounded-2xl border bg-gradient-to-br ${c.color} p-7`}
              >
                <div className="text-4xl mb-4">{c.emoji}</div>
                <h3 className={`font-playfair font-bold text-xl mb-1 ${c.titleColor}`}>{c.title}</h3>
                <p className="text-xs text-gray-400 font-devanagari mb-3">{c.marathi}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ MARATHI POSTER ═════════════════════════════════════════ */}
      <section className="py-16 bg-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-6 items-center">
            <motion.div
              className="lg:col-span-2"
              variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={viewportConfig}
            >
              <img
                src="/images/infrastructure/marathi-poster.jpeg"
                alt="Hospital Info in Marathi"
                className="rounded-2xl shadow-hover w-full object-cover"
              />
            </motion.div>
            <motion.div
              variants={fadeInRight} initial="hidden" whileInView="visible" viewport={viewportConfig}
            >
              <span className="section-badge">मराठी माहिती | In Marathi</span>
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                देवकरे हॉस्पिटल <span className="text-primary-500">मिरज</span>
              </h2>
              <div className="divider mb-5" />
              <p className="text-gray-600 text-sm leading-relaxed font-devanagari mb-5">
                देवकरे हॉस्पिटल हे मिरज शहरातील एक विश्वासू आणि अनुभवी स्त्रीरोग व प्रसूती केंद्र आहे.
                आम्ही रुग्णांना सर्वोत्तम वैद्यकीय सेवा देण्यासाठी सदैव तत्पर असतो.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed font-devanagari">
                आमच्या अनुभवी डॉक्टर आणि नर्सिंग स्टाफची टीम प्रत्येक रुग्णाची काळजी आपुलकीने घेते.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ HISTORY TIMELINE ════════════════════════════════════════ */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig}
          >
            <span className="section-badge">आमचा इतिहास | Our Journey</span>
            <h2 className="section-title mb-4">
              A Decade of <span className="text-primary-500">Healing &amp; Growth</span>
            </h2>
            <div className="divider divider-center" />
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-gold-500 -translate-x-1/2" />

            <div className="flex flex-col gap-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  className={`flex flex-col md:flex-row items-center gap-6 md:gap-0 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  variants={i % 2 === 0 ? fadeInLeft : fadeInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportConfig}
                >
                  {/* Content card */}
                  <div className={`md:w-[45%] ${i % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10'}`}>
                    <div className={`bg-white border border-gray-100 rounded-2xl shadow-card p-6 hover:shadow-hover transition-shadow duration-300`}>
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="bg-primary-50 text-primary-600 text-xs font-bold px-3 py-1 rounded-full">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="font-playfair font-bold text-lg text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-xs text-gray-400 font-devanagari mb-2">{item.marathi}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex md:w-[10%] justify-center">
                    <div className="w-5 h-5 rounded-full bg-gold-500 border-4 border-white shadow-gold z-10" />
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-[45%]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CTA ════════════════════════════════════════════════════ */}
      <section className="py-16 bg-gradient-to-r from-navy to-primary-600">
        <motion.div
          className="container-custom text-center"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig}
        >
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Trust Us With Your Care?
          </h2>
          <p className="text-white/75 mb-8 text-base font-devanagari">
            आजच आमच्या डॉक्टरांशी भेटण्यासाठी अपॉइंटमेंट घ्या
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+918237890812" className="btn-gold">
              <FiPhone size={15} /> Call Now
            </a>
            <Link to="/doctors" className="btn-outline">
              Meet Our Doctors <FiArrowRight size={15} />
            </Link>
          </div>
        </motion.div>
      </section>
    </motion.div>
  )
}