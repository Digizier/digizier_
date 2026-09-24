# Digizier — Websites, AI Agents & Marketing Systems

> **Official Website:** [digizier.com](https://digizier.com/)  
> **Founder:** Nadir Habib  
> **WhatsApp:** [+92 322 2685688](https://wa.me/92322268568)  
> **Fiverr:** [fiverr.com/digizier](https://www.fiverr.com/digizier)  
> **LinkedIn:** [linkedin.com/in/habib-nadir](https://www.linkedin.com/in/habib-nadir/)

---

## ⚡ Overview

**Digizier** is a digital engineering agency specializing in:
1. **Custom-Coded Websites & E-Commerce** (Full Admin Dashboards, Cash on Delivery (COD), EasyPaisa, JazzCash, Sub-second speeds).
2. **Autonomous AI Agents & WhatsApp Automation** (24/7 Customer Support Bots in Urdu & English, Lead Triage).
3. **Performance Digital Marketing & Ads Scaling** (High-ROAS Meta & Google Ad Funnels, CAPI Integration).
4. **Business Workflow Automation** (n8n & Custom Webhook Pipelines, CRM & Google Sheets Sync).

---

## 🏗️ Zero-Load Architecture Standards

Engineered for **100% free-tier lifetime hosting** on Cloudflare Pages and Vercel Edge:
* **Next.js 15+ App Router** with Static Site Generation (`output: 'export'`).
* **0ms Serverless Execution** for static pageviews.
* **0 ISR Reads & 0 ISR Writes**.
* **Zero Image Optimization Quota Usage** (`images: { unoptimized: true }`).
* **Hardware-Accelerated 3D WebGL** with automatic CPU sleep when inactive or off-screen.

---

## 🚀 Getting Started

### Prerequisites
* Node.js `>= 22.0.0`
* npm `>= 10.0.0`

### Installation
```bash
# Clone the repository
git clone https://github.com/Digizier/digizier_.git

# Navigate to project folder
cd digizier_

# Install dependencies
npm install

# Start local dev server
npm run dev
```

### Production Build & Static Export
```bash
# Generates zero-load static bundle into ./out
npm run build
```

### Deploy to Cloudflare Pages (Free Lifetime CDN)
```bash
npx wrangler pages deploy ./out --project-name digizier
```

---

## 📄 License
© 2026 Digizier. All rights reserved. Built by Nadir Habib.
