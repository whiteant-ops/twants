---
title: Input
---

# Input

Text inputs let users enter and edit text. They support sizes, validation states, and icons.

## Basic

<Preview
  code={`<input class="twants-input" type="text" placeholder="Type something..." style="max-width:20rem" />`}
>
  <input className="twants-input" type="text" placeholder="Type something..." style={{maxWidth:'20rem'}} />
</Preview>

## Sizes

<Preview
  code={`<input class="twants-input twants-input-sm" type="text" placeholder="Small" style="max-width:20rem" />
<input class="twants-input" type="text" placeholder="Default" style="max-width:20rem" />
<input class="twants-input twants-input-lg" type="text" placeholder="Large" style="max-width:20rem" />`}
>
  <div style={{display:'flex',flexDirection:'column',gap:'0.5rem',maxWidth:'20rem'}}>
    <input className="twants-input twants-input-sm" type="text" placeholder="Small" />
    <input className="twants-input" type="text" placeholder="Default" />
    <input className="twants-input twants-input-lg" type="text" placeholder="Large" />
  </div>
</Preview>

## States

<Preview
  code={`<input class="twants-input" type="text" placeholder="Disabled" disabled style="max-width:20rem" />
<input class="twants-input twants-input-invalid" type="text" value="Invalid value" style="max-width:20rem" />`}
>
  <div style={{display:'flex',flexDirection:'column',gap:'0.5rem',maxWidth:'20rem'}}>
    <input className="twants-input" type="text" placeholder="Disabled" disabled />
    <input className="twants-input twants-input-invalid" type="text" defaultValue="Invalid value" />
  </div>
</Preview>

## With Icons

<Preview
  code={`<div class="twants-search" style="max-width:20rem">
  <svg class="twants-search-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
  <input class="twants-input" type="search" placeholder="Search..." />
</div>`}
>
  <div className="twants-search" style={{maxWidth:'20rem'}}>
    <svg className="twants-search-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
    <input className="twants-input" type="search" placeholder="Search..." />
  </div>
</Preview>

## Password

<Preview
  code={`<div class="twants-password" style="max-width:20rem">
  <input class="twants-input" type="password" placeholder="Enter password" />
  <button class="twants-password-toggle" type="button" aria-label="Show password">
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
  </button>
</div>`}
>
  <div className="twants-password" style={{maxWidth:'20rem'}}>
    <input className="twants-input" type="password" placeholder="Enter password" />
    <button className="twants-password-toggle" type="button" aria-label="Show password">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
    </button>
  </div>
</Preview>

## File Input

<Preview
  code={`<input class="twants-input" type="file" style="max-width:20rem" />`}
>
  <input className="twants-input" type="file" style={{maxWidth:'20rem'}} />
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Additional CSS classes. Use twants-input-sm, twants-input-lg, twants-input-invalid." },
    { name: "type", type: "string", default: "'text'", description: "Input type: text, email, password, search, file, etc." },
    { name: "disabled", type: "boolean", default: "false", description: "Disables the input." },
    { name: "placeholder", type: "string", default: "—", description: "Placeholder text." },
  ]}
/>

## Accessibility

- Always provide a visible label or `aria-label`.
- Use `type="search"` for search inputs to get built-in clear button.
- Add `aria-invalid="true"` and `aria-describedby` for error states.
- Password toggle should use `aria-pressed` to convey state.
