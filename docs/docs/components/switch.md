---
title: Switch
---

# Switch

Switches toggle a single setting on or off. They are preferred over checkboxes for binary on/off actions.

## Basic

<Preview
  code={`<label class="twants-checkbox-label">
  <input type="checkbox" class="twants-switch" />
  Airplane mode
</label>
<label class="twants-checkbox-label">
  <input type="checkbox" class="twants-switch" checked />
  Wi-Fi
</label>`}
>
  <div style={{display:'flex',flexDirection:'column',gap:'0.75rem'}}>
    <label className="twants-checkbox-label">
      <input type="checkbox" className="twants-switch" />
      Airplane mode
    </label>
    <label className="twants-checkbox-label">
      <input type="checkbox" className="twants-switch" defaultChecked />
      Wi-Fi
    </label>
  </div>
</Preview>

## Disabled

<Preview
  code={`<label class="twants-checkbox-label" style="opacity:0.5">
  <input type="checkbox" class="twants-switch" disabled />
  Locked setting
</label>
<label class="twants-checkbox-label" style="opacity:0.5">
  <input type="checkbox" class="twants-switch" checked disabled />
  Always on
</label>`}
>
  <div style={{display:'flex',flexDirection:'column',gap:'0.75rem'}}>
    <label className="twants-checkbox-label" style={{opacity:0.5}}>
      <input type="checkbox" className="twants-switch" disabled />
      Locked setting
    </label>
    <label className="twants-checkbox-label" style={{opacity:0.5}}>
      <input type="checkbox" className="twants-switch" checked disabled />
      Always on
    </label>
  </div>
</Preview>

## Settings List

<Preview
  code={`<div style="max-width:20rem">
  <div style="display:flex;justify-content:space-between;align-items:center;padding:0.5rem 0;border-bottom:1px solid var(--twants-border)">
    <span style="font-size:var(--twants-text-sm);color:var(--twants-foreground)">Notifications</span>
    <input type="checkbox" class="twants-switch" checked />
  </div>
  <div style="display:flex;justify-content:space-between;align-items:center;padding:0.5rem 0;border-bottom:1px solid var(--twants-border)">
    <span style="font-size:var(--twants-text-sm);color:var(--twants-foreground)">Dark mode</span>
    <input type="checkbox" class="twants-switch" />
  </div>
  <div style="display:flex;justify-content:space-between;align-items:center;padding:0.5rem 0">
    <span style="font-size:var(--twants-text-sm);color:var(--twants-foreground)">Auto-save</span>
    <input type="checkbox" class="twants-switch" checked />
  </div>
</div>`}
>
  <div style={{maxWidth:'20rem'}}>
    {[
      ['Notifications', true],
      ['Dark mode', false],
      ['Auto-save', true],
    ].map(([label, checked]) => (
      <div key={label} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'0.5rem 0',borderBottom:'1px solid var(--twants-border)'}}>
        <span style={{fontSize:'var(--twants-text-sm)',color:'var(--twants-foreground)'}}>{label}</span>
        <input type="checkbox" className="twants-switch" defaultChecked={checked} />
      </div>
    ))}
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Use twants-switch on the input element." },
    { name: "disabled", type: "boolean", default: "false", description: "Disables the switch." },
    { name: "checked", type: "boolean", default: "false", description: "Controlled checked state." },
  ]}
/>

## Accessibility

- Use a `<label>` wrapping or associated with the switch.
- The switch communicates state via `aria-checked` (set by the browser for checkboxes).
- Use `aria-describedby` for additional context.
- Provide visible text next to the switch — do not rely on the visual alone.
