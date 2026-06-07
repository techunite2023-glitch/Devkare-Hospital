import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FiPhone, FiArrowRight, FiCheckCircle,
} from 'react-icons/fi'
import {
  MdLocalHospital, MdBed, MdScience, MdChildCare,
  MdMedicalServices, MdMonitorHeart, MdSecurity,
  MdAir, MdEmergency,
  MdWheelchairPickup,
} from 'react-icons/md'

import { FaWheelchair } from 'react-icons/fa'
import PageBanner from '../components/PageBanner'
import {
  pageTransition, fadeInUp, fadeInLeft, fadeInRight,
  staggerContainer, staggerItem, viewportConfig,
} from '../utils/animations'

// ── Facility features ──────────────────────────────────────────────────────
const features = [
  {
    icon: <MdLocalHospital size={30} />,
    title: 'Operation Theatre',
    marathi: 'शस्त्रक्रिया कक्ष',
    desc: 'Fully equipped, sterile operation theatres with advanced laparoscopic and endoscopic equipment for minimally invasive procedures.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: <MdBed size={30} />,
    title: 'Patient Rooms',
    marathi: 'रुग्ण कक्ष',
    desc: 'Clean, comfortable, and spacious patient rooms with attached facilities, round-the-clock nursing care, and a peaceful healing environment.',
    color: 'bg-teal-50 text-teal-600',
  },
  {
    icon: <MdChildCare size={30} />,
    title: 'NICU / Nursery',
    marathi: 'नवजात शिशू विभाग',
    desc: 'Dedicated neonatal intensive care unit with advanced monitoring and life support equipment for premature and critically ill newborns.',
    color: 'bg-pink-50 text-pink-600',
  },
  {
    icon: <MdScience size={30} />,
    title: 'Diagnostic Lab',
    marathi: 'निदान प्रयोगशाळा',
    desc: 'On-site laboratory for blood tests, urinalysis, microbiology, and other routine and specialized diagnostic investigations.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: <MdMonitorHeart size={30} />,
    title: 'Monitoring Equipment',
    marathi: 'निरीक्षण उपकरणे',
    desc: 'State-of-the-art fetal and patient monitoring systems including CTG machines, ultrasound, and vital signs monitors.',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: <MdEmergency size={30} />,
    title: 'Labor Room',
    marathi: 'प्रसूती कक्ष',
    desc: 'Equipped, hygienic labor rooms with dedicated nursing staff, fetal monitoring, and emergency intervention readiness.',
    color: 'bg-red-50 text-red-600',
  },
  {
    icon: <MdAir size={30} />,
    title: 'Air-Conditioned Wards',
    marathi: 'वातानुकूलित वार्ड',
    desc: 'Fully air-conditioned patient wards and recovery rooms to ensure maximum comfort and infection control.',
    color: 'bg-cyan-50 text-cyan-600',
  },
  {
    icon: <MdMedicalServices size={30} />,
    title: 'Pharmacy',
    marathi: 'औषधालय',
    desc: 'In-hospital pharmacy stocked with all essential medicines, surgical supplies, and specialized medications.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: <MdWheelchairPickup size={30} />,
    title: 'Accessible Facilities',
    marathi: 'दिव्यांगांसाठी सुविधा',
    desc: 'Wheelchair-accessible entrances, ramps, and facilities throughout the hospital for patients with mobility needs.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: <MdSecurity size={30} />,
    title: '24/7 Security & CCTV',
    marathi: 'सुरक्षा व पाळत',
    desc: 'Round-the-clock security personnel and CCTV surveillance ensuring the safety and security of all patients and visitors.',
    color: 'bg-slate-50 text-slate-600',
  },
]

// ── Facility images grid ───────────────────────────────────────────────────
const facilityImgs = [
  { src: '/images/facilities/facility1.jpeg',  label: 'Patient Ward'         },
  { src: '/images/facilities/facility2.jpeg',  label: 'Nursing Station'      },
  { src: '/images/facilities/facility3.jpeg',  label: 'Operation Theatre'    },
  { src: '/images/facilities/facility4.jpeg',  label: 'Consultation Room'    },
  { src: '/images/facilities/facility5.jpeg',  label: 'Recovery Room'        },
  { src: '/images/facilities/facility6.jpeg',  label: 'Diagnostic Lab'       },
  { src: '/images/facilities/facility7.jpeg',  label: 'Labor Room'           },
  { src: '/images/facilities/facility8.jpeg',  label: 'NICU Ward'            },
  { src: '/images/facilities/facility9.jpeg',  label: 'Maternity Ward'       },
  { src: '/images/facilities/facility10.jpeg', label: 'Pharmacy'             },
  { src: '/images/facilities/facility11.jpeg', label: 'ICU Unit'             },
  { src: '/images/facilities/facility12.jpeg', label: 'Reception & Waiting'  },
]

// ── Infrastructure images ──────────────────────────────────────────────────
const infraImgs = [
  '/images/infrastructure/hospital-front.jpeg',
  '/images/infrastructure/hospital1.jpeg',
  '/images/infrastructure/reception.jpeg',
  '/images/infrastructure/nursing-station.jpeg',
  '/images/infrastructure/doctorcabin.jpeg',
  '/images/infrastructure/medical.jpeg',
]

// ── Standards list ─────────────────────────────────────────────────────────
const standards = [
  'ISO-compliant sterilization protocols',
  'Strict infection control measures',
  'Regular biomedical equipment maintenance',
  'NABH quality standards followed',
  'Daily deep cleaning & disinfection',
  'Sharps & bio-waste safe disposal',
  'Emergency power backup (Generator)',
  'Uninterrupted water & oxygen supply',
]

