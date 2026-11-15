# AGENTS.md — Engineering Guidelines for Kenneth Bulaga's Portfolio

This document provides foundational architecture rules, technical standards, and engineering guardrails for AI agents and human contributors working on Kenneth Bulaga's portfolio codebase.

---

## 1. Project Overview & Identity

* **Developer:** Kenneth Bulaga
* **Professional Positioning:** Full-stack Developer
* **Core Specialty:** Building scalable web applications, internal tools, automated workflows, and production-ready systems.
* **Target Roles:** Full-stack Developer, Junior Software Developer, Web Developer.
* **Design & Content Spec:** See [`portfolio.md`](portfolio.md) for the unified monochrome design system (`light-dark()` tokens, Figtree/Newsreader typography, `.rail-*`/`.btn-*`/`.nav-pill` classes, hairline rules, and layout structure).

---

## 2. Technical Stack & Dependencies

| Layer | Technology | Specifications |
|---|---|---|
| **Framework** | Next.js 16 (App Router) | Turbopack, React Server Components (RSC), strict route handlers |
| **Runtime / UI** | React 19 | Automatic React Compiler optimization, strict zero hydration mismatch |
| **Styling** | Tailwind CSS v4 + CSS Tokens | `light-dark()` monochrome tokens in `src/app/globals.css`, `@theme inline` bridge |
| **Language** | TypeScript (Strict) | Zero `any`, strict type checking, shared interfaces in `src/data/portfolio.ts` |
| **Icons** | Lucide React | Clean, consistent `16px` stroke icons (`strokeWidth={1.5}`) |
| **Motion** | Framer Motion + CSS | Custom `--ease-out` transitions (`140–200ms`), `bounce: 0` springs, `prefers-reduced-motion` |
| **Components** | Custom Monochrome Primitives | `.rail-*`, `.btn-*`, `.nav-pill`, and hairline list rows per [`portfolio.md`](portfolio.md) |
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
│   └── Kenneth_Bulaga_Resume.pdf # Compiled resume PDF (generated via npm run resume:build)
├── resume/
│   └── kenneth-bulaga-resume.tex # Jake Gutierrez LaTeX resume source
├── scripts/
│   └── convert-to-webp.mjs      # Automated WebP compression pipeline
└── src/
    ├── app/
    │   ├── globals.css          # Monochrome light-dark() tokens, .rail-*/.btn-* classes & Tailwind v4
    │   ├── layout.tsx           # Global HTML shell, fonts, SEO & OpenGraph metadata
    │   └── page.tsx             # Root page composition (imports sections only)
    ├── components/
    │   ├── theme-provider.tsx   # Next-themes dark/light mode provider
    │   ├── theme-toggle.tsx     # Tactile theme toggle button
    │   ├── ui/                  # Custom UI widgets
    │   │   ├── github-contributions.tsx # Flat hairline GitHub activity grid
    │   │   ├── i-was-here.tsx   # Redis-backed visitor stamp counter
    │   │   └── pixel-name.tsx   # Canvas pixel-block name resolution
    │   └── sections/            # Organism components (page blocks)
    │       ├── Navbar.tsx       # Floating left rail (Kenneth Bulaga + Copy email) + mobile top bar
    │       ├── Hero.tsx         # Metric-grounded headline, availability pill, institutional ledger
    │       ├── TechMarquee.tsx  # Core Stack & Tooling grid
    │       ├── Projects.tsx     # Production systems ledger + interactive multi-tab preview gallery
    │       ├── Experience.tsx   # Professional experience timeline (OWWA Region XI, Independent)
    │       ├── Education.tsx    # Academic degree, leadership & verified credentials
    │       └── Footer.tsx       # Contact, clipboard email copy, social hub
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
* **Positioning:** Frame Kenneth as a grounded, highly capable **Full-stack Developer** who builds practical web applications and internal tools (e.g., serving 7,207 authenticated profiles, regional government operations, and real-time community apps) and reduces operational friction with automated workflows.
  * Navbar logo: `Kenneth Bulaga`
  * Hero Eyebrow: `● Available for Freelance & Full-time Roles`
  * Hero Sub-headline: `Full-stack Developer`
* Focus on value delivered, problem-solving, clean code, and practical execution.
* **Copy & Skill Hygiene:** Pass any new or revised narrative copy in `src/data/portfolio.ts` through the local `humanizer` skill (`.agents/skills/humanizer/SKILL.md`) to strip AI clichés, and follow `emil-design-eng` + `make-interfaces-feel-better` + `mobile-native` for tactile micro-interactions (`Copy email` clipboard feedback instead of raw `mailto:` links, `tabular-nums`, concentric radii).

### C. Truth in Metrics
* **JP Connect:** Student Services & Exam Scheduling Portal: 7,207 Authenticated Profiles (7,078 students, 126 instructors + admin roles), 14,778 Masterlist Records, 781 Validated Exam Rows across 9 academic departments, 0 room/proctor/self-proctor overlaps (2026–2027 1st Semester Finals), PHP 707,750 in tracked SSC clearance collections (Dec 2025 – Jan 2026).
* **OWWA CSMR System:** Internal reporting tool: 4,632+ citizen feedback records consolidated across 10 regional units, 72 monthly report submissions, multi-tab workbooks for ARTA/CSC reporting requirements (avoid claiming "100% compliance"), <1s report generation time via Next.js Server Actions and ExcelJS.
* **JP Intrams:** Real-time score synchronization across 23 sports divisions using Supabase Realtime (avoid unmeasured "sub-500ms" latency claims), distributed Redis rate limiting at API layer to prevent PostgreSQL connection exhaustion during concurrent tournament traffic, auto-cycling display mode for gym screens and mobile spectator devices.
* **OWWA SPRS Platform:** Statistical reporting and performance analytics engine engineered as sole developer and presented for OWWA Region XI.

### D. Styling & Monochrome Token Conventions
* Follow [`portfolio.md`](portfolio.md) for all `light-dark()` monochrome tokens (`--bg`, `--surface`, `--ink`, `--muted`, `--line`, `--green`/`--green-ink` for availability only), Figtree/Newsreader typography, and `--ease-out` motion curves.
* Use layered soft `box-shadow` only on raised surfaces (`.rail-shell`, `.rail-panel`, `.rail-cta`, active nav link, modals) and `1px` `--line` hairlines for flat lists.
* Use `cn()` from `@/lib/utils` for conditional class joining.

---

## 5. Development Workflow & Commands

* **Run Dev Server:** `npm run dev`
* **Production Build:** `npm run build`
* **Run Linter:** `npm run lint`
* **Preview Production:** `npm run start`
* **Rebuild Resume PDF:** `npm run resume:build` (compiles `resume/kenneth-bulaga-resume.tex` via Tectonic to `public/Kenneth_Bulaga_Resume.pdf`)
* **Convert Images to WebP:** `node scripts/convert-to-webp.mjs --dir public`
