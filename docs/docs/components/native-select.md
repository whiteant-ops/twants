---
title: Native Select
---

# Native Select

Native Select uses the browser's native `<select>` element with TWANTS styling. Use this when you need maximum compatibility or native mobile behavior.

## Basic

<Preview
  code={`<select class="twants-select" style="max-width:16rem">
  <option value="">Select a fruit</option>
  <option>Apple</option>
  <option>Banana</option>
  <option>Cherry</option>
  <option>Dragonfruit</option>
</select>`}
>
  <select className="twants-select" style={{maxWidth:'16rem'}}>
    <option value="">Select a fruit</option>
    <option>Apple</option>
    <option>Banana</option>
    <option>Cherry</option>
    <option>Dragonfruit</option>
  </select>
</Preview>

## With Groups

<Preview
  code={`<select class="twants-select" style="max-width:16rem">
  <option value="">Choose a framework</option>
  <optgroup label="Frontend">
    <option>React</option>
    <option>Vue</option>
    <option>Svelte</option>
  </optgroup>
  <optgroup label="Backend">
    <option>Laravel</option>
    <option>Django</option>
  </optgroup>
</select>`}
>
  <select className="twants-select" style={{maxWidth:'16rem'}}>
    <option value="">Choose a framework</option>
    <optgroup label="Frontend">
      <option>React</option>
      <option>Vue</option>
      <option>Svelte</option>
    </optgroup>
    <optgroup label="Backend">
      <option>Laravel</option>
      <option>Django</option>
    </optgroup>
  </select>
</Preview>

## Multiple

<Preview
  code={`<select class="twants-select" multiple style="max-width:16rem;min-height:6rem">
  <option>HTML</option>
  <option>CSS</option>
  <option selected>JavaScript</option>
  <option>TypeScript</option>
  <option>Python</option>
</select>`}
>
  <select className="twants-select" multiple style={{maxWidth:'16rem',minHeight:'6rem'}}>
    <option>HTML</option>
    <option>CSS</option>
    <option defaultChecked>JavaScript</option>
    <option>TypeScript</option>
    <option>Python</option>
  </select>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Use twants-select on the select element." },
    { name: "disabled", type: "boolean", default: "false", description: "Disables the select." },
    { name: "multiple", type: "boolean", default: "false", description: "Allows multiple selections." },
  ]}
/>

## Accessibility

- Always pair with a visible label using `htmlFor`/`id`.
- Use `<optgroup>` with a `label` attribute for categorized options.
- Native selects have full keyboard and screen reader support built in.
