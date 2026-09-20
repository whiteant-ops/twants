---
title: Message
---

# Message

Messages display chat-style conversations with sent/received bubbles.

## Basic

<Preview
  code={`<div class="twants-message-list" style="max-width:24rem;border:1px solid var(--twants-border);border-radius:var(--twants-radius-md)">
  <div class="twants-message">
    <div class="twants-message-avatar"><span>JD</span></div>
    <div class="twants-message-content">
      <div class="twants-message-bubble">Hey! How's the new project going?</div>
      <div class="twants-message-time">10:30 AM</div>
    </div>
  </div>
  <div class="twants-message twants-message-sent">
    <div class="twants-message-avatar"><span>ME</span></div>
    <div class="twants-message-content">
      <div class="twants-message-bubble">Going great! Just finished the component library docs.</div>
      <div class="twants-message-time">10:32 AM</div>
    </div>
  </div>
  <div class="twants-message">
    <div class="twants-message-avatar"><span>JD</span></div>
    <div class="twants-message-content">
      <div class="twants-message-bubble">Nice! Can't wait to see it 🎉</div>
      <div class="twants-message-time">10:33 AM</div>
    </div>
  </div>
</div>`}
>
  <div className="twants-message-list" style={{maxWidth:'24rem',border:'1px solid var(--twants-border)',borderRadius:'var(--twants-radius-md)'}}>
    <div className="twants-message">
      <div className="twants-message-avatar"><span>JD</span></div>
      <div className="twants-message-content">
        <div className="twants-message-bubble">Hey! How's the new project going?</div>
        <div className="twants-message-time">10:30 AM</div>
      </div>
    </div>
    <div className="twants-message twants-message-sent">
      <div className="twants-message-avatar"><span>ME</span></div>
      <div className="twants-message-content">
        <div className="twants-message-bubble">Going great! Just finished the component library docs.</div>
        <div className="twants-message-time">10:32 AM</div>
      </div>
    </div>
    <div className="twants-message">
      <div className="twants-message-avatar"><span>JD</span></div>
      <div className="twants-message-content">
        <div className="twants-message-bubble">Nice! Can't wait to see it 🎉</div>
        <div className="twants-message-time">10:33 AM</div>
      </div>
    </div>
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Additional CSS classes. Use twants-message-sent for sent messages." },
  ]}
/>

## Accessibility

- Messages should use `role="log"` on the list container.
- New messages should be announced with `aria-live="polite"`.
- Each message should have a visible timestamp.