// ═══════════════════════════════════════════════════════════════════════════
export default function Facilities() {
  return (
    <motion.div {...pageTransition}>
      <PageBanner
        title="Our Facilities"
        subtitle="सुविधा | Modern Infrastructure for Better Care"
        image="/images/infrastructure/hospital-front.jpeg"
        breadcrumb="Facilities"
      />

      {/* ═══════ INTRO STATS ════════════════════════════════════════════ */}
      <section className="py-16 bg-gradient-to-br from-navy to-primary-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/infrastructure/hospital.jpeg')] bg-cover" />
        <div className="container-custom relative z-10">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-10"
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig}
          >
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-3">
              Purpose-Built for <span className="text-gold-light">Patient Care</span>
            </h2>
            <p className="text-white/75 text-sm font-devanagari">
              आमची सुविधा रुग्णांच्या आरामासाठी आणि उत्कृष्ट वैद्यकीय सेवेसाठी बांधली आहे
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-5"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}
          >
            {[
              { value: '2', label: 'Operation Theatres', icon: '🏥' },
              { value: '30+', label: 'Patient Beds',     icon: '🛏️' },
              { value: '1',  label: 'Dedicated NICU',    icon: '👶' },
              { value: '24/7', label: 'Emergency Care',  icon: '🚑' },
            ].map((s, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl p-6 text-center"
              >
                <div className="text-4xl mb-2">{s.icon}</div>
                <div className="font-playfair text-3xl font-bold text-white">{s.value}</div>
                <div className="text-white/70 text-sm mt-1">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ FACILITY FEATURES GRID ═════════════════════════════════ */}
      <section className="py-20 bg-cream">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-14"
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig}
          >
            <span className="section-badge">सुविधा | Key Facilities</span>
            <h2 className="section-title mb-4">
              Everything You Need, <span className="text-primary-500">Here</span>
            </h2>
            <div className="divider divider-center" />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="card-base p-6 group flex flex-col items-center text-center"
              >
                <div className={`w-14 h-14 rounded-2xl ${f.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {f.icon}
                </div>
                <h3 className="font-playfair font-semibold text-sm text-gray-900 mb-1">{f.title}</h3>
                <p className="text-xs text-gray-400 font-devanagari mb-3">{f.marathi}</p>
                <div className="w-8 h-0.5 rounded-full bg-gold-500 group-hover:w-14 transition-all duration-300 mb-3" />
                <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ FACILITY PHOTO GALLERY ═════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12"
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig}
          >
            <span className="section-badge">फोटो गॅलरी | Photo Gallery</span>
            <h2 className="section-title mb-4">
              Our <span className="text-primary-500">Facilities</span> in Photos
            </h2>
            <div className="divider divider-center" />
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}
          >
            {facilityImgs.map((img, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className={`relative overflow-hidden rounded-2xl group ${i === 0 ? 'sm:col-span-2 sm:row-span-2' : ''}`}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className={`w-full object-cover group-hover:scale-110 transition-transform duration-600 ${
                    i === 0 ? 'h-56 sm:h-full sm:min-h-[320px]' : 'h-44 sm:h-48'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-xs font-semibold">{img.label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ INFRASTRUCTURE TOUR ════════════════════════════════════ */}
      <section className="py-20 bg-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={viewportConfig}
            >
              <span className="section-badge">पायाभूत सुविधा | Infrastructure</span>
              <h2 className="section-title mb-4">
                Modern Building, <span className="text-primary-500">Safe Environment</span>
              </h2>
              <div className="divider mb-6" />
              <p className="text-gray-600 leading-relaxed mb-4">
                In 2025, Devkare Hospital relocated to a brand-new, purpose-built facility
                designed with patient safety, comfort, and clinical excellence in mind.
                The new building features wider corridors, better ventilation, and
                expanded capacity.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 font-devanagari text-sm">
                नवीन इमारत आधुनिक सुविधांनी सुसज्ज आहे. रुग्णांच्या सोयीसाठी विस्तृत
                कक्ष, स्वच्छ वातावरण आणि सर्व आवश्यक उपकरणे उपलब्ध आहेत.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {standards.map((s, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <FiCheckCircle size={14} className="text-primary-500 flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Image grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={fadeInRight} initial="hidden" whileInView="visible" viewport={viewportConfig}
            >
              {infraImgs.map((src, i) => (
                <div key={i} className={`rounded-2xl overflow-hidden ${i === 0 ? 'col-span-2' : ''}`}>
                  <img
                    src={src}
                    alt={`Infrastructure ${i + 1}`}
                    className={`w-full object-cover hover:scale-105 transition-transform duration-500 ${
                      i === 0 ? 'h-52' : 'h-32 sm:h-40'
                    }`}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ WHY DEVKARE POSTERS ════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-10"
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig}
          >
            <span className="section-badge">का निवडावे | Why Choose Us</span>
            <h2 className="section-title mb-4">
              Why <span className="text-primary-500">Devkare Hospital</span>
            </h2>
            <div className="divider divider-center" />
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {['/images/posters/why-devkare1.jpeg', '/images/posters/why-devkare2.jpeg'].map((src, i) => (
              <motion.div
                key={i}
                className="rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-shadow"
                variants={i === 0 ? fadeInLeft : fadeInRight}
                initial="hidden" whileInView="visible" viewport={viewportConfig}
              >
                <img src={src} alt={`Why Devkare ${i + 1}`} className="w-full object-cover hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}
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
            Experience Our Facilities
          </h2>
          <p className="text-white/75 text-base mb-8 font-devanagari">
            आमच्या सुविधा पाहण्यासाठी हॉस्पिटलला भेट द्या
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+918237890812" className="btn-gold shadow-gold">
              <FiPhone size={16} /> +91 82378 90812
            </a>
            <Link to="/contact" className="btn-outline">
              Get Directions <FiArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>
    </motion.div>
  )
}
