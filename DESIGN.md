---
name: Kenneth Bulaga Portfolio — Studio Proof Contact Sheet & Floating Rail
description: Warm-alabaster and matte-carbon engineering portfolio with a double-framed floating left rail and hairline-ruled contact-sheet proof frames.
colors:
  signal-emerald: "#22c55e"
  warm-alabaster: "#fcfcfb"
  recessed-stone: "#f4f4f1"
  card-ivory: "#ffffff"
  matte-carbon: "#0f0f11"
  graphite-card: "#151518"
  charcoal-ink: "#141413"
  ash-muted: "#63635e"
  hairline-rule: "#e6e6e1"
typography:
  display:
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  serif-accent:
    fontFamily: "var(--font-serif), Spectral, Georgia, serif"
    fontSize: "2.25rem"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "-0.015em"
  body:
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "var(--font-geist-mono), monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.02em"
  micro:
    fontFamily: "var(--font-geist-mono), monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.3
  caption:
    fontFamily: "var(--font-geist-mono), monospace"
    fontSize: "0.625rem"
    fontWeight: 500
    lineHeight: 1.25
rounded:
  xs: "6px"
  sm: "8px"
  md: "10px"
  lg: "14px"
  pill: "9999px"
spacing:
  xs: "6px"
  sm: "12px"
  md: "20px"
  lg: "32px"
  xl: "64px"
components:
  button-rail-cta:
    backgroundColor: "{colors.signal-emerald}"
    textColor: "#052e16"
    rounded: "{rounded.sm}"
    padding: "10px 14px"
  button-pill-outline:
    backgroundColor: "{colors.card-ivory}"
    textColor: "{colors.charcoal-ink}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
  card-contact-sheet:
    backgroundColor: "{colors.card-ivory}"
    textColor: "{colors.charcoal-ink}"
    rounded: "{rounded.lg}"
    padding: "20px"
---

# Design System: Kenneth Bulaga Portfolio

## Overview

**Creative North Star: "The Studio Proof Contact Sheet & Floating Rail"**

The Kenneth Bulaga Portfolio pairs the tactile intimacy of a double-framed floating left navigation rail with the analytical clarity of an architectural contact sheet. Rather than hiding production work behind decorative gradients or generic SaaS cards, the interface treats every deployed platform (`JP Connect`, `OWWA CSMR System`, `JP Intrams`, `OWWA SPRS Platform`) as a numbered, inspectable proof frame backed by verified database and financial metrics.

The surface stays quiet so the evidence speaks first: warm alabaster paper in light mode, matte carbon in dark mode, 1px hairline rules, tabular monospace counters, and numbered multi-screenshot contact strips with primitive callouts directly beneath each active frame.

**Key Characteristics:**
- Asymmetric two-zone desktop shell: a sticky `264px` double-framed left rail paired with a wide `980px` proof stage.
- Contact-sheet project frames with numbered screenshot switchers (`01`–`06`) and primitive cutaway callouts explaining the exact engineering mechanism in view.
- High-contrast tabular production scale ledger (`7,125` Google SSO Accounts, `PHP 707,750` Tracked SSC Clearance Ledger, `4,632+` Citizen Feedback Records, `0 Overlaps`).
- Tactile micro-craft: pixel-block canvas name resolution on initial load, 5-line ink click burst, and one-click green copy-email pill.

## Colors

A disciplined warm-monochrome paper and carbon palette punctuated by a single functional signal emerald reserved for live availability and primary contact actions.

### Primary
- **Signal Emerald** (`#22c55e`): Used exclusively for the floating rail's primary "Copy Email" action pill, live availability pulse dots, and verified proof indicators.

### Neutral
- **Warm Alabaster** (`#fcfcfb`): Primary page canvas in light mode, eliminating sterile `#ffffff` glare.
- **Recessed Stone** (`#f4f4f1`): Outer shell recess for the double-framed floating rail (`rail-shell`) and subtle table header strips.
- **Card Ivory** (`#ffffff`): Crisp inner surface for contact-sheet frames and the inner rail panel (`rail-panel`) in light mode.
- **Matte Carbon** (`#0f0f11`): Primary page canvas in dark mode.
- **Graphite Card** (`#151518`): Elevated contact-sheet card surface in dark mode.
- **Charcoal Ink** (`#141413`): Primary display and body copy in light mode (`#f4f4f6` in dark mode).
- **Ash Muted** (`#63635e`): Secondary descriptions, timestamps, and metadata labels (`#9ca3af` in dark mode).
- **Hairline Rule** (`#e6e6e1`): 1px structural borders and ledger dividers (`rgba(255, 255, 255, 0.09)` in dark mode).

### Named Rules
**The One Signal Rule.** Signal Emerald (`#22c55e`) appears only on live status indicators, verified proof icons, and the primary rail CTA. Never use decorative secondary accents (purple, cyan, neon gradients) that compete with real application screenshots.

## Typography

**Display & Body Font:** Geist Sans (`var(--font-geist-sans)`, fallback `system-ui, sans-serif`)
**Editorial Accent Font:** Spectral Italic (`var(--font-serif)`, fallback `Georgia, serif`)
**Label & Metric Font:** Geist Mono (`var(--font-geist-mono)`, fallback `monospace`)

**Character:** Precision technical sans-serif grounded by tabular monospace numerals and a restrained italic serif accent on two anchor phrases in the hero statement.

