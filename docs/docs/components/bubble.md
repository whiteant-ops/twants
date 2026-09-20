---
title: Bubble
---

# Bubble

A bubble is a floating chat widget that expands into a chat panel.

## Basic

<Preview
  code={`<div style="position:relative;height:14rem">
  <div class="twants-bubble-panel" style="position:absolute">
    <div style="padding:0.875rem 1rem;border-bottom:1px solid var(--twants-border);display:flex;justify-content:space-between;align-items:center">
      <div style="font-weight:var(--twants-font-semibold);font-size:var(--twants-text-sm)">Chat</div>
      <button class="twants-icon-button twants-icon-button-sm">✕</button>
    </div>
    <div style="flex:1;padding:1rem;font-size:var(--twants-text-sm);color:var(--twants-foreground-muted)">
      Start a conversation...
    </div>
    <div style="padding:0.75rem;border-top:1px solid var(--twants-border);display:flex;gap:0.5rem">
      <input class="twants-input" style="flex:1" placeholder="Type a message..." />
      <button class="twants-button twants-button-primary twants-button-sm">Send</button>
    </div>
  </div>
</div>`}
>
  <div style={{position:'relative',height:'14rem'}}>
    <div className="twants-bubble-panel" style={{position:'absolute'}}>
      <div style={{padding:'0.875rem 1rem',borderBottom:'1px solid var(--twants-border)',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div style={{fontWeight:'var(--twants-font-semibold)',fontSize:'var(--twants-text-sm)'}}>Chat</div>
        <button className="twants-icon-button twants-icon-button-sm">✕</button>
      </div>
      <div style={{flex:1,padding:'1rem',fontSize:'var(--twants-text-sm)',color:'var(--twants-foreground-muted)'}}>
        Start a conversation...
      </div>
      <div style={{padding:'0.75rem',borderTop:'1px solid var(--twants-border)',display:'flex',gap:'0.5rem'}}>
        <input className="twants-input" style={{flex:1}} placeholder="Type a message..." />
        <button className="twants-button twants-button-primary twants-button-sm">Send</button>
      </div>
    </div>
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Additional CSS classes." },
    { name: "open", type: "boolean", default: "false", description: "Controls panel visibility." },
  ]}
/>

## Accessibility

- The bubble button should have `aria-label="Open chat"`.
- The panel should have `role="dialog"` and `aria-modal="true"`.
- Focus should be trapped inside the panel when open.
- Pressing Escape should close the panel.
