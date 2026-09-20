---
title: Design tokens
---

# Design tokens

TWANTS visual primitives are CSS custom properties. Override them at the application boundary to retheme the system.

<PropsTable
  rows={[
    { name: "--twants-background", type: "color", default: "gray-50", description: "Page background." },
    { name: "--twants-surface", type: "color", default: "white", description: "Primary panel surface." },
    { name: "--twants-primary", type: "color", default: "blue-600", description: "Accent and action color." },
    { name: "--twants-border", type: "color", default: "gray-200", description: "Default border color." },
    { name: "--twants-focus-ring", type: "color", default: "blue-500", description: "Visible keyboard focus ring." },
  ]}
/>

```html
<html style="--twants-primary: #0f766e;">
```
