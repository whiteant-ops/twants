---
title: Menubar
---

# Menubar

A menubar displays a horizontal list of menu triggers, each opening a dropdown on click or hover.

## Basic

<Preview
  code={`<div class="twants-menubar">
  <button class="twants-menubar-item">File</button>
  <button class="twants-menubar-item">Edit</button>
  <button class="twants-menubar-item">View</button>
  <button class="twants-menubar-item">Help</button>
</div>`}
>
  <div className="twants-menubar">
    <button className="twants-menubar-item">File</button>
    <button className="twants-menubar-item">Edit</button>
    <button className="twants-menubar-item">View</button>
    <button className="twants-menubar-item">Help</button>
  </div>
</Preview>

## With Dropdown

<Preview
  code={`<div class="twants-menubar">
  <div class="twants-menubar-item" data-state="open" style="position:relative">
    <span>File</span>
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    <div class="twants-dropdown" style="top:100%;left:0">
      <button class="twants-dropdown-item">New Tab</button>
      <button class="twants-dropdown-item">New Window</button>
      <div class="twants-dropdown-separator"></div>
      <button class="twants-dropdown-item">Print</button>
    </div>
  </div>
  <button class="twants-menubar-item">Edit</button>
  <button class="twants-menubar-item">View</button>
</div>`}
>
  <div className="twants-menubar">
    <div className="twants-menubar-item" data-state="open" style={{position:'relative'}}>
      <span>File</span>
      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
    </div>
    <button className="twants-menubar-item">Edit</button>
    <button className="twants-menubar-item">View</button>
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Additional CSS classes." },
    { name: "data-state", type: "'open' | 'closed'", default: "—", description: "Controls dropdown visibility." },
  ]}
/>

## Accessibility

- Use `role="menubar"` on the container, `role="menuitem"` on each item.
- Arrow keys navigate between items, Enter/Space opens dropdowns.
- Escape closes open dropdowns.
- Use `aria-haspopup="true"` on items with dropdowns.
