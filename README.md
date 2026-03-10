# 🌿 EcoPack — Sustainable Packaging for Small Businesses

> **"Smart Packaging for a Greener Tomorrow"**

EcoPack is a fully responsive, single-page React web application built as an English project showcase for a sustainable packaging startup. The site presents EcoPack's complete business story — from the plastic waste problem it solves, to its product range, business model, target audience, and contact details — all wrapped in a premium, animation-rich UI.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Live Demo](#live-demo)
- [Features](#features)
- [Pages & Sections](#pages--sections)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Design System](#design-system)
- [Animations](#animations)
- [Contact Information](#contact-information)

---

## Overview

EcoPack addresses one of the most pressing environmental issues facing small businesses today — single-use plastic packaging. The platform showcases how EcoPack provides **biodegradable, compostable, and recyclable packaging** alternatives that are affordable, customizable, and eco-certified.

This project was built as a business showcase website with a strong emphasis on visual design, micro-animations, and a consistent eco-friendly brand identity.

---

## Live Demo

🌐 **[https://eco-pack-weld.vercel.app/](https://eco-pack-weld.vercel.app/)**

Or run locally with:

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Features

### 🎨 Visual & UI
- **Premium dark-green theme** with a layered CSS variable system
- **Animated gradient hero** with a slow color-shift background (`gradientFlow` keyframe)
- **3D Pyramid page-transition loader** — appears for 1 second on initial load and between every page navigation, built with CSS `preserve-3d`, `clip-path` triangles, and conic gradients in the eco color palette
- **Persistent ticker strip** fixed below the navbar, endlessly scrolling eco keywords
- **Ambient background orbs** — three fixed radial-gradient blobs that float (`floatOrb`) permanently across the page
- **Scroll-reveal animations** — elements fade/slide in using `IntersectionObserver` as you scroll
- **Rotating hero rings** — two concentric dashed rings that spin in opposite directions behind the hero visual

### 🧭 Navigation
- Fixed navbar with glass-morphism backdrop blur
- Animated underline on active/hover nav links
- Full-text **search bar** with a live dropdown filtering all 8 pages
- Responsive **hamburger mobile menu** with smooth slide-in animation

### 📦 Products
- Three tab categories: **E-Commerce**, **Food & Beverage**, **Custom Branding**
- Cards auto-reveal on tab switch (fixed `IntersectionObserver` re-trigger)
- Each product card shows material, best-use, and eco benefit badge

### 📊 Business Model
- Full **Business Model Canvas** (9 cells, 2-column grid, VP spanning full width)
- Animated progress bars in the **Revenue Breakdown** card (dark green gradient overlay with floating orbs)
- **SWOT Analysis** with color-coded quadrants
- Challenges & Future Expansion section

### 📬 Contact
- Working contact form with validation and success state
- Contact info cards (Email, WhatsApp, Location, Hours) — each with icon, label, value, and sub-text stacked cleanly
- **FAQ accordion** with smooth max-height transitions and no overflow

---

## Pages & Sections

| Page | Route Key | Description |
|---|---|---|
| Home | `home` | Hero, Who/What/Why/Where, Impact counters, Product preview, Testimonials, CTA |
| The Problem | `problem` | Environmental & business problem cards, Plastic vs. Eco comparison, Stat bars |
| Our Solutions | `solutions` | Intro, 5-step process timeline, USP cards, "Why Different" block |
| Products | `products` | Tabbed product grid (E-Commerce / Food / Branding), Certifications, Custom CTA |
| Business Model | `business-model` | Revenue streams, Revenue breakdown, Business Model Canvas, SWOT, Challenges |
| Target Audience | `audience` | Customer segments, Pain points grid, Buyer personas |
| About Us | `about` | Vision/Mission cards, Values, Team grid, Company timeline |
| Contact Us | `contact` | Contact form, Info cards, Social links, Map placeholder, FAQ accordion |

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | Component-based UI, `useState`, `useEffect`, `useRef` |
| **Vite 7** | Build tool and dev server (HMR) |
| **CSS3** | All styling — single `App.css` with CSS custom properties |
| **Google Fonts** | Poppins (display), Inter (body), Playfair Display (serif accent) |
| **IntersectionObserver API** | Scroll-reveal animations |
| **CSS 3D Transforms** | Pyramid loader (`preserve-3d`, `rotateY`, `rotateX`) |

No external CSS frameworks (no Tailwind, no Bootstrap) — entirely custom CSS.

---

## Project Structure

```
EcoPack/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx          # Fixed nav with search, mobile menu
│   │   └── Footer.jsx          # Footer with links, social, contact
│   ├── pages/
│   │   ├── Home.jsx            # Hero, stats, product preview, testimonials
│   │   ├── TheProblem.jsx      # Problem cards, comparison, stat bars
│   │   ├── OurSolutions.jsx    # Process steps, USPs, differentiator block
│   │   ├── Products.jsx        # Tabbed product catalogue
│   │   ├── BusinessModel.jsx   # Canvas, revenue, SWOT, roadmap
│   │   ├── TargetAudience.jsx  # Segments, pain points, personas
│   │   ├── AboutUs.jsx         # Vision, mission, values, team, timeline
│   │   └── ContactUs.jsx       # Form, info cards, FAQ
│   ├── App.jsx                 # Root: routing, pyramid loader, ambient bg, ticker
│   ├── App.css                 # Complete design system (1400+ lines)
│   ├── index.css               # Base reset + scrollbar
│   └── main.jsx                # React DOM entry point
├── index.html                  # Google Fonts import
├── vite.config.js
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js v20.19+ or v22.12+
- npm v9+

### Installation

```bash
# Clone or download the project
cd EcoPack

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Design System

### Color Palette

| Variable | Value | Usage |
|---|---|---|
| `--green-dark` | `#0d2b1e` | Darkest backgrounds, hero |
| `--green-primary` | `#1e5c3a` | Primary buttons, headings |
| `--green-medium` | `#2d8a5e` | Accents, borders |
| `--green-light` | `#3ab07a` | Hover states |
| `--green-accent` | `#4ecca3` | Highlight color, glows |
| `--green-mint` | `#c8f5e0` | Light section backgrounds |
| `--gold` | `#d4a017` | Metallic accents |
| `--gold-light` | `#f0c840` | Ticker highlights |
| `--cream` | `#faf7f2` | Form backgrounds |

### Typography

| Variable | Font | Usage |
|---|---|---|
| `--font-display` | Poppins | Headings, labels, buttons |
| `--font-serif` | Playfair Display | Hero tagline (italic) |
| `--font-body` | Inter | Body text, paragraphs |

### Border Radius Scale

`--radius-sm` (8px) → `--radius` (14px) → `--radius-lg` (22px) → `--radius-xl` (36px) → `--radius-2xl` (56px)

---

## Animations

| Animation | Effect | Where Used |
|---|---|---|
| `gradientFlow` | Slow color-shift on gradient backgrounds | Hero, buttons, ticker, impact bar |
| `floatLeaf` | Gentle float + rotate | Hero leaf emojis, counter icons |
| `floatOrb` | Slow positional drift | Fixed ambient orbs, card overlays |
| `shimmer` | Left-to-right light sweep | Navbar border, dividers, hero box top |
| `rotate360` / `rotateReverse` | Continuous spin | Hero rings |
| `orbitalSpin` | Orbit around a center point | Hero orbit badges |
| `breathe` | Subtle scale pulse (1→1.03) | Section label dots, promise icons |
| `textGlow` | Text shadow pulse | Hero accent text, pyramid label |
| `pulse-dot` | Ripple ring expand | Hero badge dot |
| `ticker` | Infinite horizontal scroll | Ticker strip |
| `pyramidSpin` | 3D rotateY 360° | Page transition pyramid |
| `ptFadeIn/Out` | Overlay fade in then out | Pyramid transition overlay |
| `fadeInUp/Down/Left/Right` | Entry animations | Page elements on load |
| `bounce` | Vertical bounce | Scroll indicator arrow, map pin |
| `glowPulse` | Opacity pulse | Ambient glow elements |

---

## Contact Information

| Field | Detail |
|---|---|
| 📧 Email | hello@ecopack.co |
| 📱 WhatsApp | 9999999999 |
| 📍 Location | Ahmedabad, India |
| ⏰ Hours | Mon–Sat, 9am–7pm |

---

## License

This project was created as an academic/English project showcase. All content, branding, and product descriptions are fictional and for demonstration purposes only.

---

*Made with 🌿 for a greener tomorrow.*
