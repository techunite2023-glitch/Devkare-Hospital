# 🏥 Devkare Hospital Website

**Devkare Hospital – Laparoscopy & Maternity Center, Miraj**  
A full-featured, multi-page hospital website built with **React 19 + Vite (STS) + Tailwind CSS + Framer Motion**.

---

## ✅ Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| **React** | ^19.1 | UI Framework |
| **Vite** | ^6.3 | Build tool & dev server (STS) |
| **React Router DOM** | ^7.6 | Multi-page routing |
| **Framer Motion** | ^11.18 | Animations & page transitions |
| **Tailwind CSS** | ^3.4 | Utility-first styling |
| **React Icons** | ^5.6 | Icon library (Feather + Material) |

---

## 📋 Prerequisites

Install **Node.js LTS** (v18 or higher) before proceeding.

**Windows** → Download installer from https://nodejs.org  
**macOS** → `brew install node`  
**Linux** → `curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash - && sudo apt-get install -y nodejs`

Verify:
```
node --version   # v18.x or higher
npm --version    # v9.x or higher
```

---

## 🚀 Installation & Setup

### Step 1 — Extract the project
Unzip `devakare-hospital.zip` to any folder.

### Step 2 — Install dependencies
```bash
cd devakare-hospital
npm install
```
⏳ Wait 30–60 seconds.

### Step 3 — Start the development server
```bash
npm run dev
```
Open your browser at **http://localhost:5173**

### Step 4 — Production build (optional)
```bash
npm run build      # Creates optimized dist/ folder
npm run preview    # Preview production build locally
```

---

## 📁 Project Structure

```
devakare-hospital/
├── public/
│   └── images/
│       ├── infrastructure/    (hospital exterior, rooms, OT, reception)
│       ├── facilities/        (facility1–12.jpeg)
│       ├── procedures/        (procedure2–7.jpeg)
│       ├── surgeries/         (surgeries1–20.jpeg)
│       ├── events/            (event1–6.jpeg)
│       ├── posters/           (awareness posters)
│       └── logo/              (logo-dark, logo-light)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         ← Sticky navbar + mobile menu
│   │   ├── Footer.jsx         ← Full footer with links
│   │   ├── FloatingCTA.jsx    ← Fixed call/WhatsApp button
│   │   ├── PageBanner.jsx     ← Reusable inner page hero banner
│   │   └── Lightbox.jsx       ← Image lightbox viewer
│   ├── pages/
│   │   ├── Home.jsx           ← Hero slider + stats + services preview
│   │   ├── About.jsx          ← Hospital info + timeline + mission/vision
│   │   ├── Services.jsx       ← 8 services with detail + FAQ
│   │   ├── Doctors.jsx        ← Dr. Vikas & Dr. Swati profiles
│   │   ├── Facilities.jsx     ← Facility gallery + infrastructure
│   │   ├── Gallery.jsx        ← Full gallery with category filter + lightbox
│   │   └── Contact.jsx        ← Appointment form + map + hours
│   ├── utils/
│   │   └── animations.js      ← Reusable Framer Motion variants
│   ├── App.jsx                ← Router + AnimatePresence
│   ├── main.jsx
│   └── index.css              ← Tailwind + global styles + CSS vars
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## 🖥️ Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero slider, stats, service preview, gallery preview, CTA |
| `/about` | About | Hospital story, mission/vision/values, timeline 2013–2025 |
| `/services` | Services | 8 specialties with detail, procedure gallery, FAQ |
| `/doctors` | Doctors | Dr. Vikas & Dr. Swati profiles, qualifications, support team |
| `/facilities` | Facilities | 12+ facility photos, infrastructure tour, feature grid |
| `/gallery` | Gallery | Category-filtered gallery (75+ photos) with lightbox |
| `/contact` | Contact | Appointment form, Google Maps, Marathi address, OPD hours |

---

## 🎨 Customization

### Change phone number
Find & replace `+918237890812` and `82378 90812` in all files.

### Change colors
Edit `tailwind.config.js` → `theme.extend.colors` → `primary` and `gold`.

### Add images
Drop images into `public/images/<category>/` and reference as `/images/<category>/filename.jpeg`.

---

## 📞 Hospital Contact

**Devkare Hospital – Laparoscopy & Maternity Center**  
Plot No. 1/4, Sangli-Miraj Road, Near Mahsul Bhavan, Chandawadi, Miraj – 416410  
📞 +91 82378 90812 | 📧 devkarehospital@gmail.com
