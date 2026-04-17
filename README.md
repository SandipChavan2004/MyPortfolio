<h1 align="center">🚀 Sandip Chavan — Personal Portfolio</h1>

<p align="center">
  A modern, responsive, space-themed personal portfolio website built with <strong>React + Vite</strong>.<br/>
  Showcasing projects, skills, and contact information with premium UI/UX design.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite" />
  <img src="https://img.shields.io/badge/GSAP-3.14.2-88CE02?style=for-the-badge&logo=greensock" />
  <img src="https://img.shields.io/badge/CSS3-Custom-1572B6?style=for-the-badge&logo=css3" />
</p>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Components](#-components)
- [Projects Showcased](#-projects-showcased)
- [Skills Covered](#-skills-covered)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Contact](#-contact)

---

## 🌟 Overview

This is a **personal developer portfolio** for **Sandip Chavan**, a Computer Science and Engineering student. The portfolio is built as a Single Page Application (SPA) using React 19 and bundled with Vite. It features a dark, space-themed aesthetic with glassmorphism effects, smooth GSAP animations, and a fully responsive layout including a premium mobile drawer navigation.

---

## 🔗 Live Demo

> _Deploy URL to be added after hosting (Vercel / Netlify / GitHub Pages)_

---

## ✨ Features

- 🎬 **Full-screen video hero** — autoplay MP4 background with overlay and star particles
- 🖱️ **Custom animated cursor** — smooth-follow dot cursor (desktop only)
- 🧭 **Smart Navbar** — transparent → frosted glass on scroll, with a premium mobile drawer
- 📱 **Fully responsive** — mobile-first design with hamburger menu & slide-in drawer
- 🃏 **Project cards** — 4-column responsive grid with IntersectionObserver reveal animations
- 🎡 **Skills marquee** — 4 rows of GSAP-powered infinite scrolling skill tags (alternating directions)
- 📬 **Contact section** — info cards + working contact form with GSAP ScrollTrigger animations
- 🌌 **Glassmorphism UI** — `backdrop-filter` frosted glass cards throughout
- ♿ **Accessible** — ARIA labels on all interactive elements, semantic HTML5

---

## 🛠️ Tech Stack

| Category      | Technology                           |
|---------------|---------------------------------------|
| Framework     | React 19.2                            |
| Bundler       | Vite 7.2                              |
| Animation     | GSAP 3.14 (+ ScrollTrigger plugin)    |
| Styling       | Vanilla CSS3 (no CSS frameworks)      |
| Icons         | Devicon CDN                           |
| Linting       | ESLint 9 + React Hooks plugin         |
| Language      | JavaScript (ES Modules)               |

---

## 📁 Project Structure

```
My Portfolio/
├── public/
│   └── assets/
│       ├── hero.mp4          # Background video for Hero section
│       ├── img.jpeg          # Profile/About photo
│       ├── portfolio.jpeg    # Portfolio project thumbnail
│       ├── svm.jpeg          # Smart Village Mart thumbnail
│       └── tlug.jpeg         # TLUG website thumbnail
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css       # Top nav + mobile drawer
│   │   ├── Hero.jsx / .css         # Landing hero with video bg
│   │   ├── About.jsx / .css        # About me section
│   │   ├── Projects.jsx / .css     # Featured projects grid
│   │   ├── Skills.jsx / .css       # GSAP marquee skill rows
│   │   ├── Contact.jsx / .css      # Contact form + info cards
│   │   ├── Footer.jsx / .css       # Simple copyright footer
│   │   └── CustomCursor.jsx / .css # Smooth cursor dot
│   │
│   ├── App.jsx                     # Root app, composes all sections
│   ├── App.css                     # App-level styles
│   ├── index.css                   # Global design tokens & base styles
│   └── main.jsx                    # React DOM entry point
│
├── index.html                      # HTML shell (loads Devicon CDN)
├── vite.config.js                  # Vite + React plugin config
├── package.json                    # Dependencies & scripts
├── eslint.config.js                # ESLint configuration
└── .gitignore
```

---

## 🧩 Components

### `<Navbar />`
- Fixed top navigation with logo `SC`
- Becomes `scrolled` (frosted glass + shadow) after 50px scroll
- Desktop: horizontal link list; **Contact** renders as a CTA button
- Mobile: animated **hamburger** → **slide-in drawer** with decorative blobs, numbered nav links, and social icons (GitHub, LinkedIn, Email)
- Body scroll blocked while drawer is open

### `<Hero />`
- Full-viewport section with an autoplay looping MP4 (`/assets/hero.mp4`)
- Dark video overlay + subtle star particle layer
- Entrance animation via CSS `visibility` state
- Two CTAs: **See All Projects** (smooth scroll) and **Download Resume**

### `<About />`
- Two-column layout: circular profile photo + bio text
- Revealed with `IntersectionObserver` at 10% viewport entry

### `<Projects />`
- **4 featured projects** in a responsive CSS grid (1 → 2 → 4 columns)
- Each card has: project image, accent colour overlay, project number badge, category tag, title, description, tech stack tags, and a GitHub link
- Cards slide in via `IntersectionObserver` at 12% threshold with staggered `animationDelay`

### `<Skills />`
- 4 category rows rendered as **infinite GSAP marquees** (alternating left/right direction)
- Uses tripled skill arrays and `xPercent` tweens for seamless looping
- Technologies shown via Devicon icons with labels

### `<Contact />`
- **Left column** — three glassmorphism info cards (Email, Phone, Location) + social links (GitHub, LinkedIn, X/Twitter)
- **Right column** — contact form with name, email, and message fields
- All elements animated with GSAP ScrollTrigger (slide from left/right)
- Form submission shows an alert (frontend-only; no backend currently)

### `<Footer />`
- Minimal one-line copyright bar with dynamic year

### `<CustomCursor />`
- Replaces the default cursor on desktop with a smooth-following dot
- Uses `requestAnimationFrame` + linear interpolation (15% easing factor)

---

## 🗂️ Projects Showcased

| # | Project | Category | Tech Stack |
|---|---------|----------|------------|
| 01 | **Smart Village Mart** | Full-Stack E-commerce | React, Node.js, Express.js, MySQL, Tailwind CSS, Vite |
| 02 | **Rudra — AI Voice Assistant** | AI / Python | Python, Pyttsx3, SpeechRecognition, OpenAI API, ElevenLabs |
| 03 | **TLUG — Club Website** | Community Platform | HTML5, CSS3, JavaScript, Node.js, Express.js |
| 04 | **Portfolio Website** | Personal Project | React, Vite, GSAP, CSS3, JavaScript |

---

## 💡 Skills Covered

| Category | Skills |
|----------|--------|
| **Languages** | C, C++, Java, Python |
| **Frontend** | HTML5, CSS3, Bootstrap, Tailwind CSS, JavaScript, React, Locomotive.js, Swiper.js, Spline |
| **Backend** | Node.js, Express.js, MySQL, MongoDB |
| **Tools** | Git & GitHub, VS Code, Figma, Docker, Linux |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm v9 or later

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/SandipChavan2004/portfolio.git

# 2. Navigate to the project folder
cd "My Portfolio"

# 3. Install dependencies
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Build the production bundle to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint on all source files |

---

## 📞 Contact

| Platform | Link |
|----------|------|
| **Email** | sandipchavan202004@gmail.com |
| **Phone** | +91 8446068510 |
| **GitHub** | [github.com/SandipChavan2004](https://github.com/SandipChavan2004) |
| **LinkedIn** | [linkedin.com/in/sandip-chavan-2004](https://www.linkedin.com/in/sandip-chavan-2004/) |
| **Location** | Maharashtra, India |

---

<p align="center">Made with ❤️ by <strong>Sandip Chavan</strong> · © 2025</p>
