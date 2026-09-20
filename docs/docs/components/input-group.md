---
title: Input Group
---

# Input Group

Input groups combine an input with adjacent addons (text, buttons, or icons) in a single bordered container.

## Addon Before

<Preview
  code={`<div class="twants-input-group" style="max-width:20rem">
  <span class="twants-input-group-addon">https://</span>
  <input class="twants-input" type="text" placeholder="yoursite.com" />
</div>`}
>
  <div className="twants-input-group" style={{maxWidth:'20rem'}}>
    <span className="twants-input-group-addon">https://</span>
    <input className="twants-input" type="text" placeholder="yoursite.com" />
  </div>
</Preview>

## Addon After

<Preview
  code={`<div class="twants-input-group" style="max-width:16rem">
  <input class="twants-input" type="text" placeholder="0.00" />
  <span class="twants-input-group-addon">USD</span>
</div>`}
>
  <div className="twants-input-group" style={{maxWidth:'16rem'}}>
    <input className="twants-input" type="text" placeholder="0.00" />
    <span className="twants-input-group-addon">USD</span>
  </div>
</Preview>

## Both Addons

<Preview
  code={`<div class="twants-input-group" style="max-width:20rem">
  <span class="twants-input-group-addon">$</span>
  <input class="twants-input" type="text" placeholder="0.00" />
  <span class="twants-input-group-addon">.00</span>
</div>`}
>
  <div className="twants-input-group" style={{maxWidth:'20rem'}}>
    <span className="twants-input-group-addon">$</span>
    <input className="twants-input" type="text" placeholder="0.00" />
    <span className="twants-input-group-addon">.00</span>
  </div>
</Preview>

## With Button

<Preview
  code={`<div class="twants-input-group" style="max-width:24rem">
  <input class="twants-input" type="email" placeholder="Email address" />
  <button class="twants-button twants-button-primary" style="border-radius:0;border:0">Subscribe</button>
</div>`}
>
  <div className="twants-input-group" style={{maxWidth:'24rem'}}>
    <input className="twants-input" type="email" placeholder="Email address" />
    <button className="twants-button twants-button-primary" style={{borderRadius:0,border:0}}>Subscribe</button>
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Use twants-input-group on the wrapper element." },
  ]}
/>

## Accessibility

- The input inside the group should retain its label (visible or `aria-label`).
- Focus styling applies to the entire group via `:focus-within`.
- Button addons should have visible labels or `aria-label`.
