# Task Plan: Digizier 3D High-Performance Agency & Portfolio

> Standard: `planning-with-files` (Manus-style) + `superpowers` + `ui-ux-pro-max` + `3dviz-pro-max`
> Target Architecture: Zero-Load Free-Tier (Next.js 15+ Static Export `output: 'export'`, Cloudflare/Vercel Edge, Client-Side Supabase)

## Current Status: Completed & Verified

---

## Phase 1: Environment & Project Scaffolding
- [x] Extract and integrate core skills (`planning-with-files`, `ui-ux-pro-max`, `3dviz-pro-max`, `superpowers`, `web3d-integration-patterns`).
- [x] Initialize Next.js 15+ App Router application with Tailwind CSS, TypeScript, Lucide Icons, and Three.js.
- [x] Configure `next.config.ts` for zero-load static export (`output: 'export'`, `images: { unoptimized: true }`).
- [x] Configure Cloudflare contract: `.nvmrc` (Node 22), `wrangler.jsonc`, `package.json` engines.
- [x] Implement bulletproof Supabase client with URL sanitization and offline fallback to ensure zero build errors.

## Phase 2: Design System & 3D Spatial Architecture (`ui-ux-pro-max` + `3dviz-pro-max`)
- [x] Establish "Soft UI Evolution" color tokens in Tailwind (Soft Obsidian slate, frosted glass, lavender, cyan, emerald, and Digizier brand orange).
- [x] Build interactive 3D WebGL Hero Canvas using Three.js (interactive agentic neural sphere + orbital rings + particle nodes that track pointer and pause when idle or offscreen).
- [x] Build 3D Spatial Tilt Cards with dynamic specular glare for services and case studies.
- [x] Build hardware-accelerated 3D Video Showcase with responsive mobile/desktop playback and interactive tilt.

## Phase 3: Core Agency Sections & Interactive Features
- [x] **Hero Section**: 3D interactive canvas + impactful ICP copy ("We Engineer Websites & AI Agents That Sell & Operate 24/7") + Founder badge (Nadir Habib) + trust pills + CTAs.
- [x] **Cinematic 3D Video Player**: Embedded `digizier-promo.mp4` with custom controls and poster frame.
- [x] **Service Showcase (Engineered for ICP)**:
  1. *Custom-Coded Web & E-Commerce Platforms* (Full Admin Dashboard, Catalog, Order tracking).
  2. *Autonomous AI Agents & WhatsApp Bots* (24/7 Customer Support, Voice AI, Lead qualification).
  3. *Workflow & Business Automation* (n8n pipelines, CRM sync, real-time alerts).
  4. *Vibe Coding & Rapid High-End Engineering* (5x development velocity, production-ready from day 1).
  5. *Performance Marketing & Funnels* (Conversion Rate Optimization, Meta/Google CAPI funnels).
- [x] **Interactive 3D Agentic Workflow Simulator**: Live visual diagram allowing users to toggle agent scenarios and inspect simulated telemetry outputs.
- [x] **The "Custom Code vs Generic Templates" Comparison**: Interactive benchmark matrix showing 38ms vs 780ms and $0/mo cost.
- [x] **Interactive Project Scope & Cost Estimator**: Multi-step interactive calculator with instant estimates.
- [x] **Client-Side Lead Capture & Booking Modal**: Direct Supabase integration with offline fallback, toast notifications, and celebration confetti.
- [x] **Header & Footer**: Integrated official Digizier logo, Favicon, Open Graph social share image, LinkedIn & Fiverr links (excluding YouTube and GitHub as requested).

## Phase 4: Production Verification & Zero-Load Audit
- [x] Run `npm run build` and ensure clean compile to `./out` with zero TypeScript or route errors.
- [x] Verify 100% static route classification (`○ Static`).
- [x] Audit Three.js canvas memory and render loop (auto-pause on hidden tab / out of viewport).
- [x] Verified static export in `./out` with all assets (`index.html`, `digizier-promo.mp4`, `logo.png`, `icon.png`, `og-image.png`).
