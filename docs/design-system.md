# Coding Challenges Design System

This design system describes the current product language for the coding
challenge app: warm, focused, readable, and practice-oriented. It should feel
like a calm workspace for repeat problem solving, not a marketing page.

## Foundations

### Color System

The palette is built around a warm paper surface, deep ink text, and a green
primary action color. Use color sparingly; the interface should stay quiet
enough for code and problem text to lead.

| Token | Value | Usage |
| --- | --- | --- |
| `color.background.canvas` | `#f6f3eb` | App background |
| `color.background.surface` | `#fffdf8` | Panels, headers, requirement cards |
| `color.background.surfaceAlt` | `#fbfff9` | Hovered cards, subtle green surfaces |
| `color.text.primary` | `#18201d` | Headings, important labels |
| `color.text.secondary` | `#52625b` | Body copy |
| `color.text.muted` | `#6b756f` | Metadata, captions |
| `color.primary.500` | `#19684b` | Primary actions, links, focus color |
| `color.primary.600` | `#12573f` | Primary hover |
| `color.primary.100` | `#e7f1eb` | Tags, badges, selected accents |
| `color.border.default` | `#d8d0c2` | Cards and controls |
| `color.border.subtle` | `#eee5d6` | Dividers |
| `color.dark.900` | `#111713` | Code panel background |
| `color.dark.800` | `#202821` | Dark badges |

Semantic colors:

| Token | Value | Usage |
| --- | --- | --- |
| `color.success.500` | `#19684b` | Success messaging, completed state |
| `color.warning.500` | `#b7791f` | Warnings, non-blocking attention |
| `color.error.500` | `#b42318` | Errors, destructive confirmation |
| `color.info.500` | `#2563eb` | Informational states |

Light mode is the default. Dark mode should keep the same green identity but
invert hierarchy:

| Token | Value | Usage |
| --- | --- | --- |
| `color.darkMode.canvas` | `#0f1512` | App background |
| `color.darkMode.surface` | `#151d18` | Cards and panels |
| `color.darkMode.text` | `#e5f2eb` | Primary text |
| `color.darkMode.muted` | `#9fb2a8` | Secondary text |
| `color.darkMode.border` | `#2b3931` | Borders |

### Typography

Font family:

- `font.family.sans`: `Inter`, system UI, `Segoe UI`, sans-serif
- `font.family.mono`: `ui-monospace`, `SFMono-Regular`, `Menlo`, `Consolas`, monospace

Type scale:

| Token | Size | Line height | Weight | Usage |
| --- | ---: | ---: | ---: | --- |
| `font.size.display` | `clamp(3rem, 8vw, 6.6rem)` | `0.92` | `900` | Landing hero |
| `font.size.pageTitle` | `clamp(2.4rem, 6vw, 5rem)` | `0.95` | `900` | Detail title |
| `font.size.sectionTitle` | `1.5rem` | `1.2` | `900` | Section headings |
| `font.size.cardTitle` | `1.25rem` | `1.25` | `900` | Problem cards |
| `font.size.bodyLg` | `1.125rem` | `1.75` | `400` | Intro copy |
| `font.size.body` | `1rem` | `1.8` | `400` | Markdown/body text |
| `font.size.caption` | `0.875rem` | `1.4` | `700` | Labels, metadata |

Rules:

- Letter spacing stays normal.
- Use `font-black` for major product labels and headings.
- Body text should be roomy enough for reading problem statements.
- Code uses monospace and should never wrap unless explicitly requested.

### Spacing And Layout

Spacing follows a practical 8pt rhythm with Tailwind-compatible values.

| Token | Value | Usage |
| --- | ---: | --- |
| `spacing.xs` | `4px` | Tiny icon gaps |
| `spacing.sm` | `8px` | Compact internal gaps |
| `spacing.md` | `16px` | Default padding/gaps |
| `spacing.lg` | `24px` | Card padding |
| `spacing.xl` | `32px` | Section grouping |
| `spacing.2xl` | `40px` | Page header gaps |
| `spacing.3xl` | `56px` | Large vertical rhythm |
| `spacing.4xl` | `64px` | Page-level separation |

