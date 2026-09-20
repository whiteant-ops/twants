---
title: Spinner
---

# Spinner

Spinners indicate that an operation is in progress. They use a CSS animation and require no JavaScript.

## Basic

<Preview
  code={`<div class="twants-spinner"></div>`}
>
  <div className="twants-spinner"></div>
</Preview>

## With Label

<Preview
  code={`<div style="display:flex;align-items:center;gap:0.5rem">
  <div class="twants-spinner"></div>
  <span style="font-size:var(--twants-text-sm);color:var(--twants-foreground-secondary)">Loading...</span>
</div>`}
>
  <div style={{display:'flex',alignItems:'center',gap:'0.5rem'}}>
    <div className="twants-spinner"></div>
    <span style={{fontSize:'var(--twants-text-sm)',color:'var(--twants-foreground-secondary)'}}>Loading...</span>
  </div>
</Preview>

## Sizes

<Preview
  code={`<div style="display:flex;align-items:end;gap:1rem">
  <div class="twants-spinner" style="width:0.75rem;height:0.75rem"></div>
  <div class="twants-spinner" style="width:1rem;height:1rem"></div>
  <div class="twants-spinner" style="width:1.5rem;height:1.5rem"></div>
  <div class="twants-spinner" style="width:2rem;height:2rem;border-width:3px"></div>
</div>`}
>
  <div style={{display:'flex',alignItems:'end',gap:'1rem'}}>
    <div className="twants-spinner" style={{width:'0.75rem',height:'0.75rem'}}></div>
    <div className="twants-spinner" style={{width:'1rem',height:'1rem'}}></div>
    <div className="twants-spinner" style={{width:'1.5rem',height:'1.5rem'}}></div>
    <div className="twants-spinner" style={{width:'2rem',height:'2rem',borderWidth:'3px'}}></div>
  </div>
</Preview>

## In Button

<Preview
  code={`<button class="twants-button twants-button-primary" disabled style="gap:0.5rem">
  <div class="twants-spinner" style="width:0.875rem;height:0.875rem;border-width:2px"></div>
  Saving...
</button>`}
>
  <button className="twants-button twants-button-primary" disabled style={{gap:'0.5rem'}}>
    <div className="twants-spinner" style={{width:'0.875rem',height:'0.875rem',borderWidth:'2px'}}></div>
    Saving...
  </button>
</Preview>

## Full Page

<Preview
  code={`<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.75rem;padding:3rem">
  <div class="twants-spinner" style="width:2rem;height:2rem;border-width:3px"></div>
  <span style="font-size:var(--twants-text-sm);color:var(--twants-foreground-muted)">Loading content...</span>
</div>`}
>
  <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'0.75rem',padding:'3rem'}}>
    <div className="twants-spinner" style={{width:'2rem',height:'2rem',borderWidth:'3px'}}></div>
    <span style={{fontSize:'var(--twants-text-sm)',color:'var(--twants-foreground-muted)'}}>Loading content...</span>
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Additional CSS classes. Adjust size via width/height style props." },
  ]}
/>

## Accessibility

- Add `role="status"` and `aria-label="Loading"` to the spinner.
- When used inside a button, set `aria-busy="true"` on the button.
- For full-page loading, use an `aria-live="polite"` region to announce when loading completes.
