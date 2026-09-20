---
title: Label
---

# Label

Labels provide accessible names for form controls. They should be associated with inputs using the `for` attribute.

## Basic

<Preview
  code={`<label class="twants-label">Email address</label>
<label class="twants-label twants-label-required">Password</label>`}
>
  <div style={{display:'flex',flexDirection:'column',gap:'0.5rem'}}>
    <label className="twants-label">Email address</label>
    <label className="twants-label twants-label-required">Password</label>
  </div>
</Preview>

## With Input

<Preview
  code={`<div style="display:flex;flex-direction:column;gap:0.375rem">
  <label class="twants-label" for="email-demo">Email</label>
  <input class="twants-input" id="email-demo" type="email" placeholder="you@example.com" style="max-width:16rem" />
</div>`}
>
  <div style={{display:'flex',flexDirection:'column',gap:'0.375rem'}}>
    <label className="twants-label" htmlFor="email-demo">Email</label>
    <input className="twants-input" id="email-demo" type="email" placeholder="you@example.com" style={{maxWidth:'16rem'}} />
  </div>
</Preview>

## Required Indicator

<Preview
  code={`<div style="display:flex;flex-direction:column;gap:0.375rem">
  <label class="twants-label twants-label-required" for="pass-demo">Password</label>
  <input class="twants-input" id="pass-demo" type="password" placeholder="••••••••" style="max-width:16rem" />
  <span style="font-size:var(--twants-text-xs);color:var(--twants-foreground-muted)">Must be at least 8 characters</span>
</div>`}
>
  <div style={{display:'flex',flexDirection:'column',gap:'0.375rem'}}>
    <label className="twants-label twants-label-required" htmlFor="pass-demo">Password</label>
    <input className="twants-input" id="pass-demo" type="password" placeholder="••••••••" style={{maxWidth:'16rem'}} />
    <span style={{fontSize:'var(--twants-text-xs)',color:'var(--twants-foreground-muted)'}}>Must be at least 8 characters</span>
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Additional CSS classes. Add twants-label-required for required indicator." },
    { name: "htmlFor", type: "string", default: "—", description: "ID of the form control this label is associated with." },
  ]}
/>

## Accessibility

- Always pair labels with form controls using `htmlFor` / `id`.
- Use `twants-label-required` to indicate required fields visually.
- Add `aria-required="true"` on the input for screen readers.
- Place helper text after the input, not inside the label, for better semantics.
