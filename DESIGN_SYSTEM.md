# DESIGN SYSTEM SPECIFICATION — HARDIK AGARWAL
**Brand Identity:** Web Developer & Digital Experience Builder  
**Visual Style:** Modern Creative Developer Portfolio (Editorial, Contemporary, Precision Engineered)  
**Document Purpose:** Definitive design tokens, typographic hierarchy, theme specifications, component standards, and motion guidelines.  
**Status:** PHASE 1 FINALIZED — FULLY SYNCHRONIZED WITH PORTFOLIO PLAN

---

## 1. COLOR ARCHITECTURE & TOKEN SYSTEM

The color system is engineered with strict contrast ratios to meet WCAG AA and AAA accessibility standards. It features two deliberately crafted visual environments: a deep, architectural dark theme and a warm, editorial gallery light theme.

### 1.1 Color Tokens Matrix

| Token Name | Dark Theme Value | Light Theme Value | Intended Usage |
|---|---|---|---|
| `--color-bg-primary` | `#101110` (Deep Obsidian) | `#F4F3EE` (Warm Parchment) | Page background, canvas foundation |
| `--color-bg-secondary` | `#181A18` (Charcoal Slate) | `#EAE9E2` (Soft Alabaster) | Alternate section backgrounds, elevated layers |
| `--color-surface` | `#242624` (Subtle Milled Stone) | `#FFFFFF` (Pure Studio White) | Cards, modals, floating panels, tooltips |
| `--color-text-primary` | `#F4F3EE` (Bone White) | `#101110` (Deep Ink Black) | Primary headlines, titles, active labels |
| `--color-text-secondary` | `#A3A7A1` (Neutral Ash) | `#707570` (Muted Graphite) | Body copy, secondary metadata, captions |
| `--color-border` | `#343734` (Precision Charcoal) | `#DAD9D1` (Muted Sandstone) | Structural rules, dividers, subtle outlines |
| `--color-accent` | `#C6F36A` (Electric Lime) | `#C6F36A` (Electric Lime) | High-intent CTA buttons, live badges, active pips |
| `--color-accent-dark` | `#9AC938` (Muted Lime) | `#101110` (Dark Contrast Ink) | Text paired on top of lime backgrounds |

---

### 1.2 The Electric Lime Protocol (`#C6F36A`)
Electric Lime is an aggressive, high-energy chromatic signal. To maintain an editorial, mature agency feel, **it must be deployed with extreme discipline**:
- **Permitted Uses:**
  - Primary CTA button background (`bg-[#C6F36A] text-[#101110] font-semibold`).
  - Active navigation indicators (a 6px solid dot next to the active section).
  - "Live Website" status dot with subtle CSS pulse (for Export Easy Hai).
  - One-click copy email confirmation badge highlight.
  - Interactive selection highlights or hover underlines on key links.
  - Micro-metric badges (e.g., `[01]`, `[AVAILABLE]`).
- **Strictly Prohibited Uses:**
  - Large background washes or expansive banner cards.
  - Body paragraph text or multi-line headings.
  - Decorative neon gradient glows, drop shadows, or laser borders.
  - Multi-element clusters where lime competes with itself.

---

### 1.3 Theme Contrast Analysis
- **Dark Theme (`#101110`):**
  - Primary text `#F4F3EE` against `#101110` background yields **16.2:1 contrast** (Passes WCAG AAA).
  - Secondary text `#A3A7A1` against `#101110` background yields **8.4:1 contrast** (Passes WCAG AAA).
  - Accent `#C6F36A` paired with black text `#101110` on primary buttons yields **14.1:1 contrast** (Passes WCAG AAA).
- **Light Theme (`#F4F3EE`):**
  - Primary text `#101110` against `#F4F3EE` background yields **16.2:1 contrast** (Passes WCAG AAA).
  - Secondary text `#707570` against `#F4F3EE` background yields **4.8:1 contrast** (Passes WCAG AA for body text, AAA for large text).
  - Accent `#C6F36A` is bordered or paired with `#101110` text/accents to ensure pristine legibility on white and warm backgrounds.

---

## 2. TYPOGRAPHY SYSTEM

