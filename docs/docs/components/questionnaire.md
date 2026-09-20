---
title: Questionnaire
---

# Questionnaire

Questionnaires guide users through a multi-step form with progress tracking.

## Basic

<Preview
  code={`<div class="twants-questionnaire" style="max-width:28rem">
  <div class="twants-question">
    <div class="twants-question-label twants-question-required">What is your name?</div>
    <div class="twants-question-description">This will be displayed on your profile.</div>
    <input class="twants-input" type="text" placeholder="Enter your name..." />
  </div>
  <div class="twants-question">
    <div class="twants-question-label twants-question-required">How did you hear about us?</div>
    <div class="twants-question-options">
      <div class="twants-question-option" data-selected="true">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
        Social media
      </div>
      <div class="twants-question-option">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
        Friend or colleague
      </div>
      <div class="twants-question-option">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
        Search engine
      </div>
      <div class="twants-question-option">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
        Other
      </div>
    </div>
  </div>
  <div class="twants-question">
    <div class="twants-question-label">Any additional comments?</div>
    <textarea class="twants-textarea" placeholder="Optional..." rows="3"></textarea>
  </div>
  <div class="twants-question-nav">
    <button class="twants-button twants-button-outline twants-button-sm">Back</button>
    <button class="twants-button twants-button-primary twants-button-sm">Next</button>
  </div>
</div>`}
>
  <div className="twants-questionnaire" style={{maxWidth:'28rem'}}>
    <div className="twants-question">
      <div className="twants-question-label twants-question-required">What is your name?</div>
      <div className="twants-question-description">This will be displayed on your profile.</div>
      <input className="twants-input" type="text" placeholder="Enter your name..." />
    </div>
    <div className="twants-question">
      <div className="twants-question-label twants-question-required">How did you hear about us?</div>
      <div className="twants-question-options">
        <div className="twants-question-option" data-selected="true">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
          Social media
        </div>
        <div className="twants-question-option">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
          Friend or colleague
        </div>
        <div className="twants-question-option">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
          Search engine
        </div>
        <div className="twants-question-option">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
          Other
        </div>
      </div>
    </div>
    <div className="twants-question">
      <div className="twants-question-label">Any additional comments?</div>
      <textarea className="twants-textarea" placeholder="Optional..." rows="3"></textarea>
    </div>
    <div className="twants-question-nav">
      <button className="twants-button twants-button-outline twants-button-sm">Back</button>
      <button className="twants-button twants-button-primary twants-button-sm">Next</button>
    </div>
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Additional CSS classes." },
  ]}
/>

## Accessibility

- Use `role="form"` or `<form>` on the questionnaire container.
- Each question should have a visible label using `aria-labelledby`.
- Required fields should use `aria-required="true"`.
- Progress should be announced with `aria-live="polite"`.
- Keyboard navigation should follow logical question order.
