---
title: Toast
---

# Toast

Toasts are brief, non-blocking notifications that appear temporarily.

## Variants

<Preview
  code={`<div style="display:flex;flex-direction:column;gap:0.5rem">
  <div class="twants-toast">
    <div>
      <div class="twants-toast-title">Changes saved</div>
      <div class="twants-toast-description">Your profile has been updated.</div>
    </div>
  </div>
  <div class="twants-toast" style="border-left:3px solid var(--twants-success)">
    <div>
      <div class="twants-toast-title">Success</div>
      <div class="twants-toast-description">File uploaded successfully.</div>
    </div>
  </div>
  <div class="twants-toast" style="border-left:3px solid var(--twants-danger)">
    <div>
      <div class="twants-toast-title">Error</div>
      <div class="twants-toast-description">Failed to save. Please try again.</div>
    </div>
  </div>
</div>`}
>
  <div style={{display:'flex',flexDirection:'column',gap:'0.5rem',maxWidth:'24rem'}}>
    <div className="twants-toast">
      <div>
        <div className="twants-toast-title">Changes saved</div>
        <div className="twants-toast-description">Your profile has been updated.</div>
      </div>
    </div>
    <div className="twants-toast" style={{borderLeft:'3px solid var(--twants-success)'}}>
      <div>
        <div className="twants-toast-title">Success</div>
        <div className="twants-toast-description">File uploaded successfully.</div>
      </div>
    </div>
    <div className="twants-toast" style={{borderLeft:'3px solid var(--twants-danger)'}}>
      <div>
        <div className="twants-toast-title">Error</div>
        <div className="twants-toast-description">Failed to save. Please try again.</div>
      </div>
    </div>
  </div>
</Preview>

## With Action

<Preview
  code={`<div class="twants-toast" style="max-width:22rem">
  <div style="flex:1">
    <div class="twants-toast-title">Undo</div>
    <div class="twants-toast-description">Item deleted.</div>
  </div>
  <button class="twants-button twants-button-subtle twants-button-sm">Undo</button>
</div>`}
>
  <div className="twants-toast" style={{maxWidth:'22rem'}}>
    <div style={{flex:1}}>
      <div className="twants-toast-title">Undo</div>
      <div className="twants-toast-description">Item deleted.</div>
    </div>
    <button className="twants-button twants-button-subtle twants-button-sm">Undo</button>
  </div>
</Preview>

## JS Usage

```typescript
import { Toast } from "twants";

// Show a toast
Toast.show({
  title: "Changes saved",
  description: "Your profile has been updated.",
  variant: "success", // "info" | "success" | "warning" | "error"
  duration: 5000,
});
```

## Props

<PropsTable
  rows={[
    { name: "title", type: "string", default: "—", description: "Toast title text." },
    { name: "description", type: "string", default: "—", description: "Toast body text." },
    { name: "variant", type: "'info' | 'success' | 'warning' | 'error'", default: "'info'", description: "Visual style." },
    { name: "duration", type: "number", default: "5000", description: "Auto-dismiss time in ms." },
  ]}
/>

## Accessibility

- Use `role="status"` or `role="alert"` on the toast container.
- Toasts should be focusable if they contain interactive elements.
- Auto-dismiss should not interrupt screen reader announcements.
