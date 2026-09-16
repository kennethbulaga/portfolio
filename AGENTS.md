# AGENTS.md — Engineering Guidelines for "The Kenzo System" Portfolio

This document provides foundational architecture rules, technical standards, and engineering guardrails for AI agents and human contributors working on Kenneth Bulaga's portfolio codebase.

---

## 1. Project Overview & Identity

* **Developer:** Kenneth Bulaga ("Kenzo")
* **Professional Positioning:** Full-stack Developer
* **Core Specialty:** Building scalable web applications, internal tools, automated workflows, and production-ready systems.
* **Target Roles:** Full-stack Developer, Junior Software Developer, Web Developer.
* **Core Design Ethos:** "High-Signal Craftsman & Genuine Utility" — humble, always a student in the game, zero fluff, clean typography, transparent communication, grounded in real problem-solving and practical engineering execution.

---

## 2. Technical Stack & Dependencies

| Layer | Technology | Specifications |
|---|---|---|
| **Framework** | Next.js 16 (App Router) | Turbopack, React Server Components (RSC), strict route handlers |
| **Runtime / UI** | React 19 | Automatic React Compiler optimization, strict zero hydration mismatch |
| **Styling** | Tailwind CSS v4 | CSS-first `@theme inline` configuration in `src/app/globals.css`, modern zinc monochrome palette |
| **Language** | TypeScript (Strict) | Zero `any`, strict type checking, shared interfaces in `src/data/portfolio.ts` |
| **Icons** | Lucide React | Clean, consistent 16-20px stroke icons |
| **Motion** | Framer Motion | Subtle, purposeful transitions (stagger containers, fade-ins), never obstructive |
| **Components** | Radix UI / shadcn style | Accessible, unstyled primitives styled with Tailwind utility classes |
| **Hosting** | Vercel (Edge Network) | Static generation with zero-latency response times |

---

## 3. Architecture & File Structure

This repository follows a strict **Atomic & Data-Driven Architecture**. The UI contains zero hardcoded copy; all data flows from `src/data/portfolio.ts`.

```
portfolio/
├── AGENTS.md                    # Engineering guidelines & architectural rules
├── README.md                    # Repository documentation
├── docs/
│   └── blueprint.md             # System blueprint (v4.2 Approachable Full-Stack Builder)
├── projects/
│   └── portfolio_case_study.md  # Ground-truth production metrics for JP Connect
├── public/                      # Static WebP assets, logos, certificates, resume PDF
│   ├── certificates/            # Official signed credentials (OWWA, HackEstate, School)
│   ├── logos/                   # Institutional & client logos (SJPIICD, OWWA, CSWDO)
│   ├── profile/                 # Developer avatar portraits (WebP)
│   ├── projects/                # High-res project mockups, previews, and multi-tab screenshots
│   └── KennethBulaga_*.pdf      # Downloadable resume
├── scripts/
│   └── convert-to-webp.mjs      # Automated WebP compression pipeline
└── src/
    ├── app/
    │   ├── apple-icon.tsx       # Dynamic static Apple Touch Icon generator
    │   ├── icon.tsx             # Dynamic static Monogram Favicon generator
    │   ├── globals.css          # Tailwind v4 cascade layers & zinc color tokens
    │   ├── layout.tsx           # Global HTML shell, fonts, SEO & OpenGraph metadata
    │   └── page.tsx             # Root page composition (imports sections only)
    ├── components/
    │   ├── motion.tsx           # Shared Framer Motion animation variants
    │   ├── theme-provider.tsx   # Next-themes dark/light mode provider
    │   ├── theme-toggle.tsx     # Tactile theme toggle button
    │   ├── ui/                  # Atom & Molecule components
    │   │   ├── badge.tsx        # Tech stack pills
    │   │   ├── button.tsx       # Standardized button variants
    │   │   ├── card.tsx         # Bordered container cards
    │   │   ├── command-menu.tsx # Cmd+K / Ctrl+K quick actions palette
    │   │   ├── mobile-nav.tsx   # Responsive slide-over navigation sheet
    │   │   ├── section-divider.tsx # Subtle section separation rules
    │   │   └── case-study-drawer.tsx # Slide-over deep-dive for flagship architectures
    │   └── sections/            # Organism components (page blocks)
    │       ├── Navbar.tsx       # Sticky top nav (Kenzo / dev) + Cmd+K trigger
    │       ├── Hero.tsx         # Friendly headline, open-to-work badge, trust bar
    │       ├── TechMarquee.tsx  # Continuous looping tech stack ticker with icons
    │       ├── Projects.tsx     # Flagship cards (with case study triggers) + client cards
    │       ├── Experience.tsx   # Professional experience timeline (OWWA, Independent)
    │       ├── Education.tsx    # AWS cloud banner, academic degree & verified credentials
    │       └── Footer.tsx       # Contact, avatar frame, direct Gmail action, social hub
    ├── data/
    │   └── portfolio.ts         # <--- SINGLE SOURCE OF TRUTH FOR ALL CONTENT
    └── lib/
        └── utils.ts             # Tailwind class merging utility (`cn`)
```

