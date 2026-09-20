---
title: Stepper
---

# Stepper

Steppers guide users through a multi-step process with visual progress indicators.

## Basic

<Preview
  code={`<div class="twants-stepper" style="max-width:32rem">
  <div class="twants-step twants-step-completed">
    <div class="twants-step-indicator">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M3.5 8.5l3 3 6-6.5"/></svg>
    </div>
    <div class="twants-step-content">
      <div class="twants-step-title">Account</div>
      <div class="twants-step-description">Your account details</div>
    </div>
  </div>
  <div class="twants-step-connector twants-step-connector-completed"></div>
  <div class="twants-step twants-step-active">
    <div class="twants-step-indicator">2</div>
    <div class="twants-step-content">
      <div class="twants-step-title">Profile</div>
      <div class="twants-step-description">Personal information</div>
    </div>
  </div>
  <div class="twants-step-connector"></div>
  <div class="twants-step">
    <div class="twants-step-indicator">3</div>
    <div class="twants-step-content">
      <div class="twants-step-title">Confirm</div>
      <div class="twants-step-description">Review and submit</div>
    </div>
  </div>
</div>`}
>
  <div className="twants-stepper" style={{maxWidth:'32rem'}}>
    <div className="twants-step twants-step-completed">
      <div className="twants-step-indicator">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M3.5 8.5l3 3 6-6.5"/></svg>
      </div>
      <div className="twants-step-content">
        <div className="twants-step-title">Account</div>
        <div className="twants-step-description">Your account details</div>
      </div>
    </div>
    <div className="twants-step-connector twants-step-connector-completed"></div>
    <div className="twants-step twants-step-active">
      <div className="twants-step-indicator">2</div>
      <div className="twants-step-content">
        <div className="twants-step-title">Profile</div>
        <div className="twants-step-description">Personal information</div>
      </div>
    </div>
    <div className="twants-step-connector"></div>
    <div className="twants-step">
      <div className="twants-step-indicator">3</div>
      <div className="twants-step-content">
        <div className="twants-step-title">Confirm</div>
        <div className="twants-step-description">Review and submit</div>
      </div>
    </div>
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Additional CSS classes. Use twants-step-completed, twants-step-active, twants-step-error on individual steps." },
  ]}
/>

## Accessibility

- Use `aria-current="step"` on the active step.
- Each step should have a descriptive title.
- Completed steps should have visual indicators (checkmark).
- Steps should be keyboard navigable.
