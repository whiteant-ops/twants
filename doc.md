# TWANTS Documentation — Docusaurus Custom Theme

Below is a complete Docusaurus v3 setup for TWANTS with a fully custom theme built on top of the TWANTS design tokens. The theme bridges TWANTS CSS variables into Infima (Docusaurus' default styles), replaces the Navbar, Footer, Sidebar, TOC, CodeBlock, and Admonitions with Fluent-inspired components, and adds MDX wrappers for TWANTS components so docs pages can use them directly.

---

## Docs Package Structure

```text
docs/
├── docusaurus.config.ts
├── sidebars.ts
├── package.json
├── tsconfig.json
├── babel.config.js
├── src/
│   ├── css/
│   │   ├── custom.css               # TWANTS ↔ Infima bridge
│   │   ├── tokens.css               # symlink to ../../src/styles/tokens.css (or copy)
│   │   ├── theme.css                # symlink to ../../src/styles/theme.css
│   │   └── components.css           # symlink to ../../src/styles/components.css
│   ├── theme/
│   │   ├── Root.tsx
│   │   ├── MDXComponents.tsx
│   │   ├── Navbar/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   ├── Footer/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   ├── DocSidebar/
│   │   │   ├── index.tsx
│   │   │   ├── Desktop/
│   │   │   │   └── index.tsx
│   │   │   └── styles.module.css
│   │   ├── TOC/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   ├── DocItem/
│   │   │   └── Layout/
│   │   │       ├── index.tsx
│   │   │       └── styles.module.css
│   │   ├── CodeBlock/
│   │   │   ├── index.tsx
│   │   │   ├── Container.tsx
│   │   │   └── styles.module.css
│   │   ├── Admonition/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   ├── PaginatorNavLink/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   └── NotFound/
│   │       └── index.tsx
│   ├── components/
│   │   ├── ThemeToggle/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   ├── ComponentPreview/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   ├── PropsTable/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   ├── IconGrid/
│   │   │   └── index.tsx
│   │   ├── HomepageHero/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   └── HomepageFeatures/
│   │       ├── index.tsx
│   │       └── styles.module.css
│   └── pages/
│       └── index.tsx
├── docs/
│   ├── intro.md
│   ├── getting-started/
│   │   ├── installation.md
│   │   └── quick-start.md
│   ├── design/
│   │   ├── tokens.md
│   │   ├── themes.md
│   │   └── accessibility.md
│   ├── components/
│   │   ├── button.md
│   │   ├── card.md
│   │   ├── input.md
│   │   ├── modal.md
│   │   └── ...
│   └── integrations/
│       ├── laravel.md
│       ├── django.md
│       ├── tauri.md
│       ├── wails.md
│       └── vanilla.md
└── static/
    └── img/
        ├── logo.svg
        └── logo-dark.svg
```

---

## `docs/package.json`

```json
{
  "name": "twants-docs",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "docusaurus": "docusaurus",
    "start": "docusaurus start --port 3000",
    "build": "docusaurus build",
    "swizzle": "docusaurus swizzle",
    "deploy": "docusaurus deploy",
    "clear": "docusaurus clear",
    "serve": "docusaurus serve",
    "write-translations": "docusaurus write-translations",
    "write-heading-ids": "docusaurus write-heading-ids",
    "typecheck": "tsc"
  },
  "dependencies": {
    "@docusaurus/core": "^3.6.0",
    "@docusaurus/preset-classic": "^3.6.0",
    "@docusaurus/theme-mermaid": "^3.6.0",
    "@mdx-js/react": "^3.0.0",
    "clsx": "^2.1.0",
    "prism-react-renderer": "^2.4.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0"
  },
  "devDependencies": {
    "@docusaurus/module-type-aliases": "^3.6.0",
    "@docusaurus/tsconfig": "^3.6.0",
    "@docusaurus/types": "^3.6.0",
    "@tailwindcss/postcss": "^4.0.0",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.6.0"
  },
  "browserslist": {
    "production": [">0.5%", "not dead", "not op_mini all"],
    "development": ["last 3 chrome version", "last 3 firefox version", "last 5 safari version"]
  },
  "engines": { "node": ">=18.0" }
}
```

---

## `docs/docusaurus.config.ts`

```ts
import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "TWANTS",
  tagline: "A Modern Tailwind UI System for Everywhere.",
  favicon: "img/logo.svg",

  url: "https://twants.dev",
  baseUrl: "/",

  organizationName: "twants",
  projectName: "twants",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: { defaultLocale: "en", locales: ["en"] },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/twants/twants/tree/main/docs/",
          routeBasePath: "docs",
          showLastUpdateTime: true,
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
    navbar: {
      title: "TWANTS",
      logo: {
        alt: "TWANTS",
        src: "img/logo.svg",
        srcDark: "img/logo-dark.svg",
      },
      hideOnScroll: false,
      items: [
        {
          type: "docSidebar",
          sidebarId: "docs",
          position: "left",
          label: "Docs",
        },
        { to: "/docs/components/button", label: "Components", position: "left" },
        { to: "/docs/integrations/vanilla", label: "Integrations", position: "left" },
        { to: "/docs/changelog", label: "Changelog", position: "left" },
        {
          href: "https://github.com/twants/twants",
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
            { label: "Components", to: "/docs/components/button" },
            { label: "Design Tokens", to: "/docs/design/tokens" },
          ],
        },
        {
          title: "Integrations",
          items: [
            { label: "Laravel", to: "/docs/integrations/laravel" },
            { label: "Django", to: "/docs/integrations/django" },
            { label: "Tauri", to: "/docs/integrations/tauri" },
            { label: "Wails", to: "/docs/integrations/wails" },
          ],
        },
        {
          title: "Community",
          items: [
            { label: "GitHub", href: "https://github.com/twants/twants" },
            { label: "Discussions", href: "https://github.com/twants/twants/discussions" },
            { label: "Contributing", to: "/docs/contributing" },
          ],
        },
        {
          title: "More",
          items: [
            { label: "Changelog", to: "/docs/changelog" },
            { label: "License", to: "/docs/license" },
          ],
        },
      ],
      copyright: `MIT © ${new Date().getFullYear()} TWANTS Contributors`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: ["bash", "json", "tsx", "php", "python", "rust", "go"],
    },
    docs: {
      sidebar: { hideable: true, autoCollapseCategories: false },
    },
    tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 4 },
  } satisfies Preset.ThemeConfig,
};

export default config;
```

---

## `docs/sidebars.ts`

```ts
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docs: [
    "intro",
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: [
        "getting-started/installation",
        "getting-started/quick-start",
        "getting-started/framework-integration",
      ],
    },
    {
      type: "category",
      label: "Design",
      collapsed: false,
      items: ["design/tokens", "design/themes", "design/accessibility"],
    },
    {
      type: "category",
      label: "Foundations",
      items: [
        "components/colors",
        "components/typography",
        "components/icons",
        "components/spacing",
        "components/shadows",
      ],
    },
    {
      type: "category",
      label: "Buttons & Actions",
      items: [
        "components/button",
        "components/icon-button",
        "components/button-group",
      ],
    },
    {
      type: "category",
      label: "Forms",
      items: [
        "components/input",
        "components/textarea",
        "components/select",
        "components/checkbox",
        "components/radio",
        "components/switch",
      ],
    },
    {
      type: "category",
      label: "Navigation",
      items: ["components/navbar", "components/sidebar", "components/tabs"],
    },
    {
      type: "category",
      label: "Data Display",
      items: ["components/card", "components/table", "components/badge"],
    },
    {
      type: "category",
      label: "Feedback",
      items: ["components/alert", "components/modal", "components/toast"],
    },
    {
      type: "category",
      label: "Layout",
      items: ["components/container", "components/stack", "components/grid"],
    },
    {
      type: "category",
      label: "Desktop UI",
      items: ["components/title-bar", "components/app-frame", "components/status-bar"],
    },
    {
      type: "category",
      label: "Integrations",
      items: [
        "integrations/laravel",
        "integrations/django",
        "integrations/tauri",
        "integrations/wails",
        "integrations/vanilla",
      ],
    },
    "changelog",
    "contributing",
    "license",
  ],
};

export default sidebars;
```

---

## `docs/src/css/custom.css` — the TWANTS ↔ Infima bridge

```css
/* ============================================================
   TWANTS × Docusaurus
   Maps TWANTS tokens → Infima variables used by Docusaurus,
   then restyles the default chrome to match TWANTS.
   ============================================================ */

:root {
  /* --- Infima primary → TWANTS primary --- */
  --ifm-color-primary: var(--twants-primary);
  --ifm-color-primary-dark: var(--twants-primary-hover);
  --ifm-color-primary-darker: var(--twants-primary-active);
  --ifm-color-primary-darkest: color-mix(in srgb, var(--twants-primary) 70%, black);
  --ifm-color-primary-light: color-mix(in srgb, var(--twants-primary) 85%, white);
  --ifm-color-primary-lighter: color-mix(in srgb, var(--twants-primary) 70%, white);
  --ifm-color-primary-lightest: color-mix(in srgb, var(--twants-primary) 50%, white);

  /* --- Surfaces --- */
  --ifm-background-color: var(--twants-background);
  --ifm-background-surface-color: var(--twants-surface);
  --ifm-card-background-color: var(--twants-surface);

  /* --- Text --- */
  --ifm-font-color-base: var(--twants-foreground);
  --ifm-font-color-secondary: var(--twants-foreground-secondary);
  --ifm-heading-color: var(--twants-foreground);
  --ifm-color-content: var(--twants-foreground);
  --ifm-color-content-secondary: var(--twants-foreground-secondary);
  --ifm-color-emphasis-600: var(--twants-foreground-muted);
  --ifm-color-emphasis-700: var(--twants-foreground-secondary);

  /* --- Borders --- */
  --ifm-color-emphasis-0: var(--twants-surface);
  --ifm-color-emphasis-100: var(--twants-surface-secondary);
  --ifm-color-emphasis-200: var(--twants-surface-tertiary);
  --ifm-color-emphasis-300: var(--twants-border);
  --ifm-color-emphasis-400: var(--twants-border-strong);
  --ifm-color-emphasis-500: var(--twants-foreground-muted);

  /* --- Typography --- */
  --ifm-font-family-base: var(--twants-font-sans);
  --ifm-font-family-monospace: var(--twants-font-mono);
  --ifm-font-size-base: 15px;
  --ifm-line-height-base: 1.65;
  --ifm-heading-font-weight: var(--twants-font-semibold);
  --ifm-heading-line-height: 1.25;

  /* --- Radius --- */
  --ifm-global-radius: var(--twants-radius-md);
  --ifm-card-border-radius: var(--twants-radius-lg);
  --ifm-button-border-radius: var(--twants-radius);
  --ifm-code-border-radius: var(--twants-radius-sm);
  --ifm-breadcrumb-border-radius: var(--twants-radius-sm);

  /* --- Shadow --- */
  --ifm-global-shadow-lw: var(--twants-shadow-xs);
  --ifm-global-shadow-md: var(--twants-shadow);
  --ifm-global-shadow-tl: var(--twants-shadow-lg);

  /* --- Code --- */
  --ifm-code-font-size: 88%;
  --ifm-code-padding-horizontal: 0.35rem;
  --ifm-code-padding-vertical: 0.15rem;
  --ifm-code-background: var(--twants-surface-secondary);
  --ifm-pre-background: var(--twants-surface-secondary);
  --ifm-pre-border-radius: var(--twants-radius-md);
  --docusaurus-highlighted-code-line-bg: color-mix(in srgb, var(--twants-primary) 12%, transparent);

  /* --- Spacing & widths --- */
  --ifm-spacing-horizontal: 1.25rem;
  --ifm-navbar-height: 3.25rem;
  --ifm-navbar-padding-horizontal: 1rem;
  --ifm-toc-border-color: var(--twants-border);
  --doc-sidebar-width: 16rem;
}

/* --- Dark mode --- */
[data-theme="dark"] {
  --ifm-background-color: var(--twants-background);
  --ifm-background-surface-color: var(--twants-surface);
  --ifm-color-primary: var(--twants-primary);
  --ifm-color-primary-dark: var(--twants-primary-hover);
  --ifm-color-primary-darker: var(--twants-primary-active);
  --ifm-toc-border-color: var(--twants-border);
  --docusaurus-highlighted-code-line-bg: color-mix(in srgb, var(--twants-primary) 22%, transparent);
}

/* --- Body & Mica background --- */
html,
body {
  background: var(--twants-background);
  color: var(--twants-foreground);
}
body {
  background-image:
    radial-gradient(1200px 600px at 10% -10%,
      color-mix(in srgb, var(--twants-primary) 10%, transparent), transparent 60%),
    radial-gradient(900px 500px at 100% 0%,
      color-mix(in srgb, var(--twants-info) 7%, transparent), transparent 55%);
  background-attachment: fixed;
}

/* --- Navbar — minimal because we swizzle, this is a fallback --- */
.navbar {
  background: color-mix(in srgb, var(--twants-surface) 80%, transparent) !important;
  backdrop-filter: saturate(140%) blur(14px);
  -webkit-backdrop-filter: saturate(140%) blur(14px);
  border-bottom: 1px solid var(--twants-border);
  box-shadow: none !important;
}
.navbar__title { font-weight: var(--twants-font-semibold); letter-spacing: -0.01em; }
.navbar__link {
  font-size: var(--twants-text-base);
  color: var(--twants-foreground-secondary);
  border-radius: var(--twants-radius);
  padding: 0.375rem 0.75rem;
  transition: background 120ms var(--twants-ease-standard),
              color 120ms var(--twants-ease-standard);
}
.navbar__link:hover {
  background: var(--twants-surface-secondary);
  color: var(--twants-foreground);
}
.navbar__link--active {
  background: var(--twants-primary-subtle);
  color: var(--twants-primary);
}

/* --- Sidebar --- */
.theme-doc-sidebar-container {
  border-right: 1px solid var(--twants-border) !important;
}
.menu__link {
  font-size: var(--twants-text-base);
  color: var(--twants-foreground-secondary);
  border-radius: var(--twants-radius);
  padding: 0.375rem 0.625rem;
}
.menu__link:hover { background: var(--twants-surface-secondary); color: var(--twants-foreground); }
.menu__link--active,
.menu__link--active:hover {
  background: var(--twants-primary-subtle);
  color: var(--twants-primary);
  font-weight: var(--twants-font-medium);
}
.menu__list-item-collapsible:hover { background: var(--twants-surface-secondary); border-radius: var(--twants-radius); }
.menu__caret::before { background-size: 1.25rem 1.25rem; }

/* --- Content / Markdown --- */
.markdown h1,
.markdown h2,
.markdown h3,
.markdown h4 {
  color: var(--twants-foreground);
  letter-spacing: -0.01em;
}
.markdown h1 { font-size: 2rem; }
.markdown h2 {
  font-size: 1.375rem;
  margin-top: 2.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--twants-border);
}
.markdown h3 { font-size: 1.125rem; margin-top: 1.75rem; }
.markdown a { color: var(--twants-primary); text-decoration: none; border-bottom: 1px solid transparent; }
.markdown a:hover { border-bottom-color: color-mix(in srgb, var(--twants-primary) 60%, transparent); }

.markdown code {
  background: var(--twants-surface-secondary);
  border: 1px solid var(--twants-border);
  color: var(--twants-foreground);
  padding: 0.1rem 0.35rem;
  border-radius: var(--twants-radius-sm);
  font-size: 0.85em;
}
.markdown pre code {
  background: transparent;
  border: 0;
  padding: 0;
}

/* --- Tables --- */
.markdown table {
  display: table;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid var(--twants-border);
  border-radius: var(--twants-radius-md);
  overflow: hidden;
  font-size: var(--twants-text-base);
}
.markdown thead {
  background: var(--twants-surface-secondary);
}
.markdown thead th {
  text-align: left;
  font-weight: var(--twants-font-semibold);
  color: var(--twants-foreground);
  border-bottom: 1px solid var(--twants-border) !important;
  padding: 0.625rem 0.875rem;
}
.markdown tbody td {
  border-bottom: 1px solid var(--twants-border) !important;
  padding: 0.625rem 0.875rem;
}
.markdown tbody tr:last-child td { border-bottom: 0 !important; }
.markdown tbody tr:hover { background: var(--twants-surface-secondary); }

/* --- Blockquotes --- */
.markdown blockquote {
  border-left: 3px solid var(--twants-primary);
  background: var(--twants-primary-subtle);
  padding: 0.75rem 1rem;
  border-radius: var(--twants-radius-md);
  color: var(--twants-foreground-secondary);
}

/* --- TOC --- */
.table-of-contents {
  font-size: var(--twants-text-sm);
  border-left: 1px solid var(--twants-border);
}
.table-of-contents__link {
  color: var(--twants-foreground-secondary);
  border-radius: var(--twants-radius-sm);
  padding: 0.2rem 0.5rem;
  display: block;
}
.table-of-contents__link:hover,
.table-of-contents__link--active {
  color: var(--twants-primary);
  background: var(--twants-primary-subtle);
}

/* --- Footer (classic) --- */
.footer {
  background: var(--twants-surface);
  border-top: 1px solid var(--twants-border);
  color: var(--twants-foreground-secondary);
  padding: 2.5rem 1rem 1.5rem;
}
.footer__title { color: var(--twants-foreground); font-size: var(--twants-text-sm); text-transform: uppercase; letter-spacing: 0.06em; }
.footer__link-item { color: var(--twants-foreground-secondary); }
.footer__link-item:hover { color: var(--twants-primary); }
.footer__copyright { color: var(--twants-foreground-muted); font-size: var(--twants-text-xs); }

/* --- Pagination --- */
.pagination-nav__link {
  border: 1px solid var(--twants-border);
  border-radius: var(--twants-radius-md);
  transition: box-shadow 120ms var(--twants-ease-standard),
              border-color 120ms var(--twants-ease-standard);
}
.pagination-nav__link:hover {
  border-color: var(--twants-primary);
  box-shadow: var(--twants-shadow);
}
.pagination-nav__sublabel { color: var(--twants-foreground-muted); }
.pagination-nav__label { color: var(--twants-foreground); }

/* --- Scrollbars --- */
* {
  scrollbar-width: thin;
  scrollbar-color: var(--twants-border-strong) transparent;
}
*::-webkit-scrollbar { width: 10px; height: 10px; }
*::-webkit-scrollbar-thumb {
  background: var(--twants-border-strong);
  border-radius: 9999px;
  border: 2px solid var(--twants-background);
}

/* --- Focus rings --- */
:focus-visible {
  outline: 2px solid var(--twants-focus-ring);
  outline-offset: 2px;
}
```

---

## Custom Theme: `docs/src/theme/Root.tsx`

```tsx
import React, { useEffect } from "react";
import { useColorMode } from "@docusaurus/theme-common";

/**
 * Root wraps the entire app. We sync Docusaurus' colorMode into
 * TWANTS' [data-theme] attribute so all TWANTS components respond.
 */
export default function Root({ children }: { children: React.ReactNode }) {
  const { colorMode } = useColorMode();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", colorMode);
  }, [colorMode]);

  return <>{children}</>;
}
```

---

## `docs/src/theme/Navbar/index.tsx`

```tsx
import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useLocation } from "@docusaurus/router";
import ThemeToggle from "@site/src/components/ThemeToggle";
import clsx from "clsx";
import styles from "./styles.module.css";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.74.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.08 1.84 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.83.58A12 12 0 0 0 12 .5z" />
  </svg>
);

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export default function Navbar(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const logo = useBaseUrl("img/logo.svg");
  const [menuOpen, setMenuOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const links = [
    { label: "Docs", to: "/docs/intro" },
    { label: "Components", to: "/docs/components/button" },
    { label: "Integrations", to: "/docs/integrations/vanilla" },
    { label: "Changelog", to: "/docs/changelog" },
  ];

  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand}>
          <img src={logo} alt="" width={22} height={22} />
          <span>{siteConfig.title}</span>
        </Link>

        <nav className={styles.nav} aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={clsx(styles.link, location.pathname.startsWith(l.to) && styles.linkActive)}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <a
            href="https://github.com/twants/twants"
            className={styles.iconBtn}
            aria-label="GitHub repository"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
          </a>
          <ThemeToggle />
          <button
            className={clsx(styles.iconBtn, styles.menuBtn)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={styles.mobileNav}>
          {links.map((l) => (
            <Link key={l.to} to={l.to} className={styles.mobileLink}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
```

## `docs/src/theme/Navbar/styles.module.css`

```css
.navbar {
  position: sticky;
  top: 0;
  z-index: var(--twants-z-sticky);
  background: color-mix(in srgb, var(--twants-surface) 78%, transparent);
  backdrop-filter: saturate(140%) blur(16px);
  -webkit-backdrop-filter: saturate(140%) blur(16px);
  border-bottom: 1px solid var(--twants-border);
}

.inner {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  height: 3.25rem;
  padding: 0 1.25rem;
  max-width: 1536px;
  margin-inline: auto;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: var(--twants-font-semibold);
  font-size: var(--twants-text-md);
  color: var(--twants-foreground);
  text-decoration: none;
  letter-spacing: -0.01em;
}

.nav {
  display: flex;
  align-items: center;
  gap: 0.125rem;
}

.link {
  padding: 0.375rem 0.75rem;
  font-size: var(--twants-text-base);
  color: var(--twants-foreground-secondary);
  border-radius: var(--twants-radius);
  text-decoration: none;
  transition: background 120ms var(--twants-ease-standard),
              color 120ms var(--twants-ease-standard);
}
.link:hover { background: var(--twants-surface-secondary); color: var(--twants-foreground); }
.linkActive { background: var(--twants-primary-subtle); color: var(--twants-primary); }

.actions {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.iconBtn {
  width: 2rem;
  height: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--twants-radius);
  background: transparent;
  border: 0;
  color: var(--twants-foreground-secondary);
  cursor: pointer;
  transition: background 120ms var(--twants-ease-standard),
              color 120ms var(--twants-ease-standard);
}
.iconBtn:hover { background: var(--twants-surface-secondary); color: var(--twants-foreground); }

.menuBtn { display: none; }
.mobileNav { display: none; }

@media (max-width: 768px) {
  .nav { display: none; }
  .menuBtn { display: inline-flex; }
  .mobileNav {
    display: flex;
    flex-direction: column;
    padding: 0.5rem 1rem 1rem;
    background: var(--twants-surface);
    border-bottom: 1px solid var(--twants-border);
  }
  .mobileLink {
    padding: 0.625rem 0.75rem;
    border-radius: var(--twants-radius);
    color: var(--twants-foreground-secondary);
    text-decoration: none;
    font-size: var(--twants-text-base);
  }
  .mobileLink:hover { background: var(--twants-surface-secondary); color: var(--twants-foreground); }
}
```

---

## `docs/src/components/ThemeToggle/index.tsx`

```tsx
import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import clsx from "clsx";
import styles from "./styles.module.css";

const Sun = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);
const Moon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);

export default function ThemeToggle(): JSX.Element {
  const { colorMode, setColorMode } = useColorMode();
  const next = colorMode === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      className={clsx(styles.toggle)}
      aria-label={`Switch to ${next} theme`}
      onClick={() => setColorMode(next)}
    >
      {colorMode === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}
```

## `docs/src/components/ThemeToggle/styles.module.css`

```css
.toggle {
  width: 2rem;
  height: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--twants-radius);
  background: transparent;
  border: 0;
  color: var(--twants-foreground-secondary);
  cursor: pointer;
  transition: background 120ms var(--twants-ease-standard),
              color 120ms var(--twants-ease-standard);
}
.toggle:hover {
  background: var(--twants-surface-secondary);
  color: var(--twants-foreground);
}
```

---

## `docs/src/theme/MDXComponents.tsx`

Wraps Markdown elements in TWANTS-styled React components and registers a small set of custom MDX tags (`<Callout>`, `<Button>`, `<Card>`, `<PropsTable>`, `<Preview>`).

```tsx
import React from "react";
import MDXComponents from "@theme-original/MDXComponents";
import ComponentPreview from "@site/src/components/ComponentPreview";
import PropsTable from "@site/src/components/PropsTable";

const Callout = ({ type = "info", title, children }: any) => {
  const map = { info: "twants-alert-info", success: "twants-alert-success", warning: "twants-alert-warning", danger: "twants-alert-danger" };
  return (
    <div className={`twants-alert ${map[type as keyof typeof map] ?? map.info}`} style={{ margin: "1rem 0" }}>
      <div>
        {title && <div className="twants-alert-title">{title}</div>}
        <div>{children}</div>
      </div>
    </div>
  );
};

const Button = ({ variant = "primary", children, ...rest }: any) => (
  <button className={`twants-button twants-button-${variant}`} {...rest}>
    {children}
  </button>
);

const Card = ({ title, children, footer }: any) => (
  <div className="twants-card" style={{ margin: "1.25rem 0" }}>
    {title && <div className="twants-card-header"><div className="twants-card-title">{title}</div></div>}
    <div className="twants-card-body">{children}</div>
    {footer && <div className="twants-card-footer">{footer}</div>}
  </div>
);

export default {
  ...MDXComponents,
  Callout,
  Button,
  Card,
  Preview: ComponentPreview,
  PropsTable,
};
```

---

## `docs/src/components/ComponentPreview/index.tsx`

The core "live preview + code" component used in component docs.

```tsx
import React, { useState } from "react";
import styles from "./styles.module.css";

interface Props {
  children: React.ReactNode;
  code?: string;
  language?: string;
}

export default function ComponentPreview({ children, code }: Props) {
  const [tab, setTab] = useState<"preview" | "code">("preview");

  return (
    <div className={styles.wrap}>
      <div className={styles.toolbar}>
        <button
          className={`${styles.tab} ${tab === "preview" ? styles.tabActive : ""}`}
          onClick={() => setTab("preview")}
        >
          Preview
        </button>
        {code && (
          <button
            className={`${styles.tab} ${tab === "code" ? styles.tabActive : ""}`}
            onClick={() => setTab("code")}
          >
            Code
          </button>
        )}
      </div>

      <div className={styles.body}>
        {tab === "preview" ? (
          <div className={styles.preview}>{children}</div>
        ) : (
          <pre className={styles.code}><code>{code}</code></pre>
        )}
      </div>
    </div>
  );
}
```

## `docs/src/components/ComponentPreview/styles.module.css`

```css
.wrap {
  border: 1px solid var(--twants-border);
  border-radius: var(--twants-radius-lg);
  overflow: hidden;
  margin: 1.25rem 0;
  background: var(--twants-surface);
}

.toolbar {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  background: var(--twants-surface-secondary);
  border-bottom: 1px solid var(--twants-border);
}

.tab {
  padding: 0.3125rem 0.75rem;
  font-size: var(--twants-text-xs);
  font-weight: var(--twants-font-medium);
  background: transparent;
  border: 0;
  border-radius: var(--twants-radius-sm);
  color: var(--twants-foreground-secondary);
  cursor: pointer;
}
.tab:hover { background: var(--twants-surface-tertiary); color: var(--twants-foreground); }
.tabActive {
  background: var(--twants-surface);
  color: var(--twants-primary);
  box-shadow: var(--twants-shadow-xs);
}

.body { min-height: 8rem; }

.preview {
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  background:
    linear-gradient(45deg, var(--twants-surface-secondary) 25%, transparent 25%) 0 0 / 16px 16px,
    linear-gradient(-45deg, var(--twants-surface-secondary) 25%, transparent 25%) 0 8px / 16px 16px,
    linear-gradient(45deg, transparent 75%, var(--twants-surface-secondary) 75%) 8px -8px / 16px 16px,
    linear-gradient(-45deg, transparent 75%, var(--twants-surface-secondary) 75%) -8px 0 / 16px 16px;
  background-color: var(--twants-surface);
}

.code {
  margin: 0;
  padding: 1rem 1.125rem;
  background: var(--twants-surface-secondary);
  font-family: var(--twants-font-mono);
  font-size: var(--twants-text-sm);
  color: var(--twants-foreground);
  overflow: auto;
  max-height: 24rem;
}
```

---

## `docs/src/components/PropsTable/index.tsx`

```tsx
import React from "react";
import styles from "./styles.module.css";

type Row = {
  name: string;
  type: string;
  default?: string;
  required?: boolean;
  description: string;
};

export default function PropsTable({ rows }: { rows: Row[] }) {
  return (
    <div className={styles.wrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name}>
              <td>
                <code className={styles.prop}>{r.name}</code>
                {r.required && <span className={styles.required}>*</span>}
              </td>
              <td><code className={styles.type}>{r.type}</code></td>
              <td>{r.default ? <code className={styles.default}>{r.default}</code> : <span className={styles.muted}>—</span>}</td>
              <td>{r.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

## `docs/src/components/PropsTable/styles.module.css`

```css
.wrap {
  border: 1px solid var(--twants-border);
  border-radius: var(--twants-radius-md);
  overflow: hidden;
  margin: 1rem 0;
  background: var(--twants-surface);
}
.table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--twants-text-sm);
}
.table thead { background: var(--twants-surface-secondary); }
.table th {
  text-align: left;
  padding: 0.5rem 0.875rem;
  font-weight: var(--twants-font-semibold);
  font-size: var(--twants-text-xs);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--twants-foreground-muted);
  border-bottom: 1px solid var(--twants-border);
}
.table td {
  padding: 0.5rem 0.875rem;
  border-bottom: 1px solid var(--twants-border);
  vertical-align: top;
}
.table tbody tr:last-child td { border-bottom: 0; }
.table tbody tr:hover { background: var(--twants-surface-secondary); }

