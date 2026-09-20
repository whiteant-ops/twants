---
title: Tabs
---

# Tabs

Tabs organize content into multiple panels, showing one at a time.

## Horizontal

<Preview
  code={`<div class="twants-tabs">
  <button class="twants-tab" aria-selected="true">Overview</button>
  <button class="twants-tab" aria-selected="false">Activity</button>
  <button class="twants-tab" aria-selected="false">Settings</button>
</div>`}
>
  <div className="twants-tabs">
    <button className="twants-tab" aria-selected="true">Overview</button>
    <button className="twants-tab" aria-selected="false">Activity</button>
    <button className="twants-tab" aria-selected="false">Settings</button>
  </div>
</Preview>

## Vertical

<Preview
  code={`<div style="display:flex;gap:1rem">
  <div class="twants-vtabs">
    <button class="twants-vtab" aria-selected="true">General</button>
    <button class="twants-vtab" aria-selected="false">Security</button>
    <button class="twants-vtab" aria-selected="false">Notifications</button>
  </div>
  <div style="padding:1rem;font-size:var(--twants-text-sm);color:var(--twants-foreground-secondary)">Tab content goes here.</div>
</div>`}
>
  <div style={{display:'flex',gap:'1rem'}}>
    <div className="twants-vtabs">
      <button className="twants-vtab" aria-selected="true">General</button>
      <button className="twants-vtab" aria-selected="false">Security</button>
      <button className="twants-vtab" aria-selected="false">Notifications</button>
    </div>
    <div style={{padding:'1rem',fontSize:'var(--twants-text-sm)',color:'var(--twants-foreground-secondary)'}}>Tab content goes here.</div>
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Use twants-tabs for horizontal, twants-vtabs for vertical." },
    { name: "aria-selected", type: "'true' | 'false'", default: "—", description: "Marks the active tab." },
  ]}
/>

## Accessibility

- Use `role="tablist"` on the container, `role="tab"` on each tab, `role="tabpanel"` on panels.
- Arrow keys navigate between tabs.
- Only the active tab should have `aria-selected="true"`.
- Tab panels should be linked via `aria-controls` and `id`.
