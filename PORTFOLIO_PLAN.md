# PORTFOLIO PLAN — HARDIK AGARWAL
**Role & Direction:** Senior Creative Director, UI/UX Designer & Frontend Architect  
**Project:** Personal Developer Portfolio Website  
**Client / Subject:** Hardik Agarwal — Web Developer & Digital Experience Builder  
**Status:** PHASE 1 FINALIZED — DESIGN & ARCHITECTURAL PLANNING COMPLETE (No code, no packages, no deployments)

---

## 1. EXECUTIVE VISION & POSITIONING

### 1.1 Brand Identity & Strategic Premise
The objective of this portfolio is to establish Hardik Agarwal as an accomplished, high-caliber **Web Developer & Digital Experience Builder** who bridges the gap between sophisticated aesthetic art direction and reliable, robust frontend engineering.

The portfolio follows an **Editorial Contemporary Creative Direction** (clean typography, asymmetric layouts, restrained color accents, and buttery-smooth micro-interactions). It communicates clarity, taste, restraint, and tangible technical execution without falling into the trap of generic templates, fake statistics, or over-engineered 3D gimmicks.

### 1.2 Core Positioning & Approved Hero Narrative
- **Name:** Hardik Agarwal
- **Professional Title:** Web Developer & Digital Experience Builder
- **Approved Hero Headline:**
  > **"Building digital experiences that move businesses forward."**
- **Approved Supporting Narrative:**
  > *"I design and develop modern websites, e-commerce experiences and custom web solutions that combine thoughtful design with reliable functionality."*
- **Education:** Currently pursuing Bachelor of Computer Applications (BCA) at Manipal University Jaipur.
- **Confirmed Contact Email:** `hardikagarwal201@gmail.com`
- **Confirmed LinkedIn:** `https://www.linkedin.com/in/hardik-agarwal-b738802b8`
- **Freelance Platforms:** Fiverr is strictly omitted from the visible interface until an active profile URL is provided. No placeholder links or fake accounts will be displayed.

### 1.3 Key Value Pillars
- **Versatility across Business Domains:** From luxury real estate portals to full-scale e-commerce, global trade education, and custom web applications. Not pigeonholed into any single vertical.
- **Craft & Performance:** Meticulous typographic hierarchy, custom grid compositions, sub-second perceived load times, zero layout shifts, and 60 FPS transitions.
- **Absolute Authenticity:** No fabricated statistics, no ghost client logos, no fake testimonials, and no inflated tech claims. Every featured work reflects verifiable repositories and working implementations. Concepts are transparently labeled as concepts.

---

## 2. INFORMATION ARCHITECTURE & SITE STRUCTURE

The website is engineered as a high-density, single-page narrative with persistent micro-navigation, progressive disclosure, and contextual section cues.

