---
title: OTP
---

# OTP Example

An OTP (One-Time Password) verification page with 6-digit code input.

<div style={{maxWidth:"24rem",margin:"0 auto"}}>
<div style={{background:"var(--twants-surface)",border:"1px solid var(--twants-border)",borderRadius:"var(--twants-radius-lg)",padding:"2rem",textAlign:"center"}}>

{/* Icon */}
<div style={{width:"3rem",height:"3rem",borderRadius:"50%",background:"var(--twants-primary-subtle)",color:"var(--twants-primary)",display:"inline-flex",alignItems:"center",justifyContent:"center",marginBottom:"1rem"}}>
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
</div>

{/* Header */}
<h2 style={{fontSize:"var(--twants-text-xl)",fontWeight:"var(--twants-font-bold)",margin:"0 0 0.25rem"}}>Check your email</h2>
<p style={{fontSize:"var(--twants-text-sm)",color:"var(--twants-foreground-secondary)",margin:"0 0 1.5rem"}}>We sent a 6-digit code to <strong>john@example.com</strong>. Enter it below.</p>

{/* OTP Input */}
<div className="twants-input-otp" style={{display:"flex",justifyContent:"center",gap:"0.5rem",marginBottom:"1.5rem"}}>
  <input className="twants-input" type="text" maxLength="1" defaultValue="4" style={{width:"2.5rem",height:"2.75rem",textAlign:"center",fontSize:"var(--twants-text-lg)",fontWeight:600,padding:0}} />
  <input className="twants-input" type="text" maxLength="1" defaultValue="2" style={{width:"2.5rem",height:"2.75rem",textAlign:"center",fontSize:"var(--twants-text-lg)",fontWeight:600,padding:0}} />
  <input className="twants-input" type="text" maxLength="1" style={{width:"2.5rem",height:"2.75rem",textAlign:"center",fontSize:"var(--twants-text-lg)",fontWeight:600,padding:0,borderColor:"var(--twants-primary)",boxShadow:"0 0 0 2px color-mix(in srgb, var(--twants-primary) 25%, transparent)"}} />
  <input className="twants-input" type="text" maxLength="1" style={{width:"2.5rem",height:"2.75rem",textAlign:"center",fontSize:"var(--twants-text-lg)",fontWeight:600,padding:0}} />
  <input className="twants-input" type="text" maxLength="1" style={{width:"2.5rem",height:"2.75rem",textAlign:"center",fontSize:"var(--twants-text-lg)",fontWeight:600,padding:0}} />
  <input className="twants-input" type="text" maxLength="1" style={{width:"2.5rem",height:"2.75rem",textAlign:"center",fontSize:"var(--twants-text-lg)",fontWeight:600,padding:0}} />
</div>

{/* Submit */}
<button className="twants-button twants-button-primary" style={{width:"100%",marginBottom:"1rem"}}>Verify</button>

{/* Resend */}
<p style={{fontSize:"var(--twants-text-sm)",color:"var(--twants-foreground-secondary)",margin:0}}>
  Didn't receive the code? <button className="twants-button twants-button-ghost twants-button-sm" style={{padding:"0",height:"auto",minHeight:"auto",color:"var(--twants-primary)"}}>Resend</button>
</p>

</div>
</div>

## Components Used

| Component | Purpose |
|---|---|
| Input OTP | 6-digit verification code |
| Button | Verify and Resend actions |
| Alert | Success/error feedback |

## JS Usage

```typescript
import { InputOTP } from "twants";

InputOTP.init(containerElement, {
  length: 6,
  onComplete: (code) => verify(code),
});
```

## Accessibility

- Each digit input should have `aria-label="Digit 1 of 6"`.
- Auto-focus should move to the next input after entering a digit.
- Backspace should clear the current digit and move focus back.
- The container should have `role="group"` with `aria-label="Verification code"`.
