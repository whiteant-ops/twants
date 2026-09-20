---
title: Avatar
---

# Avatar

Avatars represent a user or entity with an image, initials, or icon.

## Basic

<Preview
  code={`<div style="display:flex;gap:0.75rem;align-items:center">
  <div class="twants-avatar">
    <img src="https://i.pravatar.cc/150?img=1" alt="User" />
  </div>
  <div class="twants-avatar" style="background:var(--twants-primary);color:white">
    <span>JD</span>
  </div>
  <div class="twants-avatar" style="background:var(--twants-success-subtle);color:var(--twants-success)">
    <span>✓</span>
  </div>
</div>`}
>
  <div style={{display:'flex',gap:'0.75rem',alignItems:'center'}}>
    <div className="twants-avatar">
      <img src="https://i.pravatar.cc/150?img=1" alt="User" />
    </div>
    <div className="twants-avatar" style={{background:'var(--twants-primary)',color:'white'}}>
      <span>JD</span>
    </div>
    <div className="twants-avatar" style={{background:'var(--twants-success-subtle)',color:'var(--twants-success)'}}>
      <span>✓</span>
    </div>
  </div>
</Preview>

## Sizes

<Preview
  code={`<div style="display:flex;gap:0.75rem;align-items:center">
  <div class="twants-avatar twants-avatar-xs"><span>XS</span></div>
  <div class="twants-avatar twants-avatar-sm"><span>SM</span></div>
  <div class="twants-avatar"><span>MD</span></div>
  <div class="twants-avatar twants-avatar-lg"><span>LG</span></div>
  <div class="twants-avatar twants-avatar-xl"><span>XL</span></div>
</div>`}
>
  <div style={{display:'flex',gap:'0.75rem',alignItems:'center'}}>
    <div className="twants-avatar twants-avatar-xs"><span>XS</span></div>
    <div className="twants-avatar twants-avatar-sm"><span>SM</span></div>
    <div className="twants-avatar"><span>MD</span></div>
    <div className="twants-avatar twants-avatar-lg"><span>LG</span></div>
    <div className="twants-avatar twants-avatar-xl"><span>XL</span></div>
  </div>
</Preview>

## Avatar Group

<Preview
  code={`<div class="twants-avatar-group">
  <div class="twants-avatar" style="border:2px solid var(--twants-surface)"><img src="https://i.pravatar.cc/150?img=1" alt="User 1" /></div>
  <div class="twants-avatar" style="border:2px solid var(--twants-surface)"><img src="https://i.pravatar.cc/150?img=2" alt="User 2" /></div>
  <div class="twants-avatar" style="border:2px solid var(--twants-surface)"><img src="https://i.pravatar.cc/150?img=3" alt="User 3" /></div>
  <div class="twants-avatar" style="border:2px solid var(--twants-surface);background:var(--twants-surface-secondary);color:var(--twants-foreground-muted)">+5</div>
</div>`}
>
  <div className="twants-avatar-group">
    <div className="twants-avatar" style={{border:'2px solid var(--twants-surface)'}}><img src="https://i.pravatar.cc/150?img=1" alt="User 1" /></div>
    <div className="twants-avatar" style={{border:'2px solid var(--twants-surface)'}}><img src="https://i.pravatar.cc/150?img=2" alt="User 2" /></div>
    <div className="twants-avatar" style={{border:'2px solid var(--twants-surface)'}}><img src="https://i.pravatar.cc/150?img=3" alt="User 3" /></div>
    <div className="twants-avatar" style={{border:'2px solid var(--twants-surface)',background:'var(--twants-surface-secondary)',color:'var(--twants-foreground-muted)'}}>+5</div>
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Additional CSS classes. Use twants-avatar-xs, -sm, -lg, -xl for sizes." },
  ]}
/>

## Accessibility

- Always provide `alt` text for avatar images.
- For initials/icons without images, use `aria-label` on the container.
- Avatar groups should have a descriptive `aria-label` (e.g., "Team members").