.prop, .type, .default {
  font-family: var(--twants-font-mono);
  font-size: var(--twants-text-xs);
  padding: 0.1rem 0.375rem;
  border-radius: var(--twants-radius-sm);
  border: 1px solid var(--twants-border);
  background: var(--twants-surface-secondary);
}
.prop { color: var(--twants-primary); }
.default { color: var(--twants-foreground-secondary); }
.type { color: var(--twants-info); }

.required { color: var(--twants-danger); margin-left: 0.15rem; font-weight: 700; }
.muted { color: var(--twants-foreground-muted); }
```

---

## `docs/src/theme/CodeBlock/Container.tsx`

Swizzled code block wrapper so every code fence gets a TWANTS-styled chrome with a copy button.

```tsx
import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export default function CodeBlockContainer({ children, className, ...rest }: any) {
  const [copied, setCopied] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const copy = async () => {
    const text = ref.current?.querySelector("code")?.textContent ?? "";
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch { /* ignore */ }
  };

  return (
    <div ref={ref} className={clsx(styles.wrap, className)} {...rest}>
      <div className={styles.header}>
        <span className={styles.dots}>
          <span /><span /><span />
        </span>
        <button className={styles.copy} onClick={copy} aria-label="Copy code">
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      {children}
    </div>
  );
}
```

## `docs/src/theme/CodeBlock/styles.module.css`

```css
.wrap {
  position: relative;
  border: 1px solid var(--twants-border);
  border-radius: var(--twants-radius-md);
  overflow: hidden;
  margin: 1rem 0;
  background: var(--twants-surface);
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.375rem 0.5rem 0.375rem 0.75rem;
  background: var(--twants-surface-secondary);
  border-bottom: 1px solid var(--twants-border);
}

