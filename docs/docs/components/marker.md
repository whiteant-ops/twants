---
title: Marker
---

# Marker

Markers display small status indicators with dots, icons, and labels.

## Basic

<Preview
  code={`<div style="display:flex;flex-direction:column;gap:0.5rem">
  <div class="twants-marker twants-marker-default"><span class="twants-marker-dot"></span>Default</div>
  <div class="twants-marker twants-marker-primary"><span class="twants-marker-dot"></span>Primary</div>
  <div class="twants-marker twants-marker-success"><span class="twants-marker-dot"></span>Success</div>
  <div class="twants-marker twants-marker-warning"><span class="twants-marker-dot"></span>Warning</div>
  <div class="twants-marker twants-marker-danger"><span class="twants-marker-dot"></span>Danger</div>
  <div class="twants-marker twants-marker-info"><span class="twants-marker-dot"></span>Info</div>
</div>`}
>
  <div style={{display:'flex',flexDirection:'column',gap:'0.5rem'}}>
    <div className="twants-marker twants-marker-default"><span className="twants-marker-dot"></span>Default</div>
    <div className="twants-marker twants-marker-primary"><span className="twants-marker-dot"></span>Primary</div>
    <div className="twants-marker twants-marker-success"><span className="twants-marker-dot"></span>Success</div>
    <div className="twants-marker twants-marker-warning"><span className="twants-marker-dot"></span>Warning</div>
    <div className="twants-marker twants-marker-danger"><span className="twants-marker-dot"></span>Danger</div>
    <div className="twants-marker twants-marker-info"><span className="twants-marker-dot"></span>Info</div>
  </div>
</Preview>

## Pulse Animation

<Preview
  code={`<div style="display:flex;gap:1.5rem;align-items:center">
  <div class="twants-marker twants-marker-success twants-marker-pulse"><span class="twants-marker-dot"></span>Online</div>
  <div class="twants-marker twants-marker-warning twants-marker-pulse"><span class="twants-marker-dot"></span>Away</div>
  <div class="twants-marker twants-marker-danger twants-marker-pulse"><span class="twants-marker-dot"></span>Busy</div>
</div>`}
>
  <div style={{display:'flex',gap:'1.5rem',alignItems:'center'}}>
    <div className="twants-marker twants-marker-success twants-marker-pulse"><span className="twants-marker-dot"></span>Online</div>
    <div className="twants-marker twants-marker-warning twants-marker-pulse"><span className="twants-marker-dot"></span>Away</div>
    <div className="twants-marker twants-marker-danger twants-marker-pulse"><span className="twants-marker-dot"></span>Busy</div>
  </div>
</Preview>

## With Icons

<Preview
  code={`<div style="display:flex;gap:1.5rem;align-items:center">
  <div class="twants-marker twants-marker-success">
    <svg class="twants-marker-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
    Completed
  </div>
  <div class="twants-marker twants-marker-danger">
    <svg class="twants-marker-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>
    Failed
  </div>
  <div class="twants-marker twants-marker-info">
    <svg class="twants-marker-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
    Pending
  </div>
</div>`}
>
  <div style={{display:'flex',gap:'1.5rem',alignItems:'center'}}>
    <div className="twants-marker twants-marker-success">
      <svg className="twants-marker-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
      Completed
    </div>
    <div className="twants-marker twants-marker-danger">
      <svg className="twants-marker-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>
      Failed
    </div>
    <div className="twants-marker twants-marker-info">
      <svg className="twants-marker-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
      Pending
    </div>
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Use twants-marker-primary, -success, -warning, -danger, -info for colors." },
    { name: "pulse", type: "boolean", default: "false", description: "Add twants-marker-pulse class for animation." },
  ]}
/>

## Accessibility

- Markers are decorative — use `aria-hidden="true"` on the dot element.
- Provide visible text alongside the marker for screen readers.
- Pulsing markers should not be animated for users who prefer reduced motion (`prefers-reduced-motion`).
