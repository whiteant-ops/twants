---
title: Alert
---

# Alert

Alerts display important messages with semantic color coding.

## Variants

<Preview
  code={`<div class="twants-alert twants-alert-info">
  <div class="twants-alert-icon">ℹ️</div>
  <div><div class="twants-alert-title">Info</div><div>This is an informational message.</div></div>
</div>
<div class="twants-alert twants-alert-success">
  <div class="twants-alert-icon">✅</div>
  <div><div class="twants-alert-title">Success</div><div>Operation completed successfully.</div></div>
</div>
<div class="twants-alert twants-alert-warning">
  <div class="twants-alert-icon">⚠️</div>
  <div><div class="twants-alert-title">Warning</div><div>Please review before proceeding.</div></div>
</div>
<div class="twants-alert twants-alert-danger">
  <div class="twants-alert-icon">❌</div>
  <div><div class="twants-alert-title">Error</div><div>Something went wrong. Please try again.</div></div>
</div>`}
>
  <div style={{display:'flex',flexDirection:'column',gap:'0.5rem'}}>
    <div className="twants-alert twants-alert-info">
      <div className="twants-alert-icon">ℹ️</div>
      <div><div className="twants-alert-title">Info</div><div>This is an informational message.</div></div>
    </div>
    <div className="twants-alert twants-alert-success">
      <div className="twants-alert-icon">✅</div>
      <div><div className="twants-alert-title">Success</div><div>Operation completed successfully.</div></div>
    </div>
    <div className="twants-alert twants-alert-warning">
      <div className="twants-alert-icon">⚠️</div>
      <div><div className="twants-alert-title">Warning</div><div>Please review before proceeding.</div></div>
    </div>
    <div className="twants-alert twants-alert-danger">
      <div className="twants-alert-icon">❌</div>
      <div><div className="twants-alert-title">Error</div><div>Something went wrong. Please try again.</div></div>
    </div>
  </div>
</Preview>

## Without Icon

<Preview
  code={`<div class="twants-alert twants-alert-success">
  <div>Your changes have been saved.</div>
</div>`}
>
  <div className="twants-alert twants-alert-success">
    <div>Your changes have been saved.</div>
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Use twants-alert-info, twants-alert-success, twants-alert-warning, twants-alert-danger." },
  ]}
/>

## Accessibility

- Use `role="alert"` for error/danger alerts that need immediate attention.
- Use `role="status"` for informational alerts.
- Alerts should be concise and actionable.
