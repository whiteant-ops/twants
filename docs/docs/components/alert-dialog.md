---
title: Alert Dialog
---

# Alert Dialog

Alert dialogs interrupt the user with a critical message requiring a decision.

## Basic

<Preview
  code={`<div class="twants-modal-overlay" style="position:relative;height:14rem">
  <div class="twants-modal twants-alert-dialog" style="position:relative">
    <div class="twants-modal-header">
      <div class="twants-modal-title">Are you absolutely sure?</div>
    </div>
    <div class="twants-modal-body">
      <p style="font-size:var(--twants-text-sm);color:var(--twants-foreground-secondary)">This action cannot be undone. This will permanently delete your account and remove your data from our servers.</p>
    </div>
    <div class="twants-modal-footer">
      <button class="twants-button twants-button-sm">Cancel</button>
      <button class="twants-button twants-button-danger twants-button-sm">Delete account</button>
    </div>
  </div>
</div>`}
>
  <div className="twants-modal-overlay" style={{position:'relative',height:'14rem'}}>
    <div className="twants-modal twants-alert-dialog" style={{position:'relative'}}>
      <div className="twants-modal-header">
        <div className="twants-modal-title">Are you absolutely sure?</div>
      </div>
      <div className="twants-modal-body">
        <p style={{fontSize:'var(--twants-text-sm)',color:'var(--twants-foreground-secondary)'}}>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</p>
      </div>
      <div className="twants-modal-footer">
        <button className="twants-button twants-button-sm">Cancel</button>
        <button className="twants-button twants-button-danger twants-button-sm">Delete account</button>
      </div>
    </div>
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "title", type: "string", default: "—", description: "Dialog title text." },
    { name: "description", type: "string", default: "—", description: "Dialog description." },
    { name: "confirmLabel", type: "string", default: "'Confirm'", description: "Confirm button label." },
    { name: "cancelLabel", type: "string", default: "'Cancel'", description: "Cancel button label." },
    { name: "onConfirm", type: "() => void", default: "—", description: "Called when confirmed." },
    { name: "onCancel", type: "() => void", default: "—", description: "Called when cancelled." },
  ]}
/>

## Accessibility

- Use `role="alertdialog"` and `aria-modal="true"`.
- Focus should be trapped inside the dialog.
- Return focus to the trigger element when closed.
- The confirm button should receive initial focus.
