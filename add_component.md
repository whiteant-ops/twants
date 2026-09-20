# TWANTS Component Plan

> Rencana pembuatan ~64 komponen UI. Setiap komponen: CSS class + optional JS module + docs page.

## Status Legend

| Status | Arti |
|---|---|
| ✅ Done | Sudah ada di `src/styles/components.css` + docs |
| 🔧 Partial | CSS ada, docs/JS belum lengkap |
| 📋 Planned | Belum dikerjakan |
| ⏳ Blocked | Tergantung komponen lain |

---

## v0.1.0 — Foundations (Current)

> **Goal:** Core primitives yang semua komponen lain depends on.

| # | Component | CSS | JS | Docs | Priority |
|---|---|---|---|---|---|
| 1 | **Button** | ✅ | — | ✅ | P0 |
| 2 | **Badge** | ✅ | — | ✅ | P0 |
| 3 | **Separator** | ✅ | — | ✅ | P0 |
| 4 | **Label** | ✅ | — | ✅ | P0 |
| 5 | **Typography** | ✅ | — | ✅ | P0 |
| 6 | **Skeleton** | ✅ | — | ✅ | P1 |
| 7 | **Spinner** | ✅ | — | ✅ | P1 |
| 8 | **Kbd** | ✅ | — | ✅ | P2 |
| 9 | **Empty** | ✅ | — | ✅ | P2 |

### v0.1.0 Deliverables
- [x] `src/styles/components.css` — all foundation classes
- [x] `docs/docs/components/button.md` — reference doc
- [x] Add docs for Badge, Separator, Label, Typography, Skeleton, Spinner, Kbd, Empty
- [x] Each doc page uses `<Preview>` + `<PropsTable>` pattern

---

## v0.2.0 — Forms

> **Goal:** Complete form control set. All inputs share `Field` wrapper pattern.

| # | Component | CSS | JS | Docs | Priority | Depends |
|---|---|---|---|---|---|---|
| 10 | **Field** | ✅ | — | ✅ | P0 | — |
| 11 | **Input** | ✅ | — | ✅ | P0 | Field |
| 12 | **Textarea** | ✅ | — | ✅ | P0 | Field |
| 13 | **Select** | ✅ | — | ✅ | P0 | Field |
| 14 | **Native Select** | ✅ | — | ✅ | P1 | Field |
| 15 | **Checkbox** | ✅ | — | ✅ | P0 | Field |
| 16 | **Radio Group** | ✅ | — | ✅ | P0 | Field |
| 17 | **Switch** | ✅ | — | ✅ | P0 | Field |
| 18 | **Slider** | ✅ | — | ✅ | P1 | Field |
| 19 | **Input OTP** | ✅ | — | ✅ | P2 | Input |
| 20 | **Input Group** | ✅ | — | ✅ | P1 | Input |
| 21 | **Combobox** | ✅ | ✅(dropdown) | ✅ | P1 | Input, Dropdown |
| 22 | **Calendar** | ✅ | — | ✅ | P2 | — |
| 23 | **Date Picker** | ✅ | — | ✅ | P2 | Calendar, Input |

### v0.2.0 Deliverables
- [x] `Field` component — wrapper with label, helper, error states
- [x] All form controls use `--twants-*` tokens
- [x] Keyboard navigation for Radio Group, Select
- [x] ARIA attributes on all interactive elements

---

## v0.3.0 — Navigation

> **Goal:** App chrome — sidebar, tabs, breadcrumbs, pagination.

| # | Component | CSS | JS | Docs | Priority | Depends |
|---|---|---|---|---|---|---|
| 24 | **Tabs** | ✅ | ✅ | ✅ | P0 | — |
| 25 | **Breadcrumb** | ✅ | — | ✅ | P0 | — |
| 26 | **Pagination** | ✅ | — | ✅ | P1 | — |
| 27 | **Navigation Menu** | ✅ | — | ✅ | P1 | — |
| 28 | **Menubar** | ✅ | — | ✅ | P2 | — |
| 29 | **Sidebar** | ✅ | — | ✅ | P1 | — |
| 30 | **Command** | ✅ | ✅(command-palette) | ✅ | P1 | — |
| 31 | **Item** | ✅ | — | ✅ | P1 | — |

