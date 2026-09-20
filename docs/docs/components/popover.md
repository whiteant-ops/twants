---
title: Popover
---

# Popover

Popovers display rich content in a floating overlay, triggered by a click.

## Basic

<Preview
  code={`<div style="position:relative;display:inline-block">
  <button class="twants-button twants-button-outline">Open Popover</button>
  <div class="twants-popover" style="top:calc(100% + 8px);left:0">
    <div style="font-size:var(--twants-text-sm);font-weight:var(--twants-font-semibold);margin-bottom:0.5rem">Dimensions</div>
    <div style="font-size:var(--twants-text-sm);color:var(--twants-foreground-secondary)">Set the dimensions for the layer.</div>
  </div>
</div>`}
>
  <div style={{position:'relative',display:'inline-block'}}>
    <button className="twants-button twants-button-outline">Open Popover</button>
    <div className="twants-popover" style={{top:'calc(100% + 8px)',left:0}}>
      <div style={{fontSize:'var(--twants-text-sm)',fontWeight:'var(--twants-font-semibold)',marginBottom:'0.5rem'}}>Dimensions</div>
      <div style={{fontSize:'var(--twants-text-sm)',color:'var(--twants-foreground-secondary)'}}>Set the dimensions for the layer.</div>
    </div>
  </div>
</Preview>

## With Form

<Preview
  code={`<div style="position:relative;display:inline-block">
  <button class="twants-button twants-button-outline">Settings</button>
  <div class="twants-popover" style="top:calc(100% + 8px);left:0;width:18rem">
    <div style="font-size:var(--twants-text-sm);font-weight:var(--twants-font-semibold);margin-bottom:0.75rem">Settings</div>
    <div class="twants-field" style="margin-bottom:0.75rem">
      <label class="twants-field-label">Width</label>
      <input class="twants-input twants-input-sm" type="text" defaultValue="100%" />
    </div>
    <div class="twants-field" style="margin-bottom:0.75rem">
      <label class="twants-field-label">Max width</label>
      <input class="twants-input twants-input-sm" type="text" defaultValue="300px" />
    </div>
    <div class="twants-field">
      <label class="twants-field-label">Height</label>
      <input class="twants-input twants-input-sm" type="text" defaultValue="25px" />
    </div>
  </div>
</div>`}
>
  <div style={{position:'relative',display:'inline-block'}}>
    <button className="twants-button twants-button-outline">Settings</button>
    <div className="twants-popover" style={{top:'calc(100% + 8px)',left:0,width:'18rem'}}>
      <div style={{fontSize:'var(--twants-text-sm)',fontWeight:'var(--twants-font-semibold)',marginBottom:'0.75rem'}}>Settings</div>
      <div className="twants-field" style={{marginBottom:'0.75rem'}}>
        <label className="twants-field-label">Width</label>
        <input className="twants-input twants-input-sm" type="text" defaultValue="100%" />
      </div>
      <div className="twants-field" style={{marginBottom:'0.75rem'}}>
        <label className="twants-field-label">Max width</label>
        <input className="twants-input twants-input-sm" type="text" defaultValue="300px" />
      </div>
      <div className="twants-field">
        <label className="twants-field-label">Height</label>
        <input className="twants-input twants-input-sm" type="text" defaultValue="25px" />
      </div>
    </div>
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Additional CSS classes on the popover container." },
  ]}
/>

## Accessibility

- Use `role="dialog"` and `aria-modal="true"` on the popover.
- Focus should be trapped inside when open.
- Pressing Escape should close the popover.
- Return focus to the trigger element when closed.