```
┌────────────────────────────────────────────────────────────────────────┐
│ 01. PERSISTENT NAVIGATION (Typographic Mark, Anchor Links, Theme Toggle)│
├────────────────────────────────────────────────────────────────────────┤
│ 02. HERO SECTION                                                       │
│     - Approved Headline ("Building digital experiences...")            │
│     - Approved Supporting Description                                  │
│     - Status Indicator ("Available for freelance projects")            │
│     - Dual CTAs ("View My Work" / "Let's Talk")                        │
│     - Asymmetric Layout with Lightweight Animated Geometric Visual     │
├────────────────────────────────────────────────────────────────────────┤
│ 03. SELECTED WORK (Core Showcase — 4 Projects, Asymmetric Rhythms)     │
│     - Project 01: Dubai Luxury Real Estate (Real Estate Web Experience)│
│     - Project 02: Export Easy Hai (Live Platform + Education Story)    │
│     - Project 03: Kala: Cakes & Desserts (Concept & Design Showcase)   │
│     - Project 04: Art E-Commerce (Fine Art & Curated Goods Store)      │
├────────────────────────────────────────────────────────────────────────┤
│ 04. CORE SERVICES & CAPABILITIES (Client-Focused Value Matrix)         │
│     - Website Development | E-Commerce | Landing Pages | Custom Web Exp│
├────────────────────────────────────────────────────────────────────────┤
│ 05. ABOUT & APPROACH (The Developer Behind the Code)                   │
│     - Educational Background (BCA @ Manipal University Jaipur)         │
│     - Engineering Approach (Performance, Precision, Modern UI)         │
├────────────────────────────────────────────────────────────────────────┤
│ 06. TECH STACK (Demonstrated & Honest Tooling Ecosystem)               │
│     - HTML5, CSS3, JavaScript (ES6+), React, Node.js, Bootstrap        │
│     - Modern Enhancements: Tailwind CSS, Motion/Framer, Git, Vercel    │
├────────────────────────────────────────────────────────────────────────┤
│ 07. CONTACT & FOOTER (Conversion Terminal)                             │
│     - Primary Email: hardikagarwal201@gmail.com                        │
│     - Direct Mailto Trigger & One-Click Copy Interaction with Feedback │
│     - Verified Links: GitHub, LinkedIn (Fiverr Omitted)                │
│     - Colophon & Local Time Status Node                                │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 3. SECTION-BY-SECTION DESIGN & LAYOUT BLUEPRINTS

### SECTION 01 — PERSISTENT NAVIGATION
- **Visual Character:** Floating editorial dock with subtle backdrop blur (`backdrop-blur-md`), razor-thin borders (`border border-border`), and balanced horizontal padding.
- **Elements:**
  1. **Typographic Wordmark:** `HARDIK AGARWAL` (Space Grotesk, Medium, uppercase, letter-spaced) paired with sub-label indicator `[DEV]`.
  2. **Navigation Anchor Links:** `01. Work`, `02. Services`, `03. About`, `04. Contact` (Inter, 13px, tabular numbers). Active states highlighted with an Electric Lime (`#C6F36A`) micro-dot.
  3. **Theme Switcher:** Custom dual-state pill toggle featuring minimalist Sun/Moon SVG icons with smooth spring rotation and zero layout shift.
  4. **Status Chip (Desktop):** Subtle pulsing Electric Lime dot with label `"Available for freelance"`.
- **Responsive Behavior:**
  - *Desktop/Laptop:* Floating centered pill bar or edge-to-edge header with inset content container.
  - *Mobile/Tablet:* Compact bar with monogram left, theme switch + custom hamburger trigger right. Clicking expands a full-screen, ultra-clean staggered typographic navigation drawer.

---

### SECTION 02 — HERO: "THE FIRST IMPRESSION"
- **Strategic Goal:** Hook visitors in < 3 seconds. Establish immediate authority, modern design sensibilities, and creative frontend pedigree without clutter or cliché.
- **Composition & Layout:**
  - **Asymmetric 12-Column Grid:**
    - **Columns 1–8:** Typographic authority and positioning.
      - *Eyebrow:* `HARDIK AGARWAL — WEB DEVELOPER & DIGITAL EXPERIENCE BUILDER` (Inter, uppercase, 12px, tracking-widest, accent dot).
      - *Primary Headline (Approved):*
        > **"Building digital experiences that move businesses forward."**  
        *(Rendered in Space Grotesk, bold, fluid scale `clamp(2.75rem, 6vw, 5.5rem)`, high contrast text color with selective Playfair Display italicized editorial emphasis on "forward" or "experiences").*
      - *Supporting Narrative (Approved):*
        > *"I design and develop modern websites, e-commerce experiences and custom web solutions that combine thoughtful design with reliable functionality."*
      - *Action Cluster:*
        - **Primary CTA:** `View My Work ↓` (Electric Lime `#C6F36A` high-contrast solid button, dark text, micro hover arrow shift).
        - **Secondary CTA:** `Let's Talk →` (Bordered ghost button, smooth anchor scroll to contact section).
    - **Columns 9–12:** Asymmetric Visual Node:
      - A lightweight, animated geometric visual and developer status node.
      - Clean interactive wireframe node responding smoothly to cursor position, accompanied by real-time status markers: `Location: India (IST)`, `Education: BCA Candidate @ Manipal University Jaipur`, and `Focus: Full-Stack Web Experiences`.