Layout rules:

- Max content width: `max-w-6xl` for list and landing pages.
- Max detail width: `max-w-7xl` for split code/problem pages.
- Detail pages use a two-column split at `lg`; stack on smaller screens.
- Use 8px radius for cards and controls.
- Avoid nested cards. A section can contain cards, but a card should not contain
  another card unless it is a compact stat block.

Breakpoints:

| Breakpoint | Width | Usage |
| --- | ---: | --- |
| `sm` | `640px` | Two-column cards, denser spacing |
| `md` | `768px` | Expanded form/table patterns |
| `lg` | `1024px` | Split pages and dashboard side panels |
| `xl` | `1280px` | Wide page shells |

### Design Tokens

Token naming should be semantic first, then scale:

```ts
color.primary.500
color.background.surface
color.text.secondary
spacing.lg
radius.md
shadow.card
motion.duration.fast
```

Code-facing tokens live in `lib/design-tokens.ts`; CSS-facing tokens live in
`app/globals.css` as custom properties. When a value changes, update the token
first, then migrate component classes.

### Elevation And Shadows

Elevation should be soft and warm, with no heavy floating UI.

| Token | Value | Usage |
| --- | --- | --- |
| `shadow.sm` | `0 4px 14px rgba(45,38,25,0.06)` | Small pills and controls |
| `shadow.card` | `0 10px 30px rgba(45,38,25,0.06)` | Problem cards |
| `shadow.cardHover` | `0 16px 38px rgba(25,104,75,0.14)` | Hovered problem cards |
| `shadow.panel` | `0 24px 70px rgba(45,38,25,0.12)` | Large panels |
| `shadow.code` | `0 16px 44px rgba(17,23,19,0.18)` | Code panel |

### Motion Principles

Motion is functional and restrained.

| Token | Value | Usage |
| --- | ---: | --- |
| `motion.duration.fast` | `150ms` | Button hover, focus |
| `motion.duration.base` | `200ms` | Card hover, small reveals |
| `motion.duration.slow` | `320ms` | Modal entrance, page-level reveals |
| `motion.easing.standard` | `ease-out` | Default transitions |
| `motion.easing.emphasized` | `cubic-bezier(0.2, 0.8, 0.2, 1)` | Larger movement |

Rules:

- Hover lift should stay at `translateY(-1px)` to `translateY(-4px)`.
- Do not animate text size or layout-critical dimensions.
- Respect `prefers-reduced-motion` for future larger animations.

## Components

### Buttons

Primary button:

- Background: `color.primary.500`
- Text: white
- Hover: `color.primary.600`, lift `-1px`
- Focus: 3px outline using primary at 25% opacity
- Disabled: 50% opacity, no transform

Secondary button:

- Background: white
- Border: `color.border.default`
- Text: `color.primary.500`
- Hover: `color.background.surfaceAlt`, border primary

Text button:

- No fill
- Primary text
- Underline or arrow affordance for navigation

Loading button:

- Keep the label width stable.
- Add a small spinner or replace action text with a stable loading label.

### Inputs

Default input:

- Height: 44px minimum
- Radius: 8px
- Border: `color.border.default`
- Background: white
- Focus: primary outline and border
- Error: error border plus message below

Use clear labels above fields. Placeholder text should be optional, not the
only label.

### Dropdowns

- Trigger follows secondary button style.
- Menu background: white
- Menu border: `color.border.default`
- Active item: `color.primary.100`
- Keyboard navigation must support arrow keys, escape, and enter.

### Checkboxes And Radios

- 16px to 20px control size.
- Checked state uses `color.primary.500`.
- Focus state must be visible outside the control.
- Label click area should include the label text.

