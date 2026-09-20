# TWANTS — Deploy ke GitHub (username: `whiteant-ops`)

Semua URL sekarang konkret. Tidak ada server, tidak ada domain, tidak ada DNS. Cukup push ke GitHub, sisanya otomatis.

## URL Final

| Layanan | URL |
|---|---|
| Repo | `https://github.com/whiteant-ops/twants` |
| Docs (Pages) | `https://whiteant-ops.github.io/twants/` |
| Wiki | `https://github.com/whiteant-ops/twants/wiki` |
| Roadmap (Projects) | `https://github.com/whiteant-ops/twants/projects` |
| Discussions | `https://github.com/whiteant-ops/twants/discussions` |
| Issues | `https://github.com/whiteant-ops/twants/issues` |
| Releases | `https://github.com/whiteant-ops/twants/releases` |
| npm | `https://www.npmjs.com/package/twants` |

**Penting:** karena ini **project repo** (bukan `whiteant-ops.github.io`), Pages dilayani di `https://whiteant-ops.github.io/twants/` — jadi `baseUrl` **harus** `/twants/`. Ini penyebab #1 build Docusaurus muncul blank.

---

## 1. `docs/docusaurus.config.ts`

```ts
import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const GH_USER = "whiteant-ops";
const GH_REPO = "twants";
const GH_URL  = `https://github.com/${GH_USER}/${GH_REPO}`;
const SITE_URL = `https://${GH_USER}.github.io`;
const BASE_URL = `/${GH_REPO}/`;        // ← wajib ada trailing slash

