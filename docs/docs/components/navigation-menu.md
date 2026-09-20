---
title: Navigation Menu
---

# Navigation Menu

Navigation menus provide a consistent way to navigate between pages or sections of your app.

## Basic

<Preview
  code={`<nav class="twants-nav-menu">
  <a class="twants-nav-menu-item" href="#" aria-current="page">Home</a>
  <a class="twants-nav-menu-item" href="#">Docs</a>
  <a class="twants-nav-menu-item" href="#">Components</a>
  <a class="twants-nav-menu-item" href="#">Blog</a>
</nav>`}
>
  <nav className="twants-nav-menu">
    <a className="twants-nav-menu-item" href="#" aria-current="page">Home</a>
    <a className="twants-nav-menu-item" href="#">Docs</a>
    <a className="twants-nav-menu-item" href="#">Components</a>
    <a className="twants-nav-menu-item" href="#">Blog</a>
  </nav>
</Preview>

## With Dropdowns

<Preview
  code={`<nav class="twants-nav-menu">
  <a class="twants-nav-menu-item" href="#">Home</a>
  <div class="twants-nav-menu-item twants-nav-menu-dropdown">
    <span>Components</span>
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    <div class="twants-dropdown" style="top:100%;left:0;min-width:12rem">
      <a class="twants-dropdown-item" href="#">Button</a>
      <a class="twants-dropdown-item" href="#">Card</a>
      <a class="twants-dropdown-item" href="#">Input</a>
    </div>
  </div>
</nav>`}
>
  <nav className="twants-nav-menu">
    <a className="twants-nav-menu-item" href="#">Home</a>
    <div className="twants-nav-menu-item twants-nav-menu-dropdown" style={{position:'relative'}}>
      <span>Components</span>
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
    </div>
  </nav>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Additional CSS classes." },
    { name: "aria-current", type: "'page' | 'true' | 'false'", default: "—", description: "Marks the active navigation item." },
  ]}
/>

## Accessibility

- Use `<nav aria-label="Main">` as the container.
- Use `aria-current="page"` on the link to the current page.
- Dropdown menus should use `aria-haspopup="true"` and `aria-expanded`.
- Arrow keys should navigate between dropdown items.
