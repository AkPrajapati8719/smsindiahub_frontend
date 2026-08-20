# 🚀 SMSIndiaHub Modern Web Platform (Next.js 14 + Tailwind CSS)

[![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.4-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.10-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.3.28-black?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![Build Status](https://img.shields.io/badge/Build-Passing_(244_Routes)-brightgreen?style=for-the-badge)](https://www.smsindiahub.in)

An enterprise-grade, ultra-modern CPaaS & Cloud Communications web platform built with **Next.js 14 (App Router)**, **React 18**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🌟 Key Features & Highlights

* **🧭 1:1 Multi-Level Navigation with Left Flyouts:**
  * Exact multi-level dropdowns with left-side hover submenus for `Send SMS`, `Receive SMS`, and `Industries`.
  * **Zero Duplicate Links:** Every child item routes to its own distinct, dedicated landing page.
  * WhatsApp navigation accented in official brand green (`#25D366`).
  * Direct, single-click link on `Pricing` without dropdowns.
  * Mobile-responsive accordion drawer for all screens.

* **📝 Dedicated Sign Up & Registration Page:**
  * Clean card layout at `/registration/` (and `/signup/`).
  * Segmented icon boxes for `👤 Full Name`, `📱 Mobile No.` (strict 10-digit validation), and `✉ E-mail`.
  * Legal agreement checkboxes with direct links to Privacy Policy and Terms.
  * Instant feedback state and SSL/DLT security badges.

* **🎨 Radiant Design System & Typography:**
  * Clean **Pure White Canvas (`#FFFFFF`)** with luminous **Violet (`#8B5CF6`) ➔ Royal Blue (`#2563EB`) ➔ Cyan (`#0EA5E9`)** radiant gradients.
  * **Google Poppins Font Family:** Applied site-wide (weights 300 to 900).
  * **3D Perspective Tilt Cards:** Interactive cursor physics with dynamic glare reflections (`<Card3D />`).
  * **Dark / Light Theme:** Instant theme toggle with localStorage persistence and luminous logo contrast container.
  * **High-Resolution Graphics:** Crisp WebP/vector graphics replacing all legacy assets.

* **⚡ Interactive Live Simulators:**
  * **Live WhatsApp Chatbot Simulator:** Interactive mobile device showcasing conversational bot flows.
  * **Volume & ROI Pricing Calculator:** Dynamic volume slider calculating subtotal, GST (18%), and unit rates for SMS, OTP, and Voice broadcasts.
  * **Developer API Playground:** Code previewer with multi-language tabs (Node.js, Python, cURL, PHP) and one-click clipboard copy.
  * **TRAI DLT Compliance Wizard:** Telecom operator selector (Jio, Airtel, Vi, BSNL, Tata) with PE-TM chain binding instructions.
  * **Smooth Decelerating Metrics Counter:** 2.2s cubic ease-out progression for live throughput and uptime metrics on the Happy Clients page.

* **🔍 100% Zero-404 Route Coverage (244 Pre-Rendered Pages):**
  * **30 City-Wise Programmatic Hubs:** Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Pune, Kolkata, Indore, Bhopal, Jaipur, etc.
  * **38 Specialized Industry Verticals:** Banking/BFSI, Real Estate, EdTech, Healthcare, Travel, Automotive, E-Commerce, etc.
  * **DLT & Compliance Hubs:** Jio, Airtel, Vi, Tata, BSNL guides.
  * **Dynamic XML Sitemap (`/sitemap.xml`)** and **`robots.txt`**.
  * **Universal Trailing Slashes (`trailingSlash: true`)** for canonical SEO.

---

## 🛠️ Quick Start Guide

### 1. Prerequisites
* **Node.js** (v18.17+ or v20+ recommended)
* **npm** or **yarn** / **pnpm**
* **Git** installed on your machine

### 2. Clone or Navigate to the Project
```bash
cd smsindiahub-modern
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Environment Variables
Copy the template `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

### 5. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to:
👉 **`http://localhost:3000/`**

### 6. Build for Production
```bash
npm run build
npm run start
```

---

## 📤 How to Upload to GitHub

Follow these simple steps to push this project to your GitHub repository:

### Step 1: Initialize Git
```bash
git init
```

### Step 2: Add Files & Make Initial Commit
```bash
git add .
git commit -m "feat: Initial commit - SMSIndiaHub Enterprise Platform v2.0"
```

### Step 3: Rename Branch to Main
```bash
git branch -M main
```

### Step 4: Link Your Remote GitHub Repository
*(Replace `<YOUR_GITHUB_REPO_URL>` with your actual repository URL from GitHub)*
```bash
git remote add origin https://github.com/your-username/smsindiahub-modern.git
```

### Step 5: Push to GitHub
```bash
git push -u origin main
```

---

## 📁 Project Directory Structure

```
smsindiahub-modern/
├── .env.example                      # Template environment variables
├── .gitignore                        # Git ignore rules for Next.js & node_modules
├── LICENSE                           # MIT Open Source License
├── package.json                      # Project dependencies & scripts
├── tailwind.config.ts                # Radiant color palette & Poppins font config
├── tsconfig.json                     # TypeScript strict configuration
├── public/
│   ├── icon.png                      # Official 3D Möbius Ribbon Favicon
│   ├── favicon.ico                   # Static fallback favicon
│   └── assets/img/                   # 1:1 original brand assets & HD graphics
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Master root layout (Navbar, Footer, SEO Schema)
│   │   ├── page.tsx                  # Next-Gen 3D Homepage
│   │   ├── globals.css               # Global Tailwind styles & Poppins font import
│   │   ├── sitemap.ts                # Dynamic XML sitemap generator (/sitemap.xml)
│   │   ├── robots.ts                 # Dynamic robots.txt generator (/robots.txt)
│   │   ├── manifest.ts               # Web App Manifest generator (/manifest.webmanifest)
│   │   ├── [slug]/page.tsx           # Static generator for 215+ legacy & city routes
│   │   ├── registration/page.tsx     # 1:1 Sign Up Form
│   │   ├── signup/page.tsx           # Sign Up alias route
│   │   ├── pricing/page.tsx          # Direct Pricing rate cards
│   │   ├── clients/page.tsx          # Happy Clients with decelerating counter
│   │   ├── otp-sms-service-provider/ # Dedicated OTP Service page
│   │   ├── promotional-sms/          # Dedicated Promotional SMS page
│   │   ├── transactional-sms/        # Dedicated Transactional SMS page
│   │   ├── whatsapp-business-api/    # Dedicated WhatsApp API page
│   │   ├── whatsapp-chatbot/         # Dedicated Chatbot page
│   │   ├── rcs-messaging-services/   # Dedicated RCS page
│   │   ├── voice-call-service-provider/ # Dedicated Voice page
│   │   ├── missed-call-service-provider/ # Dedicated Missed Call page
│   │   ├── excel-plugin/             # Free Excel Plugin page
│   │   ├── dlt-registration/         # DLT Registration Guide
│   │   ├── api/india/                # Developer REST API docs
│   │   ├── about-us/                 # About Us & Association Badges
│   │   ├── contact/                  # Contact & Branch Office Addresses
│   │   ├── banking-details/          # Official Bank Wire Details
│   │   ├── privacy-policy/           # Privacy Policy
│   │   ├── terms-and-conditions/     # Terms & Conditions
│   │   ├── refund-policy/            # Refund Policy
│   │   └── no-spam/                  # Anti-Spam Policy
│   │
│   ├── components/
│   │   ├── layout/                   # Navbar, Footer, ThemeToggle
│   │   ├── forms/                    # RegistrationForm, ContactForm
│   │   ├── sections/                 # HeroSection, ServicesGrid, PricingCalculator, etc.
│   │   └── ui/                       # Button, Badge, Card3D, AnimatedCounter
│   │
│   ├── data/                         # Type-safe data for cities, industries, services, legacy routes
│   └── metadata/                     # Decoupled type-safe metadata per route
```

---

## 🚀 One-Click Deployment

### Deploy on Vercel
1. Push your repository to GitHub.
2. Import the repository in [Vercel Dashboard](https://vercel.com/new).
3. Framework Preset: **Next.js**.
4. Root Directory: `./` (or `smsindiahub-modern` if pushing monorepo).
5. Click **Deploy**.

---

## 📄 License
This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

© 2026 **SMSIndiaHub Technology Pvt Ltd**. All rights reserved.
