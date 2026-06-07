import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FiPhone, FiArrowRight, FiAward, FiCheckCircle,
  FiMail, FiMapPin,
} from 'react-icons/fi'
import {
  MdVerified, MdSchool, MdMedicalServices, MdLocalHospital, MdScience,
} from 'react-icons/md'
import PageBanner from '../components/PageBanner'
import {
  pageTransition, fadeInUp, fadeInLeft, fadeInRight,
  staggerContainer, staggerItem, viewportConfig,
} from '../utils/animations'

// ── Doctors data ──────────────────────────────────────────────────────────
const doctors = [
  {
    id: 1,
    name: 'Dr. Vikas Devakare',
    nameMarathi: 'डॉ. विकास देवकरे',
    photo: '/images/infrastructure/doctorcabin.jpeg',
    role: 'Founder & Chief Surgeon',
    roleMarathi: 'संस्थापक आणि मुख्य शल्यचिकित्सक',
    qualifications: ['M.B.B.S.', 'M.D. (Obstetrics & Gynaecology)', 'F.M.A.S. (Mumbai)'],
    specializations: [
      'Laparoscopic & Minimally Invasive Surgery',
      'High-Risk Pregnancy Management',
      'Gynecological Oncology',
      'Infertility & IVF Treatments',
      'Complex Laparoscopic Hysterectomy',
      'Endoscopic Surgery',
    ],
    experience: '15+ years',
    desc: 'Dr. Vikas Devakare is a highly accomplished gynecologist and laparoscopic surgeon with over 15 years of clinical experience. He founded Devkare Hospital in 2013 with a vision to provide world-class women\'s healthcare to the people of Miraj and surrounding regions.',
    desc2: 'With fellowship training from Mumbai (F.M.A.S.) and an M.D. in Obstetrics & Gynecology, Dr. Devakare has performed over 1000+ laparoscopic procedures and managed thousands of successful deliveries. His compassionate approach and commitment to ethical medical practice have earned the hospital multiple recognitions.',
    achievements: [
      'Best Laparoscopy Hospital Award 2019',
      '1000+ laparoscopic surgeries',
      '5000+ successful deliveries',
      'F.M.A.S. Fellowship from Mumbai',
    ],
    color: 'from-primary-600 to-navy',
    accent: 'text-primary-500',
    border: 'border-primary-200',
    bg: 'bg-primary-50',
  },
  {
    id: 2,
    name: 'Dr. Swati Vikas Devkare',
    nameMarathi: 'डॉ. स्वाती विकास देवकरे',
    photo: '/images/infrastructure/reception.jpeg',
    role: 'Consultant Gynaecologist & Obstetrician',
    roleMarathi: 'सल्लागार स्त्रीरोगतज्ज्ञ व प्रसूतितज्ज्ञ',
    qualifications: ['M.B.B.S.', 'M.S. (Obstetrics & Gynaecology)', 'D.G.O.'],
    specializations: [
      'Obstetrics & Normal Deliveries',
      'Antenatal & Postnatal Care',
      'Gynecological Consultations',
      'Menstrual Disorder Management',
      'PCOS / PCOD Treatment',
      'Family Planning & Counseling',
    ],
    experience: '12+ years',
    desc: 'Dr. Swati Vikas Devkare is a dedicated consultant gynecologist and obstetrician with over 12 years of experience in women\'s healthcare. She specializes in comprehensive obstetric care, ensuring safe pregnancies and healthy deliveries.',
    desc2: 'Known for her warm, patient-centric approach, Dr. Swati provides thorough antenatal counseling, postpartum support, and gynecological consultations. She is deeply committed to empowering women with the knowledge and care they need at every stage of life.',
    achievements: [
      'Expert in normal & assisted deliveries',
      '4000+ successful deliveries',
      'Specialized in high-risk antenatal care',
      'Women\'s health education programs',
    ],
    color: 'from-pink-600 to-rose-700',
    accent: 'text-pink-500',
    border: 'border-pink-200',
    bg: 'bg-pink-50',
  },
]

