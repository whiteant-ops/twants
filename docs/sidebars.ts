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
      label: "Navigation",
      items: [
        "components/tabs",
        "components/breadcrumb",
        "components/pagination",
        "components/sidebar",
        "components/navigation-menu",
        "components/menubar",
        "components/command",
        "components/dropdown-menu",
      ],
    },
    {
      type: "category",
      label: "Data Display",
      items: [
        "components/card",
        "components/table",
        "components/tree",
      ],
    },
    {
      type: "category",
      label: "Feedback",
      items: [
        "components/alert",
        "components/toast",
        "components/dialog",
      ],
    },
    {
      type: "category",
      label: "Layout",
      items: [
        "components/container",
        "components/grid",
        "components/aspect-ratio",
        "components/resizable",
      ],
    },
    {
      type: "category",
      label: "Overlay",
      items: [
        "components/tooltip",
        "components/popover",
        "components/sheet",
        "components/context-menu",
      ],
    },
    {
      type: "category",
      label: "Media",
      items: [
        "components/avatar",
        "components/icon",
        "components/image",
      ],
    },
    {
      type: "category",
      label: "Date & Time",
      items: [
        "components/calendar",
      ],
    },
    {
      type: "category",
      label: "Other",
      items: [
        "components/collapsible",
        "components/scroll-area",
        "components/stepper",
      ],
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