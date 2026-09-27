# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Prospective clients evaluating Seoul Circle before commissioning work:
- Startups and early-stage services needing a product shipped end to end (strategy, UX/UI, build).
- Institutions, exhibitions and public organizations (kiosks, guide systems, exhibition web).
- Brands and small businesses (brand websites, commerce on Cafe24 / WordPress / Gnuboard).

They arrive to judge quality and fit, then decide whether to get in touch.

## Product Purpose
The studio site for SEOUL CIRCLE, a small digital product studio run by Hong Lee. It presents the studio, shows real work, and turns a fitting visitor into an inquiry. Success = a qualified client reaches out.

## Positioning
SEOUL CIRCLE — "Designing and building digital experiences."
One studio covering Strategy · UX/UI · Development, from planning to shipped code, with no handoff gap between design and engineering.
The site presents a small digital product studio, never "a freelancer". The word "freelancer" is not foregrounded anywhere.

## Operating Context
- Bilingual: Korean (default) and English via next-intl, locale-prefixed routes (`/ko`, `/en`).
- Existing interactive experiments (Day Palette, Minute Question, Balling Alphabet) live at their own routes and remain available.
- Design system work (Figma tokens → CSS variables, Storybook) is deployed separately at portfolio-next-storybook.vercel.app.

## Capabilities and Constraints
- Next.js 16 app router, React 19, Emotion, Framer Motion, pnpm monorepo (`apps/portfolio`, `packages/*`).
- Undecided: contact channel (email / form / KakaoTalk), studio legal details, pricing — do not invent.

## Brand Commitments
- Name: SEOUL CIRCLE. Tagline: "Designing and building digital experiences." Pillars: Strategy · UX/UI · Development.
- Studio voice (we / the studio), not personal-freelancer voice.
- User-supplied references: minimal editorial portfolio/studio sites — oversized display type heroes, restrained nav, project thumbnail grids, a single loud accent wordmark.

## Evidence on Hand
- Client work (images exist and are public-cleared; files still to be supplied): Gwangju Ministry of Justice guide kiosk + webtoon viewer kiosk; multilingual yoga studio website (WordPress, booking/membership/payments); Cafe24/Gnuboard commerce UI.
- Studio-owned projects with thumbnails in `assets/images/`: Design System (storybook.png), Day Palette, Minute Question, Balling Alphabet.
- Founder background, used only as a trust signal in About: ~2.5 years at DK Techin on Daum Search collections (22nd National Assembly election collection, Storybook migration, real estate collection); paper on Musinsa responsive web redesign (2022).
- Accessibility practice (a11y CI, contrast audits) — real, documented on velog.
- No testimonials, client logos, metrics beyond those in messages/*.json. Do not fabricate.

## Product Principles
1. Studio first: every surface reads as a small, capable studio, not an individual job seeker.
2. Show the work: real shipped projects lead; claims follow evidence.
3. Design and code as one discipline: the site itself is proof of craft in both.
4. Accessible by default: WCAG AA contrast, keyboard and screen-reader support are non-negotiable.

## Accessibility & Inclusion
WCAG 2.1 AA. The repo runs an a11y CI audit on PRs; keep it passing.
