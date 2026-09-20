---
title: Sidebar
---

# Sidebar

Sidebars provide vertical navigation with sections, items, and collapsible groups.

## Basic

<Preview
  code={`<nav class="twants-sidebar" style="max-width:16rem">
  <div class="twants-sidebar-section">
    <div class="twants-sidebar-section-title">Getting Started</div>
    <a class="twants-sidebar-item" href="#" aria-current="page">Installation</a>
    <a class="twants-sidebar-item" href="#">Quick Start</a>
  </div>
  <div class="twants-sidebar-section">
    <div class="twants-sidebar-section-title">Components</div>
    <a class="twants-sidebar-item" href="#">Button</a>
    <a class="twants-sidebar-item" href="#">Card</a>
    <a class="twants-sidebar-item" href="#">Input</a>
  </div>
</nav>`}
>
  <nav className="twants-sidebar" style={{maxWidth:'16rem'}}>
    <div className="twants-sidebar-section">
      <div className="twants-sidebar-section-title">Getting Started</div>
      <a className="twants-sidebar-item" href="#" aria-current="page">Installation</a>
      <a className="twants-sidebar-item" href="#">Quick Start</a>
    </div>
    <div className="twants-sidebar-section">
      <div className="twants-sidebar-section-title">Components</div>
      <a className="twants-sidebar-item" href="#">Button</a>
      <a className="twants-sidebar-item" href="#">Card</a>
      <a className="twants-sidebar-item" href="#">Input</a>
    </div>
  </nav>
</Preview>

## With Icons

<Preview
  code={`<nav class="twants-sidebar" style="max-width:16rem">
  <div class="twants-sidebar-section">
    <a class="twants-sidebar-item" href="#" aria-current="page">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
      Dashboard
    </a>
    <a class="twants-sidebar-item" href="#">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
      Users
    </a>
    <a class="twants-sidebar-item" href="#">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"/></svg>
      Settings
    </a>
  </div>
</nav>`}
>
  <nav className="twants-sidebar" style={{maxWidth:'16rem'}}>
    <div className="twants-sidebar-section">
      <a className="twants-sidebar-item" href="#" aria-current="page">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
        Dashboard
      </a>
      <a className="twants-sidebar-item" href="#">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
        Users
      </a>
      <a className="twants-sidebar-item" href="#">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"/></svg>
        Settings
      </a>
    </div>
  </nav>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Additional CSS classes." },
  ]}
/>

## Accessibility

- Use `<nav aria-label="Sidebar">` as the container.
- Current page item should have `aria-current="page"`.
- Section titles should use heading elements or `role="heading"`.
