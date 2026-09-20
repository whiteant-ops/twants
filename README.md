<div align="center">

# TWANTS

**A Modern Tailwind UI System for Everywhere.**

[![Docs](https://img.shields.io/badge/docs-whiteant--ops.github.io-2563eb?logo=readthedocs&logoColor=white)](https://whiteant-ops.github.io/twants/)
[![npm](https://img.shields.io/npm/v/twants?logo=npm&color=cb3837)](https://www.npmjs.com/package/twants)
[![CI](https://github.com/whiteant-ops/twants/actions/workflows/ci.yml/badge.svg)](https://github.com/whiteant-ops/twants/actions/workflows/ci.yml)
[![Deploy Docs](https://github.com/whiteant-ops/twants/actions/workflows/deploy-docs.yml/badge.svg)](https://github.com/whiteant-ops/twants/actions/workflows/deploy-docs.yml)

Framework-agnostic · Tailwind CSS v4 · Vite · WinUI/Fluent-inspired · components

</div>

---

## Overview

TWANTS (**Tailwind + Ants**) is a portable UI layer that works across Laravel, Django, Tauri, Wails, React, Vue, Svelte, Vanilla JS, and any environment that renders HTML. Components are pure HTML + CSS + semantic tokens, with minimal, optional JavaScript for interactive behaviors (modals, dropdowns, toasts, command palette, tabs).

## Features

- 🎨 **components support** — buttons, forms, navigation, data display, feedback, layout, media, and desktop-style chrome
- 🌗 **Light / Dark / System themes** — driven entirely by CSS variables
- 🪄 **WinUI / Fluent-inspired** — Mica, Acrylic, layered surfaces, subtle shadows, compact controls
- 🧩 **Framework-agnostic** — copy a class into any template; nothing is bound to a runtime
- ♿ **Accessible** — semantic HTML, keyboard navigation, visible focus states, ARIA roles
- 🎛 **Customizable** — override tokens globally; no hard-coded colors inside components
- 🪶 **Zero dependencies** for the CSS layer; JavaScript is tree-shakeable

## Installation

```bash
npm install twants
```

Then import the stylesheet once, anywhere in your app:

```ts
import "twants/styles";
```

Or pick granular entry points:

```ts
import "twants/tokens";
import "twants/theme";
import "twants/components";
```

## Quick start

```html
<button class="twants-button twants-button-primary">Save changes</button>

<div class="twants-card">
  <div class="twants-card-header">
    <div class="twants-card-title">Welcome</div>
  </div>
  <div class="twants-card-body">
    TWANTS is ready to use.
  </div>
  <div class="twants-card-footer">
    <button class="twants-button">Cancel</button>
    <button class="twants-button twants-button-primary">Continue</button>
  </div>
</div>
```

Enable theme switching:

```ts
import { ThemeSwitcher } from "twants";
ThemeSwitcher.init();
ThemeSwitcher.set("dark"); // "light" | "dark" | "system"
```

## Theming

Override a single CSS variable to re-skin the entire system:

```html
<html style="--twants-primary: #7c3aed; --twants-radius: 8px;">
```

Key tokens: `--twants-primary`, `--twants-surface`, `--twants-border`, `--twants-radius`, `--twants-shadow`, `--twants-font-sans`, `--twants-focus-ring`.

## Component list

<details>
<summary>Foundations</summary>

Colors · Typography · Icons · Spacing · Shadows · Borders · Radius · Surfaces · Dividers · Theme system
</details>

<details>
<summary>Buttons & actions</summary>

Button · Icon button · Button group · Split button · Floating action button · Toggle button · Link button · Command button
</details>

<details>
<summary>Forms</summary>

Input · Textarea · Select · Multi select · Checkbox · Radio · Switch · Slider · Range slider · Date picker · Time picker · Search · File upload · Form field · Input group · Password · OTP
</details>

<details>
<summary>Navigation</summary>

Navbar · Sidebar · Breadcrumb · Tabs · Vertical tabs · Pagination · Stepper · Menu · Context menu · Command palette · Bottom nav
</details>

<details>
<summary>Data display</summary>

Card · Stat card · Table · Data grid · List · List item · Avatar · Avatar group · Badge · Chip · Tag · Progress · Circular progress · Timeline · Empty state
</details>

<details>
<summary>Feedback</summary>

Alert · Toast · Notification · Tooltip · Popover · Modal · Dialog · Confirm dialog · Drawer · Loading · Skeleton · Error state
</details>

<details>
<summary>Layout</summary>

Container · Stack · Grid · Split pane · Resizable panel · Accordion · Collapsible · Scroll area · Aspect ratio
</details>

<details>
<summary>Media</summary>

Image · Gallery · Carousel · Video player · Audio player
</details>

<details>
<summary>Advanced UI</summary>

Calendar · Kanban · Tree view · File explorer · Activity feed · Command bar · Toolbar · Rich text toolbar · Dashboard layout · App frame · Title bar · Status bar · Settings panel
</details>

## Framework compatibility

| Ecosystem | Status | Example |
|---|---|---|
| Vanilla JS + Vite | ✅ | [examples/vanilla](./examples/vanilla/index.html) |
| Laravel + Blade | ✅ | [examples/laravel](./examples/laravel/README.md) |
| Django Templates | ✅ | [examples/django](./examples/django/README.md) |
| Tauri | ✅ | [examples/tauri](./examples/tauri/README.md) |
| Wails | ✅ | [examples/wails](./examples/wails/README.md) |
| React / Vue / Svelte | ✅ | Use class names directly |

## Documentation

Local docs live in `docs/`. Run:

```bash
npm run docs
```

Online documentation: https://whiteant-ops.github.io/twants/

| Resource | URL |
|---|---|
| Repository | https://github.com/whiteant-ops/twants |
| Components | https://whiteant-ops.github.io/twants/docs/components/button |
| Wiki | https://github.com/whiteant-ops/twants/wiki |
| Issues | https://github.com/whiteant-ops/twants/issues |
| Releases | https://github.com/whiteant-ops/twants/releases |

## Development

```bash
git clone https://github.com/whiteant-ops/twants.git
cd twants
npm install
npm run dev        # opens the playground
npm run docs       # opens the documentation
npm run build
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

[MIT](./LICENSE) © TWANTS Contributors


## A Note on Extensibility

A future CLI can be added with:

```bash
npx twants add button
npx twants add modal
```

The architecture already supports this — every component's styles are grouped under a discrete class namespace (`.twants-button`, `.twants-modal`, …), and each interactive module is a self-contained file. A CLI stub in `cli/twants.mjs` can fetch component slices from the repo and print them into the user's project without changing the core library.

Secondary distribution beyond npm:

- **Laravel / PHP** → a thin `twants-laravel` Composer package that re-exports the npm assets (Packagist).
- **Django** → a `twants-django` Python package that ships the built CSS as a static file (PyPI).

The **core stays npm + Vite + Tailwind v4**, framework-agnostic — exactly as specified.