---

## 4. Key Engineering Guardrails for Agents

### A. Single Source of Truth
* **Rule:** Never hardcode text, project descriptions, numbers, or links directly in React section components.
* **Action:** Always add or edit fields in `src/data/portfolio.ts`, update the TypeScript interfaces accordingly, and consume them via typed imports in components.

### B. Genuine, Value-Driven & Grounded Tone ("Always a Student in the Game")
* **Rule:** Always be a student in the game. Never present as "all-knowing", arrogant, or posturing as a senior enterprise know-it-all. Speak with humility, curiosity, and respect for engineering craft and real user needs.
* **Positioning:** Frame Kenneth as a grounded, highly capable **Full-stack Developer** who builds practical web applications and internal tools (e.g., serving 5,536 registered users, regional government operations, and real-time community apps) and reduces operational friction with automated workflows.
  * Navbar logo: `Kenzo / dev`
  * Hero Eyebrow: `● Available for Freelance & Full-time Roles`
  * Hero Sub-headline: `Full-stack Developer`
* Focus on value delivered, problem-solving, clean code, and practical execution.

### C. Truth in Metrics
* **JP Connect:** Student Services & Exam Scheduling Portal: 5,536 Registered SSO Users, 14,778 Masterlist Records, 658 Exam Slots across 9 academic departments, 0 Overlaps.
* **OWWA CSMR System:** Internal reporting tool: 4,632+ citizen feedback records consolidated across 10 regional units, 72 monthly report submissions, multi-tab workbooks for ARTA/CSC reporting requirements (avoid claiming "100% compliance"), <1s report generation time via Next.js Server Actions and ExcelJS.
* **JP Intrams:** Real-time score synchronization across 23 sports divisions using Supabase Realtime (avoid unmeasured "sub-500ms" latency claims), distributed Redis rate limiting at API layer to prevent PostgreSQL connection exhaustion during concurrent tournament traffic, auto-cycling display mode for gym screens and mobile spectator devices.
* **OWWA SPRS Platform:** Capstone statistical reporting and performance analytics engine engineered and presented for OWWA Region XI.

### D. Styling & Tailwind v4 Conventions
* Use Tailwind v4 `@theme inline` tokens and semantic classes (`bg-background`, `text-foreground`, `border-border`, `text-muted-foreground`, `bg-muted`).
* Maintain the strict Zinc monochrome palette (`zinc-950`, `zinc-900`, `zinc-800`, `zinc-100`, `zinc-50`) with high contrast.
* Use `cn()` from `@/lib/utils` for conditional class joining.

---

## 5. Development Workflow & Commands

* **Run Dev Server:** `npm run dev`
* **Production Build:** `npm run build`
* **Run Linter:** `npm run lint`
* **Preview Production:** `npm run start`
* **Convert Images to WebP:** `node scripts/convert-to-webp.mjs --dir public`
