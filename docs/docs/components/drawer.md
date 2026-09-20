---
title: Drawer
---

# Drawers are sliding panels that overlay content from the edge of the screen.

## Basic

<Preview
  code={`<div style="position:relative;height:16rem;border:1px solid var(--twants-border);border-radius:var(--twants-radius);overflow:hidden">
  <div style="padding:1rem;font-size:var(--twants-text-sm);color:var(--twants-foreground-secondary)">Main content</div>
  <div class="twants-drawer" style="position:absolute">
    <div style="padding:1rem;border-bottom:1px solid var(--twants-border);display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:var(--twants-text-md);font-weight:var(--twants-font-semibold)">Menu</div>
      <button class="twants-icon-button twants-icon-button-sm">✕</button>
    </div>
    <div style="padding:1rem;flex:1;font-size:var(--twants-text-sm);color:var(--twants-foreground-secondary)">
      <nav style="display:flex;flex-direction:column;gap:0.25rem">
        <a href="#" style="padding:0.5rem;border-radius:var(--twants-radius-sm);text-decoration:none;color:var(--twants-foreground);font-size:var(--twants-text-sm)">Dashboard</a>
        <a href="#" style="padding:0.5rem;border-radius:var(--twants-radius-sm);text-decoration:none;color:var(--twants-foreground);font-size:var(--twants-text-sm)">Settings</a>
        <a href="#" style="padding:0.5rem;border-radius:var(--twants-radius-sm);text-decoration:none;color:var(--twants-foreground);font-size:var(--twants-text-sm)">Profile</a>
      </nav>
    </div>
  </div>
</div>`}
>
  <div style={{position:'relative',height:'16rem',border:'1px solid var(--twants-border)',borderRadius:'var(--twants-radius)',overflow:'hidden'}}>
    <div style={{padding:'1rem',fontSize:'var(--twants-text-sm)',color:'var(--twants-foreground-secondary)'}}>Main content</div>
    <div className="twants-drawer" style={{position:'absolute'}}>
      <div style={{padding:'1rem',borderBottom:'1px solid var(--twants-border)',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div style={{fontSize:'var(--twants-text-md)',fontWeight:'var(--twants-font-semibold)'}}>Menu</div>
        <button className="twants-icon-button twants-icon-button-sm">✕</button>
      </div>
      <div style={{padding:'1rem',flex:1,fontSize:'var(--twants-text-sm)',color:'var(--twants-foreground-secondary)'}}>
        <nav style={{display:'flex',flexDirection:'column',gap:'0.25rem'}}>
          <a href="#" style={{padding:'0.5rem',borderRadius:'var(--twants-radius-sm)',textDecoration:'none',color:'var(--twants-foreground)',fontSize:'var(--twants-text-sm)'}}>Dashboard</a>
          <a href="#" style={{padding:'0.5rem',borderRadius:'var(--twants-radius-sm)',textDecoration:'none',color:'var(--twants-foreground)',fontSize:'var(--twants-text-sm)'}}>Settings</a>
          <a href="#" style={{padding:'0.5rem',borderRadius:'var(--twants-radius-sm)',textDecoration:'none',color:'var(--twants-foreground)',fontSize:'var(--twants-text-sm)'}}>Profile</a>
        </nav>
      </div>
    </div>
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "side", type: "'left' | 'right'", default: "'right'", description: "Which edge the drawer slides from." },
    { name: "open", type: "boolean", default: "false", description: "Controls visibility." },
    { name: "onClose", type: "() => void", default: "—", description: "Called when the drawer is closed." },
  ]}
/>

## Accessibility

- Use `role="dialog"` and `aria-modal="true"` on the drawer.
- Focus should be trapped inside when open.
- Pressing Escape should close the drawer.
- Return focus to the trigger element when closed.
