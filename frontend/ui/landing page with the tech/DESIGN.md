---
name: Architectural Noir
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d0c6ab'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#999077'
  outline-variant: '#4d4732'
  surface-tint: '#e9c400'
  primary: '#fff6df'
  on-primary: '#3a3000'
  primary-container: '#ffd700'
  on-primary-container: '#705e00'
  inverse-primary: '#705d00'
  secondary: '#c6c6cf'
  on-secondary: '#2f3037'
  secondary-container: '#45464e'
  on-secondary-container: '#b4b4bd'
  tertiary: '#f8f5f9'
  on-tertiary: '#303033'
  tertiary-container: '#dbd9dd'
  on-tertiary-container: '#5f5e62'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe16d'
  primary-fixed-dim: '#e9c400'
  on-primary-fixed: '#221b00'
  on-primary-fixed-variant: '#544600'
  secondary-fixed: '#e2e1eb'
  secondary-fixed-dim: '#c6c6cf'
  on-secondary-fixed: '#1a1b22'
  on-secondary-fixed-variant: '#45464e'
  tertiary-fixed: '#e4e1e5'
  tertiary-fixed-dim: '#c8c6c9'
  on-tertiary-fixed: '#1b1b1e'
  on-tertiary-fixed-variant: '#47464a'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-xl:
    fontFamily: Montserrat
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: 0.05em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  label-mono:
    fontFamily: Geist Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 80px
  grid-opacity: '0.03'
---

## Brand & Style

The design system is engineered for a high-end software developer portfolio, blending technical precision with a luxurious, cinematic atmosphere. The brand personality is "The Master Architect"—authoritative, sophisticated, and deeply rooted in the craft of code. It prioritizes a dark, focused environment that mirrors a premium IDE, elevated by the materials of high-end hardware.

The style is a fusion of **Glassmorphism** and **Technical Minimalism**. It utilizes deep, matte surfaces punctuated by shimmering, razor-thin metallic borders and "terminal-glow" accents. To maintain a refined architectural feel and avoid unwanted associations, the metallic gold is treated as a structural light source—like light passing through a high-tech aperture—rather than a decorative flourish. Every element is aligned to a subtle, underlying grid, emphasizing engineering discipline over organic ornamentation.

## Colors

The palette is anchored by `#0A0A0A`, a deep matte black that serves as the void-like canvas. 

*   **Primary:** A vibrant yellow-gold (`#FFD700`) used exclusively for critical highlights, active states, and focus indicators.
*   **Metallic Accents:** A complex gold gradient mimics the physical properties of brushed brass or anodized gold. This is used for "shimmering borders" and high-end interactive elements.
*   **Neutral Stack:** Transitions from the pure white (`#FFFFFF`) of high-contrast headings to a muted zinc (`#A1A1AA`) for secondary text, and a deep charcoal (`#27272A`) for structural separators and container strokes.

Color distribution follows an architectural logic: light flows from the "edges" and "seams" of the UI, creating depth through luminescence rather than heavy fills.

## Typography

Typography is used as a structural element. **Montserrat** provides the high-contrast, geometric strength required for display headings. These are characterized by generous tracking (letter-spacing) to evoke a premium, editorial feel.

**Inter** handles the heavy lifting for body copy, ensuring maximum readability within the dark-mode environment. For technical data, code snippets, and small labels, **Geist Mono** is utilized to reinforce the developer-centric nature of the portfolio. 

Text hierarchy is strictly enforced: 
1.  **Headers:** High contrast (White), uppercase, tracked out.
2.  **Body:** Mid-contrast (Zinc) for reduced eye strain.
3.  **Labels:** Monospaced, often paired with a primary gold tint for status indicators.

## Layout & Spacing

This design system employs a **Fixed Grid** model on desktop (12 columns) and a **Fluid Grid** on mobile (4 columns). The spacing rhythm is based on a strict 8px baseline.

The unique aspect of the layout is the **Visible Blueprint**: a subtle, low-opacity (3%) background grid pattern that aligns with the gutters. This provides a sense of technical precision. Margins are intentionally generous (`80px` on desktop) to create a gallery-like focus on the content. Elements should frequently align to the grid lines, with "shimmering borders" following these lines to create a cohesive, architectural structure.

## Elevation & Depth

Depth is conveyed through **Glassmorphism** and **Layered Translucency** rather than traditional shadows. 

*   **Surfaces:** Backgrounds use `#0A0A0A`. Elevated cards use a semi-transparent `#27272A` with a `backdrop-filter: blur(12px)`.
*   **Borders:** The "Shimmering Border" effect is achieved using a 1px solid stroke with a linear gradient (Metallic Gold). On hover, these borders should "glow" using a subtle outer box-shadow with a color-matched gold hue (low spread, high blur).
*   **Interactions:** Hovering over a container reveals a "spotlight" effect—a radial gradient that follows the cursor behind the glass surface, subtly illuminating the internal content.

## Shapes

The shape language is **Soft (0.25rem)**. While the overall vibe is architectural and sharp, the subtle rounding on corners prevents the UI from feeling aggressive or dated. 

Buttons and input fields maintain this small radius to look like precision-milled hardware components. Large containers (cards) may use the `rounded-lg` (0.5rem) setting to distinguish them from smaller UI widgets.

## Components

### Buttons
Primary buttons use the `metallic_gold` gradient background with black text (`#0A0A0A`) in Montserrat Bold. Secondary buttons are "Ghost" style: a 1px gold border with a glass-blur background and white text.

### Cards
Cards are the primary content vessel. They must feature a 1px border. On the top-right corner of cards, a small Monospaced label (Geist Mono) should indicate the "Component ID" or "Project Phase" to lean into the technical aesthetic.

### Shimmering Borders
Implement using a CSS border-image or a pseudo-element overlay. The shimmer effect should be a slow, 5-second linear animation that moves the highlight along the perimeter of the container.

### Input Fields
Inputs are dark, inset rectangles with a `#27272A` border that turns into a `metallic_gold` border upon focus. The caret (cursor) should be the primary `#FFD700` gold.

### Navigation
The navigation bar is a floating glass dock at the top of the viewport, utilizing `backdrop-filter: blur(20px)` and a thin bottom border of metallic gold. Links use `label-mono` typography.