---

### SECTION 03 — SELECTED WORK: "AUTHENTIC PROJECT SHOWCASE"
- **Strategic Goal:** Demonstrate verified capabilities across 4 real, distinct project domains.
- **Rhythm:** Alternating asymmetric layouts with generous whitespace.

#### Project 01: DUBAI LUXURY REAL ESTATE
- **Domain:** Luxury Commercial & Real Estate.
- **Status:** Functional Web Application (Repository-backed).
- **Layout Style:** Cinematic wide showcase card.
- **Repository:** `https://github.com/Hardik637/dubai-luxury-real-estate-backup.git`
- **Details:**
  - *Tag:* `01 / REAL ESTATE PLATFORM`
  - *Title:* `Dubai Luxury Real Estate`
  - *Overview:* Modern web experience designed for luxury property listings in Dubai, highlighting architectural aesthetics, property specifications, community amenities, and direct lead acquisition channels.
  - *Tech Tags:* `React` `JavaScript` `Responsive CSS` `Modular Components`
  - *Links:* GitHub Repository link. *(Note: Admin URLs are strictly excluded from public portfolio display).*

#### Project 02: EXPORT EASY HAI
- **Domain:** Global Trade & Education Platform.
- **Status:** Active Live Production Website & Repository.
- **Layout Style:** Split 6/6 interactive layout with dynamic live preview badge.
- **Repository:** `https://github.com/Hardik637/export-easy-hai.git`
- **Live URL:** `https://export-easy-hai.vercel.app/`
- **Details:**
  - *Tag:* `02 / EDUCATION & TRADE PLATFORM`
  - *Title:* `Export Easy Hai`
  - *Overview:* Storytelling-oriented landing page and educational portal designed to simplify international import/export processes for entrepreneurs through structured curricula, trust-building testimonials, and intuitive enrollment touchpoints.
  - *Tech Tags:* `HTML5` `CSS3` `JavaScript` `Bootstrap` `Responsive Design`
  - *Links:* GitHub Repository + **Live Website** (`https://export-easy-hai.vercel.app/`) with glowing live indicator.

#### Project 03: KALA: CAKES & DESSERTS
- **Domain:** Boutique Bakery E-Commerce Concept.
- **Status:** **CONCEPT PROJECT / DESIGN SHOWCASE** *(Explicitly presented as a concept showcase, backed by authentic repository).*
- **Layout Style:** Editorial boutique card with rich sensory visual hierarchy.
- **Repository:** `https://github.com/Hardik637/Kala-cake-and-dessert.git`
- **Details:**
  - *Tag:* `03 / CONCEPT & DESIGN SHOWCASE`
  - *Title:* `Kala: Cakes & Desserts`
  - *Overview:* Visual-first e-commerce concept crafted for a boutique bakery brand, emphasizing product indulgence, custom dietary categorization (cakes, dessert tubs, brownies, cookies), and a streamlined, frictionless checkout UX.
  - *Tech Tags:* `E-Commerce UI` `React` `Responsive Architecture` `Component Systems`
  - *Links:* GitHub Repository link + Concept Showcase Badge.

#### Project 04: ART E-COMMERCE
- **Domain:** Fine Art, Sculptures & Decorative Objects.
- **Status:** Functional Web Application (Repository-backed).
- **Layout Style:** Asymmetric gallery presentation with generous negative space.
- **Repository:** `https://github.com/Hardik637/Art-ecommerce.git`
- **Details:**
  - *Tag:* `04 / ART & OBJECTS COMMERCE`
  - *Title:* `Art E-Commerce Gallery`
  - *Overview:* Refined online store for contemporary wall art, sculptural decor, and limited edition prints, featuring immersive artwork viewing, collection filters, and clean cart states.
  - *Tech Tags:* `JavaScript` `E-Commerce Architecture` `CSS Grid` `Interactive UI`
  - *Links:* GitHub Repository link.

