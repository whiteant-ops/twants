---
title: Combobox
---

# Combobox

A combobox combines a text input with a dropdown list, allowing users to search and select from options.

## Basic

<Preview
  code={`<div class="twants-combobox" style="max-width:20rem">
  <div class="twants-combobox-trigger" data-state="closed">
    <input class="twants-combobox-input" placeholder="Select framework..." />
    <svg class="twants-combobox-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
  </div>
  <div class="twants-combobox-content">
    <div class="twants-combobox-item" aria-selected="false">
      <svg class="twants-combobox-item-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
      React
    </div>
    <div class="twants-combobox-item" aria-selected="true">
      <svg class="twants-combobox-item-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
      Vue
    </div>
    <div class="twants-combobox-item" aria-selected="false">
      <svg class="twants-combobox-item-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
      Svelte
    </div>
    <div class="twants-combobox-item" aria-selected="false">
      <svg class="twants-combobox-item-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
      Angular
    </div>
  </div>
</div>`}
>
  <div className="twants-combobox" style={{maxWidth:'20rem'}}>
    <div className="twants-combobox-trigger" data-state="closed">
      <input className="twants-combobox-input" placeholder="Select framework..." />
      <svg className="twants-combobox-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
    </div>
    <div className="twants-combobox-content">
      <div className="twants-combobox-item" aria-selected="false">
        <svg className="twants-combobox-item-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
        React
      </div>
      <div className="twants-combobox-item" aria-selected="true">
        <svg className="twants-combobox-item-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
        Vue
      </div>
      <div className="twants-combobox-item" aria-selected="false">
        <svg className="twants-combobox-item-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
        Svelte
      </div>
      <div className="twants-combobox-item" aria-selected="false">
        <svg className="twants-combobox-item-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
        Angular
      </div>
    </div>
  </div>
</Preview>

## With Groups

<Preview
  code={`<div class="twants-combobox" style="max-width:20rem">
  <div class="twants-combobox-trigger" data-state="closed">
    <input class="twants-combobox-input" placeholder="Select framework..." />
    <svg class="twants-combobox-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
  </div>
  <div class="twants-combobox-content">
    <div class="twants-combobox-group-heading">Frontend</div>
    <div class="twants-combobox-item"><svg class="twants-combobox-item-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>React</div>
    <div class="twants-combobox-item"><svg class="twants-combobox-item-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Vue</div>
    <div class="twants-combobox-group-heading">Backend</div>
    <div class="twants-combobox-item"><svg class="twants-combobox-item-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Laravel</div>
    <div class="twants-combobox-item"><svg class="twants-combobox-item-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Django</div>
  </div>
</div>`}
>
  <div className="twants-combobox" style={{maxWidth:'20rem'}}>
    <div className="twants-combobox-trigger" data-state="closed">
      <input className="twants-combobox-input" placeholder="Select framework..." />
      <svg className="twants-combobox-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
    </div>
    <div className="twants-combobox-content">
      <div className="twants-combobox-group-heading">Frontend</div>
      <div className="twants-combobox-item"><svg className="twants-combobox-item-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>React</div>
      <div className="twants-combobox-item"><svg className="twants-combobox-item-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>Vue</div>
      <div className="twants-combobox-group-heading">Backend</div>
      <div className="twants-combobox-item"><svg className="twants-combobox-item-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>Laravel</div>
      <div className="twants-combobox-item"><svg className="twants-combobox-item-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>Django</div>
    </div>
  </div>
</Preview>

## Empty State

<Preview
  code={`<div class="twants-combobox" style="max-width:20rem">
  <div class="twants-combobox-trigger" data-state="open">
    <input class="twants-combobox-input" value="xyz" />
    <svg class="twants-combobox-clear" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
  </div>
  <div class="twants-combobox-content">
    <div class="twants-combobox-empty">No results found.</div>
  </div>
</div>`}
>
  <div className="twants-combobox" style={{maxWidth:'20rem'}}>
    <div className="twants-combobox-trigger" data-state="open">
      <input className="twants-combobox-input" defaultValue="xyz" />
      <svg className="twants-combobox-clear" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
    </div>
    <div className="twants-combobox-content">
      <div className="twants-combobox-empty">No results found.</div>
    </div>
  </div>
</Preview>

## JS Usage

```typescript
import { Dropdown } from "twants";

// Combobox extends Dropdown with search functionality
Dropdown.init(triggerElement, {
  items: [
    { id: "react", label: "React" },
    { id: "vue", label: "Vue" },
    { id: "svelte", label: "Svelte" },
    { id: "angular", label: "Angular" },
  ],
  searchable: true,
  placeholder: "Search frameworks...",
  onSelect: (item) => console.log("Selected:", item),
});
```

## Props

<PropsTable
  rows={[
    { name: "placeholder", type: "string", default: "'Select...'", description: "Search input placeholder." },
    { name: "items", type: "ComboboxItem[]", default: "—", description: "Array of items with id, label, and optional group." },
    { name: "searchable", type: "boolean", default: "true", description: "Enable filtering by typing." },
    { name: "clearable", type: "boolean", default: "true", description: "Show clear button when value is selected." },
    { name: "disabled", type: "boolean", default: "false", description: "Disables the combobox." },
    { name: "onSelect", type: "(item) => void", default: "—", description: "Called when an item is selected." },
  ]}
/>

## Accessibility

- Use `role="combobox"` on the trigger, `aria-expanded` to indicate dropdown state.
- `aria-activedescendant` should point to the highlighted item.
- Arrow keys navigate items, Enter selects, Escape closes.
- The listbox should have `role="listbox"`, items should have `role="option"`.
- Announce selected item to screen readers with `aria-live="polite"`.
