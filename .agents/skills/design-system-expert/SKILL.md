---
name: design-system-expert
description: Senior product designer and front-end engineer design skill based on CLAUDE.md. Enforces high visual quality, authentic brand aesthetics, clean typography, responsive layout, prominent CTA/phone numbers, and prevents generic 'vibe coded' patterns.
---

# Design System & UI Build Rules (from CLAUDE.md)

This skill must be consulted for every UI, component, layout, and visual design task in this project.

## Role
Act as a senior product designer and front-end engineer. Visual quality is an absolute requirement, not a nice-to-have. A technically functional site that looks generic or "AI generated" is an incomplete deliverable.

## Rule 1 — Never Ship Something That Looks "Vibe Coded"
"Vibe coded" = the generic, template-y look of a site thrown together fast with no real design direction:
- **NO purple/violet gradients**: Never use purple-to-pink or purple-to-blue sweeps.
- **NO centered hero + 3 icon cards + generic button** repeated with no personality.
- **NO default system fonts**: Use deliberate typography pairings loaded properly with distinct weight and personality.
- **NO emoji as icons**: Always use clean, sharp, professional SVG vector icons (e.g. `lucide-react`).
- **NO lorem-ipsum copy**: Every sentence must be specific, punchy, real Ethiopian catering copy.
- **NO generic soft drop shadows** slathered across every card.

## Rule 2 — Intentional Brand Palette
Derived from Hiwi Catering's authentic culinary brand:
- **Primary**: Rich Terracotta/Crimson (`#D03B1E`, `bg-hiwi-primary`)
- **Accent Warmth**: Saffron/Amber (`#EAA228`, `text-hiwi-gold`, warm orange)
- **Call-to-Action / Contact**: Vibrant Emerald Green (`#059669` / `#16a34a`) for instant phone call recognition.
- **Dark Neutral**: Deep Ethiopian Espresso/Charcoal (`#1C1917`, `bg-hiwi-dark`)
- **Light Neutral**: Warm Cream & Crisp White (`#FDFBF7`, `bg-cream-bg`)
- Contrast must always satisfy WCAG AA.

## Rule 3 — Typography Hierarchy
- Clear typographic contrast between display headings (black/extrabold, tight tracking) and body text (clean, high legibility, generous line height).
- Amharic text alongside English must be styled cleanly with proper font weights.
- Never use walls of dense text. Use scannable bullet points, micro-badges, and concise 1-line sentences.

## Rule 4 — Phone-First & Immediate Contact Accessibility
- Local customers in Addis Ababa need the phone number immediately.
- **Header**: Prominent phone number button (`0963 138 123`) on both desktop and mobile.
- **Sticky Mobile Bottom Bar**: Fixed one-tap call and Telegram buttons at the bottom of the screen on all mobile devices.
- **Hero & Cards**: Instant click-to-call buttons.

## Rule 5 — Responsive by Default
- **Mobile (~375–430px)**: Single column, touch-sized tap targets (≥ 44px), sticky bottom bar, zero horizontal scroll, clean collapsed menus.
- **Desktop (~1280px+)**: Purposeful use of wide screen, strong visual hierarchy, side-by-side flyer and actions.
- **Tablet (~768px)**: Balanced 2-column grids.

## Pre-Flight Checklist
Before finalizing any UI change, verify:
- [ ] No default purple/violet gradient
- [ ] Real typography loaded and rendering
- [ ] Deliberate, high-contrast palette
- [ ] Professional vector icons only (no emoji)
- [ ] Phone number (`0963 138 123`) and Telegram prominent
- [ ] Services visible on first glance
- [ ] Tested at mobile (375px) and desktop (1280px+)
- [ ] 0 console errors and clean build
