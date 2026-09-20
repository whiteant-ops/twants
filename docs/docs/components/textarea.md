---
title: Textarea
---

# Textarea

Textareas allow users to enter multiple lines of text.

## Basic

<Preview
  code={`<textarea class="twants-textarea" placeholder="Write your message..." style="max-width:24rem"></textarea>`}
>
  <textarea className="twants-textarea" placeholder="Write your message..." style={{maxWidth:'24rem'}}></textarea>
</Preview>

## With Field

<Preview
  code={`<div class="twants-field" style="max-width:24rem">
  <label class="twants-field-label twants-field-label-required" for="bio">Bio</label>
  <textarea class="twants-textarea" id="bio" placeholder="Tell us about yourself..."></textarea>
  <span class="twants-field-hint">Max 280 characters.</span>
</div>`}
>
  <div className="twants-field" style={{maxWidth:'24rem'}}>
    <label className="twants-field-label twants-field-label-required" htmlFor="bio">Bio</label>
    <textarea className="twants-textarea" id="bio" placeholder="Tell us about yourself..."></textarea>
    <span className="twants-field-hint">Max 280 characters.</span>
  </div>
</Preview>

## States

<Preview
  code={`<textarea class="twants-textarea" placeholder="Disabled" disabled style="max-width:24rem"></textarea>
<textarea class="twants-textarea twants-input-invalid" style="max-width:24rem">Invalid content</textarea>`}
>
  <div style={{display:'flex',flexDirection:'column',gap:'0.5rem',maxWidth:'24rem'}}>
    <textarea className="twants-textarea" placeholder="Disabled" disabled></textarea>
    <textarea className="twants-textarea twants-input-invalid">Invalid content</textarea>
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Additional CSS classes. Use twants-input-invalid for error state." },
    { name: "rows", type: "number", default: "—", description: "Number of visible text lines." },
    { name: "disabled", type: "boolean", default: "false", description: "Disables the textarea." },
    { name: "placeholder", type: "string", default: "—", description: "Placeholder text." },
  ]}
/>

## Accessibility

- Always pair with a visible label using `htmlFor`/`id`.
- Add `aria-describedby` for hint/error text.
- Textareas are naturally resizable vertically; disable with `resize: none` if needed.
