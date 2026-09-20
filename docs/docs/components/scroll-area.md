---
title: Scroll Area
---

# Scroll Area

Scroll areas provide custom-styled scrollbars for content overflow.

## Basic

<Preview
  code={`<div class="twants-scroll" style="height:12rem;width:20rem;padding:1rem;border:1px solid var(--twants-border);border-radius:var(--twants-radius)">
  <div style="font-size:var(--twants-text-sm);color:var(--twants-foreground-secondary)">
    <p style="margin-bottom:0.75rem">This content is scrollable with custom styled scrollbars.</p>
    <p style="margin-bottom:0.75rem">The scrollbar appears when content overflows the container.</p>
    <p style="margin-bottom:0.75rem">It uses the WebKit scrollbar pseudo-elements for styling.</p>
    <p style="margin-bottom:0.75rem">This works great for panels, modals, and sidebars.</p>
    <p style="margin-bottom:0.75rem">The scrollbar thumb is visible on hover and has a smooth transition.</p>
    <p style="margin-bottom:0.75rem">You can combine this with any content inside.</p>
    <p>Try scrolling to see the custom scrollbar in action.</p>
  </div>
</div>`}
>
  <div className="twants-scroll" style={{height:'12rem',width:'20rem',padding:'1rem',border:'1px solid var(--twants-border)',borderRadius:'var(--twants-radius)'}}>
    <div style={{fontSize:'var(--twants-text-sm)',color:'var(--twants-foreground-secondary)'}}>
      <p style={{marginBottom:'0.75rem'}}>This content is scrollable with custom styled scrollbars.</p>
      <p style={{marginBottom:'0.75rem'}}>The scrollbar appears when content overflows the container.</p>
      <p style={{marginBottom:'0.75rem'}}>It uses the WebKit scrollbar pseudo-elements for styling.</p>
      <p style={{marginBottom:'0.75rem'}}>This works great for panels, modals, and sidebars.</p>
      <p style={{marginBottom:'0.75rem'}}>The scrollbar thumb is visible on hover and has a smooth transition.</p>
      <p style={{marginBottom:'0.75rem'}}>You can combine this with any content inside.</p>
      <p>Try scrolling to see the custom scrollbar in action.</p>
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

- Scroll areas should be keyboard scrollable.
- Ensure sufficient contrast for the scrollbar thumb.
- Consider adding `aria-label` for scroll regions with important content.
