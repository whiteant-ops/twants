---
title: Image
---

# Image

Images display visual content with optional ratios, overlays, and gallery layouts.

## Basic

<Preview
  code={`<div class="twants-image" style="max-width:20rem">
  <img src="https://picsum.photos/seed/twants/400/300" alt="Landscape" />
</div>`}
>
  <div className="twants-image" style={{maxWidth:'20rem'}}>
    <img src="https://picsum.photos/seed/twants/400/300" alt="Landscape" />
  </div>
</Preview>

## With Overlay

<Preview
  code={`<div class="twants-image" style="max-width:20rem">
  <img src="https://picsum.photos/seed/twants2/400/300" alt="Mountain" />
  <div class="twants-image-overlay">
    <div style="font-weight:var(--twants-font-semibold)">Mountain View</div>
    <div style="font-size:var(--twants-text-sm);opacity:0.8">Explore the peaks</div>
  </div>
</div>`}
>
  <div className="twants-image" style={{maxWidth:'20rem'}}>
    <img src="https://picsum.photos/seed/twants2/400/300" alt="Mountain" />
    <div className="twants-image-overlay">
      <div style={{fontWeight:'var(--twants-font-semibold)'}}>Mountain View</div>
      <div style={{fontSize:'var(--twants-text-sm)',opacity:0.8}}>Explore the peaks</div>
    </div>
  </div>
</Preview>

## Gallery

<Preview
  code={`<div class="twants-image-gallery">
  <div class="twants-image-gallery-item"><img src="https://picsum.photos/seed/g1/200/200" alt="Gallery 1" /></div>
  <div class="twants-image-gallery-item"><img src="https://picsum.photos/seed/g2/200/200" alt="Gallery 2" /></div>
  <div class="twants-image-gallery-item"><img src="https://picsum.photos/seed/g3/200/200" alt="Gallery 3" /></div>
  <div class="twants-image-gallery-item"><img src="https://picsum.photos/seed/g4/200/200" alt="Gallery 4" /></div>
</div>`}
>
  <div className="twants-image-gallery">
    <div className="twants-image-gallery-item"><img src="https://picsum.photos/seed/g1/200/200" alt="Gallery 1" /></div>
    <div className="twants-image-gallery-item"><img src="https://picsum.photos/seed/g2/200/200" alt="Gallery 2" /></div>
    <div className="twants-image-gallery-item"><img src="https://picsum.photos/seed/g3/200/200" alt="Gallery 3" /></div>
    <div className="twants-image-gallery-item"><img src="https://picsum.photos/seed/g4/200/200" alt="Gallery 4" /></div>
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Additional CSS classes. Use twants-image-overlay for overlay variant." },
  ]}
/>

## Accessibility

- Always provide descriptive `alt` text for images.
- Use empty `alt=""` for purely decorative images.
- Overlay text should be readable — ensure sufficient contrast.
