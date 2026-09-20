---
title: Badge
---

# Badge

Badges are small labels for statuses, categories, or counts. They are non-interactive and used inline with text or other elements.

## Variants

<Preview
  code={`<span class="twants-badge">Default</span>
<span class="twants-badge twants-badge-primary">Primary</span>
<span class="twants-badge twants-badge-success">Success</span>
<span class="twants-badge twants-badge-warning">Warning</span>
<span class="twants-badge twants-badge-danger">Danger</span>`}
>
  <span className="twants-badge">Default</span>
  <span className="twants-badge twants-badge-primary">Primary</span>
  <span className="twants-badge twants-badge-success">Success</span>
  <span className="twants-badge twants-badge-warning">Warning</span>
  <span className="twants-badge twants-badge-danger">Danger</span>
</Preview>

## With Dot Indicator

<Preview
  code={`<span class="twants-badge"><span class="twants-spinner" style="width:0.5rem;height:0.5rem;border-width:1.5px"></span> Loading</span>
<span class="twants-badge twants-badge-success">● Active</span>
<span class="twants-badge twants-badge-danger">● Error</span>`}
>
  <span className="twants-badge"><span className="twants-spinner" style={{width:'0.5rem',height:'0.5rem',borderWidth:'1.5px'}}></span> Loading</span>
  <span className="twants-badge twants-badge-success">● Active</span>
  <span className="twants-badge twants-badge-danger">● Error</span>
</Preview>

## As Count

<Preview
  code={`<span class="twants-badge twants-badge-primary">3</span>
<span class="twants-badge twants-badge-danger">99+</span>
<span class="twants-badge">42</span>`}
>
  <span className="twants-badge twants-badge-primary">3</span>
  <span className="twants-badge twants-badge-danger">99+</span>
  <span className="twants-badge">42</span>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Additional CSS classes. Add variant: twants-badge-primary, twants-badge-success, twants-badge-warning, twants-badge-danger." },
  ]}
/>

## Accessibility

- Badges are decorative by default. Add `role="status"` when conveying status information.
- For counts, add `aria-label` to provide context (e.g., `aria-label="3 unread messages"`).
- Do not use badges for interactive actions — use buttons instead.
