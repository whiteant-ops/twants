# TWANTS — Handoff Document

> Dokumen ini merangkum seluruh state project TWANTS per **20 September 2026**.
> Tujuan: agar siapa pun (atau session baru) bisa melanjutkan tanpa kehilangan konteks.

---

## 1. Apa Itu TWANTS?

**TWANTS** (TWents Ants) adalah **framework-agnostic Tailwind CSS v4 UI component library** yang terinspirasi dari WinUI / Fluent Design.

- **npm package**: `twants` (v1.0.0)
- **GitHub**: `whiteant-ops/twants`
- **Docs site**: `https://whiteant-ops.github.io/twants/`
- **License**: MIT

### Filosofi

- **CSS-first** — Semua komponen diimplementasikan sebagai CSS classes, bukan JS framework.
- **Framework-agnostic** — Bisa dipakai di React, Vue, Svelte, Laravel, Django, Tauri, Wails, atau vanilla HTML.
- **Design tokens** — Semua warna, radius, font, spacing pakai CSS custom properties.
- **Tailwind v4 bridge** — Token TWANTS otomatis jadi Tailwind utilities (contoh: `bg-twants-surface`).

---

## 2. Project Structure

```
twants/
├── src/                          # Source code library
│   ├── index.ts                  # Entry point (re-exports everything)
│   ├── styles/
│   │   ├── index.css             # Main CSS (imports tokens + theme + components + Tailwind bridge)
│   │   ├── tokens.css            # Design tokens (colors, spacing, radius, fonts)
│   │   ├── theme.css             # Light/dark theme definitions
│   │   └── components.css        # Semua 64 komponen CSS classes (87.5 kB)
│   ├── components/               # JS components (optional interactivity)
│   │   ├── index.ts              # Re-exports all JS components
│   │   ├── command-palette/      # CommandPalette.init()
│   │   ├── dropdown/             # Dropdown.init()
│   │   ├── modal/                # Modal.init()
│   │   ├── tabs/                 # Tabs.init()
│   │   ├── theme-switcher/       # ThemeSwitcher.init()
│   │   └── toast/                # Toast.init(), Toast.show()
│   ├── icons/
│   │   └── index.ts              # 30 SVG icons (check, close, search, etc.)
│   ├── utilities/
│   │   └── cn.ts                 # clsx + twMerge utility
│   └── styles.d.ts               # CSS module type declaration
│
├── cli/
│   └── twants.mjs                # CLI tool (init, tokens, version, help)
│
├── docs/                         # Docusaurus documentation site
│   ├── docs/
│   │   ├── components/           # 66 komponen doc pages (.md)
│   │   ├── examples/             # 5 example pages (dashboard, login, register, otp, forgot-password)
│   │   ├── getting-started/      # installation.md, quick-start.md
│   │   ├── design/               # tokens.md, themes.md, accessibility.md
│   │   ├── integrations/         # laravel, django, tauri, wails, vanilla
│   │   └── ...
│   ├── src/
│   │   ├── components/           # ComponentPreview, PropsTable, ThemeToggle
│   │   ├── theme/                # MDXComponents, Navbar, Root
│   │   ├── css/                  # docs-specific CSS
│   │   └── pages/                # Landing page
│   ├── static/img/               # Logo, OG image
│   ├── sidebars.ts               # Sidebar config
│   └── docusaurus.config.ts      # Site config
│
├── demo/
│   ├── index.html                # Live demo page
│   └── main.ts                   # Demo script
│
├── examples/                     # Framework integration examples
│   ├── vanilla/index.html
│   ├── django/README.md
│   ├── laravel/README.md
│   ├── tauri/README.md
│   └── wails/README.md
│
├── .github/
│   ├── workflows/
│   │   ├── ci.yml                # CI build
│   │   ├── deploy-docs.yml       # Auto-deploy docs
│   │   ├── publish.yml           # npm publish (manual)
│   │   ├── labels.yml            # Sync labels
│   │   └── release-drafter.yml   # Release notes
│   ├── ISSUE_TEMPLATE/           # Bug report, feature request
│   ├── PULL_REQUEST_TEMPLATE.md
│   ├── CODEOWNERS
│   ├── dependabot.yml
│   ├── labels.yml
│   └── release-drafter.yml
│
├── .dont-touch/                  # Reference docs (don't modify directly)
│   ├── doc.md                    # Component creation guide
│   ├── doc_update.md             # Update workflow
│   └── remote_todo.md            # Remote/GitHub setup notes
│
├── package.json                  # Root package config
├── tsconfig.json                 # TypeScript config (dev)
├── tsconfig.build.json           # TypeScript config (build declarations)
├── vite.config.ts                # Vite build config
├── add_component.md              # Master component plan (64 components, all ✅)
├── README.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
├── CHANGELOG.md
└── LICENSE
```

