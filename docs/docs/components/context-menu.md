---
title: Context Menu
---

# Context Menu

Context menus show a list of actions when right-clicking on an element.

## Basic

<Preview
  code={`<div class="twants-context-menu" style="max-width:14rem">
  <button class="twants-dropdown-item">
    <span>↩</span>
    <span>Back</span>
    <span class="twants-command-item-shortcut">⌘[</span>
  </button>
  <button class="twants-dropdown-item">
    <span>↪</span>
    <span>Forward</span>
    <span class="twants-command-item-shortcut">⌘]</span>
  </button>
  <div class="twants-dropdown-separator"></div>
  <button class="twants-dropdown-item">
    <span>⟳</span>
    <span>Reload</span>
    <span class="twants-command-item-shortcut">⌘R</span>
  </button>
  <div class="twants-dropdown-separator"></div>
  <button class="twants-dropdown-item">
    <span>📌</span>
    <span>Pin to Tab</span>
  </button>
</div>`}
>
  <div className="twants-context-menu" style={{maxWidth:'14rem'}}>
    <button className="twants-dropdown-item">
      <span>↩</span>
      <span>Back</span>
      <span className="twants-command-item-shortcut">⌘[</span>
    </button>
    <button className="twants-dropdown-item">
      <span>↪</span>
      <span>Forward</span>
      <span className="twants-command-item-shortcut">⌘]</span>
    </button>
    <div className="twants-dropdown-separator"></div>
    <button className="twants-dropdown-item">
      <span>⟳</span>
      <span>Reload</span>
      <span className="twants-command-item-shortcut">⌘R</span>
    </button>
    <div className="twants-dropdown-separator"></div>
    <button className="twants-dropdown-item">
      <span>📌</span>
      <span>Pin to Tab</span>
    </button>
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Additional CSS classes." },
  ]}
/>

## Accessibility

- Use `role="menu"` on the context menu container, `role="menuitem"` on each item.
- Arrow keys navigate between items.
- Escape closes the menu.
- The context menu should be triggered by right-click or a keyboard shortcut.