---

### SECTION 04 — SERVICES: "COMMERCIAL CAPABILITIES"
- **Strategic Goal:** Clarify exactly what freelance clients can hire Hardik for, speaking in business outcomes.
- **Layout:** 4-Column responsive service matrix or structured 2x2 asymmetric interactive grid.
- **Service Modules:**
  1. **Website Development:** Bespoke corporate & brand websites built from scratch with clean semantic code, tailored layouts, lightning performance, and SEO best practices.
  2. **E-Commerce Development:** High-converting online storefronts, catalog architecture, intuitive cart/checkout experiences, and mobile-first shopping journeys.
  3. **Landing Page Development:** Conversion-rate-optimized (CRO) promotional pages designed for product launches, lead capture, webinars, and marketing campaigns.
  4. **Custom Web Experiences & UI/UX:** Creative developer implementations featuring smooth transitions, micro-interactions, responsive prototypes, and AI-assisted application workflows.

---

### SECTION 05 — ABOUT ME: "THE DEVELOPER BEHIND THE CODE"
- **Strategic Goal:** Humanize Hardik, present his authentic educational grounding, and showcase his engineering mindset without overhyped buzzwords.
- **Content Narrative:**
  - Currently pursuing a **Bachelor of Computer Applications (BCA)** at **Manipal University Jaipur**, combining academic computer science fundamentals with modern frontend web standards.
  - Approach: Bridging aesthetics and engineering. Code is not just functional; it is the infrastructure through which visual and commercial ideas come alive on the screen.
- **Visual Treatment:** Two-column editorial spread.
  - *Left Column:* Large typographic pull-quote: *"Building websites that not only work flawlessly under the hood, but leave a lasting visual impression."*
  - *Right Column:* Structured bio cards detailing academic focus, development philosophy, and dedication to modern web standards.

---

### SECTION 06 — TECH STACK: "AUTHENTIC TOOLING"
- **Strategic Goal:** Honest, clear showcase of core proficiencies. Zero fake percentage progress bars.
- **Verified Tooling Ecosystem:**
  - **Core Languages & Runtimes:** `HTML5`, `CSS3`, `JavaScript (ES6+)`, `Node.js`.
  - **Frontend Frameworks & Libraries:** `React`, `Bootstrap`, `Tailwind CSS`.
  - **Motion & Experience:** `Framer Motion / Motion`, `Lucide Icons`.
  - **Tooling & Platform:** `Git`, `GitHub`, `Vite`, `Vercel`.
- **Presentation Format:** Clean architectural badges with subtle hover state illumination, accompanied by contextual notes on how each tool is applied in actual work.

---

### SECTION 07 — CONTACT & FOOTER: "CONVERSION TERMINAL"
- **Strategic Goal:** Frictionless inquiry conversion for freelance clients and collaborators.
- **Confirmed Contact Details & Interactions:**
  - **Email Address:** `hardikagarwal201@gmail.com`
  - **Functional `mailto:` Anchor:** Direct link to `mailto:hardikagarwal201@gmail.com`.
  - **One-Click Copy Email Interaction:** High-contrast interactive pill that copies `hardikagarwal201@gmail.com` to the user's clipboard and immediately triggers a visual confirmation state (`"Email Copied to Clipboard ✓"`).
  - **LinkedIn Profile Link:** `https://www.linkedin.com/in/hardik-agarwal-b738802b8`
  - **GitHub Profile Link:** `https://github.com/Hardik637`
  - **Fiverr Platform Status:** Strictly omitted from the interface until an active profile link is supplied.
  - **Availability & Timezone:** `"Based in India (IST) • Open to Global Remote Opportunities"`.
  - **Colophon:** "Designed with deliberate restraint & modern craft. Built with React & Tailwind CSS."

---

## 4. SCREENSHOT & ASSET ACQUISITION STRATEGY (PHASE 3 WORKFLOW)

To guarantee 100% authenticity, the portfolio will utilize **genuine browser screenshots** rather than generic 3D device mockups or synthetic imagery.

