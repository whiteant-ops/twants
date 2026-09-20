---
title: Data Table
---

# Data Table

Data tables extend basic tables with sorting, filtering, pagination, and search.

## Basic

<Preview
  code={`<div class="twants-data-table-wrap" style="max-width:32rem">
  <div class="twants-data-table-toolbar">
    <div class="twants-data-table-search">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" style="position:absolute;left:0.625rem;top:50%;transform:translateY(-50%);color:var(--twants-foreground-muted)"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      <input class="twants-input twants-input-sm" placeholder="Search..." />
    </div>
    <button class="twants-button twants-button-outline twants-button-sm">Filter</button>
  </div>
  <table class="twants-table">
    <thead>
      <tr><th style="cursor:pointer">Name ↕</th><th>Email</th><th>Role</th><th style="text-align:right">Actions</th></tr>
    </thead>
    <tbody>
      <tr><td>John Doe</td><td>john@example.com</td><td><span class="twants-badge twants-badge-primary">Admin</span></td><td style="text-align:right"><button class="twants-button twants-button-subtle twants-button-sm">Edit</button></td></tr>
      <tr><td>Jane Smith</td><td>jane@example.com</td><td><span class="twants-badge">Editor</span></td><td style="text-align:right"><button class="twants-button twants-button-subtle twants-button-sm">Edit</button></td></tr>
      <tr><td>Bob Wilson</td><td>bob@example.com</td><td><span class="twants-badge">Viewer</span></td><td style="text-align:right"><button class="twants-button twants-button-subtle twants-button-sm">Edit</button></td></tr>
    </tbody>
  </table>
  <div class="twants-data-table-pagination">
    <span>Showing 1-3 of 3</span>
    <div style="display:flex;gap:0.25rem">
      <button class="twants-button twants-button-outline twants-button-sm" disabled>←</button>
      <button class="twants-button twants-button-outline twants-button-sm">→</button>
    </div>
  </div>
</div>`}
>
  <div className="twants-data-table-wrap" style={{maxWidth:'32rem'}}>
    <div className="twants-data-table-toolbar">
      <div className="twants-data-table-search">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" style={{position:'absolute',left:'0.625rem',top:'50%',transform:'translateY(-50%)',color:'var(--twants-foreground-muted)'}}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <input className="twants-input twants-input-sm" placeholder="Search..." />
      </div>
      <button className="twants-button twants-button-outline twants-button-sm">Filter</button>
    </div>
    <table className="twants-table">
      <thead>
        <tr><th style={{cursor:'pointer'}}>Name ↕</th><th>Email</th><th>Role</th><th style={{textAlign:'right'}}>Actions</th></tr>
      </thead>
      <tbody>
        <tr><td>John Doe</td><td>john@example.com</td><td><span className="twants-badge twants-badge-primary">Admin</span></td><td style={{textAlign:'right'}}><button className="twants-button twants-button-subtle twants-button-sm">Edit</button></td></tr>
        <tr><td>Jane Smith</td><td>jane@example.com</td><td><span className="twants-badge">Editor</span></td><td style={{textAlign:'right'}}><button className="twants-button twants-button-subtle twants-button-sm">Edit</button></td></tr>
        <tr><td>Bob Wilson</td><td>bob@example.com</td><td><span className="twants-badge">Viewer</span></td><td style={{textAlign:'right'}}><button className="twants-button twants-button-subtle twants-button-sm">Edit</button></td></tr>
      </tbody>
    </table>
    <div className="twants-data-table-pagination">
      <span>Showing 1-3 of 3</span>
      <div style={{display:'flex',gap:'0.25rem'}}>
        <button className="twants-button twants-button-outline twants-button-sm" disabled>←</button>
        <button className="twants-button twants-button-outline twants-button-sm">→</button>
      </div>
    </div>
  </div>
</Preview>

## Empty State

<Preview
  code={`<div class="twants-data-table-wrap" style="max-width:32rem">
  <table class="twants-table">
    <thead><tr><th>Name</th><th>Email</th><th>Role</th></tr></thead>
    <tbody></tbody>
  </table>
  <div class="twants-data-table-empty">No results found.</div>
</div>`}
>
  <div className="twants-data-table-wrap" style={{maxWidth:'32rem'}}>
    <table className="twants-table">
      <thead><tr><th>Name</th><th>Email</th><th>Role</th></tr></thead>
      <tbody></tbody>
    </table>
    <div className="twants-data-table-empty">No results found.</div>
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Additional CSS classes." },
  ]}
/>

## Accessibility

- Use proper `<thead>`, `<tbody>`, `<th scope="col">` elements.
- Add `aria-sort` on sortable column headers.
- Pagination should use `aria-label="Pagination"`.
- Search input should have `aria-label="Search table"`.
