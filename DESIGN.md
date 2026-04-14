# Design Brief

## Aesthetic & Tone
Premium luxury minimalism. Product-centric e-commerce storefront inspired by Stripe and contemporary SaaS. Clean, conversion-focused, trustworthy.

## Visual Direction
Modern commercial aesthetic with generous whitespace. Elevated card hierarchy, subtle depth through shadows and borders. Hero-driven product showcase. Dark mode optimized for evening shopping.

## Color Palette

| Token | Light OKLCH | Dark OKLCH | Purpose |
|-------|-------------|-----------|---------|
| Primary | 0.5 0.14 210 | 0.75 0.15 210 | Sophisticated teal—navigation, trust, payments |
| Accent | 0.62 0.25 44 | 0.72 0.23 44 | Vibrant orange—CTAs, highlights, urgency |
| Secondary | 0.92 0.05 50 | 0.28 0.04 50 | Warm neutral—context, support |
| Foreground | 0.2 0 0 | 0.96 0 0 | Text and primary content |
| Background | 0.99 0 0 | 0.12 0 0 | Clean canvas |
| Muted | 0.93 0 0 | 0.2 0 0 | Subtle backgrounds, disabled states |
| Destructive | 0.55 0.22 25 | 0.65 0.19 22 | Delete, remove actions |

## Typography
- **Display:** Bricolage Grotesque (contemporary, distinctive headlines)
- **Body:** Plus Jakarta Sans (professional, readable at all sizes)
- **Mono:** Space Grotesk (code blocks, technical accents)

Type Scale: 12px–64px. Headlines 2.5rem+ (Bricolage), body 1rem (Jakarta), labels 0.875rem

## Structural Zones

| Zone | Background | Border | Elevation | Purpose |
|------|-----------|--------|-----------|---------|
| Header | card | border-b | shadow-card | Navigation, search, cart |
| Hero | background | none | none | Hero imagery, featured product |
| Product Grid | background | none | none | Product cards in elevated zones |
| Card | card | border | shadow-elevated | Product, testimonial, feature |
| Footer | muted/30 | border-t | none | Links, social, copyright |
| Input/Form | input | border | shadow-card | Checkout, contact, search |

## Shape Language
- Border radius base: 0.625rem (medium, modern)
- Modular: sm (0.185rem), md (0.405rem), lg (0.625rem)
- Buttons: rounded-lg (consistency)

## Spacing & Rhythm
- Unit: 0.25rem (4px). Density: generous in showcase, moderate in forms.
- Gap between product cards: 2rem (8 units)
- Header padding: 1rem vertical, 2rem horizontal
- Section padding: 4rem–6rem (vertical), 2rem (horizontal, mobile: 1rem)

## Motion & Interaction
- Smooth transitions: 0.3s ease (all interactive elements)
- Hover states: subtle 2px lift on cards (shadow-elevated), 5% brightness boost on images
- Focus rings: 2px primary color, 4px offset
- Button states: active = primary-foreground text, disabled = muted text

## Component Patterns
- Buttons: filled (accent for primary, secondary for secondary), outlined (border, no fill)
- Cards: elevated with 1px border (border color), rounded-lg, p-4–6
- Forms: input-lg (rounded-lg, 1px border-input, focus:ring-2), label-bold
- Product cards: image-top, name (bold), price (accent text), "Add to Cart" (accent button)

## Signature Details
- Gradient accent on hero CTA (accent → primary, 135deg)
- Teal tint on form focus states (not purple default)
- Elevated card shadows (subtle depth, not drop-shadow)
- Warm neutral secondary for "company" messaging (builds trust)

## Constraints
- No gradients on backgrounds (image-based hero only)
- No animated decorations (keeps load times fast)
- No rounded corners > 12px (maintains commercial feel)
- OKLCH values only—no hex, no rgb
- Fonts loaded async with font-display: swap (performance)
