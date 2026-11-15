# portfolio.md — Unified Design & Content Spec (`kennethbulaga.dev`)

This document is the single source of truth for the visual design system, layout architecture, interaction polish, and content rules of Kenneth Bulaga's portfolio (`kennethbulaga.dev`), unifying the **Marwie Ang monochrome design direction** with Kenneth's production engineering content.

---

## 1. Non-Negotiable Design Rules

1. **Monochrome.** Use only the gray tokens in `src/app/globals.css`. The sole color is green (`--green`, `--green-ink`), reserved strictly for availability/open/success states: the availability dot, the "Open" nav pill, and the "Email copied" state. No accent colors (`amber`, `rose`, etc.), no colored gradients, no colored buttons.
2. **Every color is a token that holds both themes** via `light-dark(light, dark)`. Never write bare hex values in components; add new colors to `:root` as `light-dark(...)`. Set `color-scheme: light;` on `:root` and `color-scheme: dark;` on `.dark` in `src/app/globals.css` so manual `ThemeToggle` switches (`.dark` class via `next-themes`) flip `light-dark()` values instead of locking to OS preference.
3. **Two fonts & font rendering.**
   - **Figtree** (`400`, `500`, `600`) for all UI, headings, body copy, and code/counts (`--font-sans`).
   - **Newsreader** (`italic 400`, `.serif` / `.serif-emphasis`) for **exactly one** emphasized word or phrase in the home headline, nowhere else.
   - Apply `-webkit-font-smoothing: antialiased` on `body`, `text-wrap: balance` on headings, and `text-wrap: pretty` on body copy.
4. **Three weights:** `400` for body text, `500` for titles and UI, `600` for the name, post titles, and small pills. Large text gets size-specific negative letter-spacing (`-0.01em` to `-0.03em`); body copy stays near `0`.
5. **One column, max `640px`**, centered in the space right of the floating sidebar. Sections stack with an `88px` gap (`56px` on phones). No multi-column page layouts beyond the small 2- or 3-column grids (metrics, cards, stack, gear).
6. **Sections = small muted label over hairline rows.** A section is a `.label` heading (`14px`, `--muted`) above items separated by `1px` `--line` top borders. Prefer rows over cards.
7. **Concentric shape language (`outer = inner + padding`):** Pills (`999px`) for buttons, chips, and CTAs; `14px` radius for cards, images, and tiles (nested elements step down by their padding, e.g. `outer = inner + padding`); `12px` for nav links; `10px` for icon buttons; `26px` shell / `21px` panel with `5px` padding for `.rail-shell` / `.rail-panel`.
8. **Shadows for elevation, hairlines for structure.** Layered soft `box-shadow` (inset `1px` ring + inset top highlight + small drop + large faint drop) is used **only** on raised surfaces: sidebar, sidebar CTA, active nav link, toast, and photo cards. Everything else is flat with `1px` `--line` hairlines.
9. **Image outlines.** Apply `.image-outline` (`outline: 1px solid oklch(0 0 0 / 0.1)` in light mode, `oklch(1 0 0 / 0.1)` in dark mode, `outline-offset: -1px`) to avatars, logos, screenshots, and proof frames—never tinted zinc/slate outlines.
10. **Counts are zero-padded** (`07`, `12`) with `font-variant-numeric: tabular-nums`.
11. **Icons** are `16px` stroke icons (`strokeWidth={1.5}`), round caps and joins, `currentColor`, colored `--faint` in nav (`--ink` when active).

---

## 2. Motion, Interaction & Mobile Touch Rules

1. **Custom easing & compositor-only transitions.** Define `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)` in `:root`. Never use `transition: all` or `ease-in` on UI elements. Specify exact compositor properties (`transform`, `opacity`, `background-color`, `border-color`, `box-shadow`) at `140–200ms` with `var(--ease-out)`.
2. **Tactile press feedback.** Interactive buttons, pills, and links respond immediately on pointer-down via `:active { transform: scale(0.96); }` (or `0.97` for wider controls) — never below `0.95`.
3. **Interruptibility & modals.** Use CSS transitions for interruptible state changes and critically damped springs (`{ type: "spring", duration: 0.3, bounce: 0 }`) for Framer Motion overlays/icon swaps. Never animate from `scale(0)` (start from `scale(0.95)` + `opacity: 0`) and set `initial={false}` on `AnimatePresence` where initial-load enter animations are unwanted.
4. **Reduced motion.** Check `useReducedMotion()` in Motion components and honor `@media (prefers-reduced-motion: reduce)` in CSS: disable decorative animations (`ClickBurst`, `PixelName`, floating stamps, marquee) and collapse positional/scale transitions to short opacity cross-fades.
5. **Minimum hit areas (`44×44px` mobile / `40×40px` desktop).** Every interactive control must meet a `44×44px` touch target on mobile (extend smaller visible icons/dots with a `::after` pseudo-element hit area without overlapping neighbors).
6. **Mobile platform layer (without altering desktop layout).**
   - Gate hover rules behind `@media (hover: hover) and (pointer: fine)` to prevent sticky hover on touch.
   - Set `-webkit-tap-highlight-color: transparent` on `html`, `touch-action: manipulation` on `button, a, [role="button"]`, and `user-select: none; -webkit-user-select: none` on `button, [role="button"]`.
   - Use `overscroll-behavior: contain` on scrollable drawers, `viewportFit: "cover"` in `src/app/layout.tsx`, and `env(safe-area-inset-*)` padding on sticky mobile headers and bottom drawers.

