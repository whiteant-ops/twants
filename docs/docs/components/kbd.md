---
title: Kbd
---

# Kbd

Kbd displays keyboard shortcuts or key combinations. It uses a monospace font and subtle shadow to mimic a physical key.

## Basic

<Preview
  code={`<span class="twants-kbd">Ctrl</span>
<span class="twants-kbd">S</span>
<span class="twants-kbd">Enter</span>
<span class="twants-kbd">Esc</span>`}
>
  <span className="twants-kbd">Ctrl</span>
  <span className="twants-kbd">S</span>
  <span className="twants-kbd">Enter</span>
  <span className="twants-kbd">Esc</span>
</Preview>

## Key Combinations

<Preview
  code={`<div style="display:flex;align-items:center;gap:0.375rem;font-size:var(--twants-text-sm);color:var(--twants-foreground-secondary)">
  <span class="twants-kbd">Ctrl</span>
  <span>+</span>
  <span class="twants-kbd">K</span>
</div>
<div style="display:flex;align-items:center;gap:0.375rem;font-size:var(--twants-text-sm);color:var(--twants-foreground-secondary)">
  <span class="twants-kbd">Ctrl</span>
  <span>+</span>
  <span class="twants-kbd">Shift</span>
  <span>+</span>
  <span class="twants-kbd">P</span>
</div>
<div style="display:flex;align-items:center;gap:0.375rem;font-size:var(--twants-text-sm);color:var(--twants-foreground-secondary)">
  <span class="twants-kbd">⌘</span>
  <span>+</span>
  <span class="twants-kbd">C</span>
</div>`}
>
  <div style={{display:'flex',flexDirection:'column',gap:'0.75rem'}}>
    <div style={{display:'flex',alignItems:'center',gap:'0.375rem',fontSize:'var(--twants-text-sm)',color:'var(--twants-foreground-secondary)'}}>
      <span className="twants-kbd">Ctrl</span><span>+</span><span className="twants-kbd">K</span>
    </div>
    <div style={{display:'flex',alignItems:'center',gap:'0.375rem',fontSize:'var(--twants-text-sm)',color:'var(--twants-foreground-secondary)'}}>
      <span className="twants-kbd">Ctrl</span><span>+</span><span className="twants-kbd">Shift</span><span>+</span><span className="twants-kbd">P</span>
    </div>
    <div style={{display:'flex',alignItems:'center',gap:'0.375rem',fontSize:'var(--twants-text-sm)',color:'var(--twants-foreground-secondary)'}}>
      <span className="twants-kbd">⌘</span><span>+</span><span className="twants-kbd">C</span>
    </div>
  </div>
</Preview>

## In Context (Shortcut Hints)

<Preview
  code={`<div style="display:flex;flex-direction:column;gap:0.5rem;max-width:16rem">
  <div style="display:flex;justify-content:space-between;align-items:center;padding:0.375rem 0.625rem;border-radius:var(--twants-radius);font-size:var(--twants-text-sm)">
    <span style="color:var(--twants-foreground-secondary)">Copy</span>
    <span class="twants-kbd">Ctrl+C</span>
  </div>
  <div style="display:flex;justify-content:space-between;align-items:center;padding:0.375rem 0.625rem;border-radius:var(--twants-radius);font-size:var(--twants-text-sm)">
    <span style="color:var(--twants-foreground-secondary)">Paste</span>
    <span class="twants-kbd">Ctrl+V</span>
  </div>
  <div style="display:flex;justify-content:space-between;align-items:center;padding:0.375rem 0.625rem;border-radius:var(--twants-radius);font-size:var(--twants-text-sm)">
    <span style="color:var(--twants-foreground-secondary)">Undo</span>
    <span class="twants-kbd">Ctrl+Z</span>
  </div>
</div>`}
>
  <div style={{display:'flex',flexDirection:'column',gap:'0.5rem',maxWidth:'16rem'}}>
    {[
      ['Copy', 'Ctrl+C'],
      ['Paste', 'Ctrl+V'],
      ['Undo', 'Ctrl+Z'],
    ].map(([label, keys]) => (
      <div key={label} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'0.375rem 0.625rem',borderRadius:'var(--twants-radius)',fontSize:'var(--twants-text-sm)'}}>
        <span style={{color:'var(--twants-foreground-secondary)'}}>{label}</span>
        <span className="twants-kbd">{keys}</span>
      </div>
    ))}
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Additional CSS classes." },
  ]}
/>

## Accessibility

- Kbd elements are semantic — the `<kbd>` HTML element conveys meaning to screen readers.
- Use `<kbd>` inside `<kbd>` for nested shortcuts (e.g., `<kbd>Ctrl</kbd>+<kbd>K</kbd>`).
- Do not use kbd for non-keyboard actions.
