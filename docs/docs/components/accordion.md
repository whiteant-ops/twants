---
title: Accordion
---

# Accordion

Accordions display collapsible content sections.

## Basic

<Preview
  code={`<div class="twants-accordion" style="max-width:28rem">
  <div class="twants-accordion-item">
    <button class="twants-accordion-trigger" aria-expanded="true">
      <span>What is TWANTS?</span>
      <svg class="twants-accordion-chevron" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="twants-accordion-panel">TWANTS is a framework-agnostic Tailwind CSS v4 UI component library.</div>
  </div>
  <div class="twants-accordion-item">
    <button class="twants-accordion-trigger" aria-expanded="false">
      <span>Is it free?</span>
      <svg class="twants-accordion-chevron" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="twants-accordion-panel" style="display:none">Yes, TWANTS is open source and free to use.</div>
  </div>
  <div class="twants-accordion-item">
    <button class="twants-accordion-trigger" aria-expanded="false">
      <span>Which frameworks are supported?</span>
      <svg class="twants-accordion-chevron" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="twants-accordion-panel" style="display:none">Laravel, Django, Tauri, Wails, and vanilla JS.</div>
  </div>
</div>`}
>
  <div className="twants-accordion" style={{maxWidth:'28rem'}}>
    <div className="twants-accordion-item">
      <button className="twants-accordion-trigger" aria-expanded="true">
        <span>What is TWANTS?</span>
        <svg className="twants-accordion-chevron" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
      </button>
      <div className="twants-accordion-panel">TWANTS is a framework-agnostic Tailwind CSS v4 UI component library.</div>
    </div>
    <div className="twants-accordion-item">
      <button className="twants-accordion-trigger" aria-expanded="false">
        <span>Is it free?</span>
        <svg className="twants-accordion-chevron" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
      </button>
      <div className="twants-accordion-panel" style={{display:'none'}}>Yes, TWANTS is open source and free to use.</div>
    </div>
    <div className="twants-accordion-item">
      <button className="twants-accordion-trigger" aria-expanded="false">
        <span>Which frameworks are supported?</span>
        <svg className="twants-accordion-chevron" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
      </button>
      <div className="twants-accordion-panel" style={{display:'none'}}>Laravel, Django, Tauri, Wails, and vanilla JS.</div>
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

- Use `aria-expanded` on triggers to indicate state.
- Arrow keys navigate between accordion triggers.
- Enter/Space toggles the panel.
- Use `aria-controls` linking trigger to panel.