### Cards

Problem card:

- Radius: 8px
- Border: `color.border.default`
- Background: white
- Shadow: `shadow.card`
- Hover: border primary, surfaceAlt background, `shadow.cardHover`, lift
- Footer row separated by `color.border.subtle`

Stat card:

- Compact, 8px radius
- One large number or short word
- Supporting label below

Panel card:

- For large information regions like Practice Map or Requirements.
- Use `color.background.surface`, `shadow.panel`, and clear section headers.

### Modals

Future modal pattern:

- Centered max width, not full viewport on desktop.
- Backdrop: dark at 40% opacity.
- Trap focus inside modal.
- Escape closes unless destructive action is in progress.
- Primary action on the right, cancel/secondary on the left.

### Tables

Use tables for dense comparisons only.

- Header row: muted surface, bold labels.
- Row height: 48px minimum.
- Zebra striping only when rows are dense.
- Empty table state should explain what data is missing.

### Forms

Forms should be quiet and direct.

- Group fields into visible sections.
- Place validation messages near fields.
- Use a sticky action footer only for long forms.
- Preserve entered values when validation fails.

### Navigation Bars

Current nav is pill-based and contextual.

- Use `Home`, language list, and current-file badge.
- Keep actions in one row when possible; wrap on mobile.
- Current context badges use dark fill.

### States And Variants

Every interactive component needs:

- Default
- Hover
- Focus-visible
- Active/pressed
- Disabled
- Loading when async
- Error when input-driven

Focus states:

- 3px outline
- 3px offset
- Primary color at 25% opacity
- Must be visible on warm surfaces and dark surfaces

Accessibility:

- Use semantic elements: `button`, `a`, `nav`, `main`, `section`.
- Buttons perform actions; links navigate.
- Contrast target: WCAG AA for text and interactive labels.
- Do not rely on color alone for errors or selected states.

## Patterns

### Flows

Onboarding:

- Introduce available language sets.
- Show total problem count.
- Let users start with the largest or most familiar language.

Authentication:

- Not currently in product.
- If added, use a compact centered form with a calm explanatory header.
- Keep errors inline and actionable.

Checkout:

- Not currently in product.
- If ever needed, use a step-based layout with a persistent summary panel.

### Layouts

Landing dashboard:

- Hero statement on the left.
- Language cards directly below supporting copy.
- Practice map as a right-side visual summary on desktop.
- Stack naturally on mobile.

Language list page:

- Context nav at top.
- Header panel with problem count and language identity.
- Problem list grid with configurable progressive reveal.
- Footer comes from root layout.

Problem detail page:

- Context nav at top.
- Title panel.
- Two-column split on desktop:
  - Left: Markdown requirement
  - Right: highlighted solution code
- Stack on mobile with requirement first.

### Interaction Patterns

Progressive reveal:

- Use for long problem lists.
- Default configuration: show 12, reveal 12 more.
- Keep a visible count: “Showing X of Y challenges.”
- Hide the control when all items are visible.

Form validation:

- Validate on submit first, then on blur after first error.
- Error message format: short, specific, recoverable.
- Preserve user input.

Error handling:

- Use error color, an icon or label, and plain-language recovery.
- Avoid generic “Something went wrong” when a next action is known.

Empty states:

- State what is missing.
- Explain why it might be empty.
- Provide one primary next action.

Loading states:

- Keep layout dimensions stable.
- Prefer skeleton cards for lists.
- Use button loading labels for direct actions.

## Implementation Checklist

Before adding a new screen or component:

1. Use existing tokens before introducing new colors or shadows.
2. Keep cards at 8px radius.
3. Add hover and focus-visible states to every interactive element.
4. Check mobile stacking and text wrapping.
5. Confirm keyboard navigation works.
6. Prefer semantic HTML before adding extra ARIA.
7. Run `npm run build`.
