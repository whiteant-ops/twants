---
title: Skeleton
---

# Skeleton

Skeletons are placeholder loading states that indicate content is being loaded. They use a shimmer animation to suggest activity.

## Basic Shapes

<Preview
  code={`<div style="display:flex;flex-direction:column;gap:0.75rem;max-width:20rem">
  <div class="twants-skeleton twants-skeleton-avatar"></div>
  <div class="twants-skeleton twants-skeleton-title" style="width:60%"></div>
  <div class="twants-skeleton twants-skeleton-text" style="width:100%"></div>
  <div class="twants-skeleton twants-skeleton-text" style="width:80%"></div>
</div>`}
>
  <div style={{display:'flex',flexDirection:'column',gap:'0.75rem',maxWidth:'20rem'}}>
    <div className="twants-skeleton twants-skeleton-avatar"></div>
    <div className="twants-skeleton twants-skeleton-title" style={{width:'60%'}}></div>
    <div className="twants-skeleton twants-skeleton-text" style={{width:'100%'}}></div>
    <div className="twants-skeleton twants-skeleton-text" style={{width:'80%'}}></div>
  </div>
</Preview>

## Card Skeleton

<Preview
  code={`<div style="border:1px solid var(--twants-border);border-radius:var(--twants-radius-lg);padding:1rem;max-width:18rem;display:flex;flex-direction:column;gap:0.75rem">
  <div class="twants-skeleton" style="height:10rem;border-radius:var(--twants-radius-md)"></div>
  <div class="twants-skeleton twants-skeleton-title" style="width:70%"></div>
  <div class="twants-skeleton twants-skeleton-text" style="width:100%"></div>
  <div class="twants-skeleton twants-skeleton-text" style="width:40%"></div>
</div>`}
>
  <div style={{border:'1px solid var(--twants-border)',borderRadius:'var(--twants-radius-lg)',padding:'1rem',maxWidth:'18rem',display:'flex',flexDirection:'column',gap:'0.75rem'}}>
    <div className="twants-skeleton" style={{height:'10rem',borderRadius:'var(--twants-radius-md)'}}></div>
    <div className="twants-skeleton twants-skeleton-title" style={{width:'70%'}}></div>
    <div className="twants-skeleton twants-skeleton-text" style={{width:'100%'}}></div>
    <div className="twants-skeleton twants-skeleton-text" style={{width:'40%'}}></div>
  </div>
</Preview>

## List Skeleton

<Preview
  code={`<div style="display:flex;flex-direction:column;gap:1rem;max-width:20rem">
  ${[1,2,3].map(i => `
  <div style="display:flex;gap:0.75rem;align-items:center">
    <div class="twants-skeleton twants-skeleton-avatar"></div>
    <div style="flex:1;display:flex;flex-direction:column;gap:0.375rem">
      <div class="twants-skeleton twants-skeleton-title" style="width:40%"></div>
      <div class="twants-skeleton twants-skeleton-text" style="width:80%"></div>
    </div>
  </div>`).join('')}
</div>`}
>
  <div style={{display:'flex',flexDirection:'column',gap:'1rem',maxWidth:'20rem'}}>
    {[1,2,3].map(i => (
      <div key={i} style={{display:'flex',gap:'0.75rem',alignItems:'center'}}>
        <div className="twants-skeleton twants-skeleton-avatar"></div>
        <div style={{flex:1,display:'flex',flexDirection:'column',gap:'0.375rem'}}>
          <div className="twants-skeleton twants-skeleton-title" style={{width:'40%'}}></div>
          <div className="twants-skeleton twants-skeleton-text" style={{width:'80%'}}></div>
        </div>
      </div>
    ))}
  </div>
</Preview>

## Custom Size

<Preview
  code={`<div style="display:flex;flex-direction:column;gap:0.5rem">
  <div class="twants-skeleton" style="width:12rem;height:0.5rem"></div>
  <div class="twants-skeleton" style="width:8rem;height:0.5rem"></div>
  <div class="twants-skeleton" style="width:16rem;height:0.5rem"></div>
  <div class="twants-skeleton" style="width:4rem;height:0.5rem"></div>
</div>`}
>
  <div style={{display:'flex',flexDirection:'column',gap:'0.5rem'}}>
    <div className="twants-skeleton" style={{width:'12rem',height:'0.5rem'}}></div>
    <div className="twants-skeleton" style={{width:'8rem',height:'0.5rem'}}></div>
    <div className="twants-skeleton" style={{width:'16rem',height:'0.5rem'}}></div>
    <div className="twants-skeleton" style={{width:'4rem',height:'0.5rem'}}></div>
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Additional CSS classes. Use twants-skeleton-text, twants-skeleton-title, twants-skeleton-avatar for preset shapes." },
  ]}
/>

## Accessibility

- Add `aria-hidden="true"` to skeleton elements — they are decorative.
- Use `aria-busy="true"` on the parent container while content is loading.
- Replace skeletons with real content as soon as it's available.
- Avoid flashing skeletons for content that loads quickly (< 300ms).
