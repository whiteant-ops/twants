---
title: Grid
---

# Grid

Grids provide responsive column-based layouts.

## Basic

<Preview
  code={`<div class="twants-grid twants-grid-3">
  <div style="padding:1rem;background:var(--twants-surface-secondary);border-radius:var(--twants-radius);text-align:center;font-size:var(--twants-text-sm)">Column 1</div>
  <div style="padding:1rem;background:var(--twants-surface-secondary);border-radius:var(--twants-radius);text-align:center;font-size:var(--twants-text-sm)">Column 2</div>
  <div style="padding:1rem;background:var(--twants-surface-secondary);border-radius:var(--twants-radius);text-align:center;font-size:var(--twants-text-sm)">Column 3</div>
</div>`}
>
  <div className="twants-grid twants-grid-3">
    <div style={{padding:'1rem',background:'var(--twants-surface-secondary)',borderRadius:'var(--twants-radius)',textAlign:'center',fontSize:'var(--twants-text-sm)'}}>Column 1</div>
    <div style={{padding:'1rem',background:'var(--twants-surface-secondary)',borderRadius:'var(--twants-radius)',textAlign:'center',fontSize:'var(--twants-text-sm)'}}>Column 2</div>
    <div style={{padding:'1rem',background:'var(--twants-surface-secondary)',borderRadius:'var(--twants-radius)',textAlign:'center',fontSize:'var(--twants-text-sm)'}}>Column 3</div>
  </div>
</Preview>

## Different Column Counts

<Preview
  code={`<div class="twants-grid twants-grid-2" style="margin-bottom:0.75rem">
  <div style="padding:1rem;background:var(--twants-surface-secondary);border-radius:var(--twants-radius);text-align:center;font-size:var(--twants-text-sm)">2-col</div>
  <div style="padding:1rem;background:var(--twants-surface-secondary);border-radius:var(--twants-radius);text-align:center;font-size:var(--twants-text-sm)">2-col</div>
</div>
<div class="twants-grid twants-grid-4">
  <div style="padding:1rem;background:var(--twants-surface-secondary);border-radius:var(--twants-radius);text-align:center;font-size:var(--twants-text-sm)">4-col</div>
  <div style="padding:1rem;background:var(--twants-surface-secondary);border-radius:var(--twants-radius);text-align:center;font-size:var(--twants-text-sm)">4-col</div>
  <div style="padding:1rem;background:var(--twants-surface-secondary);border-radius:var(--twants-radius);text-align:center;font-size:var(--twants-text-sm)">4-col</div>
  <div style="padding:1rem;background:var(--twants-surface-secondary);border-radius:var(--twants-radius);text-align:center;font-size:var(--twants-text-sm)">4-col</div>
</div>`}
>
  <div className="twants-grid twants-grid-2" style={{marginBottom:'0.75rem'}}>
    <div style={{padding:'1rem',background:'var(--twants-surface-secondary)',borderRadius:'var(--twants-radius)',textAlign:'center',fontSize:'var(--twants-text-sm)'}}>2-col</div>
    <div style={{padding:'1rem',background:'var(--twants-surface-secondary)',borderRadius:'var(--twants-radius)',textAlign:'center',fontSize:'var(--twants-text-sm)'}}>2-col</div>
  </div>
  <div className="twants-grid twants-grid-4">
    <div style={{padding:'1rem',background:'var(--twants-surface-secondary)',borderRadius:'var(--twants-radius)',textAlign:'center',fontSize:'var(--twants-text-sm)'}}>4-col</div>
    <div style={{padding:'1rem',background:'var(--twants-surface-secondary)',borderRadius:'var(--twants-radius)',textAlign:'center',fontSize:'var(--twants-text-sm)'}}>4-col</div>
    <div style={{padding:'1rem',background:'var(--twants-surface-secondary)',borderRadius:'var(--twants-radius)',textAlign:'center',fontSize:'var(--twants-text-sm)'}}>4-col</div>
    <div style={{padding:'1rem',background:'var(--twants-surface-secondary)',borderRadius:'var(--twants-radius)',textAlign:'center',fontSize:'var(--twants-text-sm)'}}>4-col</div>
  </div>
</Preview>

## Auto Grid

<Preview
  code={`<div class="twants-grid twants-grid-auto">
  <div style="padding:1rem;background:var(--twants-surface-secondary);border-radius:var(--twants-radius);text-align:center;font-size:var(--twants-text-sm)">Auto</div>
  <div style="padding:1rem;background:var(--twants-surface-secondary);border-radius:var(--twants-radius);text-align:center;font-size:var(--twants-text-sm)">Auto</div>
  <div style="padding:1rem;background:var(--twants-surface-secondary);border-radius:var(--twants-radius);text-align:center;font-size:var(--twants-text-sm)">Auto</div>
  <div style="padding:1rem;background:var(--twants-surface-secondary);border-radius:var(--twants-radius);text-align:center;font-size:var(--twants-text-sm)">Auto</div>
  <div style="padding:1rem;background:var(--twants-surface-secondary);border-radius:var(--twants-radius);text-align:center;font-size:var(--twants-text-sm)">Auto</div>
</div>`}
>
  <div className="twants-grid twants-grid-auto">
    <div style={{padding:'1rem',background:'var(--twants-surface-secondary)',borderRadius:'var(--twants-radius)',textAlign:'center',fontSize:'var(--twants-text-sm)'}}>Auto</div>
    <div style={{padding:'1rem',background:'var(--twants-surface-secondary)',borderRadius:'var(--twants-radius)',textAlign:'center',fontSize:'var(--twants-text-sm)'}}>Auto</div>
    <div style={{padding:'1rem',background:'var(--twants-surface-secondary)',borderRadius:'var(--twants-radius)',textAlign:'center',fontSize:'var(--twants-text-sm)'}}>Auto</div>
    <div style={{padding:'1rem',background:'var(--twants-surface-secondary)',borderRadius:'var(--twants-radius)',textAlign:'center',fontSize:'var(--twants-text-sm)'}}>Auto</div>
    <div style={{padding:'1rem',background:'var(--twants-surface-secondary)',borderRadius:'var(--twants-radius)',textAlign:'center',fontSize:'var(--twants-text-sm)'}}>Auto</div>
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Use twants-grid-2, twants-grid-3, twants-grid-4, twants-grid-auto." },
  ]}
/>

## Accessibility

- Grids are layout-only — no special ARIA attributes needed.
- Ensure logical reading order in the DOM matches visual order.
