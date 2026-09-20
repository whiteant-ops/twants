---
title: Sheet
---

# Sheet

Sheets are sliding panels that overlay content from the edge of the screen.

## Basic

<Preview
  code={`<div style="position:relative;height:16rem;border:1px solid var(--twants-border);border-radius:var(--twants-radius);overflow:hidden">
  <div style="padding:1rem;font-size:var(--twants-text-sm);color:var(--twants-foreground-secondary)">Main content</div>
  <div style="position:absolute;top:0;right:0;width:18rem;height:100%;background:var(--twants-surface);border-left:1px solid var(--twants-border);box-shadow:var(--twants-shadow-lg);display:flex;flex-direction:column">
    <div style="padding:1rem;border-bottom:1px solid var(--twants-border);display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:var(--twants-text-md);font-weight:var(--twants-font-semibold)">Edit profile</div>
      <button class="twants-icon-button twants-icon-button-sm">✕</button>
    </div>
    <div style="padding:1rem;flex:1;font-size:var(--twants-text-sm);color:var(--twants-foreground-secondary)">Sheet content goes here.</div>
    <div style="padding:0.875rem 1rem;border-top:1px solid var(--twants-border);display:flex;justify-content:flex-end;gap:0.5rem">
      <button class="twants-button twants-button-sm">Cancel</button>
      <button class="twants-button twants-button-primary twants-button-sm">Save</button>
    </div>
  </div>
</div>`}
>
  <div style={{position:'relative',height:'16rem',border:'1px solid var(--twants-border)',borderRadius:'var(--twants-radius)',overflow:'hidden'}}>
    <div style={{padding:'1rem',fontSize:'var(--twants-text-sm)',color:'var(--twants-foreground-secondary)'}}>Main content</div>
    <div style={{position:'absolute',top:0,right:0,width:'18rem',height:'100%',background:'var(--twants-surface)',borderLeft:'1px solid var(--twants-border)',boxShadow:'var(--twants-shadow-lg)',display:'flex',flexDirection:'column'}}>
      <div style={{padding:'1rem',borderBottom:'1px solid var(--twants-border)',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div style={{fontSize:'var(--twants-text-md)',fontWeight:'var(--twants-font-semibold)'}}>Edit profile</div>
        <button className="twants-icon-button twants-icon-button-sm">✕</button>
      </div>
      <div style={{padding:'1rem',flex:1,fontSize:'var(--twants-text-sm)',color:'var(--twants-foreground-secondary)'}}>Sheet content goes here.</div>
      <div style={{padding:'0.875rem 1rem',borderTop:'1px solid var(--twants-border)',display:'flex',justifyContent:'flex-end',gap:'0.5rem'}}>
        <button className="twants-button twants-button-sm">Cancel</button>
        <button className="twants-button twants-button-primary twants-button-sm">Save</button>
      </div>
    </div>
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "side", type: "'left' | 'right' | 'top' | 'bottom'", default: "'right'", description: "Which edge the sheet slides from." },
    { name: "open", type: "boolean", default: "false", description: "Controls visibility." },
    { name: "onClose", type: "() => void", default: "—", description: "Called when the sheet is closed." },
  ]}
/>

## Accessibility

- Use `role="dialog"` and `aria-modal="true"` on the sheet.
- Focus should be trapped inside when open.
- Pressing Escape should close the sheet.
- Return focus to the trigger element when closed.