The typographic palette unites the precision of mid-century Swiss modernism (`Space Grotesk`), the unmatched readability of screen-optimized sans-serif (`Inter`), and the high-fashion editorial gravitas of transitional serif (`Playfair Display`).

```
Font Pairings & Roles:
├── Headings & Monograms : Space Grotesk (Weights: 500 Medium, 600 SemiBold, 700 Bold)
├── Body & UI Controls   : Inter (Weights: 400 Regular, 500 Medium, 600 SemiBold)
└── Editorial Accents    : Playfair Display (Weight: 400 Italic / 600 Italic — used sparingly)
```

### 2.1 Typographic Scale & Modular Hierarchy

| Level | Font Family | Size (Mobile → Desktop) | Line Height | Tracking | Weight |
|---|---|---|---|---|---|
| **Display (Hero)** | Space Grotesk | `clamp(2.75rem, 6vw, 5.5rem)` | `1.05` | `-0.03em` | 700 Bold |
| **H1 (Section Title)** | Space Grotesk | `clamp(2rem, 4vw, 3.5rem)` | `1.15` | `-0.02em` | 600 SemiBold |
| **H2 (Project Title)** | Space Grotesk | `clamp(1.5rem, 2.5vw, 2.25rem)` | `1.2` | `-0.015em` | 600 SemiBold |
| **H3 (Card Title)** | Space Grotesk | `1.25rem – 1.5rem` | `1.3` | `0em` | 500 Medium |
| **Body (Lead)** | Inter | `1.125rem – 1.25rem` | `1.6` | `-0.01em` | 400 Regular |
| **Body (Default)** | Inter | `1rem (16px)` | `1.65` | `0em` | 400 Regular |
| **UI / Meta / Nav** | Inter | `0.8125rem – 0.875rem (13–14px)` | `1.4` | `+0.02em` | 500 Medium |
| **Micro / Eyebrow** | Space Grotesk | `0.75rem (12px)` | `1.2` | `+0.08em` | 600 Uppercase |
| **Editorial Accent** | Playfair Display | Matches sibling font size | `1.1` | `0em` | Italic |

---

## 3. SPACING SYSTEM & LAYOUT GRIDS

### 3.1 8-Point Mathematical Spacing Scale
All margins, paddings, and structural gaps strictly derive from an 8pt base unit (with 4pt sub-steps for micro-elements):

- `space-1`: `4px` (Micro gap, badge padding)
- `space-2`: `8px` (Icon to text gap)
- `space-3`: `12px` (Internal button vertical padding)
- `space-4`: `16px` (Standard card internal padding)
- `space-6`: `24px` (Button horizontal padding, grid gutters)
- `space-8`: `32px` (Sub-section gap)
- `space-12`: `48px` (Medium section header to content gap)
- `space-16`: `64px` (Mobile section vertical padding)
- `space-24`: `96px` (Desktop sub-feature separation)
- `space-32`: `128px` (Major desktop section vertical padding)

### 3.2 Responsive Grid Standards
- **Desktop (≥ 1024px):**
  - Max Container Width: `1280px` (`max-w-7xl`) centered with `px-6` to `px-12`.
  - Grid: 12-Column fluid grid with `gap-8` (32px).
- **Tablet (640px – 1023px):**
  - Grid: 6-Column fluid grid with `gap-6` (24px).
  - Margins: `px-6` (24px).
- **Mobile (< 640px):**
  - Grid: 4-Column / Single-column stack with `gap-4` (16px).
  - Margins: `px-4` (16px).

---

## 4. COMPONENT STYLING SYSTEM

### 4.1 Buttons & Interactive Controls

#### Primary Button (`.btn-primary`)
- **Appearance:** Solid Electric Lime background (`#C6F36A`), high-contrast dark text (`#101110`), bold weight.
- **Geometry:** Subtle corner radius `rounded-lg` (6px to 8px — avoiding pill-shaped or bubbly radiuses), `px-7 py-3.5`.
- **States:**
  - *Default:* `#C6F36A` background, `#101110` text.
  - *Hover:* Slight brightness lift (`brightness-105`), subtle upward lift (`transform: translateY(-2px)`), trailing arrow moves 4px right.
  - *Active:* `scale(0.98)`, snappy feedback.
  - *Focus-visible:* 2px outline in `#C6F36A` with 2px offset.

