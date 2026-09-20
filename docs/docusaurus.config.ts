import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const GH_USER = "whiteant-ops";
const GH_REPO = "twants";
const GH_URL = `https://github.com/${GH_USER}/${GH_REPO}`;

const config: Config = {
  title: "TWANTS",
  tagline: "A Modern Tailwind UI System for Everywhere.",
  favicon: "img/logo.svg",

  url: `https://${GH_USER}.github.io`,
  baseUrl: `/${GH_REPO}/`,
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
          showLastUpdateTime: process.env.CI === "true",
          showLastUpdateAuthor: process.env.CI === "true",
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
      defaultMode: "light",
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
        { href: `${GH_URL}/wiki`, label: "Wiki", position: "right" },
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
            { label: "GitHub", href: GH_URL },
            { label: "Discussions", href: `${GH_URL}/discussions` },
            { label: "Wiki", href: `${GH_URL}/wiki` },
          ],
        },
        {
          title: "More",
          items: [
            { label: "Releases", href: `${GH_URL}/releases` },
            { label: "Changelog", to: "/docs/changelog" },
            { label: "License", to: "/docs/license" },
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
    docs: {
      sidebar: { hideable: true, autoCollapseCategories: false },
    },
    tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 4 },
  } satisfies Preset.ThemeConfig,
};

export default config;