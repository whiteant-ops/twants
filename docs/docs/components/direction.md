---
title: Direction
---

# Direction

Direction utilities control text and layout direction for RTL/LTR support.

## LTR (Default)

<Preview
  code={`<div class="twants-ltr" style="max-width:20rem;padding:1rem;border:1px solid var(--twants-border);border-radius:var(--twants-radius);font-size:var(--twants-text-sm)">
  <div style="font-weight:var(--twants-font-medium);margin-bottom:0.5rem">Left-to-Right</div>
  <div style="color:var(--twants-foreground-secondary)">This content flows from left to right, as in English and most Latin scripts.</div>
</div>`}
>
  <div className="twants-ltr" style={{maxWidth:'20rem',padding:'1rem',border:'1px solid var(--twants-border)',borderRadius:'var(--twants-radius)',fontSize:'var(--twants-text-sm)'}}>
    <div style={{fontWeight:'var(--twants-font-medium)',marginBottom:'0.5rem'}}>Left-to-Right</div>
    <div style={{color:'var(--twants-foreground-secondary)'}}>This content flows from left to right, as in English and most Latin scripts.</div>
  </div>
</Preview>

## RTL

<Preview
  code={`<div class="twants-rtl" style="max-width:20rem;padding:1rem;border:1px solid var(--twants-border);border-radius:var(--twants-radius);font-size:var(--twants-text-sm);text-align:right">
  <div style="font-weight:var(--twants-font-medium);margin-bottom:0.5rem">من اليمين إلى اليسار</div>
  <div style="color:var(--twants-foreground-secondary)">This content flows from right to left, as in Arabic and Hebrew.</div>
</div>`}
>
  <div className="twants-rtl" style={{maxWidth:'20rem',padding:'1rem',border:'1px solid var(--twants-border)',borderRadius:'var(--twants-radius)',fontSize:'var(--twants-text-sm)',textAlign:'right'}}>
    <div style={{fontWeight:'var(--twants-font-medium)',marginBottom:'0.5rem'}}>من اليمين إلى اليسار</div>
    <div style={{color:'var(--twants-foreground-secondary)'}}>This content flows from right to left, as in Arabic and Hebrew.</div>
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Use twants-rtl for right-to-left, twants-ltr for left-to-right." },
  ]}
/>

## Accessibility

- Set `dir="rtl"` or `dir="ltr"` on the `<html>` element for document-level direction.
- Use CSS logical properties (`margin-inline-start`, `padding-inline-end`) for automatic RTL support.
- Ensure navigation and form layouts adapt to RTL direction.