// ── Support team ───────────────────────────────────────────────────────────
const supportTeam = [
  { role: 'Senior Nursing Staff',        icon: '👩‍⚕️', marathi: 'वरिष्ठ नर्सिंग स्टाफ',    count: '10+', desc: 'Experienced nursing staff providing 24/7 patient care.' },
  { role: 'Operation Theatre Technicians', icon: '🔬', marathi: 'ओटी तंत्रज्ञ',             count: '4+',  desc: 'Skilled OT technicians assisting in complex procedures.' },
  { role: 'Anaesthesiologist',            icon: '💉', marathi: 'भूलतज्ज्ञ',                count: '2+',  desc: 'Expert anaesthesiologists ensuring safe pain management.' },
  { role: 'Lab & Diagnostic Team',        icon: '🧪', marathi: 'प्रयोगशाळा तज्ज्ञ',        count: '3+',  desc: 'Diagnostic professionals for accurate test results.' },
]

// ═══════════════════════════════════════════════════════════════════════════
export default function Doctors() {
  return (
    <motion.div {...pageTransition}>
      <PageBanner
        title="Our Doctors"
        subtitle="आमचे डॉक्टर | Expert Medical Team"
        image="/images/infrastructure/hospital1.jpeg"
        breadcrumb="Doctors"
      />

      {/* ═══════ INTRO ══════════════════════════════════════════════════ */}
      <section className="py-16 bg-cream">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig}
          >
            <span className="section-badge">आमचे तज्ञ | Meet Our Experts</span>
            <h2 className="section-title mb-4">
              Experienced & <span className="text-primary-500">Compassionate</span> Doctors
            </h2>
            <div className="divider divider-center mb-5" />
            <p className="section-subtitle mx-auto">
              Devkare Hospital is led by highly qualified specialists with decades of combined
              experience in gynecology, obstetrics, and minimally invasive surgery. Our doctors
              treat every patient with respect, dignity, and clinical precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════ DOCTOR PROFILES ════════════════════════════════════════ */}
      <section className="pb-20 bg-cream">
        <div className="container-custom flex flex-col gap-16">
          {doctors.map((doc, i) => (
            <motion.div
              key={doc.id}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch gap-0 rounded-3xl overflow-hidden shadow-hover bg-white`}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {/* Photo + Gradient Banner */}
              <div className={`lg:w-5/12 relative bg-gradient-to-br ${doc.color} flex flex-col justify-end min-h-80`}>
                <img
                  src={doc.photo}
                  alt={doc.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity"
                />
                <div className="relative z-10 p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <MdVerified size={20} className="text-gold-light" />
                    <span className="text-gold-light text-sm font-semibold">Verified Specialist</span>
                  </div>
                  <h2 className="font-playfair text-3xl font-bold text-white mb-1">{doc.name}</h2>
                  <p className="text-white/60 text-sm font-devanagari mb-3">{doc.nameMarathi}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {doc.qualifications.map((q, j) => (
                      <span key={j} className="bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {q}
                      </span>
                    ))}
                  </div>
                  <p className="text-white font-semibold text-sm">{doc.role}</p>
                  <p className="text-white/60 text-xs font-devanagari">{doc.roleMarathi}</p>
                  <div className="flex items-center gap-4 mt-5">
                    <div className={`px-4 py-2 rounded-xl bg-white/10 text-center`}>
                      <div className="text-white font-bold text-xl leading-none">{doc.experience}</div>
                      <div className="text-white/60 text-xs">Experience</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-7/12 p-8 sm:p-10 flex flex-col justify-center">
                <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">About {doc.name}</h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-3">{doc.desc}</p>
                <p className="text-gray-600 leading-relaxed text-sm mb-6">{doc.desc2}</p>

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  {/* Specializations */}
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-3 flex items-center gap-1.5">
                      <MdMedicalServices size={16} className="text-primary-500" /> Specializations
                    </h4>
                    <ul className="space-y-1.5">
                      {doc.specializations.map((s, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-gray-600">
                          <FiCheckCircle size={12} className="text-primary-400 flex-shrink-0 mt-0.5" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-3 flex items-center gap-1.5">
                      <FiAward size={15} className="text-gold-500" /> Achievements
                    </h4>
                    <ul className="space-y-1.5">
                      {doc.achievements.map((a, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-gray-600">
                          <span className="text-gold-500 mt-0.5">✦</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
                  <Link to="/contact#book-appointment" className="btn-primary text-sm py-2.5">
                    <FiPhone size={14} /> Book Appointment
                  </Link>
                  <a href="mailto:devkarehospital@gmail.com" className="btn-outline-primary text-sm py-2.5">
                    <FiMail size={14} /> Send Query
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════ QUALIFICATIONS HIGHLIGHT ═══════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12"
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig}
          >
            <span className="section-badge">पात्रता | Qualifications</span>
            <h2 className="section-title mb-4">
              Academic <span className="text-primary-500">Excellence</span>
            </h2>
            <div className="divider divider-center" />
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-6"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}
          >
            {[
              { icon: <MdSchool size={28} />, label: 'M.B.B.S.',               sub: 'Bachelor of Medicine',          color: 'bg-blue-50 text-blue-600' },
              { icon: <MdScience size={28} />, label: 'M.D. / M.S.',           sub: 'Post-Graduate Specialty',       color: 'bg-teal-50 text-teal-600' },
              { icon: <FiAward size={28} />,   label: 'F.M.A.S.',              sub: 'Fellowship in Minimal Surgery', color: 'bg-gold-50 text-gold-600' },
              { icon: <MdLocalHospital size={28}/>, label: 'D.G.O.',           sub: 'Diploma in Gynecology',         color: 'bg-purple-50 text-purple-600' },
            ].map((q, i) => (
              <motion.div key={i} variants={staggerItem} className="card-base p-6 text-center group">
                <div className={`w-14 h-14 rounded-2xl ${q.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  {q.icon}
                </div>
                <div className="font-playfair font-bold text-lg text-gray-900">{q.label}</div>
                <div className="text-xs text-gray-400 mt-1">{q.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ SUPPORT TEAM ═══════════════════════════════════════════ */}
      <section className="py-20 bg-cream">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12"
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig}
          >
            <span className="section-badge">सहाय्यक टीम | Support Team</span>
            <h2 className="section-title mb-4">
              A Team That <span className="text-primary-500">Cares</span>
            </h2>
            <div className="divider divider-center mb-5" />
            <p className="section-subtitle mx-auto">
              Behind every successful procedure is a dedicated team of skilled professionals
              working together to ensure your safety and comfort.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}
          >
            {supportTeam.map((t, i) => (
              <motion.div key={i} variants={staggerItem} className="card-base p-6 text-center">
                <div className="text-4xl mb-4">{t.icon}</div>
                <div className="bg-primary-50 text-primary-600 text-sm font-bold px-3 py-0.5 rounded-full inline-block mb-2">{t.count}</div>
                <h4 className="font-playfair font-semibold text-base text-gray-900 mb-1">{t.role}</h4>
                <p className="text-xs text-gray-400 font-devanagari mb-3">{t.marathi}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ CONTACT STRIP ══════════════════════════════════════════ */}
      <section className="py-14 bg-gradient-to-r from-navy to-primary-600">
        <motion.div
          className="container-custom"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-playfair text-2xl font-bold text-white mb-1">
                Book an Appointment Today
              </h3>
              <p className="text-white/70 font-devanagari text-sm">आजच अपॉइंटमेंट घ्या</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact#book-appointment" className="btn-gold shadow-gold whitespace-nowrap">
                <FiPhone size={15} /> Book Appointment
              </Link>
              <Link to="/contact" className="btn-outline whitespace-nowrap">
                Contact Us <FiArrowRight size={15} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  )
}