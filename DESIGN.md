# Design Brief: Quiz Master

Clean, focused quiz application emphasizing forward momentum and success celebration. Cyan accent guides visual hierarchy across all screens.

## Color Palette

| Role | Light (L C H) | Dark (L C H) | Usage |
|------|---|---|---|
| Background | 0.98 0 0 | 0.08 0 0 | Page base |
| Foreground | 0.2 0.01 260 | 0.94 0.01 260 | Body text |
| Card | 1.0 0.01 260 | 0.12 0 0 | Quiz/result containers |
| Accent (Cyan) | 0.55 0.21 195 | 0.65 0.24 195 | CTAs, progress, selected answers |
| Muted | 0.9 0.01 260 | 0.18 0 0 | Backgrounds, dividers |

## Typography
Display: Fraunces (serif) | Body: General Sans (sans-serif) | Mono: System

## Zones

| Zone | Treatment | Usage |
|------|-----------|-------|
| Header | bg-card + border-b | Title |
| Content | bg-background | Quiz/results |
| Cards | bg-card shadow-elevated | Questions, options, results |
| CTA | bg-accent hover:opacity-90 | Start, Next, Restart |

## Spacing
Base 8px. Cards: 1.5rem padding. Options: 0.75rem gap. Progress bar: top margin-bottom 1rem.

## Components
Buttons use `.button-primary` (accent bg, scale-95 active). Options highlight cyan on select. Progress bar at top (thin, shadow separator). Score display uses serif headline.

## Motion
Transition smooth: 0.3s cubic-bezier(0.4, 0, 0.2, 1). Button active: scale-95. No animations. Fade transitions between screens.

## Constraints
Solid OKLCH colors only. No gradients or decorative elements. WCAG AA+ contrast verified. Mobile-first responsive.

## Signature
Cyan accent used sparingly—only CTAs, selected answers, and progress. Creates focused flow without decoration.
