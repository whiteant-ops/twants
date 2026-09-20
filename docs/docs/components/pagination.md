---
title: Pagination
---

# Pagination

Pagination allows navigating between pages of content.

## Basic

<Preview
  code={`<nav class="twants-pagination" aria-label="Pagination">
  <button class="twants-pagination-button" disabled>←</button>
  <button class="twants-pagination-button" aria-current="page">1</button>
  <button class="twants-pagination-button">2</button>
  <button class="twants-pagination-button">3</button>
  <button class="twants-pagination-button">→</button>
</nav>`}
>
  <nav className="twants-pagination" aria-label="Pagination">
    <button className="twants-pagination-button" disabled>←</button>
    <button className="twants-pagination-button" aria-current="page">1</button>
    <button className="twants-pagination-button">2</button>
    <button className="twants-pagination-button">3</button>
    <button className="twants-pagination-button">→</button>
  </nav>
</Preview>

## With Ellipsis

<Preview
  code={`<nav class="twants-pagination" aria-label="Pagination">
  <button class="twants-pagination-button">←</button>
  <button class="twants-pagination-button">1</button>
  <span class="twants-pagination-ellipsis">…</span>
  <button class="twants-pagination-button">5</button>
  <button class="twants-pagination-button" aria-current="page">6</button>
  <button class="twants-pagination-button">7</button>
  <span class="twants-pagination-ellipsis">…</span>
  <button class="twants-pagination-button">12</button>
  <button class="twants-pagination-button">→</button>
</nav>`}
>
  <nav className="twants-pagination" aria-label="Pagination">
    <button className="twants-pagination-button">←</button>
    <button className="twants-pagination-button">1</button>
    <span className="twants-pagination-ellipsis">…</span>
    <button className="twants-pagination-button">5</button>
    <button className="twants-pagination-button" aria-current="page">6</button>
    <button className="twants-pagination-button">7</button>
    <span className="twants-pagination-ellipsis">…</span>
    <button className="twants-pagination-button">12</button>
    <button className="twants-pagination-button">→</button>
  </nav>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Additional CSS classes." },
  ]}
/>

## Accessibility

- Use `<nav aria-label="Pagination">` as the container.
- Current page button should have `aria-current="page"`.
- Disable prev/first buttons on first page, next/last on last page.
- Consider adding `aria-label` on page buttons (e.g., "Page 3").
