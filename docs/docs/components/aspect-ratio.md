---
title: Aspect Ratio
---

# Aspect Ratio

Aspect ratio utilities maintain consistent width-to-height proportions.

## Basic

<Preview
  code={`<div class="twants-aspect-video" style="max-width:24rem;background:var(--twants-surface-secondary);border-radius:var(--twants-radius);display:flex;align-items:center;justify-content:center;font-size:var(--twants-text-sm);color:var(--twants-foreground-muted)">
  16:9 Video
</div>`}
>
  <div className="twants-aspect-video" style={{maxWidth:'24rem',background:'var(--twants-surface-secondary)',borderRadius:'var(--twants-radius)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'var(--twants-text-sm)',color:'var(--twants-foreground-muted)'}}>
    16:9 Video
  </div>
</Preview>

## Variants

<Preview
  code={`<div style="display:flex;gap:1rem">
  <div class="twants-aspect-square" style="width:8rem;background:var(--twants-surface-secondary);border-radius:var(--twants-radius);display:flex;align-items:center;justify-content:center;font-size:var(--twants-text-xs);color:var(--twants-foreground-muted)">
    1:1
  </div>
  <div class="twants-aspect-photo" style="width:10rem;background:var(--twants-surface-secondary);border-radius:var(--twants-radius);display:flex;align-items:center;justify-content:center;font-size:var(--twants-text-xs);color:var(--twants-foreground-muted)">
    4:3 Photo
  </div>
  <div class="twants-aspect-video" style="width:12rem;background:var(--twants-surface-secondary);border-radius:var(--twants-radius);display:flex;align-items:center;justify-content:center;font-size:var(--twants-text-xs);color:var(--twants-foreground-muted)">
    16:9 Video
  </div>
</div>`}
>
  <div style={{display:'flex',gap:'1rem'}}>
    <div className="twants-aspect-square" style={{width:'8rem',background:'var(--twants-surface-secondary)',borderRadius:'var(--twants-radius)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'var(--twants-text-xs)',color:'var(--twants-foreground-muted)'}}>
      1:1
    </div>
    <div className="twants-aspect-photo" style={{width:'10rem',background:'var(--twants-surface-secondary)',borderRadius:'var(--twants-radius)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'var(--twants-text-xs)',color:'var(--twants-foreground-muted)'}}>
      4:3 Photo
    </div>
    <div className="twants-aspect-video" style={{width:'12rem',background:'var(--twants-surface-secondary)',borderRadius:'var(--twants-radius)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'var(--twants-text-xs)',color:'var(--twants-foreground-muted)'}}>
      16:9 Video
    </div>
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Use twants-aspect-square, twants-aspect-video, twants-aspect-photo, twants-aspect-wide." },
  ]}
/>

## Accessibility

- Aspect ratio containers are layout-only — no special ARIA attributes needed.
- Ensure content inside remains readable at all viewport sizes.