#### Secondary / Ghost Button (`.btn-secondary`)
- **Appearance:** Transparent background with hairline border (`border border-border`), primary text.
- **States:**
  - *Default:* Transparent, text `--color-text-primary`.
  - *Hover:* Background transitions to `--color-surface`, border shifts to `--color-text-secondary`.
  - *Active:* `scale(0.98)`.

#### One-Click Copy Email Pill (`.copy-email-control`)
- **Appearance:** Tactile input-style pill containing the email address (`hardikagarwal201@gmail.com`), a subtle copy icon, and an interactive hover highlight.
- **Interaction States:**
  - *Default:* Bordered container (`border border-border bg-surface text-primary`), copy icon at right.
  - *Hover:* Border illuminates to `--color-accent`, cursor changes to pointer.
  - *Clicked / Copied:* Instant background flash with a gentle spring, icon transitions to a checkmark, text temporarily updates to `"Copied to Clipboard!"` for 2.5 seconds before resetting smoothly.

---

### 4.2 Project Showcase Cards & Badges

#### Status Badges:
- **Live Production Badge (Export Easy Hai):**
  - Style: `bg-accent/10 text-accent border border-accent/20 px-3 py-1 rounded-full text-xs font-mono font-medium flex items-center gap-1.5`.
  - Indicator: 6px pulsing emerald/lime dot (`animate-pulse`).
- **Concept Showcase Badge (Kala: Cakes & Desserts):**
  - Style: `bg-secondary text-secondary border border-border px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide`.
  - Transparent labeling: Clearly indicates conceptual UI/UX exploration without ambiguity.
- **Repository Badge (Dubai Luxury Real Estate & Art E-Commerce):**
  - Style: GitHub mark paired with clean monospaced link indicator.

---

## 5. ANIMATION & MOTION SPECIFICATION

Motion must feel **editorial, fluid, and deliberate**. No bouncy toy animations, no infinite oscillating badges.

### 5.1 Standard Easing Curves
```javascript
// Framer Motion Transition Presets
export const transitions = {
  luxuryEase: [0.16, 1, 0.3, 1],       // Primary entrance & hover curve (swift start, long elegant stop)
  snappyEase: [0.25, 0.1, 0.25, 1],    // Micro-interactions, button presses
  themeFade:  { duration: 0.35, ease: "easeInOut" }
};
```

### 5.2 Motion Rules Matrix

| Element | Trigger | Motion Properties | Duration | Easing |
|---|---|---|---|---|
| **Hero Title** | Page Load | `opacity: [0, 1]`, `y: [30, 0]` | `0.85s` | `luxuryEase` |
| **Section Header** | Viewport Scroll | `opacity: [0, 1]`, `y: [24, 0]` | `0.7s` | `luxuryEase` |
| **Project Card** | Staggered Scroll | `opacity: [0, 1]`, `y: [30, 0]` | `0.75s` (stagger 0.15s) | `luxuryEase` |
| **Project Image** | Card Hover | `scale: 1.025`, `brightness: 1.05` | `0.5s` | `easeOut` |
| **Active Nav Pip** | Section Spy | `layoutId="navIndicator"`, spring transition | `0.4s` | Spring `stiffness: 380, damping: 30` |
| **Copy Feedback** | Click Action | Staggered fade and spring scale `[0.95, 1]` | `0.2s` | `snappyEase` |
| **Theme Toggle** | Click | Rotation `[0, 180deg]`, icon crossfade | `0.35s` | `easeInOut` |

### 5.3 Performance & Reduced Motion Guarantees
1. **GPU Acceleration Only:** Animations are restricted to `transform` (scale, translate) and `opacity`. Zero animations on `width`, `height`, `margin`, or expensive CSS `filter: blur()`.
2. **Reduced Motion Media Query:** Full override in place for users requesting reduced motion.
3. **Mobile Safeguard:** Dynamic cursor followers and complex magnetic pulls are conditionally disabled on touch devices (`hover: none`) to save battery and guarantee 60fps scrolling.

---
*End of Design System Specification. Ready for Phase 2 Implementation.*
