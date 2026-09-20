---
title: Table
---

# Table

Tables display data in rows and columns.

## Basic

<Preview
  code={`<div class="twants-table-wrap" style="max-width:32rem">
  <table class="twants-table">
    <thead>
      <tr><th>Invoice</th><th>Status</th><th>Method</th><th style="text-align:right">Amount</th></tr>
    </thead>
    <tbody>
      <tr><td>INV001</td><td><span class="twants-badge twants-badge-success">Paid</span></td><td>Credit Card</td><td style="text-align:right">$250.00</td></tr>
      <tr><td>INV002</td><td><span class="twants-badge twants-badge-warning">Pending</span></td><td>PayPal</td><td style="text-align:right">$150.00</td></tr>
      <tr><td>INV003</td><td><span class="twants-badge twants-badge-danger">Overdue</span></td><td>Bank Transfer</td><td style="text-align:right">$350.00</td></tr>
    </tbody>
  </table>
</div>`}
>
  <div className="twants-table-wrap" style={{maxWidth:'32rem'}}>
    <table className="twants-table">
      <thead>
        <tr><th>Invoice</th><th>Status</th><th>Method</th><th style={{textAlign:'right'}}>Amount</th></tr>
      </thead>
      <tbody>
        <tr><td>INV001</td><td><span className="twants-badge twants-badge-success">Paid</span></td><td>Credit Card</td><td style={{textAlign:'right'}}>$250.00</td></tr>
        <tr><td>INV002</td><td><span className="twants-badge twants-badge-warning">Pending</span></td><td>PayPal</td><td style={{textAlign:'right'}}>$150.00</td></tr>
        <tr><td>INV003</td><td><span className="twants-badge twants-badge-danger">Overdue</span></td><td>Bank Transfer</td><td style={{textAlign:'right'}}>$350.00</td></tr>
      </tbody>
    </table>
  </div>
</Preview>

## Variants

<Preview
  code={`<div class="twants-table-wrap twants-table-compact twants-table-zebra" style="max-width:28rem">
  <table class="twants-table">
    <thead>
      <tr><th>Name</th><th>Email</th><th>Role</th></tr>
    </thead>
    <tbody>
      <tr><td>John Doe</td><td>john@example.com</td><td>Admin</td></tr>
      <tr><td>Jane Smith</td><td>jane@example.com</td><td>Editor</td></tr>
      <tr><td>Bob Wilson</td><td>bob@example.com</td><td>Viewer</td></tr>
    </tbody>
  </table>
</div>`}
>
  <div className="twants-table-wrap twants-table-compact twants-table-zebra" style={{maxWidth:'28rem'}}>
    <table className="twants-table">
      <thead>
        <tr><th>Name</th><th>Email</th><th>Role</th></tr>
      </thead>
      <tbody>
        <tr><td>John Doe</td><td>john@example.com</td><td>Admin</td></tr>
        <tr><td>Jane Smith</td><td>jane@example.com</td><td>Editor</td></tr>
        <tr><td>Bob Wilson</td><td>bob@example.com</td><td>Viewer</td></tr>
      </tbody>
    </table>
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Additional CSS classes. Use twants-table-compact, twants-table-zebra, twants-table-sticky." },
  ]}
/>

## Accessibility

- Use proper `<thead>`, `<tbody>`, `<th scope="col">` elements.
- Add `aria-sort` on sortable column headers.
- Ensure table is keyboard navigable.
- Use `twants-table-wrap` for horizontal scrolling.
