# Kenneth Bulaga — Full-Stack Portfolio

A fast, accessible, and data-driven developer portfolio showcasing production systems, institutional tooling, and verified credentials.

**Live Website:** [kennethbulaga.dev](https://kennethbulaga.dev)

---

## ⚡ Tech Stack & Architecture

- **Framework:** Next.js 16 (App Router) with Turbopack & React Server Components
- **Runtime / UI:** React 19 (Automatic React Compiler, strict zero hydration mismatch)
- **Styling:** Tailwind CSS v4 with CSS-first `@theme inline` design tokens
- **Language:** TypeScript (Strict, 100% typed data layer)
- **Icons:** Lucide React
- **Motion:** Framer Motion (subtle hardware-accelerated transitions)
- **Hosting:** Vercel Edge Network

---

## 🚀 Key Features

- **Flagship Production Deep-Dives:** Slide-over interactive Case Study Drawer for **JP Connect** featuring verified live metrics ($5,536$ SSO users, $14,778$ records, $658$ exams, $0$ collisions).
- **Instant 0ms Screenshot Switcher:** Preloaded, hardware-accelerated multi-tab interface for desktop and mobile previewing.
- **Verified Credentials & Lightbox Inspection:** Showcase for AWS Certified Cloud Practitioner, OWWA Regional Government Systems, Davao HackEstate 2025 Hackathon, and Institutional Honors with high-res Lightbox modal view.
- **Mobile-First Responsive Layout:** Dynamic `100dvh` viewport handling, title-first project hierarchy, and smooth slide-over navigation drawer.
- **WebP Performance Pipeline:** Automated image compression pipeline delivering $>88\%$ bandwidth reduction ($41.47\text{ MB} \rightarrow 4.80\text{ MB}$).
- **Single Source of Truth:** Pure data-driven architecture powered by `src/data/portfolio.ts`.

---

## 🛠️ Development & Commands

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Production build
npm run build

# Run linter
npm run lint

# Convert public images to WebP
node scripts/convert-to-webp.mjs --dir public
```