*Execution Protocol (Scheduled for Phase 3 — no cloning or asset modifications during Phase 1):*

```
┌────────────────────────────────────────────────────────────────────────┐
│ SCREENSHOT ACQUISITION WORKFLOW (PHASE 3)                              │
├────────────────────────────────────────────────────────────────────────┤
│ A. Export Easy Hai (Live Website)                                      │
│    1. Access live production deployment: https://export-easy-hai.vercel.app │
│    2. Capture desktop viewport (1440x900) hero section & curriculum.   │
│    3. Capture key conversion modules and mobile responsive layout.      │
│    4. Export optimized WebP assets (< 200KB).                          │
├────────────────────────────────────────────────────────────────────────┤
│ B. Dubai Luxury Real Estate (Local Execution)                          │
│    1. Inspect repository: github.com/Hardik637/dubai-luxury-real-estate-backup │
│    2. Spin up local development server.                                │
│    3. Capture authentic browser viewport of the public client interface│
│       (hero, luxury property grid, villa showcase).                    │
│    4. Strictly exclude any backend/admin screens from public showcase.  │
├────────────────────────────────────────────────────────────────────────┤
│ C. Art E-Commerce (Local Execution)                                    │
│    1. Inspect repository: github.com/Hardik637/Art-ecommerce           │
│    2. Spin up local development server.                                │
│    3. Capture authentic browser viewport of the artwork gallery grid,   │
│       sculpture detail view, and minimal shopping cart interface.      │
├────────────────────────────────────────────────────────────────────────┤
│ D. Kala: Cakes & Desserts (Concept Showcase)                           │
│    1. Verify if local code exists; if available, run and capture.      │
│    2. If no codebase exists, design an authentic high-fidelity concept │
│       mockup clearly watermarked/badged as "Concept Showcase".         │
│    3. Never misrepresent concept mockups as completed client sites.    │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 5. INTERACTION & ANIMATION STRATEGY

### 5.1 Animation Philosophy
- **Intensity:** **Expressive yet disciplined.** Motion must explain spatial relationships and elevate perceived quality—never distract, delay user navigation, or create CPU spikes.
- **Timing & Curves:** Custom cubic-bezier easings (luxury curve: `[0.16, 1, 0.3, 1]`) providing snappy initiation and ultra-smooth deceleration.

### 5.2 Interaction Touchpoints
1. **Hero Entrance Sequence:** Staggered upward mask reveals on the primary headline, followed by soft fade-in of supporting narrative and CTA action cluster.
2. **Scroll-Triggered Section Entrances:** Viewport-triggered reveals (`whileInView`) using subtle Y-axis offset (20px to 0px) and opacity (0 to 1). Triggered once (`viewport: { once: true }`).
3. **Project Showcase Hover States:**
   - Subtle scale on project preview images (`scale: 1.025` with smooth transition).
   - Dynamic tag highlight and external arrow glyph shift (`translateX: 3px, translateY: -3px`).
4. **One-Click Copy Email Feedback:** Smooth micro-state flip from default mail icon to a checkmark with tooltip pill feedback.
5. **Theme Switch Transition:** Smooth color interpolation on CSS custom properties (`transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease`). Zero content re-renders or page flickers.
6. **Accessibility Safeguard:** Rigorous `@media (prefers-reduced-motion: reduce)` override that completely disables translation animations, defaulting to immediate clean opacity transitions.

---

## 6. RESPONSIVE DESIGN BLUEPRINT

| Breakpoint | Target Screen | Layout Adaptations |
|---|---|---|
| **Mobile (`< 640px`)** | iPhone, Android phones | Single-column stack throughout. Hero typography clamps smoothly to 2.25rem. Persistent nav converts to compact top bar with slide-out menu. Micro-interactions touch-optimized (min 44px hit targets). Heavy animations disabled. |
| **Tablet (`640px - 1023px`)** | iPads, Android tablets | 2-column service and tech stack grids. Project cards shift to balanced vertical split cards. Comfortable touch margins (32px lateral gutters). |
| **Laptop (`1024px - 1439px`)** | 13"-15" MacBook, Ultrabooks | Full 12-column asymmetric grid active. Floating navigation bar. Full hover states and magnetic interactions enabled. |
| **Desktop / Ultrawide (`≥ 1440px`)** | 27"+ Studio Displays, 4K monitors | Max container containment (`max-w-7xl` or 1400px centered), preventing over-stretching. Generous negative space and editorial typography. |

---

## 7. TECHNICAL ARCHITECTURE SPECIFICATION

### 7.1 Recommended Tech Stack
- **Framework:** `React 18 / Vite` (Fast HMR, minimal bundle overhead).
- **Styling:** `Tailwind CSS v3+` (Design token synchronization, utility efficiency).
- **Motion Engine:** `Framer Motion` (Declarative component-level animations, layout animations).
- **Iconography:** `Lucide React` (Clean 24px stroke-based icons, tree-shakeable).
- **Deployment & Hosting:** `Vercel` (Global Edge CDN, automatic preview deployments).

### 7.2 Target Directory & Component Architecture
```
portfolio-website/
├── public/
│   ├── favicon.svg
│   ├── og-image.png
│   └── projects/
│       ├── dubai-luxury.webp
│       ├── export-easy-hai.webp
│       ├── kala-desserts.webp
│       └── art-ecommerce.webp
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx            # Unified Button component (Solid Lime / Ghost / Outline)
│   │   │   ├── SectionHeading.jsx    # Standardized Space Grotesk section titles with eyebrow
│   │   │   ├── Badge.jsx             # Category & Tech pill tags
│   │   │   ├── CopyEmailButton.jsx   # One-click copy interaction with visual confirmation
│   │   │   └── ThemeToggle.jsx       # Smooth dark/light animated switch
│   │   ├── layout/
│   │   │   ├── Navbar.jsx            # Floating responsive navigation bar
│   │   │   ├── MobileMenu.jsx        # Fullscreen mobile navigation overlay
│   │   │   ├── Footer.jsx            # Closing contact card, links & colophon
│   │   │   └── Container.jsx         # Uniform max-width container wrapper
│   │   └── sections/
│   │       ├── Hero.jsx              # Approved headline, description & geometric visual
│   │       ├── SelectedWork.jsx      # Asymmetric 4-project showcase
│   │       ├── ProjectCard.jsx       # Individual project presentation card
│   │       ├── Services.jsx          # 4 core capability modules
│   │       ├── About.jsx             # Bio, Manipal University Jaipur, philosophy
│   │       ├── TechStack.jsx         # Clean technology grid with tooltips
│   │       └── Contact.jsx           # Conversion CTA, verified email & LinkedIn
│   ├── data/
│   │   ├── projectsData.js          # Raw data for 4 real projects (verified links/tags)
│   │   ├── servicesData.js          # Content definitions for the 4 service pillars
│   │   └── techStackData.js         # Verified technologies & categorized tags
│   ├── hooks/
│   │   ├── useTheme.js              # Dark/light local storage persistence hook
│   │   └── useScrollSpy.js          # Active section observer for navigation
│   ├── styles/
│   │   └── index.css                # Tailwind directives & custom font faces
│   ├── App.jsx                      # Main assembly & theme provider
│   └── main.jsx                     # Vite DOM entry
├── index.html                       # Space Grotesk, Inter, Playfair Display fonts + Meta tags
├── tailwind.config.js               # Exact color tokens, fonts & spacing extensions
├── package.json
└── README.md
```

---

## 8. PHASE 2 IMPLEMENTATION READINESS

This section confirms that all conceptual, strategic, and visual planning is finalized and ready for Phase 2 implementation.

### 8.1 Approved Design Direction
- **Style:** Modern Creative Developer Portfolio (Editorial, Contemporary, Asymmetric, Restrained).
- **Themes:** Dual-theme system (Dark: Deep Obsidian `#101110` / Light: Warm Parchment `#F4F3EE`).
- **Accent:** Electric Lime (`#C6F36A`), reserved for high-intent CTAs, active states, and status indicators.
- **Typography:** Space Grotesk (Headings), Inter (Body & UI), Playfair Display (Occasional editorial accent).