### v0.3.0 Deliverables
- [x] Tabs docs page
- [x] Breadcrumb, Pagination, Navigation Menu classes
- [x] Sidebar component with collapse/expand
- [x] Command palette with search + keyboard nav

---

## v0.4.0 — Data Display

> **Goal:** Show data in cards, tables, lists.

| # | Component | CSS | JS | Docs | Priority | Depends |
|---|---|---|---|---|---|---|
| 32 | **Card** | ✅ | — | ✅ | P0 | — |
| 33 | **Table** | ✅ | — | ✅ | P0 | — |
| 34 | **Data Table** | ✅ | — | ✅ | P1 | Table |
| 35 | **Accordion** | ✅ | — | ✅ | P1 | — |
| 36 | **Collapsible** | ✅ | — | ✅ | P1 | — |
| 37 | **Avatar** | ✅ | — | ✅ | P1 | — |
| 38 | **Marker** | ✅ | — | ✅ | P2 | — |

### v0.4.0 Deliverables
- [x] Card docs page
- [x] Table with sorting, striped, bordered variants
- [x] Data Table with pagination + filter
- [x] Accordion with animation

---

## v0.5.0 — Feedback

> **Goal:** User notifications and overlays.

| # | Component | JS | CSS | Docs | Priority | Depends |
|---|---|---|---|---|---|---|
| 39 | **Toast** | ✅ | ✅ | ✅ | P0 | — |
| 40 | **Alert** | ✅(CSS) | ✅ | ✅ | P0 | — |
| 41 | **Dialog** | ✅(modal) | ✅ | ✅ | P0 | — |
| 42 | **Alert Dialog** | ✅ | ✅ | ✅ | P1 | Dialog |
| 43 | **Popover** | ✅ | ✅ | ✅ | P1 | — |
| 44 | **Tooltip** | ✅ | ✅ | ✅ | P0 | — |
| 45 | **Hover Card** | ✅ | ✅ | ✅ | P2 | Popover |
| 46 | **Sheet** | ✅ | ✅ | ✅ | P1 | Dialog |
| 47 | **Drawer** | ✅ | ✅ | ✅ | P1 | Sheet |
| 48 | **Progress** | ✅ | ✅ | ✅ | P1 | — |
| 49 | **Message** | 📋 | ✅ | ✅ | P1 | — |
| 50 | **Message Scroller** | 📋 | ✅ | ✅ | P2 | Message |

### v0.5.0 Deliverables
- [x] Toast docs
- [x] Alert docs (info/success/warning/danger variants)
- [x] Dialog (modal) docs
- [x] Tooltip, Popover positioning
- [x] Sheet (slide-in panel), Drawer

---

## v0.6.0 — Overlay & Advanced

> **Goal:** Complex interactive overlays.

| # | Component | CSS | JS | Docs | Priority | Depends |
|---|---|---|---|---|---|---|
| 51 | **Dropdown Menu** | ✅ | ✅(dropdown) | ✅ | P0 | — |
| 52 | **Context Menu** | ✅ | 📋 | ✅ | P1 | Dropdown |
| 53 | **Resizable** | ✅ | 📋 | ✅ | P2 | — |
| 54 | **Scroll Area** | ✅ | 📋 | ✅ | P1 | — |
| 55 | **Carousel** | ✅ | 📋 | ✅ | P2 | — |
| 56 | **Toggle** | ✅ | 📋 | ✅ | P1 | Button |
| 57 | **Toggle Group** | ✅ | 📋 | ✅ | P1 | Toggle |
| 58 | **Questionnaire** | ✅ | 📋 | ✅ | P2 | — |

---

## v0.7.0 — Desktop & Specialized

> **Goal:** WinUI-inspired desktop chrome + specialized components.

