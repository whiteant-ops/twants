---
title: Tooltip
---

# Tooltip

Tootips display additional information on hover or focus.

## Basic

<Preview
  code={`<div class="twants-tooltip" style="display:inline-block">
  <button class="twants-button twants-button-outline">Hover me</button>
  <div class="twants-tooltip-content">This is a tooltip</div>
</div>`}
>
  <div className="twants-tooltip" style={{display:'inline-block'}}>
    <button className="twants-button twants-button-outline">Hover me</button>
    <div className="twants-tooltip-content">This is a tooltip</div>
  </div>
</Preview>

## Positions

<Preview
  code={`<div style="display:flex;gap:1rem;justify-content:center;padding:2rem 0">
  <div class="twants-tooltip" style="display:inline-block">
    <button class="twants-button twants-button-sm twants-button-outline">Top</button>
    <div class="twants-tooltip-content twants-tooltip-top">Top tooltip</div>
  </div>
  <div class="twants-tooltip" style="display:inline-block">
    <button class="twants-button twants-button-sm twants-button-outline">Bottom</button>
    <div class="twants-tooltip-content twants-tooltip-bottom">Bottom tooltip</div>
  </div>
  <div class="twants-tooltip" style="display:inline-block">
    <button class="twants-button twants-button-sm twants-button-outline">Left</button>
    <div class="twants-tooltip-content twants-tooltip-left">Left tooltip</div>
  </div>
  <div class="twants-tooltip" style="display:inline-block">
    <button class="twants-button twants-button-sm twants-button-outline">Right</button>
    <div class="twants-tooltip-content twants-tooltip-right">Right tooltip</div>
  </div>
</div>`}
>
  <div style={{display:'flex',gap:'1rem',justifyContent:'center',padding:'2rem 0'}}>
    <div className="twants-tooltip" style={{display:'inline-block'}}>
      <button className="twants-button twants-button-sm twants-button-outline">Top</button>
      <div className="twants-tooltip-content twants-tooltip-top">Top tooltip</div>
    </div>
    <div className="twants-tooltip" style={{display:'inline-block'}}>
      <button className="twants-button twants-button-sm twants-button-outline">Bottom</button>
      <div className="twants-tooltip-content twants-tooltip-bottom">Bottom tooltip</div>
    </div>
    <div className="twants-tooltip" style={{display:'inline-block'}}>
      <button className="twants-button twants-button-sm twants-button-outline">Left</button>
      <div className="twants-tooltip-content twants-tooltip-left">Left tooltip</div>
    </div>
    <div className="twants-tooltip" style={{display:'inline-block'}}>
      <button className="twants-button twants-button-sm twants-button-outline">Right</button>
      <div className="twants-tooltip-content twants-tooltip-right">Right tooltip</div>
    </div>
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Additional CSS classes. Use twants-tooltip-top, -bottom, -left, -right for positioning." },
  ]}
/>

## Accessibility

- Use `role="tooltip"` on the tooltip content.
- Link tooltip to trigger via `aria-describedby`.
- Tooltips should only appear on hover or focus, not on click.