---

## 3. Build System

### Commands

| Command | Description |
|---|---|
| `npm run build` | Clean dist → Vite build → Generate .d.ts declarations |
| `npm run typecheck` | TypeScript type checking (no emit) |
| `npm run dev` | Vite dev server (port 5173) |
| `npm run demo` | Open demo page |
| `npm run preview` | Preview production build |
| `cd docs && npm run build` | Build documentation site |
| `cd docs && npm run start` | Docusaurus dev server |

### Build Pipeline

```
npm run build
  │
  ├── 1. Clean dist/ folder
  ├── 2. vite build → dist/index.js, dist/index.css, dist/index.js.map
  └── 3. tsc --project tsconfig.build.json → dist/**/*.d.ts
```

### Package Output (`npm pack --dry-run`)

| File | Size | Description |
|---|---|---|
| `dist/index.js` | 11.1 kB | ES module bundle |
| `dist/index.css` | 87.6 kB | All component CSS (gzip: 13.6 kB) |
| `dist/index.d.ts` | 195 B | Type declarations entry |
| `dist/icons/index.d.ts` | 1.0 kB | Icon type declarations |
| `dist/components/*.d.ts` | ~2.0 kB | Component type declarations |
| `dist/index.js.map` | 22.7 kB | Source map |
| `src/styles/*.css` | ~100 kB | CSS source (for `twants/styles` import) |
| `cli/twants.mjs` | 2.6 kB | CLI tool |
| **Total** | **46.8 kB** compressed | 32 files |

### Package Exports

```json
{
  ".": { "types": "./dist/index.d.ts", "import": "./dist/index.js" },
  "./styles": "./src/styles/index.css",
  "./tokens": "./src/styles/tokens.css",
  "./theme": "./src/styles/theme.css",
  "./components": "./src/styles/components.css",
  "./icons": { "types": "./dist/icons/index.d.ts", "import": "./dist/icons/index.js" }
}
```

### Consumer Usage

```bash
npm install twants
```

```css
/* Import semua */
@import "twants/styles";

/* Atau import terpisah */
@import "twants/tokens";
@import "twants/theme";
@import "twants/components";
```

```typescript
/* Import JS components */
import { Toast, Modal, Dropdown } from "twants";
```

---

## 4. Component Library — 64 Components

### Status: ✅ ALL COMPLETE

| Category | Count | Components |
|---|---|---|
| **Foundations** | 9 | Button, Badge, Separator, Label, Typography, Skeleton, Spinner, Kbd, Empty |
| **Forms** | 14 | Field, Input, Textarea, Select, Native Select, Checkbox, Radio Group, Switch, Slider, Input OTP, Input Group, Combobox, Calendar, Date Picker |
| **Navigation** | 8 | Tabs, Breadcrumb, Pagination, Navigation Menu, Menubar, Sidebar, Stepper, Tree |
| **Data Display** | 8 | Table, Data Table, Card, Avatar, Accordion, Collapsible, Toggle Group, Icon |
| **Feedback** | 12 | Alert, Alert Dialog, Toast, Dialog, Progress, Tooltip, Popover, Context Menu, Hover Card, Message, Bubble, Attachment |
| **Overlay** | 8 | Sheet, Drawer, Modal, Dropdown Menu, Command, Resizable, Scroll Area, Aspect Ratio |
| **Media** | 3 | Image, Carousel, Container |
| **Date & Time** | 2 | Calendar, Date Picker |
| **Other** | 10 | Grid, Direction, RTL/LTR, Marker, Message Scroller, Questionnaire, Empty, etc. |

