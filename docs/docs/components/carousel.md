---
title: Carousel
---

# Carousel

Carousels display a rotating set of images or content.

## Basic

<Preview
  code={`<div class="twants-carousel" style="max-width:28rem">
  <div class="twants-carousel-track">
    <div class="twants-carousel-slide" style="background:linear-gradient(135deg,var(--twants-primary),var(--twants-info))">
      <div style="color:white;text-align:center">
        <div style="font-size:var(--twants-text-xl);font-weight:var(--twants-font-bold)">Slide 1</div>
        <div style="font-size:var(--twants-text-sm);opacity:0.8">Beautiful carousel component</div>
      </div>
    </div>
    <div class="twants-carousel-slide" style="background:linear-gradient(135deg,var(--twants-success),var(--twants-info))">
      <div style="color:white;text-align:center">
        <div style="font-size:var(--twants-text-xl);font-weight:var(--twants-font-bold)">Slide 2</div>
        <div style="font-size:var(--twants-text-sm);opacity:0.8">Smooth transitions</div>
      </div>
    </div>
    <div class="twants-carousel-slide" style="background:linear-gradient(135deg,var(--twants-warning),var(--twants-danger))">
      <div style="color:white;text-align:center">
        <div style="font-size:var(--twants-text-xl);font-weight:var(--twants-font-bold)">Slide 3</div>
        <div style="font-size:var(--twants-text-sm);opacity:0.8">Keyboard accessible</div>
      </div>
    </div>
  </div>
  <button class="twants-carousel-control twants-carousel-control-prev">←</button>
  <button class="twants-carousel-control twants-carousel-control-next">→</button>
  <div class="twants-carousel-dots">
    <button class="twants-carousel-dot" aria-current="true"></button>
    <button class="twants-carousel-dot"></button>
    <button class="twants-carousel-dot"></button>
  </div>
</div>`}
>
  <div className="twants-carousel" style={{maxWidth:'28rem'}}>
    <div className="twants-carousel-track">
      <div className="twants-carousel-slide" style={{background:'linear-gradient(135deg,var(--twants-primary),var(--twants-info))'}}>
        <div style={{color:'white',textAlign:'center'}}>
          <div style={{fontSize:'var(--twants-text-xl)',fontWeight:'var(--twants-font-bold)'}}>Slide 1</div>
          <div style={{fontSize:'var(--twants-text-sm)',opacity:0.8}}>Beautiful carousel component</div>
        </div>
      </div>
      <div className="twants-carousel-slide" style={{background:'linear-gradient(135deg,var(--twants-success),var(--twants-info))'}}>
        <div style={{color:'white',textAlign:'center'}}>
          <div style={{fontSize:'var(--twants-text-xl)',fontWeight:'var(--twants-font-bold)'}}>Slide 2</div>
          <div style={{fontSize:'var(--twants-text-sm)',opacity:0.8}}>Smooth transitions</div>
        </div>
      </div>
      <div className="twants-carousel-slide" style={{background:'linear-gradient(135deg,var(--twants-warning),var(--twants-danger))'}}>
        <div style={{color:'white',textAlign:'center'}}>
          <div style={{fontSize:'var(--twants-text-xl)',fontWeight:'var(--twants-font-bold)'}}>Slide 3</div>
          <div style={{fontSize:'var(--twants-text-sm)',opacity:0.8}}>Keyboard accessible</div>
        </div>
      </div>
    </div>
    <button className="twants-carousel-control twants-carousel-control-prev">←</button>
    <button className="twants-carousel-control twants-carousel-control-next">→</button>
    <div className="twants-carousel-dots">
      <button className="twants-carousel-dot" aria-current="true"></button>
      <button className="twants-carousel-dot"></button>
      <button className="twants-carousel-dot"></button>
    </div>
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Additional CSS classes." },
    { name: "autoPlay", type: "boolean", default: "false", description: "Auto-rotate slides." },
    { name: "interval", type: "number", default: "5000", description: "Auto-play interval in ms." },
  ]}
/>

## Accessibility

- Use `role="region"` with `aria-label="Carousel"` on the container.
- Arrow keys navigate between slides.
- Pause auto-play on hover/focus.
- Use `aria-current="true"` on the active dot indicator.
