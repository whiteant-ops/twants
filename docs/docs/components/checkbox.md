---
title: Checkbox
---

# Checkbox

Checkboxes let users toggle a single option on or off, or select multiple items from a list.

## Basic

<Preview
  code={`<label class="twants-checkbox-label">
  <input type="checkbox" class="twants-checkbox" />
  Accept terms and conditions
</label>
<label class="twants-checkbox-label">
  <input type="checkbox" class="twants-checkbox" checked />
  Subscribe to newsletter
</label>`}
>
  <div style={{display:'flex',flexDirection:'column',gap:'0.5rem'}}>
    <label className="twants-checkbox-label">
      <input type="checkbox" className="twants-checkbox" />
      Accept terms and conditions
    </label>
    <label className="twants-checkbox-label">
      <input type="checkbox" className="twants-checkbox" defaultChecked />
      Subscribe to newsletter
    </label>
  </div>
</Preview>

## Disabled

<Preview
  code={`<label class="twants-checkbox-label" style="opacity:0.5">
  <input type="checkbox" class="twants-checkbox" disabled />
  Cannot be changed
</label>`}
>
  <label className="twants-checkbox-label" style={{opacity:0.5}}>
    <input type="checkbox" className="twants-checkbox" disabled />
    Cannot be changed
  </label>
</Preview>

## Indeterminate

<Preview
  code={`<label class="twants-checkbox-label">
  <input type="checkbox" class="twants-checkbox" id="ind-check" />
  Select all
</label>`}
>
  <label className="twants-checkbox-label">
    <input type="checkbox" className="twants-checkbox" ref={el => { if (el) el.indeterminate = true; }} />
    Select all
  </label>
</Preview>

## Group

<Preview
  code={`<fieldset style="border:0;padding:0;margin:0">
  <legend style="font-size:var(--twants-text-sm);font-weight:var(--twants-font-medium);margin-bottom:0.5rem;color:var(--twants-foreground)">Notifications</legend>
  <div style="display:flex;flex-direction:column;gap:0.5rem">
    <label class="twants-checkbox-label"><input type="checkbox" class="twants-checkbox" checked /> Email</label>
    <label class="twants-checkbox-label"><input type="checkbox" class="twants-checkbox" checked /> Push</label>
    <label class="twants-checkbox-label"><input type="checkbox" class="twants-checkbox" /> SMS</label>
  </div>
</fieldset>`}
>
  <fieldset style={{border:0,padding:0,margin:0}}>
    <legend style={{fontSize:'var(--twants-text-sm)',fontWeight:'var(--twants-font-medium)',marginBottom:'0.5rem',color:'var(--twants-foreground)'}}>Notifications</legend>
    <div style={{display:'flex',flexDirection:'column',gap:'0.5rem'}}>
      <label className="twants-checkbox-label"><input type="checkbox" className="twants-checkbox" defaultChecked /> Email</label>
      <label className="twants-checkbox-label"><input type="checkbox" className="twants-checkbox" defaultChecked /> Push</label>
      <label className="twants-checkbox-label"><input type="checkbox" className="twants-checkbox" /> SMS</label>
    </div>
  </fieldset>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Use twants-checkbox on the input element." },
    { name: "disabled", type: "boolean", default: "false", description: "Disables the checkbox." },
    { name: "checked", type: "boolean", default: "false", description: "Controlled checked state." },
  ]}
/>

## Accessibility

- Always use with a `<label>` element using `htmlFor`/`id`.
- Use `fieldset` + `legend` for checkbox groups.
- Indeterminate state must be set via JavaScript (`el.indeterminate = true`).
- Add `aria-describedby` for help text.