---

## 3. Design Tokens (`src/app/globals.css`)

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--bg` | `#fcfcfb` | `#0f0f11` | Page background |
| `--surface` | `#ffffff` | `#19191c` | Sidebar panel, cards, buttons |
| `--ink` | `#111113` | `#ececee` | Titles, primary text, dark chips/buttons |
| `--ink-2` | `#3a3a3f` | `#c6c6cb` | Nav text, light chips |
| `--ink-body` | `#4a4a4f` | `#adadb3` | Paragraphs (`.lead`, `.bullets`) |
| `--muted` | `#6e6e73` | `#8b8b91` | Labels, subtitles |
| `--faint` / `--subtle` | `#8a8a8f` / `#9a9a9e` | `#737379` / `#66666c` | Icons, meta, counts |
| `--line` / `--line-strong` | `#ebebea` / `#dcdcda` | `#232327` / `#34343a` | Hairlines / outlines |
| `--tile` / `--hover` | `#ededec` / `#f5f5f3` | `#1c1c20` / `#212125` | Image placeholders / row hover |
| `--highlight` | `#ffffff` | `rgba(255, 255, 255, 0.04)` | Top inset highlight on raised surfaces |
| `--green` / `--green-ink` | `#2f9e5b` / `#1e6b3a` | `#2f9e5b` / `#5fd08a` | Availability / copied state only |
| `--ease-out` | `cubic-bezier(0.23, 1, 0.32, 1)` | `cubic-bezier(0.23, 1, 0.32, 1)` | Standard UI easing curve |

**Type scale:** page title `34px / 500` (`28px` on phones), identity name `18px / 600`, lead `17px / 1.65`, row title `16px / 500`, nav and body `15px / 500`, label and row subtitle `14px`, counts and tags `13px`, meta `12px`.

**Texture:** `--grain` (5% fractal noise SVG) layered over the sidebar; `--grain-soft` (3%) over the page.

---

## 4. Core Class & Component Vocabulary

- **Floating Rail & Mobile Drawer:** `.rail-shell` (`26px` radius, `5px` padding), `.rail-panel` (`21px` radius), `.rail-cta` (pill Copy-Email CTA with `.sidebar-cta-dot`), `.nav-link` (`12px` radius, `aria-current="page"` raised state), `.nav-count`, `.nav-pill`. On `≤900px`, the sidebar slides in from the left (`translateX(-110%)` → `none`) over `.scrim`, with a home-only `.mobile-bar`.
- **Buttons & Pills:** `.btn` (`44px` height, `999px` radius), `.btn-dark`, `.btn-light`, `.more-btn`, `.chip-dark`, `.chip-light`, `.soon` (outline pill with optional `.tip`).
- **Content & Lists:** `.stack-v` + `.gap-4/8/16/24/40/56`, `.label`, `.page-title`, `.lead`, `.section-head` + `.count`, `.row` / `.row-body` / `.row-title` / `.row-sub` / `.row-tag`, `.kv` (label/value row), `.bullets`, `.placeholder`, `.underline`, `.graph` (monochrome GitHub contributions).
- **Tactile Touches:** `PixelName` (dithered `8→1px` canvas reveal on load), `ClickBurst` (5-line ink burst on click), `IWasHereButton` (Redis-backed visitor stamp counter).

---

## 5. Content & Positioning (`src/data/portfolio.ts`)

- **Developer:** Kenneth Bulaga — Full-stack Developer (`Davao City, PH` · `UTC+8`)
- **Tone:** Grounded, humble, "always a student in the game" — zero fluff, practical engineering execution.
- **Single Source of Truth:** All copy, metrics, project frames, experience, credentials, and links live in `src/data/portfolio.ts`.
- **Truth in Metrics:**
  - **JP Connect:** 7,207 Authenticated Profiles (7,078 students, 126 instructors + admin roles), 14,778 Masterlist Records, 781 Validated Exam Rows across 9 academic departments, 0 room/proctor/self-proctor overlaps (2026–2027 1st Semester Finals), PHP 707,750 in tracked SSC clearance collections (Dec 2025 – Jan 2026).
  - **OWWA CSMR System:** 4,632+ citizen feedback records across 10 regional units, 72 monthly report submissions, multi-tab workbooks for ARTA/CSC reporting requirements, `<1s` report generation via Next.js Server Actions and ExcelJS.
  - **JP Intrams:** Real-time score synchronization across 23 sports divisions using Supabase Realtime, distributed Redis rate limiting at API layer, auto-cycling display mode.
  - **OWWA SPRS Platform:** Statistical reporting and performance analytics engine engineered as sole developer for OWWA Region XI.