const config: Config = {
  title: "TWANTS",
  tagline: "A Modern Tailwind UI System for Everywhere.",
  favicon: "img/logo.svg",

  url: SITE_URL,
  baseUrl: BASE_URL,
  organizationName: GH_USER,
  projectName: GH_REPO,
  trailingSlash: false,

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: { defaultLocale: "en", locales: ["en"] },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: `${GH_URL}/tree/main/docs/`,
          routeBasePath: "docs",
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: false,
        theme: {
          customCss: [
            "./src/css/tokens.css",
            "./src/css/theme.css",
            "./src/css/components.css",
            "./src/css/custom.css",
          ],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/og.png",
    colorMode: {
      defaultMode: "system",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    metadata: [
      { name: "keywords", content: "tailwind, ui, winui, fluent, design-system, laravel, django, tauri, wails" },
      { property: "og:type", content: "website" },
    ],
    navbar: {
      title: "TWANTS",
      logo: { alt: "TWANTS", src: "img/logo.svg", srcDark: "img/logo-dark.svg" },
      hideOnScroll: false,
      items: [
        { type: "docSidebar", sidebarId: "docs", position: "left", label: "Docs" },
        { to: "/docs/components/button", label: "Components", position: "left" },
        { to: "/docs/integrations/vanilla", label: "Integrations", position: "left" },
        { href: `${GH_URL}/wiki`,     label: "Wiki",    position: "right" },
        { href: `${GH_URL}/projects`, label: "Roadmap", position: "right" },
        {
          href: GH_URL,
          position: "right",
          className: "twants-navbar-github",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "custom",
      links: [
        {
          title: "Product",
          items: [
            { label: "Getting Started", to: "/docs/getting-started/installation" },
            { label: "Components",      to: "/docs/components/button" },
            { label: "Design Tokens",   to: "/docs/design/tokens" },
          ],
        },
        {
          title: "Integrations",
          items: [
            { label: "Laravel", to: "/docs/integrations/laravel" },
            { label: "Django",  to: "/docs/integrations/django" },
            { label: "Tauri",   to: "/docs/integrations/tauri" },
            { label: "Wails",   to: "/docs/integrations/wails" },
          ],
        },
        {
          title: "Community",
          items: [
            { label: "GitHub",      href: GH_URL },
            { label: "Discussions", href: `${GH_URL}/discussions` },
            { label: "Wiki",        href: `${GH_URL}/wiki` },
          ],
        },
        {
          title: "More",
          items: [
            { label: "Releases",  href: `${GH_URL}/releases` },
            { label: "Changelog", to: "/docs/changelog" },
            { label: "License",   to: "/docs/license" },
          ],
        },
      ],
      copyright: `MIT © ${new Date().getFullYear()} whiteant-ops`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: ["bash", "json", "tsx", "php", "python", "rust", "go"],
    },
    docs: { sidebar: { hideable: true, autoCollapseCategories: false } },
    tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 4 },
  } satisfies Preset.ThemeConfig,
};

export default config;
```

---

## 2. `.github/workflows/deploy-docs.yml`

```yaml
name: Deploy Docs to GitHub Pages

on:
  push:
    branches: [main]
    paths:
      - "docs/**"
      - "src/styles/**"
      - ".github/workflows/deploy-docs.yml"
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: docs
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
          cache-dependency-path: |
            package-lock.json
            docs/package-lock.json

      - name: Install root deps
        run: npm ci
        working-directory: .

      - name: Install docs deps
        run: npm ci

      - name: Sync TWANTS styles into docs
        run: |
          cp ../src/styles/tokens.css     src/css/tokens.css
          cp ../src/styles/theme.css      src/css/theme.css
          cp ../src/styles/components.css src/css/components.css

      - name: Build Docusaurus
        run: npm run build

      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: docs/build

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

---

## 3. `.github/workflows/publish.yml`

```yaml
name: Publish to npm

on:
  release:
    types: [published]
  workflow_dispatch:

permissions:
  contents: read
  id-token: write

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          registry-url: https://registry.npmjs.org
          cache: npm

      - run: npm ci
      - run: npm run build
      - run: npm run typecheck

      - name: Publish to npm
        run: npm publish --access public --provenance
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

---

## 4. `.github/workflows/ci.yml`

```yaml
name: CI

on:
  pull_request:
    branches: [main]
  push:
    branches: [main]

jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci
      - run: npm run typecheck
      - run: npm run build

  docs:
    runs-on: ubuntu-latest
    defaults: { run: { working-directory: docs } }
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
          cache-dependency-path: docs/package-lock.json
      - run: npm ci
      - run: |
          mkdir -p src/css
          cp ../src/styles/*.css src/css/ || true
      - run: npm run build
```

---

## 5. `.github/workflows/release-drafter.yml`

```yaml
name: Release Drafter

on:
  push:
    branches: [main]
  pull_request:
    types: [opened, reopened, synchronize, edited]

permissions:
  contents: write
  pull-requests: read

jobs:
  update_release_draft:
    runs-on: ubuntu-latest
    steps:
      - uses: release-drafter/release-drafter@v6
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## `.github/release-drafter.yml`

```yaml
name-template: "v$RESOLVED_VERSION"
tag-template: "v$RESOLVED_VERSION"
categories:
  - title: "🚀 Features"
    labels: ["feat", "feature", "enhancement"]
  - title: "🐛 Fixes"
    labels: ["fix", "bug"]
  - title: "🎨 Components"
    labels: ["component"]
  - title: "📚 Documentation"
    labels: ["docs"]
  - title: "🔧 Maintenance"
    labels: ["chore", "deps", "ci"]
  - title: "💥 Breaking changes"
    labels: ["breaking"]
change-template: "- $TITLE @$AUTHOR (#$NUMBER)"
version-resolver:
  major: { labels: ["breaking"] }
  minor: { labels: ["feat", "feature"] }
  patch: { labels: ["fix", "chore", "docs", "component"] }
  default: patch
template: |
  ## What's changed

  $CHANGES

  **Full changelog**: https://github.com/whiteant-ops/twants/compare/$PREVIOUS_TAG...v$RESOLVED_VERSION
```

---

## 6. `.github/workflows/labels.yml`

```yaml
name: Sync Labels

on:
  push:
    branches: [main]
    paths: [".github/labels.yml"]
  workflow_dispatch:

permissions: { contents: read, issues: write }

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: EndBug/label-sync@v2
        with:
          config-file: .github/labels.yml
          delete-other-labels: false
```

## `.github/labels.yml`

```yaml
- { name: feat,             color: "1d76db", description: New feature or capability }
- { name: fix,              color: "d73a4a", description: Bug fix }
- { name: breaking,         color: "b60205", description: Breaking change }
- { name: component,        color: "5319e7", description: New or updated UI component }
- { name: docs,             color: "0075ca", description: Documentation improvements }
- { name: chore,            color: "cfd3d7", description: Maintenance }
- { name: deps,             color: "0366d6", description: Dependency update }
- { name: ci,               color: "fbca04", description: CI / Actions }
- { name: a11y,             color: "0e8a16", description: Accessibility }
- { name: theme,            color: "a2eeef", description: Theme / tokens }
- { name: good first issue, color: "7057ff", description: Good for newcomers }
- { name: help wanted,      color: "008672", description: Extra attention is needed }
- { name: duplicate,        color: "cfd3d7" }
- { name: wontfix,          color: "ffffff" }
```

---

## 7. `.github/CODEOWNERS`

```text
*                           @whiteant-ops
/src/styles/components.css  @whiteant-ops
/src/styles/tokens.css      @whiteant-ops
/src/icons/**               @whiteant-ops
/src/components/**          @whiteant-ops
/src/utilities/**           @whiteant-ops
/docs/**                    @whiteant-ops
/.github/**                 @whiteant-ops
```

---

## 8. `.github/dependabot.yml`

```yaml
version: 2
updates:
  - package-ecosystem: npm
    directory: /
    schedule: { interval: weekly }
    groups:
      dev-deps: { patterns: ["*"], dependency-type: development }
    labels: ["deps", "chore"]

  - package-ecosystem: npm
    directory: /docs
    schedule: { interval: weekly }
    labels: ["deps", "docs"]

  - package-ecosystem: github-actions
    directory: /
    schedule: { interval: weekly }
    labels: ["ci", "deps"]
```

---

## 9. `.github/ISSUE_TEMPLATE/config.yml`

```yaml
blank_issues_enabled: false
contact_links:
  - name: 💬 Discussions
    url: https://github.com/whiteant-ops/twants/discussions
    about: Ask questions and get help from the community
  - name: 📖 Documentation
    url: https://whiteant-ops.github.io/twants/
    about: Read the official docs
  - name: 🧭 Wiki
    url: https://github.com/whiteant-ops/twants/wiki
    about: Long-form guides, ADRs, troubleshooting
  - name: 🔒 Report a security issue
    url: https://github.com/whiteant-ops/twants/security/advisories/new
    about: Privately report a vulnerability
```

## `.github/ISSUE_TEMPLATE/bug_report.yml`

```yaml
name: 🐛 Bug report
description: Something isn't working
title: "[Bug] "
labels: ["fix"]
body:
  - type: markdown
    attributes:
      value: Thanks for the report! Please fill the template below.
  - type: input
    id: version
    attributes: { label: TWANTS version, placeholder: "0.1.0" }
    validations: { required: true }
  - type: dropdown
    id: integration
    attributes:
      label: Integration
      options: [Vanilla, Laravel, Django, Tauri, Wails, React, Vue, Svelte, Other]
    validations: { required: true }
  - type: textarea
    id: description
    attributes: { label: What happened? }
    validations: { required: true }
  - type: textarea
    id: expected
    attributes: { label: Expected behavior }
    validations: { required: true }
  - type: textarea
    id: repro
    attributes:
      label: Minimal reproduction
      render: html
    validations: { required: true }
  - type: input
    id: browser
    attributes: { label: Browser / OS }
```

## `.github/ISSUE_TEMPLATE/feature_request.yml`

```yaml
name: 💡 Feature request
description: Suggest a new component or improvement
title: "[Feature] "
labels: ["feat"]
body:
  - type: textarea
    id: problem
    attributes: { label: What problem does this solve? }
    validations: { required: true }
  - type: textarea
    id: proposal
    attributes: { label: Proposed solution }
    validations: { required: true }
  - type: checkboxes
    id: scope
    attributes:
      label: Scope
      options:
        - label: New component
        - label: New variant on an existing component
        - label: Design token change
        - label: Accessibility improvement
        - label: Documentation
```

## `.github/PULL_REQUEST_TEMPLATE.md`

```markdown
## Summary
<!-- What does this PR do, and why? -->

## Type
- [ ] feat — new capability
- [ ] fix — bug fix
- [ ] component — new/updated UI component
- [ ] docs — documentation
- [ ] chore — maintenance
- [ ] breaking change

## Checklist
- [ ] Uses only semantic TWANTS tokens (no hard-coded colors)
- [ ] Classes are prefixed with `twants-`
- [ ] Works in light and dark themes
- [ ] Keyboard accessible; visible focus state
- [ ] Responsive at `sm`, `md`, `lg`
- [ ] Documented in `docs/docs/…` with `<Preview>` example
- [ ] Updated `CHANGELOG.md` under `Unreleased`

## Screenshots / Clips
<!-- Before / after if visual -->
```

---

## 10. README Badges (dengan URL `whiteant-ops`)

Ganti bagian badge di README dengan versi ini:

```markdown
<div align="center">

# TWANTS

**A Modern Tailwind UI System for Everywhere.**

[![Docs](https://img.shields.io/badge/docs-whiteant--ops.github.io-2563eb?logo=readthedocs&logoColor=white)](https://whiteant-ops.github.io/twants/)
[![Wiki](https://img.shields.io/badge/wiki-github-181717?logo=github&logoColor=white)](https://github.com/whiteant-ops/twants/wiki)
[![Roadmap](https://img.shields.io/badge/roadmap-projects-181717?logo=github&logoColor=white)](https://github.com/whiteant-ops/twants/projects)
[![Discussions](https://img.shields.io/badge/discussions-github-181717?logo=github&logoColor=white)](https://github.com/whiteant-ops/twants/discussions)

[![npm](https://img.shields.io/npm/v/twants?logo=npm&color=cb3837)](https://www.npmjs.com/package/twants)
[![npm downloads](https://img.shields.io/npm/dm/twants?color=cb3837)](https://www.npmjs.com/package/twants)
[![Bundle size](https://img.shields.io/bundlephobia/minzip/twants?label=minzip)](https://bundlephobia.com/package/twants)

[![CI](https://github.com/whiteant-ops/twants/actions/workflows/ci.yml/badge.svg)](https://github.com/whiteant-ops/twants/actions/workflows/ci.yml)
[![Deploy Docs](https://github.com/whiteant-ops/twants/actions/workflows/deploy-docs.yml/badge.svg)](https://github.com/whiteant-ops/twants/actions/workflows/deploy-docs.yml)
[![License](https://img.shields.io/github/license/whiteant-ops/twants)](./LICENSE)

Framework-agnostic · Tailwind CSS v4 · Vite · WinUI/Fluent-inspired · ~100 components

</div>
```

Dan di bawahnya:

```markdown
## Documentation

| | |
|---|---|
| 📖 **Docs** | https://whiteant-ops.github.io/twants/ |
| 🧩 **Components** | https://whiteant-ops.github.io/twants/docs/components/button |
| 🧭 **Wiki** | https://github.com/whiteant-ops/twants/wiki |
| 🗺 **Roadmap** | https://github.com/whiteant-ops/twants/projects |
| 💬 **Discussions** | https://github.com/whiteant-ops/twants/discussions |
| 🐛 **Issues** | https://github.com/whiteant-ops/twants/issues |
| 📦 **Releases** | https://github.com/whiteant-ops/twants/releases |
| 📦 **npm** | https://www.npmjs.com/package/twants |
```

---

## 11. Wiki — Siap Pakai

Buka tab **Wiki** di repo → **Create the first page** → paste konten di bawah → **Publish**.

**`Home.md`:**

```markdown
# Welcome to the TWANTS Wiki

> A Modern Tailwind UI System for Everywhere.

Long-form content that doesn't fit the docs site: architecture, ADRs, recipes,
troubleshooting, roadmap.

## Quick links

| | |
|---|---|
| 📖 Docs site | https://whiteant-ops.github.io/twants/ |
| 🧩 Components | https://whiteant-ops.github.io/twants/docs/components/button |
| 🎨 Design tokens | https://whiteant-ops.github.io/twants/docs/design/tokens |
| 🗺 Roadmap | https://github.com/whiteant-ops/twants/projects |
| 💬 Discussions | https://github.com/whiteant-ops/twants/discussions |
| 🐛 Issues | https://github.com/whiteant-ops/twants/issues |
| 📦 Releases | https://github.com/whiteant-ops/twants/releases |
| 📦 npm | https://www.npmjs.com/package/twants |

## Start here

- [[Architecture Overview]]
- [[Design Principles]]
- [[FAQ]]
- [[Troubleshooting]]
- [[Recipe: Custom Accent Color]]
- [[Roadmap]]
```

**`_Sidebar.md`:**

```markdown
**TWANTS**

[🏠 Home](Home) · [📖 Docs](https://whiteant-ops.github.io/twants/)

---

**Start**
- [Getting Help](Getting-Help)
- [FAQ](FAQ)
- [Troubleshooting](Troubleshooting)

**Architecture**
- [Overview](Architecture-Overview)
- [Design Principles](Design-Principles)
- [Token System](Token-System)
- [CSS Layer](CSS-Layer)
- [JavaScript Layer](JavaScript-Layer)

**ADR**
- [Index](ADR)
- [0001 Framework-agnostic](ADR-0001)
- [0002 Tailwind v4 CSS-first](ADR-0002)
- [0003 CSS variables](ADR-0003)
- [0004 No build step](ADR-0004)

**Recipes**
- [Custom Accent Color](Recipe-Custom-Accent-Color)
- [Mica Background](Recipe-Mica-Background)
- [Desktop Title Bar](Recipe-Desktop-Title-Bar)
- [Theming Django Admin](Recipe-Django-Admin)

**Integrations**
- [Laravel](Integration-Laravel)
- [Django](Integration-Django)
- [Tauri](Integration-Tauri)
- [Wails](Integration-Wails)
- [Vanilla](Integration-Vanilla)

**Project**
- [Roadmap](Roadmap)
- [Showcase](Showcase)
- [Contributing](Contributing-Deep-Dive)
```

**`_Footer.md`:**

```markdown
---
MIT © whiteant-ops · [Docs](https://whiteant-ops.github.io/twants/) · [Issues](https://github.com/whiteant-ops/twants/issues) · [Discussions](https://github.com/whiteant-ops/twants/discussions)
```

Buat halaman lainnya dengan klik **New Page** dan nama file sesuai link di sidebar. Kamu bisa maintain Wiki lokal juga kalau mau:

```bash
git clone https://github.com/whiteant-ops/twants.wiki.git
cd twants.wiki
# edit file .md
git add -A && git commit -m "docs(wiki): add ADR 0005"
git push
```

---

## 12. GitHub Projects — Roadmap

Buka `https://github.com/whiteant-ops/twants/projects` → **New project** → pilih **Table** → rename **TWANTS Roadmap**.

### Fields (Settings → Fields → New field)

| Field | Type | Values |
|---|---|---|
| Status | Single select | `Backlog` · `Design` · `Ready` · `In progress` · `Review` · `Done` |
| Type | Single select | `Component` · `Bug` · `Docs` · `Theme` · `Infra` |
| Area | Single select | `Foundations` · `Buttons` · `Forms` · `Navigation` · `Data` · `Feedback` · `Layout` · `Media` · `Desktop` · `Integration` |
| Priority | Single select | `P0` · `P1` · `P2` · `P3` |
| Size | Single select | `XS` · `S` · `M` · `L` · `XL` |
| Iteration | Iteration | 2-week sprints |

### Views (klik `+` di tab atas)

1. **Roadmap** — Timeline view, group by `Area`, filter `Status != Done`
2. **Kanban** — Board view, columns = `Status`
3. **Components** — Table view, filter `Type = Component`, group by `Area`
4. **Bugs** — Board, filter `label:fix`
5. **My work** — Board, filter `assignee:@me`
6. **Docs backlog** — Table, filter `label:docs`

### Auto-add (⋯ menu → Workflows)

- **Auto-add to project**: `is:issue label:component`
- **Item closed** → set Status = `Done`
- **PR merged** → set Status = `Done`
- **Item reopened** → set Status = `In progress`

---

## 13. Milestones

`https://github.com/whiteant-ops/twants/milestones` → **New milestone**:

```text
v0.1.0 — Foundations       target: 2025-03-01
v0.2.0 — Data & Layout     target: 2025-05-01
v0.3.0 — Desktop UI        target: 2025-07-01
v1.0.0 — Stable            target: 2025-10-01
```

---

## 14. Repository Settings Checklist

**Settings → General**

- [x] Default branch: `main`
- [x] Features → Issues ✅ · Discussions ✅ · Projects ✅ · Wiki ✅
- [x] Pull Requests → Allow squash merge ✅ · Automatically delete head branches ✅

**Settings → Branches → Add branch protection rule (`main`)**

- [x] Require a pull request before merging (1 approval)
- [x] Require status checks: `CI / check`, `CI / docs`
- [x] Require conversation resolution
- [x] Do not allow force pushes

**Settings → Pages**

- [x] Build and deployment → Source: **GitHub Actions**
- [x] Enforce HTTPS ✅

**Settings → Actions → General**

- [x] Workflow permissions: **Read and write**
- [x] Allow GitHub Actions to create and approve pull requests ✅

**Settings → Secrets and variables → Actions**

- [x] `NPM_TOKEN` (buat di npmjs.com → Access Tokens → **Automation**)

**Settings → Code security and analysis**

- [x] Dependabot alerts ✅
- [x] Dependabot security updates ✅
- [x] CodeQL analysis ✅
- [x] Private vulnerability reporting ✅

**Tab About (kanan atas repo)**

- Description: `A Modern Tailwind UI System for Everywhere.`
- Website: `https://whiteant-ops.github.io/twants/`
- Topics:
  ```
  tailwindcss tailwind-v4 winui fluent-design design-system ui-kit vite
  laravel django tauri wails components whiteant-ops
  ```
- Social preview: upload `og.png` 1280×640

---

## 15. Setup dari Nol (Urutan Pasti)

```bash
# 1. Buat repo di GitHub: whiteant-ops/twants (public, kosong, tanpa README)

# 2. Push kode
git init
git add -A
git commit -m "chore: initial commit"
git branch -M main
git remote add origin git@github.com:whiteant-ops/twants.git
git push -u origin main

# 3. Buka GitHub → jalankan checklist di atas
#    (Pages → GitHub Actions, secret NPM_TOKEN, branch protection, dsb.)

# 4. Buat Wiki Home page (klik tab Wiki → Create first page)
#    Paste Home.md dari bagian 11.

# 5. Buat Project "TWANTS Roadmap"
#    https://github.com/whiteant-ops/twants/projects

# 6. Buat Milestones
#    https://github.com/whiteant-ops/twants/milestones

# 7. Aktifkan Discussions
#    Settings → Features → Discussions ✅
```

Setelah push pertama ke `main`, workflow `Deploy Docs` akan jalan ~1 menit, dan sekitar 2 menit kemudian:

- **Docs live** di `https://whiteant-ops.github.io/twants/`
- **Wiki** di `https://github.com/whiteant-ops/twants/wiki`
- **Roadmap** di `https://github.com/whiteant-ops/twants/projects`

---

## 16. Setiap Update Selanjutnya

```bash
# Edit komponen
$EDITOR src/styles/components.css

# Commit & push
git add -A
git commit -m "feat(button): add ghost variant"
git push
```

Yang terjadi otomatis:

```text
push → main
  │
  ├─ CI jalan (typecheck + build + docs build)
  ├─ Deploy Docs → https://whiteant-ops.github.io/twants/
  └─ Release Drafter update draft release

Kapanpun siap rilis:
  GitHub → Releases → Edit draft → Publish v0.2.0
  │
  └─ Publish to npm → npm install twants@0.2.0 (dengan provenance badge)
```

**Tidak ada server, tidak ada domain, tidak ada deploy script, tidak ada DevOps.** Semuanya GitHub native. Selesai.

---

## Ringkasan — Apa yang Perlu Kamu Isi dengan Username `whiteant-ops`

Semua file di bawah ini adalah **satu-satunya** tempat di mana username muncul. Setelah ini, semua tautan konsisten:

| File | Nilai |
|---|---|
| `docs/docusaurus.config.ts` | `GH_USER = "whiteant-ops"` |
| `README.md` | semua badge + tabel links |
| `.github/CODEOWNERS` | `@whiteant-ops` |
| `.github/ISSUE_TEMPLATE/config.yml` | 4 URL contact |
| `.github/release-drafter.yml` | compare URL |
| Wiki `_Sidebar.md` + `Home.md` + `_Footer.md` | semua link |
| **Settings → About → Website** | `https://whiteant-ops.github.io/twants/` |

Kalau nanti kamu ganti username atau mau pindah ke org, cari-replace `whiteant-ops` → username baru, plus update `baseUrl` di `docusaurus.config.ts` kalau nama repo berubah. Selesai.