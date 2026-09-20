import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docs: [
    "intro",
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: ["getting-started/installation", "getting-started/quick-start"],
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
        "components/badge",
        "components/separator",
        "components/label",
        "components/typography",
        "components/skeleton",
        "components/spinner",
        "components/kbd",
        "components/empty",
      ],
    },
    {
      type: "category",
      label: "Buttons & Actions",
      items: ["components/button"],
    },
    {
      type: "category",
      label: "Integrations",
      items: ["integrations/laravel", "integrations/django", "integrations/tauri", "integrations/wails", "integrations/vanilla"],
    },
    "changelog",
    "contributing",
    "license",
  ],
};

export default sidebars;