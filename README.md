<div align="center">

# 🏛️ Pradeep H — Engineering Portfolio & Digital Gallery

**Production-Grade Personal Portfolio & Systems Archive**  
*Bridging physical hardware engineering with intelligent software architecture and generative AI.*

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13.x-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Lenis](https://img.shields.io/badge/Lenis-Smooth_Scroll-5C1A28?style=for-the-badge)](https://github.com/darkroomengineering/lenis)
[![License: MIT](https://img.shields.io/badge/License-MIT-7A2436?style=for-the-badge)](LICENSE)

[**Explore Live Deployment**](https://pradeeph-portfolio.vercel.app) · [**Report Issue**](https://github.com/PRADXP007/portfolio/issues) · [**Connect on LinkedIn**](https://linkedin.com/in/pradeeph007)

</div>

---

## 📖 Overview

This repository houses the personal portfolio website of **Pradeep H**, a third-year Electronics & Communication Engineering undergraduate at **Jain University, Bengaluru** (Class of 2027, CGPA 7.3). 

Designed following the **"Atelier Archive"** design system created in Google Stitch, the site blends **editorial monograph typography** with modern **spatial glassmorphism**, real-time **WebGL hardware shaders**, and buttery **Lenis smooth scrolling**.

### 🎯 Key Engineering Specializations
- **Physical & Hardware Systems**: Custom FPV drone engineering (Betaflight PID tuning, RF telemetry), 2.4 GHz microstrip patch antenna simulation (CST Studio Suite & VBA), ESP32 IoT nodes, and transistor-level IC verification (Cadence Virtuoso).
- **Full-Stack & Cloud Architecture**: Production-grade Next.js 16 applications with React 19, TypeScript, Tailwind CSS v4, Node.js/Express, MongoDB, PostgreSQL, and real-time Socket.io channels.
- **AI & Retrieval-Augmented Generation**: Vector search workflows using `pgvector`, multi-format document generation pipelines, and agentic workflows (Anthropic Certified: *AI Fluency for Builders*).

---

## 🎨 Design System & Aesthetic Architecture

The aesthetic is inspired by high-end museum archives and physical monographs:

```
┌────────────────────────────────────────────────────────────────────────┐
│  Palette: Warm Parchment (#F3ECE0)  ×  Deep Maroon Accent (#5C1A28)    │
│  Headlines: EB Garamond (Editorial Serif)                              │
│  UI / Body: Manrope (Clean Geometric Sans)                             │
│  Surfaces:  Liquid Glass (24px backdrop-blur + 1px hairline border)   │
│  Grid:      12-Column Editorial Grid with Blueprint Schematic Motif    │
└────────────────────────────────────────────────────────────────────────┘
```

### Color Tokens

| Token | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Base Parchment** | `#F3ECE0` | Primary warm canvas and background |
| **Parchment Surface** | `#FAF6EE` / `#FAF3E7` | Card backgrounds and inner containers |
| **Maroon Primary** | `#5C1A28` | Main interactive CTAs, badges, and accents |
| **Deep Maroon-Black** | `#400414` / `#2B0D14` | High-contrast display headlines and anchors |
| **Maroon Accent** | `#7A2436` / `#9D3F50` | Subtitles, category tags, and highlight indicators |
| **Charcoal-Maroon Ink** | `#1E1B14` / `#534344` | High-legibility editorial body copy |

### Core Design Components
- **Liquid Glass (`<GlassPanel>`)**: Reusable glassmorphic surface featuring `backdrop-filter: blur(24px)`, semi-transparent parchment tint, 1px low-opacity maroon hairline border (`rgba(92, 26, 40, 0.12)`), and warm diffused elevation shadows.
- **Adaptive Sticky Navigation**: Starts transparent and full-width at the top, gracefully compressing into a floating liquid glass pill after `80px` of scroll.
- **WebGL Circuit Shader**: Hardware circuit and pulsing node WebGL background in the Hero section with mouse reactivity and `prefers-reduced-motion` compliance.
- **Blueprint Schematic Sub-Grid**: Technical grid pattern (`.blueprint-bg`) used exclusively in the Hardware Engineering section to demarcate physical builds from software systems.
- **Spatial 3D Card Tilt**: Mouse-linked 3D perspective rotation (`rotateX`/`rotateY` with spring physics) on all project cards.

---

## 📂 Site Structure & Components

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Google Fonts (EB Garamond & Manrope), SEO, OG metadata
│   │   ├── page.tsx                  # Single-page long-scroll assembling all 8 sections
│   │   └── globals.css               # Tailwind v4 tokens, noise texture, liquid glass utilities
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx            # Compress-on-scroll liquid glass floating pill nav
│   │   │   └── Footer.tsx            # Museum-style gallery footer with back-to-top scroll
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx       # Display typography, pitch, CTAs, WebGL shader
│   │   │   ├── AboutSection.tsx      # Jain Univ ECE bio, 3 spatial panels (Education, Focus, Philosophy)
│   │   │   ├── SkillsSection.tsx     # 4 categorized glass chip grids (Hardware, Web, AI, Design)
│   │   │   ├── ExperienceSection.tsx # Vertical timeline (Anthropic & ITC Infotech)
│   │   │   ├── SoftwareProjectsSection.tsx # 9 real GitHub repos with 3D tilt cards & detail modals
│   │   │   ├── HardwareProjectsSection.tsx # 7 blueprint schematic hardware & antenna builds
│   │   │   ├── CurrentlyBuildingSection.tsx # Flagship AI Document Studio showcase
│   │   │   └── ContactSection.tsx    # Interactive dispatch form, copy email, CV download
│   │   └── ui/
│   │       ├── BrandIcons.tsx        # Vector icons for GitHub and LinkedIn
│   │       ├── GlassPanel.tsx        # Reusable liquid-glass surface component
│   │       ├── HardwareCard.tsx      # Schematic hardware card with specs modal
│   │       ├── ProjectCard.tsx       # 3D tilt project card with highlights modal
│   │       ├── SectionHeading.tsx    # Editorial serif section titles with hairline rules
│   │       ├── SmoothScrollProvider.tsx # Lenis inertia smooth scroll provider
│   │       └── WebGLHeroShader.tsx   # Hardware circuit WebGL canvas shader
│   └── data/
│       └── portfolioData.ts          # Structured data models for projects, timeline, skills, and bio
```

---

## 💻 Software Projects

All 9 software projects are directly linked to real repositories on [`github.com/PRADXP007`](https://github.com/PRADXP007):

| Project | Tagline | Tech Stack | Repository |
| :--- | :--- | :--- | :--- |
| **Paperrrrrr** *(Flagship)* | AI Document Studio · Autonomous Multi-Format Engine | `Next.js` `React` `TypeScript` `MongoDB` `Node.js` `Tailwind` | [PRADXP007/Paperrrrrr](https://github.com/PRADXP007/Paperrrrrr) |
| **CampusLoop** | Campus Social-Commerce & Peer Marketplace | `Next.js` `React` `TypeScript` `Tailwind` `Express` `MongoDB` `Socket.io` | [PRADXP007/CampusLoop](https://github.com/PRADXP007/CampusLoop) |
| **Explain This Error** | RAG Debugging Engine · Vector-Backed Root Cause Analysis | `TypeScript` `pgvector` `Next.js` `PostgreSQL` `Tailwind` | [PRADXP007/Explain-This-Error](https://github.com/PRADXP007/Explain-This-Error) |
| **Mess Menu Planner** | Weekly Hostel Recipe & Nutrition Management | `TypeScript` `React` `Node.js` `Tailwind CSS` `Vercel` | [PRADXP007/Mess-Menu-Planner](https://github.com/PRADXP007/Mess-Menu-Planner) |
| **Scuderia Ferrari Web** | Interactive Heritage & Motorsport Documentary | `TypeScript` `React` `Framer Motion` `Tailwind CSS` | [PRADXP007/scuderia-ferrari-web](https://github.com/PRADXP007/scuderia-ferrari-web) |
| **Bicycle 3D Web** | Interactive WebGL & Three.js Product Showcase | `JavaScript` `WebGL` `Three.js` `CSS3` `HTML5` | [PRADXP007/Bicycle-3D-Web](https://github.com/PRADXP007/Bicycle-3D-Web) |
| **Setup Idea Validator** | Early-Stage Venture & Concept Validation Engine | `TypeScript` `React` `Next.js` `Tailwind CSS` | [PRADXP007/setup-idea-validator](https://github.com/PRADXP007/setup-idea-validator) |
| **Soulsync** | Interactive Relationship & Shared Moments Platform | `TypeScript` `React` `Next.js` `Tailwind CSS` | [PRADXP007/soulsync](https://github.com/PRADXP007/soulsync) |
| **Brain Tumour Detection** | MRI Image Processing & Morphological Segmentation | `Python` `Jupyter Notebook` `OpenCV` `NumPy` `Apache-2.0` | [PRADXP007/brain-tumour-detection](https://github.com/PRADXP007/brain-tumour-detection) |

---

## ⚡ Hardware & Embedded Engineering

| Tag | Project | Key Highlights & Specs | Toolchain |
| :--- | :--- | :--- | :--- |
| `AER-FPV-01` | **Custom FPV Racing Drone** | Reptile Martian 3 frame, 2306 2450KV motors, 4S/6S power distribution, dynamic PID loops & bidirectional DShot RPM filtering. | `Betaflight` `ExpressLRS` `STM32` `C/C++` |
| `RF-ANT-2X2` | **2×2 Microstrip Patch Antenna Array** | Final Year Project. 2.4 GHz ISM band, corporate feed network, VBA macro automation, return loss $S_{11} < -22\text{ dB}$, gain $> 11.2\text{ dBi}$. | `CST Studio Suite` `VBA` `Microwave Theory` |
| `IOT-MED-03` | **IoT Smart Pill Dispenser** | Scheduled carousel rotation via precision micro-servos, NTP time sync, IR beam-break optical drop verification, MQTT alerts. | `ESP32` `Embedded C++` `Servo Control` `MQTT` |
| `SAF-GAS-04` | **Smart LPG Gas Leak Alert System** | MQ-6 hydrocarbon sensing with ADC calibration, relay solenoid emergency valve cutoff ($<200\text{ms}$ latency), GSM emergency SMS. | `Microcontroller C` `MQ-6` `GSM SIM800L` |
| `AER-WIFI-05` | **ESP32 WiFi Micro Drone** | Coreless motors, captive WebSockets/UDP phone controller, 250 Hz MPU6050 complementary IMU stabilization. | `ESP32` `MPU6050` `UDP` `Embedded C++` |
| `EDA-VLSI-06` | **4-Bit Johnson Counter IC** | Transistor-level master-slave D-FF schematic & layout in Cadence Virtuoso, Spectre transient verification, clean DRC/LVS. | `Cadence Virtuoso` `Spectre` `CMOS VLSI` |
| `DSP-IMG-07` | **Brain Tumor Detection (MATLAB)** | MRI noise reduction via spatial median filtering, Otsu thresholding, morphological erosion/dilation, and watershed boundaries. | `MATLAB` `Image Processing Toolbox` |

---

## 🛠️ Technology Stack

| Domain | Technologies & Libraries |
| :--- | :--- |
| **Frontend Framework** | Next.js 16 (App Router), React 19, TypeScript |
| **Styling & Design System** | Tailwind CSS v4, Custom CSS Variables, Liquid Glass Tokenization |
| **Typography** | EB Garamond (Display Serif), Manrope (Body/UI Sans), JetBrains Mono (Code/Specs) |
| **Animations & Scroll** | Framer Motion 13 (Scroll Parallax & 3D Tilt), Lenis (Inertia Smooth Scroll) |
| **Graphics & WebGL** | Custom GLSL Fragment & Vertex Shaders, Three.js, WebGL 1.0/2.0 Canvas |
| **Icons & Celebrations** | Lucide React, Canvas Confetti |
| **Deployment** | Vercel Edge Platform |

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/PRADXP007/portfolio.git
cd portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or specified port) to view the site.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## ♿ Accessibility & Performance

- **`prefers-reduced-motion` compliance**: All 3D tilt effects, parallax transforms, and WebGL animations automatically fall back to static, accessible transitions for users with motion sensitivity.
- **Lightweight Shader Layer**: Hero WebGL shader utilizes low-power context settings and `ResizeObserver` throttling to prevent battery drain or frame drops on mobile devices.
- **Clean SEO & Semantic Markup**: Structured JSON-LD metadata, complete OpenGraph tags, semantic HTML5 section landmarks, and descriptive ARIA labels.

---

## 📬 Contact & Inquiries

- **Author**: Pradeep H
- **Degree**: B.Tech Electronics & Communication Engineering (2023 – 2027)
- **Institution**: Jain University, Bengaluru, India
- **Location**: JP Nagar, Bengaluru, Karnataka, India
- **Email**: [pradee5606@gmail.com](mailto:pradee5606@gmail.com)
- **GitHub**: [@PRADXP007](https://github.com/PRADXP007)
- **LinkedIn**: [pradeeph007](https://linkedin.com/in/pradeeph007)

---

<div align="center">
  <sub>Crafted with precision for the digital gallery & engineering archive. © 2026 Pradeep H. Distributed under the MIT License.</sub>
</div>