### Hierarchy
- **Display** (`600`, `clamp(1.65rem, 2.8vw, 2.25rem)`, `1.25` line-height): Hero statement combining Geist Sans with `Spectral` italic emphasis (`font-weight: 400`).
- **Headline** (`700`, `1.5rem–1.875rem`, `1.2` line-height): Section headings (`Production Systems & Proof Sheet`, `Work Experience`, `Credentials, Honors & Education`).
- **Title** (`700`, `1rem–1.125rem`, `1.35` line-height): Contact-sheet frame titles and organization names.
- **Body** (`400`, `0.875rem–0.9375rem`, `1.65` line-height, `65ch` max measure): Engineering narratives, problem statements, and implementation highlights.
- **Label / Ledger** (`500–600`, `0.6875rem–0.75rem`, `tabular-nums`): Frame indices (`FRAME 01`), zero-padded rail counters (`01`–`04`), and `.kv` metric rows.

### Named Rules
**The No-Kicker Rule.** Never stack an uppercase or monospace eyebrow label directly above an `<h1>`, `<h2>`, `<h3>`, or `<h4>`. Place frame indices, role counts, and status badges inline on the right side of a horizontal header row or beneath the heading.

**The Tabular Ledger Rule.** Every metric, date range, frame counter, and currency figure (`PHP 707,750`, `7,125`, `01/06`) must enforce `font-variant-numeric: tabular-nums`.

## Layout

Desktop (`≥1024px`) uses an asymmetric two-column flex container (`max-w-[1320px] mx-auto px-6 gap-10`):
1. **Left Floating Rail (`264px` fixed width):** Sticky at `top: 24px`, `height: calc(100vh - 48px)`, housing identity, section index with zero-padded counts, copy-email CTA, and a footer toolbar (`ThemeToggle`, `Cmd+K`, live `UTC+8` clock).
2. **Right Proof Stage (`minmax(0, 980px)`):** Vertical stack of sections separated by 1px hairline dividers (`SectionDivider`). Flagship project frames split internally into a 12-column grid (`lg:col-span-7` visual stage on the left, `lg:col-span-5` specification & `.kv` ledger on the right).

Below `1024px`, the floating rail collapses into a sticky top bar (`h-14`) with a slide-over sheet (`MobileNav`), and contact-sheet frames stack vertically with zero horizontal overflow.

## Elevation & Depth

This system is **flat and architectural by default**. Depth is communicated through 1px structural hairlines (`border-border`), recessed tonal fills (`bg-muted/20`), and nested frame geometry rather than soft drop shadows.

### Named Rules
**The Zero Ghost-Card Rule.** Never combine a `1px` border with a soft ambient drop shadow (`shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`) on content cards. Cards sit flat on the canvas with crisp `1px` borders and subtle border-contrast shifts on hover (`hover:border-foreground/25`). The only element permitted a physical bezel shadow is the double-framed floating navigation rail (`.rail-shell` / `.rail-panel`).

## Shapes

- **Double-Framed Rail:** Outer shell `14px` radius with `5px` padding wrapping an inner panel of `10px` radius (`14px - 5px ≈ 9–10px` concentric fit).
- **Contact-Sheet Frames & Dossiers:** `14px` outer radius (`rounded-[14px]`) with `10px` inner screenshot frames (`rounded-[10px]`) and `8px` frame-selector buttons (`rounded-[8px]`).
- **Action Controls & Status Tags:** Full pill geometry (`rounded-full`) for header actions (`Inspect Architecture`, `Live App`, `Download Resume (PDF)`) to contrast cleanly with rectangular proof frames.

## Components

### Buttons
- **Rail Primary CTA (`.rail-cta`):** `8px` radius, `#22c55e` fill, `#052e16` text, `1px` top inner highlight, `translateY(-1px)` hover lift.
- **Stage Action Pills:** `9999px` pill radius, `1px` solid `var(--border)`, `12px` monospace label, subtle `bg-muted` hover state.

### Cards / Containers
- **Contact-Sheet Frame:** `14px` radius, `1px` solid `var(--border)`, `bg-card` surface, top header bar (`bg-muted/20 border-b border-border`), split 7/5 stage-and-ledger body, zero drop shadow.

### Navigation
- **Floating Left Rail (`Navbar.tsx`):** Double-framed sticky sidebar with `PixelName` canvas header, 4-row hairline navigation list with `tabular-nums` counts (`04`, `02`, `05`, `01`), green copy-email button, and bottom utility strip.

### Signature Components
- **Primitive Cutaway Callout:** A bordered monospace bar directly beneath each active project screenshot (`[01] Landing & Student: Next.js 16 App Router · Google OAuth 2.0 SSO...`) naming the exact engineering mechanism visible in that frame.
- **PixelName (`pixel-name.tsx`) & ClickBurst (`click-burst.tsx`):** Hardware-accelerated canvas micro-interactions that respect `prefers-reduced-motion: reduce`.

## Do's and Don'ts

### Do:
- **Do** keep all project copy, metrics, and screenshot primitives in `src/data/portfolio.ts` as the single source of truth.
- **Do** pair every multi-screenshot gallery with numbered frame tabs (`01`–`06`) and a primitive callout strip.
- **Do** use 16px Lucide stroke icons for all UI indicators and actions.

### Don't:
- **Don't** stack uppercase/monospace eyebrows above headings (`<h1>`–`<h4>`).
- **Don't** combine borders and drop shadows on cards (`ghost_card` anti-pattern).
- **Don't** use Unicode symbols or emojis (`⚡`, `Swipe →`, `🔥`) in place of Lucide icons or monospace tokens.