.dots { display: inline-flex; gap: 0.35rem; }
.dots > span {
  width: 0.55rem; height: 0.55rem; border-radius: 50%;
  background: var(--twants-border-strong);
}
.dots > span:nth-child(1) { background: #ef4444; }
.dots > span:nth-child(2) { background: #f59e0b; }
.dots > span:nth-child(3) { background: #22c55e; }

.copy {
  background: transparent;
  border: 0;
  color: var(--twants-foreground-muted);
  font-size: var(--twants-text-xs);
  font-family: var(--twants-font-sans);
  padding: 0.25rem 0.5rem;
  border-radius: var(--twants-radius-sm);
  cursor: pointer;
}
.copy:hover { background: var(--twants-surface-tertiary); color: var(--twants-foreground); }
```

## `docs/src/theme/CodeBlock/index.tsx`

```tsx
import React from "react";
import OriginalCodeBlock from "@theme-original/CodeBlock";
import Container from "./Container";

export default function CodeBlock(props: any): JSX.Element {
  return (
    <Container>
      <OriginalCodeBlock {...props} />
    </Container>
  );
}
```

---

## `docs/src/theme/DocSidebar/styles.module.css`

```css
.sidebar {
  background: transparent;
  padding: 0.75rem;
  border-right: 1px solid var(--twants-border);
  height: 100%;
}
```

## `docs/src/theme/Footer/index.tsx`

```tsx
import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";

export default function Footer(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const links = [
    { title: "Product", items: [
      { label: "Getting Started", to: "/docs/getting-started/installation" },
      { label: "Components", to: "/docs/components/button" },
      { label: "Design Tokens", to: "/docs/design/tokens" },
    ]},
    { title: "Integrations", items: [
      { label: "Laravel", to: "/docs/integrations/laravel" },
      { label: "Django", to: "/docs/integrations/django" },
      { label: "Tauri", to: "/docs/integrations/tauri" },
      { label: "Wails", to: "/docs/integrations/wails" },
    ]},
    { title: "Community", items: [
      { label: "GitHub", to: "https://github.com/twants/twants" },
      { label: "Discussions", to: "https://github.com/twants/twants/discussions" },
      { label: "Contributing", to: "/docs/contributing" },
    ]},
    { title: "More", items: [
      { label: "Changelog", to: "/docs/changelog" },
      { label: "License", to: "/docs/license" },
    ]},
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <img src="/img/logo.svg" alt="" width={22} height={22} />
            <div>
              <div className={styles.brandTitle}>{siteConfig.title}</div>
              <div className={styles.brandTag}>{siteConfig.tagline}</div>
            </div>
          </div>
          <div className={styles.cols}>
            {links.map((col) => (
              <div key={col.title} className={styles.col}>
                <div className={styles.colTitle}>{col.title}</div>
                <ul>
                  {col.items.map((i) => (
                    <li key={i.label}>
                      <Link to={i.to} className={styles.link}>{i.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.bottom}>
          <span>MIT © {new Date().getFullYear()} TWANTS Contributors</span>
          <span className={styles.tag}>A Modern Tailwind UI System for Everywhere.</span>
        </div>
      </div>
    </footer>
  );
}
```

## `docs/src/theme/Footer/styles.module.css`

```css
.footer {
  border-top: 1px solid var(--twants-border);
  background: var(--twants-surface);
  padding: 2.5rem 1.5rem 1.25rem;
  margin-top: 4rem;
}
.inner { max-width: 1280px; margin-inline: auto; }

.top {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--twants-border);
}
.brand { display: flex; align-items: flex-start; gap: 0.625rem; }
.brandTitle { font-weight: var(--twants-font-semibold); font-size: var(--twants-text-md); }
.brandTag { color: var(--twants-foreground-muted); font-size: var(--twants-text-xs); margin-top: 0.15rem; }

.cols { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 2rem; }
.colTitle {
  font-size: var(--twants-text-xs);
  font-weight: var(--twants-font-semibold);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--twants-foreground);
  margin-bottom: 0.625rem;
}
.col ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.25rem; }
.link {
  color: var(--twants-foreground-secondary);
  text-decoration: none;
  font-size: var(--twants-text-sm);
  border-radius: var(--twants-radius-sm);
  padding: 0.125rem 0.25rem;
}
.link:hover { color: var(--twants-primary); }

.bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  color: var(--twants-foreground-muted);
  font-size: var(--twants-text-xs);
}
.tag { font-style: italic; }

@media (max-width: 768px) {
  .top { grid-template-columns: 1fr; }
  .cols { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .bottom { flex-direction: column; gap: 0.5rem; align-items: flex-start; }
}
```

---

## Docs Content Samples

### `docs/docs/intro.md`

```md
---
id: intro
title: Introduction
sidebar_position: 0
slug: /intro
---

# Introduction

**TWANTS** — *A Modern Tailwind UI System for Everywhere.* — is a framework-agnostic UI
system built with **Vite** and **Tailwind CSS v4**, inspired by **WinUI / Fluent Design**.

It ships ~100 customizable components that work equally well in Laravel Blade,
Django templates, Tauri, Wails, React, Vue, Svelte, or plain HTML.

<Callout type="info" title="Framework-agnostic by design">
Components are pure HTML + CSS + semantic tokens. Interactive behavior
(modals, dropdowns, toasts) lives in small, tree-shakeable JS modules.
</Callout>

## Why TWANTS?

- 🎨 **~100 components** across foundations, forms, navigation, data, feedback, layout, media, and desktop UI
- 🌗 **Light / Dark / System** themes driven entirely by CSS variables
- 🪄 **Fluent-inspired** — Mica, Acrylic, layered surfaces, compact density
- ♿ **Accessible** — semantic HTML, ARIA, keyboard navigation
- 🧩 **Zero dependencies** in the CSS layer
- 🛠 **Highly customizable** — override a single CSS variable to re-skin everything

## At a glance

```html
<button class="twants-button twants-button-primary">Save changes</button>

<div class="twants-card">
  <div class="twants-card-header">
    <div class="twants-card-title">Welcome</div>
  </div>
  <div class="twants-card-body">TWANTS is ready to use.</div>
</div>
```

## Next steps

- [Installation](/docs/getting-started/installation)
- [Design tokens](/docs/design/tokens)
- [Component reference](/docs/components/button)
```

### `docs/docs/getting-started/installation.md`

```md
---
title: Installation
---

# Installation

## Install from npm

```bash
npm install twants
```

<Callout type="warning" title="Tailwind CSS v4 required">
TWANTS uses Tailwind CSS v4's CSS-first configuration. Ensure your project
is on Tailwind v4 or later.
</Callout>

## Import styles

Add TWANTS' stylesheet once, anywhere in your app's entry point:

```ts title="src/main.ts"
import "twants/styles";
```

Or choose granular entry points:

```ts
import "twants/tokens";     // design tokens only
import "twants/theme";      // light/dark themes
import "twants/components"; // component styles
```

## Verify

<Preview
  code={`<button class="twants-button twants-button-primary">Hello TWANTS</button>`}
>
  <button className="twants-button twants-button-primary">Hello TWANTS</button>
</Preview>

## Peer dependency

TWANTS declares `tailwindcss@^4` as a peer dependency. If your project is
already on v4 you don't need to do anything.
```

### `docs/docs/design/tokens.md`

```md
---
title: Design Tokens
---

# Design Tokens

Every visual primitive in TWANTS is a CSS custom property. Override them
anywhere on the cascade to retheme the entire system.

## Core surface tokens

<PropsTable
  rows={[
    { name: "--twants-background", type: "color", default: "gray-50", description: "Page background." },
    { name: "--twants-surface", type: "color", default: "white", description: "Primary card/panel surface." },
    { name: "--twants-surface-secondary", type: "color", default: "gray-100", description: "Secondary surface (headers, footers)." },
    { name: "--twants-foreground", type: "color", default: "gray-900", description: "Primary text color." },
    { name: "--twants-border", type: "color", default: "gray-200", description: "Default border color." },
  ]}
/>

## Accent tokens

```css
:root {
  --twants-primary:            #2563eb;
  --twants-primary-hover:      #1d4ed8;
  --twants-primary-foreground: #ffffff;
  --twants-primary-subtle:     #eff6ff;
  --twants-focus-ring:         #3b82f6;
}
```

## Re-skin the system in one line

```html
<html style="--twants-primary: #7c3aed; --twants-focus-ring: #7c3aed;">
```

<Callout type="success" title="That's it">
Every component — buttons, tabs, focus rings, progress bars, active sidebar
items — updates automatically.
</Callout>
```

### `docs/docs/components/button.md`

```md
---
title: Button
---

# Button

Buttons trigger an action. They come in five visual variants, four sizes,
and support disabled and loading states.

## Variants

<Preview
  code={`<button class="twants-button twants-button-primary">Primary</button>
<button class="twants-button">Default</button>
<button class="twants-button twants-button-outline">Outline</button>
<button class="twants-button twants-button-subtle">Subtle</button>
<button class="twants-button twants-button-danger">Danger</button>`}
>
  <button className="twants-button twants-button-primary">Primary</button>
  <button className="twants-button">Default</button>
  <button className="twants-button twants-button-outline">Outline</button>
  <button className="twants-button twants-button-subtle">Subtle</button>
  <button className="twants-button twants-button-danger">Danger</button>
</Preview>

## Sizes

<Preview
  code={`<button class="twants-button twants-button-primary twants-button-xs">XS</button>
<button class="twants-button twants-button-primary twants-button-sm">SM</button>
<button class="twants-button twants-button-primary">MD</button>
<button class="twants-button twants-button-primary twants-button-lg">LG</button>`}
>
  <button className="twants-button twants-button-primary twants-button-xs">XS</button>
  <button className="twants-button twants-button-primary twants-button-sm">SM</button>
  <button className="twants-button twants-button-primary">MD</button>
  <button className="twants-button twants-button-primary twants-button-lg">LG</button>
</Preview>

## States

<Preview
  code={`<button class="twants-button twants-button-primary" disabled>Disabled</button>
<button class="twants-button twants-button-primary twants-button-loading">Loading</button>`}
>
  <button className="twants-button twants-button-primary" disabled>Disabled</button>
  <button className="twants-button twants-button-primary twants-button-loading">Loading</button>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "variant", type: "'primary' | 'default' | 'outline' | 'subtle' | 'danger'", default: "'default'", description: "Visual style." },
    { name: "size", type: "'xs' | 'sm' | 'md' | 'lg'", default: "'md'", description: "Control height and padding." },
    { name: "loading", type: "boolean", default: "false", description: "Replaces the label with a spinner." },
    { name: "disabled", type: "boolean", default: "false", description: "Prevents interaction and dims the button." },
    { name: "block", type: "boolean", default: "false", description: "Expands to fill its container width." },
  ]}
/>

## Accessibility

- Always provide a visible label, or `aria-label` when using icons only.
- Focus uses `--twants-focus-ring`; do not remove it.
- `disabled` sets `pointer-events: none`; use `aria-disabled` when the button must remain focusable.
```

### `docs/docs/integrations/laravel.md`

```md
---
title: Laravel
---

# Laravel + Blade + Vite + TWANTS

## Install

```bash
composer create-project laravel/laravel my-app
cd my-app
npm install twants
```

## Import styles

`resources/css/app.css`:

```css
@import "tailwindcss";
@import "twants/styles";
```

## Layout

`resources/views/layouts/app.blade.php`:

```blade
<!doctype html>
<html lang="en" data-theme="light">
  <head>
    <meta charset="utf-8" />
    @vite(['resources/css/app.css', 'resources/js/app.js'])
  </head>
  <body class="twants-mica" style="min-height:100vh">
    <div class="twants-app-frame">
      <div class="twants-title-bar">
        <span class="twants-title-bar-title">{{ config('app.name') }}</span>
      </div>
      <main class="twants-container" style="padding-block:2rem">
        @yield('content')
      </main>
      <div class="twants-status-bar"><span class="twants-status-bar-item">Ready</span></div>
    </div>
  </body>
</html>
```

## Use components

```blade
@extends('layouts.app')
@section('content')
  <div class="twants-card">
    <div class="twants-card-header">
      <div class="twants-card-title">Dashboard</div>
    </div>
    <div class="twants-card-body">
      <button class="twants-button twants-button-primary">Save changes</button>
    </div>
  </div>
@endsection
```

## Theme switching

```js title="resources/js/app.js"
import "twants/styles";
import { ThemeSwitcher } from "twants";
ThemeSwitcher.init();
```
```

---

## Homepage: `docs/src/pages/index.tsx`

```tsx
import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";

const FEATURES = [
  { title: "~100 components", body: "Buttons, forms, navigation, data, feedback, layout, media, desktop chrome.", icon: "🧩" },
  { title: "Fluent-inspired", body: "Mica, Acrylic, layered surfaces, compact density, subtle motion.", icon: "🎨" },
  { title: "Framework-agnostic", body: "Laravel, Django, Tauri, Wails, React, Vue, Svelte, plain HTML.", icon: "🌐" },
  { title: "Token-driven themes", body: "Light, dark, system, or a custom accent from a single CSS variable.", icon: "🌗" },
  { title: "Accessible by default", body: "Semantic HTML, ARIA roles, keyboard navigation, visible focus.", icon: "♿" },
  { title: "Zero deps in CSS layer", body: "Minimal, tree-shakeable JavaScript only where interaction requires it.", icon: "🪶" },
];

export default function Home(): JSX.Element {
  return (
    <Layout title="A Modern Tailwind UI System" description="TWANTS — A Modern Tailwind UI System for Everywhere.">
      <header className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroInner}>
          <span className={styles.badge}>Tailwind CSS v4 · Vite · Fluent Design</span>
          <h1 className={styles.title}>
            TWANTS
            <span className={styles.titleAccent}>A Modern Tailwind UI System for Everywhere.</span>
          </h1>
          <p className={styles.tagline}>
            Framework-agnostic components inspired by WinUI / Fluent Design.
            Drop them into Laravel, Django, Tauri, Wails, or plain HTML — same look, everywhere.
          </p>
          <div className={styles.actions}>
            <Link className={`twants-button twants-button-primary twants-button-lg`} to="/docs/getting-started/installation">
              Get started
            </Link>
            <Link className={`twants-button twants-button-lg`} to="/docs/components/button">
              Browse components
            </Link>
          </div>
          <div className={styles.install}>
            <code>$ npm install twants</code>
          </div>
        </div>
      </header>

      <section className={styles.features}>
        <div className={styles.featuresInner}>
          {FEATURES.map((f) => (
            <div key={f.title} className={styles.feature}>
              <div className={styles.featureIcon}>{f.icon}</div>
              <div className={styles.featureTitle}>{f.title}</div>
              <div className={styles.featureBody}>{f.body}</div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
```

## `docs/src/pages/index.module.css`

```css
.hero {
  position: relative;
  padding: 6rem 1.5rem 4.5rem;
  overflow: hidden;
}
.heroGlow {
  position: absolute;
  inset: -20% -10% auto -10%;
  height: 500px;
  background:
    radial-gradient(600px 300px at 30% 30%,
      color-mix(in srgb, var(--twants-primary) 35%, transparent), transparent 70%),
    radial-gradient(600px 300px at 75% 10%,
      color-mix(in srgb, var(--twants-info) 25%, transparent), transparent 70%);
  filter: blur(40px);
  pointer-events: none;
}
.heroInner { position: relative; max-width: 900px; margin-inline: auto; text-align: center; }

.badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: var(--twants-radius-full);
  border: 1px solid var(--twants-border);
  background: var(--twants-surface);
  color: var(--twants-foreground-secondary);
  font-size: var(--twants-text-xs);
  letter-spacing: 0.02em;
}

.title {
  margin-top: 1.25rem;
  font-size: clamp(2.25rem, 4.5vw, 3.5rem);
  font-weight: var(--twants-font-bold);
  letter-spacing: -0.03em;
  color: var(--twants-foreground);
  line-height: 1.1;
}
.titleAccent {
  display: block;
  margin-top: 0.75rem;
  font-size: clamp(1.125rem, 2vw, 1.375rem);
  font-weight: var(--twants-font-medium);
  color: var(--twants-foreground-secondary);
  letter-spacing: -0.01em;
}

.tagline {
  margin: 1.25rem auto 0;
  max-width: 40rem;
  color: var(--twants-foreground-secondary);
  font-size: var(--twants-text-md);
}

.actions {
  margin-top: 2rem;
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
}

.install {
  margin-top: 1.25rem;
  display: inline-block;
  padding: 0.5rem 0.875rem;
  border-radius: var(--twants-radius-md);
  border: 1px solid var(--twants-border);
  background: var(--twants-surface);
  color: var(--twants-foreground-secondary);
  font-family: var(--twants-font-mono);
  font-size: var(--twants-text-sm);
}

.features { padding: 1rem 1.5rem 5rem; }
.featuresInner {
  max-width: 1100px;
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}
@media (max-width: 768px) { .featuresInner { grid-template-columns: 1fr; } }

.feature {
  padding: 1.25rem;
  border: 1px solid var(--twants-border);
  border-radius: var(--twants-radius-lg);
  background: var(--twants-surface);
  transition: box-shadow 160ms var(--twants-ease-standard),
              border-color 160ms var(--twants-ease-standard);
}
.feature:hover {
  border-color: var(--twants-border-strong);
  box-shadow: var(--twants-shadow);
}
.featureIcon { font-size: 1.25rem; margin-bottom: 0.75rem; }
.featureTitle { font-weight: var(--twants-font-semibold); color: var(--twants-foreground); }
.featureBody { color: var(--twants-foreground-secondary); font-size: var(--twants-text-sm); margin-top: 0.375rem; }
```

---

## `docs/postcss.config.js`

```js
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};
```

---

## `docs/babel.config.js`

```js
module.exports = {
  presets: [require.resolve("@docusaurus/core/lib/babel/preset")],
};
```

---

## `docs/tsconfig.json`

```json
{
  "extends": "@docusaurus/tsconfig",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@site/*": ["./*"]
    }
  }
}
```

---

## How the TWANTS theme fits into Docusaurus

```text
Docusaurus
  │
  ├── preset-classic  (docs + theme)
  │     └── themeConfig.customCss
  │           ├── tokens.css      ← TWANTS design tokens
  │           ├── theme.css       ← TWANTS light / dark / mica
  │           ├── components.css  ← ~100 TWANTS components
  │           └── custom.css      ← bridge: --ifm-*  ←  --twants-*
  │
  └── src/theme/*
        ├── Root            (syncs Docusaurus colorMode → [data-theme])
        ├── Navbar          (TWANTS navbar, React)
        ├── Footer          (TWANTS footer, React)
        ├── CodeBlock       (chromeless with copy button)
        ├── MDXComponents   (Callout / Button / Card / Preview / PropsTable)
        └── ...
```

The three TWANTS stylesheets are shared **verbatim** with the core package — they're the same files published on npm. `custom.css` is the only file that is Docusaurus-specific: it re-maps Docusaurus' Infima variables onto TWANTS tokens, so every Infima-styled surface (TOC, breadcrumbs, sidebar caret, code highlight lines…) inherits TWANTS colors, radii, and shadows.

This means:

- **One source of truth** — update `src/styles/tokens.css` in the core package and the docs site re-themes automatically.
- **Full swizzling** — the chrome is composed of TWANTS-styled React components, not Infima defaults.
- **MDX components are TWANTS components** — authors write `<Preview>` and `<Callout>` in Markdown and get TWANTS visual language out of the box.
- **The docs site itself is a live TWANTS showcase** — its navbar, sidebar, code blocks, tables, and home page are all built from the same tokens and classes users install.

Running the docs:

```bash
cd docs
npm install
npm start   # http://localhost:3000
npm run build
```