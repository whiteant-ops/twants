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
      label: "Forms",
      items: [
        "components/field",
        "components/input",
        "components/textarea",
        "components/select",
        "components/native-select",
        "components/checkbox",
        "components/radio-group",
        "components/switch",
        "components/slider",
        "components/input-group",
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