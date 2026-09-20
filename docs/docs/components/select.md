---
title: Select
---

# Select

Select dropdowns let users choose one option from a list.

## Basic

<Preview
  code={`<select class="twants-select" style="max-width:16rem">
  <option value="">Choose an option</option>
  <option>Apple</option>
  <option>Banana</option>
  <option>Cherry</option>
</select>`}
>
  <select className="twants-select" style={{maxWidth:'16rem'}}>
    <option value="">Choose an option</option>
    <option>Apple</option>
    <option>Banana</option>
    <option>Cherry</option>
  </select>
</Preview>

## Sizes

<Preview
  code={`<select class="twants-select twants-input-sm" style="max-width:16rem"><option>Small</option></select>
<select class="twants-select" style="max-width:16rem"><option>Default</option></select>
<select class="twants-select twants-input-lg" style="max-width:16rem"><option>Large</option></select>`}
>
  <div style={{display:'flex',flexDirection:'column',gap:'0.5rem',maxWidth:'16rem'}}>
    <select className="twants-select twants-input-sm"><option>Small</option></select>
    <select className="twants-select"><option>Default</option></select>
    <select className="twants-select twants-input-lg"><option>Large</option></select>
  </div>
</Preview>

## With Field

<Preview
  code={`<div class="twants-field" style="max-width:16rem">
  <label class="twants-field-label twants-field-label-required" for="sel-framework">Framework</label>
  <select class="twants-select" id="sel-framework">
    <option value="">Select framework</option>
    <option>Laravel</option>
    <option>Django</option>
    <option>Tauri</option>
    <option>Wails</option>
  </select>
  <span class="twants-field-hint">Choose your integration target.</span>
</div>`}
>
  <div className="twants-field" style={{maxWidth:'16rem'}}>
    <label className="twants-field-label twants-field-label-required" htmlFor="sel-framework">Framework</label>
    <select className="twants-select" id="sel-framework">
      <option value="">Select framework</option>
      <option>Laravel</option>
      <option>Django</option>
      <option>Tauri</option>
      <option>Wails</option>
    </select>
    <span className="twants-field-hint">Choose your integration target.</span>
  </div>
</Preview>

## States

<Preview
  code={`<select class="twants-select" disabled style="max-width:16rem"><option>Disabled</option></select>`}
>
  <select className="twants-select" disabled style={{maxWidth:'16rem'}}><option>Disabled</option></select>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Additional CSS classes. Use twants-input-sm, twants-input-lg." },
    { name: "disabled", type: "boolean", default: "false", description: "Disables the select." },
  ]}
/>

## Accessibility

- Always pair with a visible label using `htmlFor`/`id`.
- Use `<optgroup>` for categorized options.
- The custom arrow is purely decorative — screen readers use native select semantics.
