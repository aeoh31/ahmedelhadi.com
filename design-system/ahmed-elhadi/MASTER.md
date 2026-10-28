# Ahmed Elhadi: design system (master)

Generated from the UI UX Pro Max data set (`Portfolio/Personal` product row,
`Minimalism & Swiss Style` + light `Motion-Driven` style, `Portfolio/Personal`
palette, `Developer Mono` font pairing). Page-level overrides go in `pages/`.

## Direction
- Storytelling-driven single page: hero, about, selected work (challenge, what I built, outcome), experience, skills, contact.
- Swiss minimalism: grid, generous white space, strong type hierarchy, thin rules instead of heavy cards.
- Light motion only: fade-up reveals on scroll (600ms ease-out), 150–250ms hover transitions. Everything is visible with no JS or with reduced motion.
- Avoid: generic AI gradients (purple/cyan glow), animated canvases, emoji icons, tag clouds that list unverified tools.

## Color tokens (`app/globals.css`)
| Token | Light | Dark |
|---|---|---|
| `--bg` | #FAFAFA | #09090B |
| `--bg-alt` | #F4F4F5 | #111113 |
| `--fg` | #09090B | #FAFAFA |
| `--muted` | #475569 | #A1A1AA |
| `--card` | #FFFFFF | #18181B |
| `--border` | #E4E4E7 | #27272A |
| `--primary` | #18181B | #FAFAFA |
| `--accent` | #2563EB | #60A5FA |

Dark mode follows the visitor's system setting. Text pairs meet 4.5:1.

## Type
- Body and headings: IBM Plex Sans (variable 400–700), self-hosted in `app/fonts`.
- Labels, tags, dates: JetBrains Mono (400–500).
- Base 16px, line-height 1.6, headings tracked -0.02em, fluid sizes with `clamp()`.

## Spacing and shape
- 8px rhythm: 4, 8, 16, 24, 32, 48, 64, 96.
- Radius 12px for cards, 8px for controls, pill buttons. Content width 1120px, 16px mobile gutter.

## Interaction and accessibility
- Buttons and nav targets are at least 44px tall. Visible 3px focus ring in the accent color.
- Skip link, one `h1`, sequential headings, `aria-expanded` on the mobile menu, Escape closes it.
- Decorative icons are `aria-hidden`; external links say they open a new tab.
