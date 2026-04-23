# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build to dist/
npm run preview  # preview production build locally
npm run lint     # run ESLint across all .js/.jsx files
```

## Stack

- **React 19** + **Vite 8** — single-page app, JSX only (no TypeScript)
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin — no `tailwind.config.js` needed; configured entirely through CSS and the Vite plugin
- **ESLint 10** with `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`

## Project Purpose

A personal developer portfolio. The target audience is high-end tech recruiters and clients. The intended aesthetic is dark glassmorphism with ruby-red accents — see `design.md.txt` for the full design spec and `Design ref/` for section mockups.

## Design System (from `design.md.txt`)

Key decisions to respect when building components:

- **Color:** Base background `#0A0A0A` / elevated containers `#121212`. Primary accent **Ruby Red `#E63946`** — used sparingly for CTAs, active states, and highlights.
- **Typography:** **Plus Jakarta Sans** exclusively. Headlines use tight letter spacing + bold weights (`800` for h1, `700` for h2).
- **Glassmorphism:** Floating elements use `#121212` at 70% opacity + `backdrop-filter: blur(16px)` + 1px border (low-opacity white or ruby).
- **Glows instead of shadows:** Interactive elements use outer glow via ruby at 5–10% opacity, not `box-shadow` drop shadows.
- **Spacing:** 120px section padding, 24px gutters, 12-column grid, max content width 1200px.
- **Radii:** `8px` for buttons/inputs, `24px` (1.5rem) for cards and containers.
- **Badges/chips:** Pill-shaped, ruby tint at 10% opacity background with solid ruby text.
- **Timeline:** Vertical grey line with ruby nodes for career milestones.

## CSS Architecture

Global base styles and CSS custom properties live in `src/index.css` (imported in `main.jsx`). Component-scoped styles use `App.css` co-located with `App.jsx`. Tailwind utility classes are used alongside these; `@import "tailwindcss"` is at the top of `index.css`, making all utilities available globally.

There is no CSS Modules setup — prefer Tailwind utilities for new components and keep component-specific overrides in co-located `.css` files when utilities aren't enough.

## Section Reference Images

`Design ref/` contains PNG mockups for each portfolio section:
- `Hero.png`, `about .png`, `experience.png`, `skills.png`, `projects.png`, `contact.png`, `footer.png`

Refer to these when implementing each section to match the intended layout and visual treatment.

## Prompt

Create a modern, futuristic 3D portfolio website using React.js, Tailwind CSS, and Framer Motion with a dark red and black gradient theme (#0A0A0A to deep red, primary accents #FF3B3B/#8B0000, white/gray text). The design should include glassmorphism cards, glowing accents, soft shadows, and smooth scrolling. Add a floating top-center pill-style navbar with blur, glow, hover scale, and smooth navigation (Home, About, Skills, Projects, Contact). The hero section should display “I’m Munib Sajjad, a Professional [Developer | Innovator | Designer | Engineer]” with automatic typing animation, a 3D coding card that tilts and translates on hover, and a “Let’s Collaborate” button with a bottom-to-top light slide hover effect. The about section should have typing-style text and a profile image with a black-and-white filter that turns to color with a slight 3D tilt on hover. The skills section should feature two horizontally scrolling rows (one left, one right) with glowing skill cards that scale on hover. The projects section should include glassmorphism cards with hover lift, 3D tilt, image zoom, and action buttons. The contact section should have a minimal dark form with glowing inputs and social icons. Use Framer Motion for smooth animations, scroll effects, and parallax. Add a custom thin red gradient scrollbar, optional particles, gradient background animation, and subtle noise texture. Ensure full responsiveness, hamburger menu on mobile, optimized performance, lazy loading, and GPU-accelerated animations.