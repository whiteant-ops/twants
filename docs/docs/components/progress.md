---
title: Progress
---

# Progress

Progress indicators show the completion status of a task.

## Basic

<Preview
  code={`<div class="twants-progress" style="max-width:20rem">
  <div class="twants-progress-bar" style="width:60%"></div>
</div>`}
>
  <div className="twants-progress" style={{maxWidth:'20rem'}}>
    <div className="twants-progress-bar" style={{width:'60%'}}></div>
  </div>
</Preview>

## With Label

<Preview
  code={`<div style="max-width:20rem;display:flex;flex-direction:column;gap:0.375rem">
  <div style="display:flex;justify-content:space-between;font-size:var(--twants-text-sm)">
    <span style="color:var(--twants-foreground-secondary)">Uploading...</span>
    <span style="color:var(--twants-foreground);font-weight:var(--twants-font-medium)">72%</span>
  </div>
  <div class="twants-progress">
    <div class="twants-progress-bar" style="width:72%"></div>
  </div>
</div>`}
>
  <div style={{maxWidth:'20rem',display:'flex',flexDirection:'column',gap:'0.375rem'}}>
    <div style={{display:'flex',justifyContent:'space-between',fontSize:'var(--twants-text-sm)'}}>
      <span style={{color:'var(--twants-foreground-secondary)'}}>Uploading...</span>
      <span style={{color:'var(--twants-foreground)',fontWeight:'var(--twants-font-medium)'}}>72%</span>
    </div>
    <div className="twants-progress">
      <div className="twants-progress-bar" style={{width:'72%'}}></div>
    </div>
  </div>
</Preview>

## Indeterminate

<Preview
  code={`<div class="twants-progress twants-progress-indeterminate" style="max-width:20rem">
  <div class="twants-progress-bar" style="width:35%"></div>
</div>`}
>
  <div className="twants-progress twants-progress-indeterminate" style={{maxWidth:'20rem'}}>
    <div className="twants-progress-bar" style={{width:'35%'}}></div>
  </div>
</Preview>

## Circular

<Preview
  code={`<div class="twants-circular-progress" style="width:3rem;height:3rem">
  <svg viewBox="0 0 36 36">
    <circle class="twants-circular-progress-track" cx="18" cy="18" r="15"/>
    <circle class="twants-circular-progress-value" cx="18" cy="18" r="15" stroke-dasharray="94" stroke-dashoffset="28"/>
  </svg>
  <span class="twants-circular-progress-label">70%</span>
</div>`}
>
  <div className="twants-circular-progress" style={{width:'3rem',height:'3rem'}}>
    <svg viewBox="0 0 36 36">
      <circle className="twants-circular-progress-track" cx="18" cy="18" r="15"/>
      <circle className="twants-circular-progress-value" cx="18" cy="18" r="15" strokeDasharray="94" strokeDashoffset="28"/>
    </svg>
    <span className="twants-circular-progress-label">70%</span>
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Additional CSS classes. Use twants-progress-indeterminate for animation." },
    { name: "value", type: "number", default: "—", description: "Progress value (0-100)." },
  ]}
/>

## Accessibility

- Use `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, `aria-valuemax`.
- Add `aria-label` or visible text indicating what the progress represents.
- Indeterminate progress should use `aria-busy="true"`.
