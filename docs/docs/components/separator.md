---
title: Separator
---

# Separator

Separators visually divide content into sections. They can be horizontal or vertical.

## Horizontal

<Preview
  code={`<div>
  <p style="color:var(--twants-foreground-secondary);font-size:var(--twants-text-sm)">Content above</p>
  <hr class="twants-separator twants-separator-horizontal" style="margin:0.75rem 0" />
  <p style="color:var(--twants-foreground-secondary);font-size:var(--twants-text-sm)">Content below</p>
</div>`}
>
  <div>
    <p style={{color:'var(--twants-foreground-secondary)',fontSize:'var(--twants-text-sm)'}}>Content above</p>
    <hr className="twants-separator twants-separator-horizontal" style={{margin:'0.75rem 0'}} />
    <p style={{color:'var(--twants-foreground-secondary)',fontSize:'var(--twants-text-sm)'}}>Content below</p>
  </div>
</Preview>

## Vertical

<Preview
  code={`<div style="display:flex;align-items:center;gap:0.75rem;height:1.5rem">
  <span style="font-size:var(--twants-text-sm);color:var(--twants-foreground-secondary)">Left</span>
  <div class="twants-separator twants-separator-vertical" role="separator"></div>
  <span style="font-size:var(--twants-text-sm);color:var(--twants-foreground-secondary)">Right</span>
</div>`}
>
  <div style={{display:'flex',alignItems:'center',gap:'0.75rem',height:'1.5rem'}}>
    <span style={{fontSize:'var(--twants-text-sm)',color:'var(--twants-foreground-secondary)'}}>Left</span>
    <div className="twants-separator twants-separator-vertical" role="separator"></div>
    <span style={{fontSize:'var(--twants-text-sm)',color:'var(--twants-foreground-secondary)'}}>Right</span>
  </div>
</Preview>

## In Navigation

<Preview
  code={`<div style="display:flex;align-items:center;gap:0.5rem">
  <span style="font-size:var(--twants-text-sm);color:var(--twants-foreground-secondary)">Docs</span>
  <span class="twants-badge" style="font-size:0.6rem">/</span>
  <span style="font-size:var(--twants-text-sm);color:var(--twants-foreground-secondary)">Components</span>
  <span class="twants-badge" style="font-size:0.6rem">/</span>
  <span style="font-size:var(--twants-text-sm);color:var(--twants-foreground)">Separator</span>
</div>`}
>
  <div style={{display:'flex',alignItems:'center',gap:'0.5rem'}}>
    <span style={{fontSize:'var(--twants-text-sm)',color:'var(--twants-foreground-secondary)'}}>Docs</span>
    <span className="twants-badge" style={{fontSize:'0.6rem'}}>/</span>
    <span style={{fontSize:'var(--twants-text-sm)',color:'var(--twants-foreground-secondary)'}}>Components</span>
    <span className="twants-badge" style={{fontSize:'0.6rem'}}>/</span>
    <span style={{fontSize:'var(--twants-text-sm)',color:'var(--twants-foreground)'}}>Separator</span>
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Additional CSS classes. Use twants-separator-horizontal or twants-separator-vertical." },
    { name: "role", type: "'separator'", default: "—", description: "ARIA role for vertical separators." },
  ]}
/>

## Accessibility

- Use `role="separator"` on vertical separators.
- Horizontal `<hr>` elements are separators by default.
- Ensure sufficient color contrast against the background.
