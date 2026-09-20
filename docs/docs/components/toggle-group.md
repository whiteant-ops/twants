---
title: Toggle Group
---

# Toggle Group

Toggle groups let users select one or more options from a set.

## Basic

<Preview
  code={`<div class="twants-toggle-group">
  <button class="twants-toggle-group-item" aria-pressed="true">Left</button>
  <button class="twants-toggle-group-item" aria-pressed="false">Center</button>
  <button class="twants-toggle-group-item" aria-pressed="false">Right</button>
</div>`}
>
  <div className="twants-toggle-group">
    <button className="twants-toggle-group-item" aria-pressed="true">Left</button>
    <button className="twants-toggle-group-item" aria-pressed="false">Center</button>
    <button className="twants-toggle-group-item" aria-pressed="false">Right</button>
  </div>
</Preview>

## With Icons

<Preview
  code={`<div class="twants-toggle-group">
  <button class="twants-toggle-group-item" aria-pressed="true">
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
  </button>
  <button class="twants-toggle-group-item" aria-pressed="false">
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
  </button>
  <button class="twants-toggle-group-item" aria-pressed="false">
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v4H4zM4 12h16v4H4zM4 20h16v4H4z"/></svg>
  </button>
</div>`}
>
  <div className="twants-toggle-group">
    <button className="twants-toggle-group-item" aria-pressed="true">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
    </button>
    <button className="twants-toggle-group-item" aria-pressed="false">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
    </button>
    <button className="twants-toggle-group-item" aria-pressed="false">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v4H4zM4 12h16v4H4zM4 20h16v4H4z"/></svg>
    </button>
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Additional CSS classes." },
    { name: "aria-pressed", type: "'true' | 'false'", default: "—", description: "Marks the active toggle item." },
  ]}
/>

## Accessibility

- Use `role="group"` on the container with `aria-label`.
- Each button should have `aria-pressed` to indicate state.
- Arrow keys navigate between items.
- Only one item can be pressed at a time (single select) or multiple (multi select).
