---
title: Forgot Password
---

# Forgot Password Example

A forgot password page with email input and back-to-login link.

<div style={{maxWidth:"24rem",margin:"0 auto"}}>
<div style={{background:"var(--twants-surface)",border:"1px solid var(--twants-border)",borderRadius:"var(--twants-radius-lg)",padding:"2rem",textAlign:"center"}}>

{/* Icon */}
<div style={{width:"3rem",height:"3rem",borderRadius:"50%",background:"var(--twants-primary-subtle)",color:"var(--twants-primary)",display:"inline-flex",alignItems:"center",justifyContent:"center",marginBottom:"1rem"}}>
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
</div>

{/* Header */}
<h2 style={{fontSize:"var(--twants-text-xl)",fontWeight:"var(--twants-font-bold)",margin:"0 0 0.25rem"}}>Forgot your password?</h2>
<p style={{fontSize:"var(--twants-text-sm)",color:"var(--twants-foreground-secondary)",margin:"0 0 1.5rem"}}>No worries, we'll send you reset instructions.</p>

{/* Form */}
<div style={{display:"flex",flexDirection:"column",gap:"1rem",textAlign:"left"}}>
  {/* Email */}
  <div style={{display:"flex",flexDirection:"column",gap:"0.375rem"}}>
    <label style={{fontSize:"var(--twants-text-sm)",fontWeight:"var(--twants-font-medium)"}}>Email</label>
    <input className="twants-input" type="email" placeholder="name@example.com" />
  </div>

  {/* Submit */}
  <button className="twants-button twants-button-primary" style={{width:"100%"}}>Reset password</button>
</div>

{/* Back to login */}
<div style={{marginTop:"1.5rem",fontSize:"var(--twants-text-sm)",color:"var(--twants-foreground-secondary)"}}>
  <a href="#" style={{display:"inline-flex",alignItems:"center",gap:"0.375rem",color:"var(--twants-foreground-secondary)",textDecoration:"none"}}>
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
    Back to sign in
  </a>
</div>

</div>
</div>

## Components Used

| Component | Purpose |
|---|---|
| Field | Form field wrapper with label |
| Input | Email input |
| Button | Reset password action |

## CSS Classes

- `.twants-field`, `.twants-field-label`
- `.twants-input`
- `.twants-button`, `.twants-button-primary`