### 8.2 Confirmed Contact & Social Details
- **Full Name:** Hardik Agarwal
- **Professional Title:** Web Developer & Digital Experience Builder
- **Email:** `hardikagarwal201@gmail.com` (with functional `mailto:` link & one-click copy confirmation).
- **LinkedIn:** `https://www.linkedin.com/in/hardik-agarwal-b738802b8`
- **GitHub:** `https://github.com/Hardik637`
- **Fiverr:** Omitted completely from the visible interface until a verified profile URL is provided.

### 8.3 Confirmed Project Status & Truth in Advertising
1. **Dubai Luxury Real Estate:** Functional web application; GitHub repository verified (`dubai-luxury-real-estate-backup`). Admin URLs excluded from public portfolio.
2. **Export Easy Hai:** Active live website (`export-easy-hai.vercel.app`) + GitHub repository (`export-easy-hai`).
3. **Kala: Cakes & Desserts:** Explicitly labeled as **Concept & Design Showcase** (no fabricated client claims).
4. **Art E-Commerce:** Functional web application; GitHub repository verified (`Art-ecommerce`).

### 8.4 Screenshot Acquisition Plan (Phase 3 Prep)
- **Export Easy Hai:** Rendered browser capture from live Vercel URL (desktop + mobile views).
- **Dubai Luxury Real Estate:** Rendered browser capture from verified local run of repository.
- **Art E-Commerce:** Rendered browser capture from verified local run of repository.
- **Kala: Cakes & Desserts:** Authentic implementation capture or explicitly labeled concept showcase mockup.
- *Strict Rule:* No repository cloning, code modifications, or asset capture during Phase 1.

