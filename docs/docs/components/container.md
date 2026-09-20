---
title: Container
---

# Container

Containers center content with a max-width and responsive breakpoints.

## Basic

<Preview
  code={`<div class="twants-container">
  <div style="padding:1rem;background:var(--twants-surface-secondary);border-radius:var(--twants-radius);text-align:center;font-size:var(--twants-text-sm)">
    This content is centered and constrained to the container width.
  </div>
</div>`}
>
  <div className="twants-container">
    <div style={{padding:'1rem',background:'var(--twants-surface-secondary)',borderRadius:'var(--twants-radius)',textAlign:'center',fontSize:'var(--twants-text-sm)'}}>
      This content is centered and constrained to the container width.
    </div>
  </div>
</Preview>

## Sizes

<Preview
  code={`<div class="twants-container-sm" style="padding:0.75rem;background:var(--twants-surface-secondary);border-radius:var(--twants-radius);text-align:center;font-size:var(--twants-text-sm);margin-bottom:0.5rem">
  Small (max-width: 640px)
</div>
<div class="twants-container" style="padding:0.75rem;background:var(--twants-surface-secondary);border-radius:var(--twants-radius);text-align:center;font-size:var(--twants-text-sm);margin-bottom:0.5rem">
  Default (max-width: 1024px)
</div>
<div class="twants-container-lg" style="padding:0.75rem;background:var(--twants-surface-secondary);border-radius:var(--twants-radius);text-align:center;font-size:var(--twants-text-sm)">
  Large (max-width: 1536px)
</div>`}
>
  <div className="twants-container-sm" style={{padding:'0.75rem',background:'var(--twants-surface-secondary)',borderRadius:'var(--twants-radius)',textAlign:'center',fontSize:'var(--twants-text-sm)',marginBottom:'0.5rem'}}>
    Small (max-width: 640px)
  </div>
  <div className="twants-container" style={{padding:'0.75rem',background:'var(--twants-surface-secondary)',borderRadius:'var(--twants-radius)',textAlign:'center',fontSize:'var(--twants-text-sm)',marginBottom:'0.5rem'}}>
    Default (max-width: 1024px)
  </div>
  <div className="twants-container-lg" style={{padding:'0.75rem',background:'var(--twants-surface-secondary)',borderRadius:'var(--twants-radius)',textAlign:'center',fontSize:'var(--twants-text-sm)'}}>
    Large (max-width: 1536px)
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Use twants-container, twants-container-sm, twants-container-lg." },
  ]}
/>

## Accessibility

- Containers are purely layout — no special ARIA attributes needed.
- Use semantic HTML inside containers (headings, nav, main, etc.).
