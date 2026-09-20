---
title: Slider
---

# Slider

Sliders let users select a value from a continuous or discrete range.

## Basic

<Preview
  code={`<input type="range" class="twants-slider" min="0" max="100" defaultValue="50" style="max-width:20rem" />`}
>
  <input type="range" className="twants-slider" min="0" max="100" defaultValue={50} style={{maxWidth:'20rem'}} />
</Preview>

## With Value Display

<Preview
  code={`<div style="display:flex;flex-direction:column;gap:0.375rem;max-width:20rem">
  <div style="display:flex;justify-content:space-between;font-size:var(--twants-text-sm)">
    <span style="color:var(--twants-foreground-secondary)">Volume</span>
    <span style="color:var(--twants-foreground);font-weight:var(--twants-font-medium)">72%</span>
  </div>
  <input type="range" class="twants-slider" min="0" max="100" defaultValue="72" />
</div>`}
>
  <div style={{display:'flex',flexDirection:'column',gap:'0.375rem',maxWidth:'20rem'}}>
    <div style={{display:'flex',justifyContent:'space-between',fontSize:'var(--twants-text-sm)'}}>
      <span style={{color:'var(--twants-foreground-secondary)'}}>Volume</span>
      <span style={{color:'var(--twants-foreground)',fontWeight:'var(--twants-font-medium)'}}>72%</span>
    </div>
    <input type="range" className="twants-slider" min="0" max="100" defaultValue={72} />
  </div>
</Preview>

## Disabled

<Preview
  code={`<input type="range" class="twants-slider" min="0" max="100" defaultValue="30" disabled style="max-width:20rem;opacity:0.5" />`}
>
  <input type="range" className="twants-slider" min="0" max="100" defaultValue={30} disabled style={{maxWidth:'20rem',opacity:0.5}} />
</Preview>

## Props

<PropsTable
  rows={[
    { name: "min", type: "number", default: "0", description: "Minimum value." },
    { name: "max", type: "number", default: "100", description: "Maximum value." },
    { name: "step", type: "number", default: "1", description: "Step increment." },
    { name: "disabled", type: "boolean", default: "false", description: "Disables the slider." },
  ]}
/>

## Accessibility

- Use `aria-label` or pair with a visible label.
- Add `aria-valuemin`, `aria-valuemax`, `aria-valuenow` (set by browser for range inputs).
- Arrow keys, Home, and End navigate the range.
