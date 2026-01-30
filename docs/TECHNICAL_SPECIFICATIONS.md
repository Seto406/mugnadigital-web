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
- **Color Palette:**
  - Primary: Deep Blue / Black (reminiscent of the deep ocean).
  - Secondary: White / Light Gray (Perlas ng Silanganan vibe).
  - Accent: Vibrant colors inspired by local fiestas or nature (e.g., "Mango Yellow", "Tarsier Brown", or "Electric Blue").
- **Layout:** Ample whitespace, grid-based layouts, responsive design.

## 4. Primary UI Components

### 4.1 Navigation Bar (`Navbar`)
- **Behavior:** Sticky top, transparent becoming solid on scroll.
- **Elements:**
  - Logo (Text or SVG)
  - Navigation Links (Home, Services, About, Contact)
  - CTA Button (e.g., "Tara, Let's Build" or "Get Started")
- **Mobile:** Hamburger menu with slide-out drawer.

### 4.2 Hero Section (`Hero`)
- **Purpose:** First impression, value proposition.
- **Elements:**
  - Large Headline (H1)
  - Subheadline (H2/Paragraph)
  - Primary CTA Button
  - Secondary CTA (optional)
  - **Visual:** Minimalist abstract graphic incorporating a "Weave" (Banig) wireframe pattern.

### 4.3 Feature Grid (`FeatureGrid`)
- **Purpose:** Showcase services or key features ("Ang Aming Alok").
- **Elements:**
  - Grid layout (1 col mobile, 3 cols desktop).
  - Cards with:
    - Icon (Lucide React)
    - Title
    - Short description

### 4.4 Testimonials / Social Proof (`Testimonials`)
- **Purpose:** Build trust ("Kwento ng Tagumpay").
- **Elements:**
  - Client logos (grayscale for minimalism).
  - Quote cards or slider.

### 4.5 Call to Action Section (`CTASection`)
- **Purpose:** Final push for conversion.
- **Elements:**
  - Compelling headline.
  - Primary CTA button.
  - Background accent (subtle gradient or distinct color).

### 4.6 Footer (`Footer`)
- **Elements:**
  - Logo
  - Link columns (Company, Legal, Social)
  - Copyright notice.
  - Social media icons.
  - **Badge:** "Made with Puso (Heart) in the Philippines".

### 4.7 Common Elements
- **Button:**
  - Variants: Primary (solid), Secondary (outline), Ghost (text only).
  - States: Hover, Active, Disabled.
- **Input:** Clean borders, focus rings.
- **WeavePattern:** A utility component (SVG/CSS) to apply subtle Filipino weaving textures to backgrounds.
- **Typography:** Consistent heading hierarchy (H1-H6).

## 5. Directory Structure (Proposed)
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
