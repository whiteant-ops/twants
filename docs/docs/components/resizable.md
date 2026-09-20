---
title: Resizable
---

# Resizable

Resizable panels let users adjust the size of adjacent content areas by dragging a divider.

## Basic

<Preview
  code={`<div class="twants-resizable" style="height:10rem;display:flex">
  <div style="flex:1;padding:1rem;background:var(--twants-surface-secondary);border-radius:var(--twants-radius-l) 0 0 var(--twants-radius-l);display:flex;align-items:center;justify-content:center;font-size:var(--twants-text-sm);color:var(--twants-foreground-muted)">
    Left panel
  </div>
  <div style="width:6px;background:var(--twants-border-strong);cursor:col-resize;border-radius:2px"></div>
  <div style="flex:1;padding:1rem;background:var(--twants-surface-secondary);border-radius:0 var(--twants-radius-l) var(--twants-radius-l) 0;display:flex;align-items:center;justify-content:center;font-size:var(--twants-text-sm);color:var(--twants-foreground-muted)">
    Right panel
  </div>
</div>`}
>
  <div className="twants-resizable" style={{height:'10rem',display:'flex'}}>
    <div style={{flex:1,padding:'1rem',background:'var(--twants-surface-secondary)',borderRadius:'var(--twants-radius-l) 0 0 var(--twants-radius-l)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'var(--twants-text-sm)',color:'var(--twants-foreground-muted)'}}>
      Left panel
    </div>
    <div style={{width:'6px',background:'var(--twants-border-strong)',cursor:'col-resize',borderRadius:'2px'}}></div>
    <div style={{flex:1,padding:'1rem',background:'var(--twants-surface-secondary)',borderRadius:'0 var(--twants-radius-l) var(--twants-radius-l) 0',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'var(--twants-text-sm)',color:'var(--twants-foreground-muted)'}}>
      Right panel
    </div>
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Additional CSS classes." },
  ]}
/>

## Accessibility

- The resize handle should have `role="separator"` and `aria-orientation="vertical"`.
- Add `aria-valuenow`, `aria-valuemin`, `aria-valuemax` for the current position.
- Arrow keys should adjust the panel size.
