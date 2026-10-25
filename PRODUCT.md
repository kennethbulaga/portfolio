# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Engineering hiring managers, technical leads, and recruiters evaluating early-career / Junior Full-stack Developer candidates, as well as institutional or local freelance clients looking for someone who can ship complete, working web systems. They typically scan a portfolio in 30–90 seconds after clicking from a resume or LinkedIn profile to verify whether the candidate's claims are real, inspect live deployments, and assess engineering depth.

## Product Purpose

Kenneth Bulaga's ("Kenzo") developer portfolio (`kennethbulaga.dev`). Its job is to convert a recruiter or hiring manager's 30-second skim into an interview invitation by proving—with undeniable visual and architectural evidence—that Kenneth has built, deployed, and maintained production software used by thousands of real people.

## Positioning

Unlike entry-level portfolios filled with tutorial clones or unverified mockups, every flagship item here is backed by live production proof:
- **JP Connect** (`jp-connect.vercel.app`): Paid freelance contract for St. John Paul II College of Davao serving 7,125 Google SSO accounts (students and 249 faculty), 14,778 registrar masterlist records, 658 conflict-free exam slots, and PHP 707,750 in tracked SSC clearance collections, backed by a Program Head email endorsement and live campus lobby projector photos.
- **OWWA CSMR & SPRS Platforms**: Two internal reporting systems built during Kenneth's internship at Overseas Workers Welfare Administration (OWWA Region XI)—consolidating 4,632+ citizen feedback records across 10 regional units with <1s ExcelJS ARTA/CSC workbook export, and a sole-developer statistical KPI platform—backed by two signed Certificates of Recognition and photos of Kenneth pitching to regional officers.
- **JP Intrams** (`jp-intrams.vercel.app`): Real-time tournament leaderboard across 23 sports divisions using Supabase Realtime and Upstash Redis rate limiting, projected live on the campus quadrangle stage.

## Operating Context

Visitors arrive from `Kenneth_Bulaga_Resume.pdf`, GitHub (`github.com/kennethbulaga`), or LinkedIn on desktop (1280–1920px) or mobile (390px) in light or dark environments. They want to:
1. Immediately understand who Kenneth is, his stack (`Next.js`, `React`, `TypeScript`, `Supabase / PostgreSQL`, `Tailwind CSS`), and his availability (`Available for Freelance & Full-time Roles`).
2. Inspect real screenshots, live deployment photos, and architectural trade-offs (via the interactive Case Study Drawer) without losing their place.
3. Verify credentials (signed OWWA certificates, HackEstate 2025 hackathon, Institutional Service Award) and download the resume or copy his email in one click.

## Capabilities and Constraints

- **Stack**: Next.js 16 (App Router), React 19, TypeScript (strict, zero `any`), Tailwind CSS v4 (`@theme inline`), Framer Motion, Lucide React.
- **Single Source of Truth**: All portfolio copy, metrics, and asset paths live in `src/data/portfolio.ts`.
- **Interactive Proof Surfaces**: Multi-tab screenshot viewers on flagship cards, slide-over Case Study Drawer (`src/components/ui/case-study-drawer.tsx`), verified credential gallery modals, `Cmd+K` / `Ctrl+K` command menu (`src/components/ui/command-menu.tsx`), and direct email/resume actions.

## Brand Commitments

- **Role Title**: Canonical `Full-stack Developer` (lowercase 's'). Navbar mark: `Kenzo / dev`.
- **Voice & Ethos**: "Student in the Game" — grounded, humble, curious, zero enterprise fluff or pretentious verbs ("built", "implemented", "automated" instead of "architected", "spearheaded").
- **Tactile Restraint**: Quiet monochrome foundation with high-contrast typography, subtle film grain / hairline structure, and semantic emerald green reserved strictly for live status / availability / copy confirmation.

## Evidence on Hand

- Flagship screenshots: `public/projects/jp-connect/*`, `public/projects/owwa-csmr/*`, `public/projects/jp-intrams/*`, `public/projects/owwa-sprs/*`
- Official signed certificates & handover photos: `public/certificates/ojt/csmr.webp`, `public/certificates/ojt/sprs.webp`, `public/certificates/hackathon/proptech.webp`, `public/certificates/school/2. insti-service-reward.webp`, `public/profile/1. pitching.webp`, `public/profile/2. all_employee.webp`, `public/profile/3. group_photo.webp`
- Institutional logos: `public/logos/school-logo-nobg.webp`, `public/logos/owwa-logo.webp`, `public/logos/jp-connect-logo.webp`, `public/logos/ssc-logo.webp`
- Resume PDF: `public/Kenneth_Bulaga_Resume.pdf`

## Product Principles

1. **Proof Over Claims**: Never hide real screenshots, live projector photos, or signed certificates behind tiny 72px thumbnails or extra page navigations—let the evidence lead.
2. **Tabular Precision & Hairline Structure**: Present metrics, timelines, and system architecture with crisp `tabular-nums`, 1px structural hairlines, and layered surface depth rather than bloated SaaS marketing cards.
3. **Zero-Friction Verification**: Every primary proof point (live URL, architecture case study, signed certificate, resume PDF, copy email) is reachable in one click from the main scroll.
4. **Humble Engineering Craft**: Let concrete database primitives (`PostgreSQL RLS`, `ExcelJS`, `Upstash Redis SETNX`, `O(N log N)` interval sweep) and verified user numbers speak for themselves.
