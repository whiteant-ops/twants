---
title: Card
---

# Card

Cards group related content with a header, body, and optional footer.

## Basic

<Preview
  code={`<div class="twants-card" style="max-width:20rem">
  <div class="twants-card-header">
    <div class="twants-card-title">Card Title</div>
  </div>
  <div class="twants-card-body">
    <p style="font-size:var(--twants-text-sm);color:var(--twants-foreground-secondary)">This is the card body. It contains the main content.</p>
  </div>
  <div class="twants-card-footer">
    <button class="twants-button twants-button-primary twants-button-sm">Save</button>
    <button class="twants-button twants-button-sm">Cancel</button>
  </div>
</div>`}
>
  <div className="twants-card" style={{maxWidth:'20rem'}}>
    <div className="twants-card-header">
      <div className="twants-card-title">Card Title</div>
    </div>
    <div className="twants-card-body">
      <p style={{fontSize:'var(--twants-text-sm)',color:'var(--twants-foreground-secondary)'}}>This is the card body. It contains the main content.</p>
    </div>
    <div className="twants-card-footer">
      <button className="twants-button twants-button-primary twants-button-sm">Save</button>
      <button className="twants-button twants-button-sm">Cancel</button>
    </div>
  </div>
</Preview>

## With Description

<Preview
  code={`<div class="twants-card" style="max-width:20rem">
  <div class="twants-card-header">
    <div>
      <div class="twants-card-title">Project Alpha</div>
      <div class="twants-card-description">Created 2 days ago</div>
    </div>
  </div>
  <div class="twants-card-body">
    <p style="font-size:var(--twants-text-sm);color:var(--twants-foreground-secondary)">A framework-agnostic UI component library built with Tailwind CSS v4.</p>
  </div>
</div>`}
>
  <div className="twants-card" style={{maxWidth:'20rem'}}>
    <div className="twants-card-header">
      <div>
        <div className="twants-card-title">Project Alpha</div>
        <div className="twants-card-description">Created 2 days ago</div>
      </div>
    </div>
    <div className="twants-card-body">
      <p style={{fontSize:'var(--twants-text-sm)',color:'var(--twants-foreground-secondary)'}}>A framework-agnostic UI component library built with Tailwind CSS v4.</p>
    </div>
  </div>
</Preview>

## Stat Card

<Preview
  code={`<div class="twants-stat-card" style="max-width:14rem">
  <div class="twants-stat-card-label">Total Revenue</div>
  <div class="twants-stat-card-value">$45,231.89</div>
  <div class="twants-stat-card-change twants-stat-card-change-positive">+20.1% from last month</div>
</div>`}
>
  <div className="twants-stat-card" style={{maxWidth:'14rem'}}>
    <div className="twants-stat-card-label">Total Revenue</div>
    <div className="twants-stat-card-value">$45,231.89</div>
    <div className="twants-stat-card-change twants-stat-card-change-positive">+20.1% from last month</div>
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Additional CSS classes. Use twants-stat-card for stat variant." },
  ]}
/>

## Accessibility

- Cards are non-interactive by default. If the card is clickable, wrap in `<a>` or `<button>`.
- Use heading elements in `twants-card-title` for proper semantics.
- Ensure sufficient contrast for card borders and backgrounds.
