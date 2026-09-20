---
title: Hover Card
---

# Hover Card

Hover cards show additional information about a user or entity when hovering over a trigger.

## Basic

<Preview
  code={`<div style="position:relative;display:inline-block">
  <a href="#" style="color:var(--twants-primary);text-decoration:underline;text-underline-offset:2px">@whiteant</a>
  <div class="twants-hover-card" style="top:calc(100% + 8px);left:0">
    <div style="display:flex;gap:0.75rem;align-items:flex-start">
      <div class="twants-avatar" style="width:2.5rem;height:2.5rem;background:var(--twants-primary);color:white"><span>WA</span></div>
      <div>
        <div style="font-weight:var(--twants-font-semibold);font-size:var(--twants-text-sm)">White Ant</div>
        <div style="font-size:var(--twants-text-xs);color:var(--twants-foreground-muted)">@whiteant</div>
        <div style="font-size:var(--twants-text-xs);color:var(--twants-foreground-secondary);margin-top:0.375rem">Framework-agnostic UI components built with Tailwind CSS v4.</div>
      </div>
    </div>
  </div>
</div>`}
>
  <div style={{position:'relative',display:'inline-block'}}>
    <a href="#" style={{color:'var(--twants-primary)',textDecoration:'underline',textUnderlineOffset:'2px'}}>@whiteant</a>
    <div className="twants-hover-card" style={{top:'calc(100% + 8px)',left:0}}>
      <div style={{display:'flex',gap:'0.75rem',alignItems:'flex-start'}}>
        <div className="twants-avatar" style={{width:'2.5rem',height:'2.5rem',background:'var(--twants-primary)',color:'white'}}><span>WA</span></div>
        <div>
          <div style={{fontWeight:'var(--twants-font-semibold)',fontSize:'var(--twants-text-sm)'}}>White Ant</div>
          <div style={{fontSize:'var(--twants-text-xs)',color:'var(--twants-foreground-muted)'}}>@whiteant</div>
          <div style={{fontSize:'var(--twants-text-xs)',color:'var(--twants-foreground-secondary)',marginTop:'0.375rem'}}>Framework-agnostic UI components built with Tailwind CSS v4.</div>
        </div>
      </div>
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

- Use `role="tooltip"` or `aria-describedby` on the trigger.
- Hover card should appear on hover/focus, disappear on mouse leave.
- Ensure sufficient contrast for card content.