| # | Component | CSS | JS | Docs | Priority | Depends |
|---|---|---|---|---|---|---|
| 59 | **Attachment** | ✅ | 📋 | ✅ | P2 | — |
| 60 | **Aspect Ratio** | ✅ | — | ✅ | P2 | — |
| 61 | **Bubble** | ✅ | 📋 | ✅ | P2 | — |
| 62 | **Chart** | ✅ | 📋 | ✅ | P2 | — |
| 63 | **Direction** | ✅ | — | ✅ | P2 | — |
| 64 | **Item** (enhanced) | 📋 | 📋 | 📋 | P2 | — |

---

## Component Architecture

### CSS Component Pattern

```css
/* Every component follows this structure */
.twants-{component} { /* base */ }
.twants-{component}-{variant} { /* variant modifiers */ }
.twants-{component}--{size} { /* size modifiers */ }
.twants-{component}[data-state="open"] { /* state attributes */ }
.twants-{component}:disabled { /* disabled state */ }
.twants-{component}:focus-visible { /* focus ring */ }
```

### JS Component Pattern

```typescript
// Interactive components use this pattern
interface ComponentOptions {
  /** CSS selector or element */
  target: string | HTMLElement;
  /** Controlled state */
  open?: boolean;
  /** Callback when state changes */
  onToggle?: (open: boolean) => void;
}

// Init pattern
Component.init(options);
// Or declarative
<Component data-state="open" />
```

### Doc Page Template

```md
---
title: {Component Name}
---

# {Component Name}

Brief description.

## Variants

<Preview code={`...`}>
  <Component variants />
</Preview>

## Sizes

<Preview code={`...`}>
  <Component sizes />
</Preview>

## States

<Preview code={`...`}>
  <Component states />
</Preview>

## Props

<PropsTable rows={[...]} />

## Accessibility

- ARIA attributes
- Keyboard navigation
- Focus management
```

---

## Priority Matrix

| Priority | Components | Count |
|---|---|---|
| **P0** (Critical) | Button, Badge, Separator, Label, Typography, Field, Input, Textarea, Select, Checkbox, Radio Group, Switch, Tabs, Breadcrumb, Card, Table, Toast, Alert, Dialog, Tooltip, Dropdown Menu | 21 |
| **P1** (Important) | Skeleton, Spinner, Slider, Input Group, Combobox, Pagination, Navigation Menu, Sidebar, Command, Item, Data Table, Accordion, Collapsible, Avatar, Alert Dialog, Popover, Sheet, Drawer, Progress, Message, Scroll Area, Toggle, Toggle Group | 23 |
| **P2** (Nice to have) | Kbd, Empty, Input OTP, Calendar, Date Picker, Menubar, Marker, Hover Card, Message Scroller, Resizable, Carousel, Questionnaire, Attachment, Aspect Ratio, Bubble, Chart, Direction | 17 |

---

## GitHub Project Labels

Labels untuk issue tracking:

| Label | Color | Used for |
|---|---|---|
| `component` | `#5319e7` | New/updated component |
| `component:css` | `#7057ff` | CSS-only component |
| `component:js` | `#0e8a16` | JS interactive component |
| `component:docs` | `#0075ca` | Documentation for component |
| `component:a11y` | `#fbca04` | Accessibility work |
| `p0` | `#b60205` | Critical priority |
| `p1` | `#d93f0b` | Important priority |
| `p2` | `#fbca04` | Nice to have |
| `area:forms` | `#cfd3d7` | Form components |
| `area:nav` | `#cfd3d7` | Navigation components |
| `area:data` | `#cfd3d7` | Data display components |
| `area:feedback` | `#cfd3d7` | Feedback/overlay components |

---

## Workflow per Component

1. **Design** — Token decisions, class naming, variant list
2. **CSS** — Add classes to `src/styles/components.css`
3. **JS** (if needed) — Create `src/components/{name}/index.ts`
4. **Docs** — Create `docs/docs/components/{name}.md`
5. **Preview** — Test in docs site with `<Preview>`
6. **PR** — Label: `component`, assign milestone
7. **Release** — Changelog entry, version bump
