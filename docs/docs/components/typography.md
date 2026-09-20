---
title: Typography
---

# Typography

Typography components provide consistent heading, body, and caption styles using TWANTS tokens.

## Headings

<Preview
  code={`<div class="twants-typography">
  <h1 class="twants-h1">Heading 1</h1>
  <h2 class="twants-h2">Heading 2</h2>
  <h3 class="twants-h3">Heading 3</h3>
  <h4 class="twants-h4">Heading 4</h4>
</div>`}
>
  <div className="twants-typography">
    <h1 className="twants-h1">Heading 1</h1>
    <h2 className="twants-h2">Heading 2</h2>
    <h3 className="twants-h3">Heading 3</h3>
    <h4 className="twants-h4">Heading 4</h4>
  </div>
</Preview>

## Body Text

<Preview
  code={`<div class="twants-typography">
  <p class="twants-body">Body text — the default size for paragraphs and long-form content. Uses the base font size and line height for comfortable reading.</p>
  <p class="twants-body-small">Body small — used for secondary information, metadata, and helper text that supports the main content.</p>
</div>`}
>
  <div className="twants-typography">
    <p className="twants-body">Body text — the default size for paragraphs and long-form content. Uses the base font size and line height for comfortable reading.</p>
    <p className="twants-body-small">Body small — used for secondary information, metadata, and helper text that supports the main content.</p>
  </div>
</Preview>

## Caption & Overline

<Preview
  code={`<div class="twants-typography">
  <p class="twants-caption">Caption — used for footnotes, timestamps, and tertiary information.</p>
  <p class="twants-overline">Overline — used for section labels and category headers.</p>
</div>`}
>
  <div className="twants-typography">
    <p className="twants-caption">Caption — used for footnotes, timestamps, and tertiary information.</p>
    <p className="twants-overline">Overline — used for section labels and category headers.</p>
  </div>
</Preview>

## Full Example

<Preview
  code={`<article class="twants-typography" style="max-width:32rem">
  <p class="twants-overline">Getting Started</p>
  <h1 class="twants-h1">Installation</h1>
  <p class="twants-body">Install TWANTS from npm and add the styles to your project.</p>
  <h2 class="twants-h2">Requirements</h2>
  <p class="twants-body-small">TWANTS requires Tailwind CSS v4 or later.</p>
  <p class="twants-caption">Last updated: 2025-01-15</p>
</article>`}
>
  <article className="twants-typography" style={{maxWidth:'32rem'}}>
    <p className="twants-overline">Getting Started</p>
    <h1 className="twants-h1">Installation</h1>
    <p className="twants-body">Install TWANTS from npm and add the styles to your project.</p>
    <h2 className="twants-h2">Requirements</h2>
    <p className="twants-body-small">TWANTS requires Tailwind CSS v4 or later.</p>
    <p className="twants-caption">Last updated: 2025-01-15</p>
  </article>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Typography class: twants-h1, twants-h2, twants-h3, twants-h4, twants-body, twants-body-small, twants-caption, twants-overline." },
  ]}
/>

## Accessibility

- Use semantic HTML elements (`<h1>`–`<h4>`, `<p>`, `<span>`) with TWANTS classes.
- Maintain heading hierarchy — do not skip levels.
- The `twants-overline` class uses uppercase text; ensure screen readers can access the original text.