### CSS Naming Convention

```css
.twants-{component}              /* Base: .twants-button */
.twants-{component}-{variant}   /* Variant: .twants-button-primary */
.twants-{component}--{size}     /* Size: .twants-button--sm */
.twants-{component}-{state}    /* State: .twants-input-invalid */
```

### JS Components (6 interactive modules)

| Component | API | Description |
|---|---|---|
| Toast | `Toast.init(el, opts)`, `Toast.show(msg, type)` | Toast notifications |
| Modal | `Modal.init(el, opts)` | Modal dialog |
| Dropdown | `Dropdown.init(el, opts)` | Dropdown menu |
| Tabs | `Tabs.init(el, opts)` | Tab switching |
| CommandPalette | `CommandPalette.init(el, opts)` | Command palette / search |
| ThemeSwitcher | `ThemeSwitcher.init(el)` | Light/dark mode toggle |

### Documentation Pages: 66 component pages + 5 example pages

---

## 5. GitHub Setup

### Repository: `whiteant-ops/twants`

| Feature | Status |
|---|---|
| Branch protection (main) | ✅ Requires PR |
| Topics | ✅ 14 topics |
| Wiki | ✅ 27 pages |
| Discussions | ✅ 8 categories + 1 post |
| Milestones | ✅ 4 (v1.0, v1.1, v2.0, Backlog) |
| Projects Roadmap | ✅ 72 items, 64 Done |
| Issue templates | ✅ Bug + Feature |
| PR template | ✅ |
| CODEOWNERS | ✅ |
| Dependabot | ✅ |
| Labels workflow | ✅ |
| Private vulnerability reporting | ✅ |
| OG image | ✅ |

### GitHub Actions

| Workflow | Trigger | Description |
|---|---|---|
| `ci.yml` | Push/PR | Build + typecheck |
| `deploy-docs.yml` | Push to main | Auto-deploy docs to GitHub Pages |
| `publish.yml` | Manual | npm publish (requires OTP) |
| `labels.yml` | Push to .github/labels.yml | Sync GitHub labels |
| `release-drafter.yml` | Push to main | Auto-draft release notes |

---

## 6. Publishing to npm

### Prerequisites

- npm account with 2FA enabled
- `NPM_TOKEN` secret in GitHub repo (for CI publish)

### Manual Publish

```bash
# 1. Login
npm login

# 2. Build (auto-runs via prepublishOnly)
npm run build

# 3. Publish (will prompt for OTP)
npm publish

# 4. Enter OTP from authenticator app
```

### Version Bump

```bash
# Patch (1.0.0 → 1.0.1)
npm version patch

# Minor (1.0.0 → 1.1.0)
npm version minor

# Major (1.0.0 → 2.0.0)
npm version major
```

### CI Publish (GitHub Actions)

Trigger `publish.yml` workflow manually from GitHub Actions tab. Requires `NPM_TOKEN` secret.

---

## 7. Design Token System

### File: `src/styles/tokens.css`

All design decisions are centralized as CSS custom properties:

```css
:root {
  /* Colors */
  --twants-primary: oklch(0.55 0.18 260);
  --twants-foreground: oklch(0.15 0.02 260);
  --twants-surface: oklch(1.0 0 0);
  --twants-border: oklch(0.88 0.01 260);

  /* Radius */
  --twants-radius: 0.5rem;
  --twants-radius-sm: 0.25rem;
  --twants-radius-lg: 0.75rem;

  /* Typography */
  --twants-font-sans: "Inter", system-ui, sans-serif;
  --twants-text-sm: 0.875rem;
  --twants-text-base: 1rem;

  /* Animation */
  --twants-duration-fast: 150ms;
  --twants-ease-standard: cubic-bezier(0.2, 0, 0, 1);
}
```

### File: `src/styles/theme.css`

Light and dark themes via `[data-theme]` attribute:

```css
[data-theme="light"] { ... }
[data-theme="dark"] { ... }
@media (prefers-color-scheme: dark) { ... }
```

### Tailwind v4 Bridge (`src/styles/index.css`)

TWANTS tokens are automatically available as Tailwind utilities:

