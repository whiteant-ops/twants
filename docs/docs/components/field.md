---
title: Field
---

# Field

Field is a wrapper that groups a label, input, hint, and error message with consistent spacing.

## Basic

<Preview
  code={`<div class="twants-field" style="max-width:20rem">
  <label class="twants-field-label" for="field-name">Full name</label>
  <input class="twants-input" id="field-name" type="text" placeholder="John Doe" />
</div>`}
>
  <div className="twants-field" style={{maxWidth:'20rem'}}>
    <label className="twants-field-label" htmlFor="field-name">Full name</label>
    <input className="twants-input" id="field-name" type="text" placeholder="John Doe" />
  </div>
</Preview>

## Required

<Preview
  code={`<div class="twants-field" style="max-width:20rem">
  <label class="twants-field-label twants-field-label-required" for="field-email">Email</label>
  <input class="twants-input" id="field-email" type="email" placeholder="you@example.com" />
</div>`}
>
  <div className="twants-field" style={{maxWidth:'20rem'}}>
    <label className="twants-field-label twants-field-label-required" htmlFor="field-email">Email</label>
    <input className="twants-input" id="field-email" type="email" placeholder="you@example.com" />
  </div>
</Preview>

## With Hint

<Preview
  code={`<div class="twants-field" style="max-width:20rem">
  <label class="twants-field-label" for="field-pass">Password</label>
  <input class="twants-input" id="field-pass" type="password" />
  <span class="twants-field-hint">Must be at least 8 characters.</span>
</div>`}
>
  <div className="twants-field" style={{maxWidth:'20rem'}}>
    <label className="twants-field-label" htmlFor="field-pass">Password</label>
    <input className="twants-input" id="field-pass" type="password" />
    <span className="twants-field-hint">Must be at least 8 characters.</span>
  </div>
</Preview>

## With Error

<Preview
  code={`<div class="twants-field" style="max-width:20rem">
  <label class="twants-field-label twants-field-label-required" for="field-err">Username</label>
  <input class="twants-input twants-input-invalid" id="field-err" type="text" value="ab" />
  <span class="twants-field-error">Username must be at least 3 characters.</span>
</div>`}
>
  <div className="twants-field" style={{maxWidth:'20rem'}}>
    <label className="twants-field-label twants-field-label-required" htmlFor="field-err">Username</label>
    <input className="twants-input twants-input-invalid" id="field-err" type="text" defaultValue="ab" />
    <span className="twants-field-error">Username must be at least 3 characters.</span>
  </div>
</Preview>

## Disabled

<Preview
  code={`<div class="twants-field" style="max-width:20rem">
  <label class="twants-field-label" for="field-dis">Email</label>
  <input class="twants-input" id="field-dis" type="email" disabled value="locked@example.com" />
  <span class="twants-field-hint">This field cannot be changed.</span>
</div>`}
>
  <div className="twants-field" style={{maxWidth:'20rem'}}>
    <label className="twants-field-label" htmlFor="field-dis">Email</label>
    <input className="twants-input" id="field-dis" type="email" disabled defaultValue="locked@example.com" />
    <span className="twants-field-hint">This field cannot be changed.</span>
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Additional CSS classes on the field wrapper." },
  ]}
/>

## Accessibility

- Always pair `twants-field-label` with an input using `htmlFor`/`id`.
- Use `twants-field-hint` for helper text, `twants-field-error` for validation errors.
- Add `aria-describedby` on the input pointing to hint/error element IDs.
- Add `aria-invalid="true"` when showing error state.
