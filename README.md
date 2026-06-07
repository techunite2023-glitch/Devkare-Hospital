# Devkare Hospital Website

A complete hospital website project for **Devkare Hospital – Laparoscopy & Maternity Center, Miraj**.

This repository contains two separate applications:

- `devakare-hospital-frontend/` - React + Vite + Tailwind CSS frontend website
- `devakare-hospital-backend/` - Express backend for appointment email delivery

---

## Project Overview

The frontend is a multi-page hospital website with the following features:

- Home page with hero section, service highlights, statistics, and CTAs
- About page with hospital story, mission/vision, and timeline
- Services page with service details, procedures, and FAQs
- Doctors page with physician profiles and support team information
- Facilities page with hospital infrastructure and facility gallery
- Gallery page with a category-filtered image gallery and lightbox
- Contact page with appointment form and contact details
- Smooth page animations using Framer Motion
- Responsive design powered by Tailwind CSS

The backend handles appointment requests and email notifications:

- `POST /api/appointment` endpoint for appointment form submissions
- Request rate limiting to prevent abuse
- Input validation for name, phone, email, service, and message
- Sends notification emails to hospital staff
- Sends appointment confirmation emails to patients
- Health check endpoint at `GET /api/health`

---

## Tech Stack

### Frontend

- React 19
- Vite 6
- Tailwind CSS 3
- Framer Motion
- React Router DOM
- React Icons

### Backend

- Node.js
- Express
- dotenv
- cors
- express-rate-limit
- nodemailer

---

## Setup Instructions

### 1. Install Node.js

Install Node.js version 18 or higher.

Verify installation using:

```bash
node --version
npm --version
```

### 2. Install frontend dependencies

```bash
cd devakare-hospital-frontend
npm install
```

### 3. Install backend dependencies

```bash
cd ../devakare-hospital-backend
npm install
```

### 4. Configure backend environment

Create or update `devakare-hospital-backend/.env` with real credentials.

Example:

```env
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password
NOTIFY_TO=staff@example.com
FROM_NAME=Devkare Hospital
PORT=5000
CLIENT_URL=http://localhost:5173
```

> Do not commit `.env` to version control.

### 5. Run the applications

Start the backend:

```bash
cd devakare-hospital-backend
npm run dev
```

Start the frontend in a separate terminal:

```bash
cd devakare-hospital-frontend
npm run dev
```

The frontend will typically run at `http://localhost:5173`.
The backend will typically run at `http://localhost:5000`.

---

## Available Scripts

### Frontend

From `devakare-hospital-frontend`:

- `npm run dev` - start development server
- `npm run build` - build production files
- `npm run preview` - preview production build locally

### Backend

From `devakare-hospital-backend`:

- `npm run dev` - start backend server with automatic reload using `node --watch`
- `npm start` - start backend server

---

## Environment Variables

The backend uses the following `.env` values:

- `SMTP_USER` - Gmail address used to send emails
- `SMTP_PASS` - Gmail App Password
- `NOTIFY_TO` - staff or hospital email address to receive appointment notifications
- `FROM_NAME` - sender name for emails
- `PORT` - backend server port
- `CLIENT_URL` - frontend URL allowed by CORS

---

## Deployment Notes

- Deploy the frontend to any static hosting service that supports Vite builds.
- Deploy the backend to a Node.js hosting provider and set environment variables securely.
- Update `CLIENT_URL` in `.env` to the deployed frontend URL.
- Ensure SMTP credentials are valid and `SMTP_PASS` is generated using Gmail App Passwords.

---

## Project Structure

```text
devakare-hospital-frontend/
  package.json
  vite.config.js
  tailwind.config.js
  postcss.config.js
  src/
    App.jsx
    main.jsx
    index.css
    components/
    pages/
    utils/
  public/
    images/

devakare-hospital-backend/
  package.json
  server.js
  .env
```

---

## Contact

For support or updates, modify the project files and run the app locally.

---

## Notes

This README was generated from the current project files in the `Devkare Hospital` workspace.
