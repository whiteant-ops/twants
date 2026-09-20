---
title: Attachment
---

# Attachment

Attachments display uploaded files with icons, metadata, and remove actions.

## Basic

<Preview
  code={`<div style="max-width:20rem;display:flex;flex-direction:column;gap:0.5rem">
  <div class="twants-attachment">
    <div class="twants-attachment-icon">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
    </div>
    <div class="twants-attachment-info">
      <div class="twants-attachment-name">document.pdf</div>
      <div class="twants-attachment-meta">2.4 MB</div>
    </div>
    <button class="twants-attachment-remove">✕</button>
  </div>
  <div class="twants-attachment">
    <div class="twants-attachment-icon" style="background:var(--twants-success-subtle);color:var(--twants-success)">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
    </div>
    <div class="twants-attachment-info">
      <div class="twants-attachment-name">screenshot.png</div>
      <div class="twants-attachment-meta">1.1 MB</div>
    </div>
    <button class="twants-attachment-remove">✕</button>
  </div>
</div>`}
>
  <div style={{maxWidth:'20rem',display:'flex',flexDirection:'column',gap:'0.5rem'}}>
    <div className="twants-attachment">
      <div className="twants-attachment-icon">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
      </div>
      <div className="twants-attachment-info">
        <div className="twants-attachment-name">document.pdf</div>
        <div className="twants-attachment-meta">2.4 MB</div>
      </div>
      <button className="twants-attachment-remove">✕</button>
    </div>
    <div className="twants-attachment">
      <div className="twants-attachment-icon" style={{background:'var(--twants-success-subtle)',color:'var(--twants-success)'}}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
      </div>
      <div className="twants-attachment-info">
        <div className="twants-attachment-name">screenshot.png</div>
        <div className="twants-attachment-meta">1.1 MB</div>
      </div>
      <button className="twants-attachment-remove">✕</button>
    </div>
  </div>
</Preview>

## Upload Area

<Preview
  code={`<div class="twants-file-upload" style="max-width:20rem">
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
  <div style="font-weight:var(--twants-font-medium)">Drop files here</div>
  <div style="font-size:var(--twants-text-xs)">or click to browse</div>
</div>`}
>
  <div className="twants-file-upload" style={{maxWidth:'20rem'}}>
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
    <div style={{fontWeight:'var(--twants-font-medium)'}}>Drop files here</div>
    <div style={{fontSize:'var(--twants-text-xs)'}}>or click to browse</div>
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Additional CSS classes." },
    { name: "name", type: "string", default: "—", description: "File name." },
    { name: "size", type: "string", default: "—", description: "File size display." },
    { name: "onRemove", type: "() => void", default: "—", description: "Called when remove button is clicked." },
  ]}
/>

## Accessibility

- The remove button should have `aria-label="Remove {filename}"`.
- The upload area should accept keyboard and drag-and-drop.
- Announce file uploads with `aria-live="polite"`.
