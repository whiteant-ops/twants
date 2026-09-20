---
title: Dialog
---

# Dialog

Dialogs (modals) display content in a layered overlay, requiring user interaction before returning to the app.

## Basic

<Preview
  code={`<div class="twants-modal-overlay" style="position:relative;height:16rem">
  <div class="twants-modal" style="position:relative">
    <div class="twants-modal-header">
      <div class="twants-modal-title">Edit Profile</div>
    </div>
    <div class="twants-modal-body">
      <div class="twants-field">
        <label class="twants-field-label">Name</label>
        <input class="twants-input" type="text" defaultValue="John Doe" />
      </div>
    </div>
    <div class="twants-modal-footer">
      <button class="twants-button twants-button-sm">Cancel</button>
      <button class="twants-button twants-button-primary twants-button-sm">Save</button>
    </div>
  </div>
</div>`}
>
  <div className="twants-modal-overlay" style={{position:'relative',height:'16rem'}}>
    <div className="twants-modal" style={{position:'relative'}}>
      <div className="twants-modal-header">
        <div className="twants-modal-title">Edit Profile</div>
      </div>
      <div className="twants-modal-body">
        <div className="twants-field">
          <label className="twants-field-label">Name</label>
          <input className="twants-input" type="text" defaultValue="John Doe" />
        </div>
      </div>
      <div className="twants-modal-footer">
        <button className="twants-button twants-button-sm">Cancel</button>
        <button className="twants-button twants-button-primary twants-button-sm">Save</button>
      </div>
    </div>
  </div>
</Preview>

## Confirm Dialog

<Preview
  code={`<div class="twants-modal-overlay" style="position:relative;height:12rem">
  <div class="twants-modal twants-confirm-dialog" style="position:relative">
    <div class="twants-modal-header">
      <div class="twants-modal-title">Delete item?</div>
    </div>
    <div class="twants-modal-body">
      <p style="font-size:var(--twants-text-sm);color:var(--twants-foreground-secondary)">This action cannot be undone. The item will be permanently removed.</p>
    </div>
    <div class="twants-modal-footer">
      <button class="twants-button twants-button-sm">Cancel</button>
      <button class="twants-button twants-button-danger twants-button-sm">Delete</button>
    </div>
  </div>
</div>`}
>
  <div className="twants-modal-overlay" style={{position:'relative',height:'12rem'}}>
    <div className="twants-modal twants-confirm-dialog" style={{position:'relative'}}>
      <div className="twants-modal-header">
        <div className="twants-modal-title">Delete item?</div>
      </div>
      <div className="twants-modal-body">
        <p style={{fontSize:'var(--twants-text-sm)',color:'var(--twants-foreground-secondary)'}}>This action cannot be undone. The item will be permanently removed.</p>
      </div>
      <div className="twants-modal-footer">
        <button className="twants-button twants-button-sm">Cancel</button>
        <button className="twants-button twants-button-danger twants-button-sm">Delete</button>
      </div>
    </div>
  </div>
</Preview>

## JS Usage

```typescript
import { Modal } from "twants";

// Show modal
const modal = Modal.show({
  title: "Edit Profile",
  content: '<div class="twants-field"><label class="twants-field-label">Name</label><input class="twants-input" /></div>',
  footer: `<button class="twants-button" data-modal-close>Cancel</button>
           <button class="twants-button twants-button-primary">Save</button>`,
});

// Close
modal.close();
```

## Props

<PropsTable
  rows={[
    { name: "title", type: "string", default: "—", description: "Modal title text." },
    { name: "content", type: "string | HTMLElement", default: "—", description: "Modal body content." },
    { name: "footer", type: "string | HTMLElement", default: "—", description: "Modal footer content." },
    { name: "closeOnOverlay", type: "boolean", default: "true", description: "Close when clicking overlay." },
  ]}
/>

## Accessibility

- Use `role="dialog"` and `aria-modal="true"` on the modal.
- Focus should be trapped inside the modal when open.
- Pressing Escape should close the modal.
- Return focus to the trigger element when closed.
- Use `aria-labelledby` pointing to the title element.