### 8.5 Remaining Assets Required for Later Phases
- High-resolution authentic browser screenshots of the project interfaces (to be captured in Phase 3).
- Custom 1200 × 630 Social Preview Image Plan:
  - Format: SVG / PNG at exactly 1200px width by 630px height.
  - Background: Obsidian `#101110` with subtle architectural grid overlay.
  - Typography: Space Grotesk headline *"Building digital experiences that move businesses forward."* paired with Playfair Display italic accent on *"forward"*.
  - Monogram & Details: `HA` brand monogram in `#C6F36A` Electric Lime, status chip *"AVAILABLE FOR PROJECTS"*, direct email `hardikagarwal201@gmail.com`, and GitHub handle `github.com/Hardik637`.
  - Canonical location: `public/og-image.svg` (and fallback `public/og-image.png`).

### 8.6 Technical Implementation Sequence (Phase 2 Roadmap)
1. **Step 1 — Project Scaffolding:** Initialize Vite + React project, install Tailwind CSS, Framer Motion, and Lucide React.
2. **Step 2 — Design System Integration:** Configure `tailwind.config.js` with exact tokens from `DESIGN_SYSTEM.md`, import typography subsets, and set up CSS variables.
3. **Step 3 — Theme & Global Infrastructure:** Implement `useTheme` hook with local storage persistence and FOUC prevention script in `index.html`.
4. **Step 4 — Core Components:** Build atomic components (`Button`, `Badge`, `CopyEmailButton`, `ThemeToggle`, `SectionHeading`).
5. **Step 5 — Section Construction (Sequential):**
   - Navigation & Mobile Drawer.
   - Hero Section with approved headline and animated geometric visual.
   - Selected Work Section with asymmetric project layouts and verified metadata.
   - Services Section (4 capability pillars).
   - About Section (Manipal University Jaipur BCA grounding).
   - Tech Stack Section (Honest, verified tooling).
   - Contact Section (Copy-email, mailto, LinkedIn, Colophon).
6. **Step 6 — Motion & Polish:** Apply Framer Motion transitions, responsive adjustments, and accessibility checks (`prefers-reduced-motion`).

---
*Phase 1 Finalization Complete. Ready for Client Review and Approval.*
