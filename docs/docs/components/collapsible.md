---
title: Collapsible
---

# Collapsible

Collapsibles hide content that can be expanded or collapsed.

## Basic

<Preview
  code={`<div class="twants-collapsible" style="max-width:20rem">
  <div style="display:flex;justify-content:space-between;align-items:center;padding:0.5rem 0">
    <span style="font-size:var(--twants-text-sm);font-weight:var(--twants-font-medium)">@peduarte starred 3 repositories</span>
    <button class="twants-button twants-button-icon twants-button-ghost twants-button-sm">▾</button>
  </div>
  <div style="padding-left:1rem;border-left:1px solid var(--twants-border);font-size:var(--twants-text-sm);color:var(--twants-foreground-secondary)">
    <div style="padding:0.25rem 0">@radix-ui/primitives</div>
    <div style="padding:0.25rem 0">@radix-ui/colors</div>
    <div style="padding:0.25rem 0">@stitches/react</div>
  </div>
</div>`}
>
  <div className="twants-collapsible" style={{maxWidth:'20rem'}}>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'0.5rem 0'}}>
      <span style={{fontSize:'var(--twants-text-sm)',fontWeight:'var(--twants-font-medium)'}}>@peduarte starred 3 repositories</span>
      <button className="twants-button twants-button-icon twants-button-ghost twants-button-sm">▾</button>
    </div>
    <div style={{paddingLeft:'1rem',borderLeft:'1px solid var(--twants-border)',fontSize:'var(--twants-text-sm)',color:'var(--twants-foreground-secondary)'}}>
      <div style={{padding:'0.25rem 0'}}>@radix-ui/primitives</div>
      <div style={{padding:'0.25rem 0'}}>@radix-ui/colors</div>
      <div style={{padding:'0.25rem 0'}}>@stitches/react</div>
    </div>
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "open", type: "boolean", default: "false", description: "Controls the expanded state." },
    { name: "onToggle", type: "() => void", default: "—", description: "Called when toggled." },
  ]}
/>

## Accessibility

- Use `aria-expanded` on the trigger button.
- The collapsible content should have `role="region"` with `aria-labelledby` pointing to the trigger.
- The trigger should have a descriptive label.
