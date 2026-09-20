---
title: Breadcrumb
---

# Breadcrumb

Breadcrumbs show the current page's location within a navigation hierarchy.

## Basic

<Preview
  code={`<nav class="twants-breadcrumb" aria-label="Breadcrumb">
  <a href="#">Home</a>
  <span class="twants-breadcrumb-sep">/</span>
  <a href="#">Components</a>
  <span class="twants-breadcrumb-sep">/</span>
  <span>Breadcrumb</span>
</nav>`}
>
  <nav className="twants-breadcrumb" aria-label="Breadcrumb">
    <a href="#">Home</a>
    <span className="twants-breadcrumb-sep">/</span>
    <a href="#">Components</a>
    <span className="twants-breadcrumb-sep">/</span>
    <span>Breadcrumb</span>
  </nav>
</Preview>

## Deep Nesting

<Preview
  code={`<nav class="twants-breadcrumb" aria-label="Breadcrumb">
  <a href="#">Home</a>
  <span class="twants-breadcrumb-sep">/</span>
  <a href="#">Docs</a>
  <span class="twants-breadcrumb-sep">/</span>
  <a href="#">Components</a>
  <span class="twants-breadcrumb-sep">/</span>
  <a href="#">Navigation</a>
  <span class="twants-breadcrumb-sep">/</span>
  <span>Breadcrumb</span>
</nav>`}
>
  <nav className="twants-breadcrumb" aria-label="Breadcrumb">
    <a href="#">Home</a>
    <span className="twants-breadcrumb-sep">/</span>
    <a href="#">Docs</a>
    <span className="twants-breadcrumb-sep">/</span>
    <a href="#">Components</a>
    <span className="twants-breadcrumb-sep">/</span>
    <a href="#">Navigation</a>
    <span className="twants-breadcrumb-sep">/</span>
    <span>Breadcrumb</span>
  </nav>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Additional CSS classes." },
  ]}
/>

## Accessibility

- Use `<nav aria-label="Breadcrumb">` as the container.
- Use ordered list `<ol>` for semantically correct nesting.
- The current page should not be a link — use plain text or `aria-current="page"`.
