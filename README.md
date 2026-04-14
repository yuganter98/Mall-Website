# Mall of America — Interactive Sales Platform

A world-class, browser-based interactive sales deck for Mall of America,
built for prospective retail tenants, brand sponsors, and event partners.

## Live Demo
[Deploy URL here — update after Vercel deployment]

## Overview
This tool replaces the fragmented pitch process (PDFs, videos, spreadsheets)
with a single immersive web experience. Built for both live sales calls
(screen-share) and standalone prospect exploration.

**Target Audiences:**
- Retail tenants (luxury flagship, storefront, pop-up)
- Brand sponsors and marketing partners
- Event promoters and production companies

## Tech Stack
- React 18 + Vite
- TailwindCSS (custom design tokens)
- Framer Motion (scroll animations, page transitions)
- React Router v6

## Design System
- **Colors:** Deep Navy #0A0E1A · Gold #C9A84C · Warm White #F5F0E8
- **Fonts:** Cormorant Garamond (display) · DM Sans (body)
- **Tone:** Luxury editorial — Hermès meets a destination resort campaign

## Sections
| Section | Description |
|---|---|
| Hero | Cinematic entry with animated background and key stats |
| Overview | Scale, location, demographics, visitor data |
| Retail | Leasing categories, tenant environment, key stats |
| Luxury | Premium corridor, flagship opportunity |
| Dining | 50+ concepts, photo grid, lifestyle positioning |
| Entertainment | Nickelodeon Universe, SEA LIFE, FlyOver America |
| Events | Venue capabilities, event types, booking CTA |
| Contact | Leasing, sponsorship, and event booking paths |

## Local Setup
```bash
npm install
npm run dev
```
Open http://localhost:5173

## Build for Production
```bash
npm run build
npm run preview
```

## Deploy to Vercel
1. Push to GitHub
2. Import repo at vercel.com
3. Framework preset: Vite
4. Deploy — no config needed

## Asset Credits
- Photography: Unsplash (unsplash.com)
- Icons: Custom inline SVG
- Fonts: Google Fonts (Cormorant Garamond, DM Sans)
- Copy and data: Based on publicly available Mall of America information

## Project Structure
```
src/
├── components/     # Nav, CTAButton, StatCard, SectionWrapper
├── sections/       # One file per page section
├── data/           # content.js — all copy and asset URLs
├── App.jsx
└── main.jsx
```
