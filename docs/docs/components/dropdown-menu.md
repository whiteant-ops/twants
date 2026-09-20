---
title: Dropdown Menu
---

# Dropdown Menu

Dropdown menus show a list of actions or options triggered by a button.

## Basic

<Preview
  code={`<div style="position:relative;display:inline-block">
  <div class="twants-dropdown" style="position:static;min-width:12rem">
    <button class="twants-dropdown-item">Edit</button>
    <button class="twants-dropdown-item">Duplicate</button>
    <div class="twants-dropdown-separator"></div>
    <button class="twants-dropdown-item" style="color:var(--twants-danger)">Delete</button>
  </div>
</div>`}
>
  <div style={{position:'relative',display:'inline-block'}}>
    <div className="twants-dropdown" style={{position:'static',minWidth:'12rem'}}>
      <button className="twants-dropdown-item">Edit</button>
      <button className="twants-dropdown-item">Duplicate</button>
      <div className="twants-dropdown-separator"></div>
      <button className="twants-dropdown-item" style={{color:'var(--twants-danger)'}}>Delete</button>
    </div>
  </div>
</Preview>

## JS Usage

```typescript
import { Dropdown } from "twants";

Dropdown.init(triggerElement, {
  items: [
    { label: "Edit", icon: "✏️", onClick: () => edit() },
    { label: "Duplicate", icon: "📋", onClick: () => duplicate() },
    { type: "separator" },
    { label: "Delete", icon: "🗑️", danger: true, onClick: () => remove() },
  ],
});
```

## Props

<PropsTable
  rows={[
    { name: "items", type: "DropdownItem[]", default: "—", description: "Array of menu items with label, icon, onClick, danger flag." },
    { name: "align", type: "'start' | 'center' | 'end'", default: "'start'", description: "Horizontal alignment relative to trigger." },
  ]}
/>

## Accessibility

- Use `role="menu"` on the dropdown, `role="menuitem"` on each item.
- Arrow keys navigate between items.
- Escape closes the menu and returns focus to the trigger.
- Use `aria-haspopup="menu"` on the trigger button.
