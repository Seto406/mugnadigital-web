# Technical Specifications - MugnaDigital (Phase 1)

## 1. Project Overview
This document outlines the technical specifications for Phase 1 of the MugnaDigital website. The goal is to build a high-performance, minimalist marketing site using Next.js and Tailwind CSS. The design should reflect a modern tech startup aesthetic while proudly showcasing its Filipino roots ("Mugna" means "to create" in Visayan).

## 2. Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)

## 3. Design Philosophy
- **Aesthetic:** Minimalist, clean, modern, with "Pinoy Flavor".
- **Cultural Identity:** Incorporate subtle elements of Filipino artistry (e.g., weaving patterns like Banig or Inabel) interpreted in a digital, futuristic way. The UX should feel "Maasikaso" (hospitable/attentive).
- **Typography:** Sans-serif fonts (e.g., Inter or Geist).
- **Layout:** Ample whitespace, grid-based layouts, responsive design.

## 4. Color Strategy & Palette

### 4.1 Analysis: Green vs. Tech Aesthetic
*Challenge:* Green is traditionally associated with agriculture/nature (very "Pinoy") or finance, while Blue is the standard "safe" color for Tech.
*Solution:* We will adopt a **"Cyber-Tropical"** aesthetic. By shifting the Green towards a vibrant **"Electric Emerald"** or **"Neon Palay"** and pairing it with a high-contrast dark mode, we retain the connection to the lush Philippine landscape while signalling innovation, code (terminal green), and energy.

### 4.2 Color Palette
- **Primary Background:** **Deep Void Black** or **Midnight Blue** (Hex: `#0a0a0a` or `#0f172a`).
  - *Symbolism:* The depths of the ocean or outer space; infinite potential.
- **Primary Text:** **Starlight White** / **Mist Gray** (Hex: `#f8fafc` or `#e2e8f0`).
  - *Symbolism:* Clarity and precision.
- **Primary Accent:** **Electric Palay Green** (Hex: `#10b981` or `#22c55e` - Tailwind Emerald/Green-500).
  - *Symbolism:* Represents growth ("Sibol"), rice fields, and the "System Good/Go" status of technology.
- **Secondary Accent:** **Tech Teal** or **Cyan** (Subtle gradients).
  - *Symbolism:* The surrounding seas.

## 5. Primary UI Components

### 5.1 Navigation Bar (`Navbar`)
- **Behavior:** Sticky top, transparent becoming solid on scroll.
- **Elements:**
  - Logo (Text or SVG)
  - Navigation Links (Home, Services, About, Contact)
  - CTA Button (e.g., "Tara, Let's Build" or "Get Started") - *Green variant*
- **Mobile:** Hamburger menu with slide-out drawer.

### 5.2 Hero Section (`Hero`)
- **Purpose:** First impression, value proposition.
- **Elements:**
  - Large Headline (H1)
  - Subheadline (H2/Paragraph)
  - Primary CTA Button (Electric Green background)
  - Secondary CTA (optional)
  - **Visual:** Minimalist abstract graphic incorporating a "Weave" (Banig) wireframe pattern in subtle green/teal lines.

### 5.3 Feature Grid (`FeatureGrid`)
- **Purpose:** Showcase services or key features ("Ang Aming Alok").
- **Elements:**
  - Grid layout (1 col mobile, 3 cols desktop).
  - Cards with:
    - Icon (Lucide React) - *Green stroke*
    - Title
    - Short description

### 5.4 Testimonials / Social Proof (`Testimonials`)
- **Purpose:** Build trust ("Kwento ng Tagumpay").
- **Elements:**
  - Client logos (grayscale for minimalism).
  - Quote cards or slider.

### 5.5 Call to Action Section (`CTASection`)
- **Purpose:** Final push for conversion.
- **Elements:**
  - Compelling headline.
  - Primary CTA button.
  - Background accent (Dark green gradient).

### 5.6 Footer (`Footer`)
- **Elements:**
  - Logo
  - Link columns (Company, Legal, Social)
  - Copyright notice.
  - Social media icons.
  - **Badge:** "Made with Puso (Heart) in the Philippines".

### 5.7 Common Elements
- **Button:**
  - Variants: Primary (Solid Green), Secondary (Outline Green/White), Ghost (text only).
  - States: Hover (glow effect), Active, Disabled.
- **Input:** Clean borders (Gray), focus rings (Green).
- **WeavePattern:** A utility component (SVG/CSS) to apply subtle Filipino weaving textures to backgrounds.
- **Typography:** Consistent heading hierarchy (H1-H6).

## 6. Directory Structure (Proposed)
```
src/
  app/
    layout.tsx
    page.tsx
  components/
    ui/          # Primitives (Button, Input, WeavePattern)
    layout/      # Navbar, Footer
    sections/    # Hero, Features
  lib/           # Utilities
```