```html
<div class="bg-twants-surface text-twants-foreground border-twants-border">
  <!-- These map to CSS custom properties -->
</div>
```

---

## 8. Known Issues & Gotchas

### 1. Docusaurus MDX + Inline Styles
MDX treats HTML as JSX — `style="..."` strings **don't work**. Must use:
```jsx
<div style={{background:"var(--twants-surface)"}}>
```
Not: `<div style="background:var(--twants-surface)">`

### 2. SVG Attributes in MDX
JSX requires camelCase: `stroke-width` → `strokeWidth`, `stroke-linecap` → `strokeLinecap`.

### 3. Build Order Matters
Vite cleans `dist/` before building. Declarations must be generated **after** Vite build:
```
clean → vite build → tsc declarations
```

### 4. CSS Class Double Border Bug
The input focus state had `box-shadow: 0 0 0 1px` + `border-color` causing double border. Fixed by using single `box-shadow: 0 0 0 2px color-mix(...)`.

### 5. GitHub Branch Protection
Direct push to `main` is blocked by branch protection. All pushes bypass via "bypassed rule violations" (admin bypass enabled).

---

## 9. Next Steps (Tahap Selanjutnya)

### Priority 1: npm Publish
- [ ] `npm login` → `npm publish` → Enter OTP
- [ ] Verify package on npmjs.com
- [ ] Test `npm install twants` in a fresh project

### Priority 2: More JS Components
Currently only 6 of 64 components have JS interactivity. Candidates:
- [ ] **Accordion** — expand/collapse with smooth animation
- [ ] **Carousel** — slide navigation
- [ ] **Collapsible** — show/hide content
- [ ] **Stepper** — multi-step form wizard
- [ ] **Resizable** — draggable split panes
- [ ] **Scroll Area** — custom scrollbar
- [ ] **Command** — search/filter list
- [ ] **ContextMenu** — right-click menu
- [ ] **HoverCard** — hover popup
- [ ] **Message** — chat message component
- [ ] **Questionnaire** — form builder

### Priority 3: Framework-Specific Packages
- [ ] `@twants/react` — React wrapper components (with hooks)
- [ ] `@twants/vue` — Vue wrapper components
- [ ] `@twants/svelte` — Svelte wrapper components

### Priority 4: CLI Enhancement
Current CLI (`cli/twants.mjs`) supports: `init`, `tokens`, `version`, `help`

Enhancement ideas:
- [ ] `twants add <component>` — Add specific component CSS to project
- [ ] `twants doctor` — Check project setup
- [ ] `twants tokens --format json` — Export tokens in different formats
- [ ] `twants generate` — Scaffold new component

### Priority 5: Testing
- [ ] Unit tests for JS components (Vitest)
- [ ] Visual regression tests (Storybook or Chromatic)
- [ ] Accessibility audits (axe-core)
- [ ] Cross-browser testing

### Priority 6: Advanced Features
- [ ] CSS minification (lightningcss)
- [ ] Tree-shaking for CSS (only include used components)
- [ ] Figma design token export
- [ ] Storybook integration
- [ ] i18n support (RTL layouts)

---

## 10. Quick Reference

### Key Files to Know

| File | Purpose |
|---|---|
| `add_component.md` | Master plan — all 64 components with status |
| `src/styles/components.css` | All CSS classes (single source of truth) |
| `src/styles/tokens.css` | Design tokens |
| `src/styles/theme.css` | Light/dark themes |
| `src/index.ts` | Library entry point |
| `package.json` | npm config, scripts, exports |
| `tsconfig.build.json` | Declaration generation config |
| `docs/sidebars.ts` | Documentation sidebar |
| `.github/workflows/publish.yml` | npm publish workflow |

### Git Convention

```
feat(scope): description     — New feature
fix(scope): description      — Bug fix
docs(scope): description     — Documentation
chore(scope): description    — Maintenance
```

Scopes: `forms`, `navigation`, `feedback`, `overlay`, `media`, `complete`, `build`, `security`, `examples`

### Build Verification

```bash
# Always run before commit
npm run build              # Root library
cd docs && npm run build   # Documentation site
```

---

*Document generated: 20 September 2026*
*TWANTS v1.0.0 — 64 components, 66 doc pages, 5 examples*
