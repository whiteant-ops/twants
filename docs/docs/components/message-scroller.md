---
title: Message Scroller
---

# Message Scroller

Message Scrollers auto-scroll to the latest message and show a "new messages" indicator.

## Basic

<Preview
  code={`<div class="twants-scroller twants-scroller-fade-top twants-scroller-fade-bottom" style="max-height:16rem;width:24rem;border:1px solid var(--twants-border);border-radius:var(--twants-radius-md);position:relative">
  <div class="twants-message-list">
    <div class="twants-message">
      <div class="twants-message-avatar"><span>A</span></div>
      <div class="twants-message-content">
        <div class="twants-message-bubble">Hey, are you available?</div>
        <div class="twants-message-time">9:00 AM</div>
      </div>
    </div>
    <div class="twants-message twants-message-sent">
      <div class="twants-message-avatar"><span>B</span></div>
      <div class="twants-message-content">
        <div class="twants-message-bubble">Yes, what's up?</div>
        <div class="twants-message-time">9:01 AM</div>
      </div>
    </div>
    <div class="twants-message">
      <div class="twants-message-avatar"><span>A</span></div>
      <div class="twants-message-content">
        <div class="twants-message-bubble">Can you review the PR?</div>
        <div class="twants-message-time">9:02 AM</div>
      </div>
    </div>
    <div class="twants-message twants-message-sent">
      <div class="twants-message-avatar"><span>B</span></div>
      <div class="twants-message-content">
        <div class="twants-message-bubble">Sure, I'll take a look now.</div>
        <div class="twants-message-time">9:03 AM</div>
      </div>
    </div>
    <div class="twants-message">
      <div class="twants-message-avatar"><span>A</span></div>
      <div class="twants-message-content">
        <div class="twants-message-bubble">Thanks! Let me know if you need anything.</div>
        <div class="twants-message-time">9:04 AM</div>
      </div>
    </div>
  </div>
  <button class="twants-scroller-new">↓ New messages</button>
</div>`}
>
  <div className="twants-scroller twants-scroller-fade-top twants-scroller-fade-bottom" style={{maxHeight:'16rem',width:'24rem',border:'1px solid var(--twants-border)',borderRadius:'var(--twants-radius-md)',position:'relative'}}>
    <div className="twants-message-list">
      <div className="twants-message">
        <div className="twants-message-avatar"><span>A</span></div>
        <div className="twants-message-content">
          <div className="twants-message-bubble">Hey, are you available?</div>
          <div className="twants-message-time">9:00 AM</div>
        </div>
      </div>
      <div className="twants-message twants-message-sent">
        <div className="twants-message-avatar"><span>B</span></div>
        <div className="twants-message-content">
          <div className="twants-message-bubble">Yes, what's up?</div>
          <div className="twants-message-time">9:01 AM</div>
        </div>
      </div>
      <div className="twants-message">
        <div className="twants-message-avatar"><span>A</span></div>
        <div className="twants-message-content">
          <div className="twants-message-bubble">Can you review the PR?</div>
          <div className="twants-message-time">9:02 AM</div>
        </div>
      </div>
      <div className="twants-message twants-message-sent">
        <div className="twants-message-avatar"><span>B</span></div>
        <div className="twants-message-content">
          <div className="twants-message-bubble">Sure, I'll take a look now.</div>
          <div className="twants-message-time">9:03 AM</div>
        </div>
      </div>
      <div className="twants-message">
        <div className="twants-message-avatar"><span>A</span></div>
        <div className="twants-message-content">
          <div className="twants-message-bubble">Thanks! Let me know if you need anything.</div>
          <div className="twants-message-time">9:04 AM</div>
        </div>
      </div>
    </div>
    <button className="twants-scroller-new">↓ New messages</button>
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Additional CSS classes." },
    { name: "autoScroll", type: "boolean", default: "true", description: "Auto-scroll to bottom on new messages." },
    { name: "showNewIndicator", type: "boolean", default: "true", description: "Show 'New messages' button when scrolled up." },
  ]}
/>

## Accessibility

- Use `role="log"` on the message list container.
- New messages should be announced with `aria-live="polite"`.
- The "New messages" button should have `aria-label="Scroll to new messages"`.
- Respect `prefers-reduced-motion` for scroll animations.
