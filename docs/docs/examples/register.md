---
title: Register
---

# Register Example

A registration page with full name, email, password, and terms acceptance.

<div style={{maxWidth:"24rem",margin:"0 auto"}}>
<div style={{background:"var(--twants-surface)",border:"1px solid var(--twants-border)",borderRadius:"var(--twants-radius-lg)",padding:"2rem"}}>

{/* Header */}
<div style={{textAlign:"center",marginBottom:"1.5rem"}}>
  <div style={{width:"2.5rem",height:"2.5rem",borderRadius:"var(--twants-radius)",background:"var(--twants-primary)",color:"white",display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:"var(--twants-text-md)",fontWeight:700,marginBottom:"0.75rem"}}>T</div>
  <h2 style={{fontSize:"var(--twants-text-xl)",fontWeight:"var(--twants-font-bold)",margin:"0 0 0.25rem"}}>Create an account</h2>
  <p style={{fontSize:"var(--twants-text-sm)",color:"var(--twants-foreground-secondary)",margin:0}}>Enter your details to get started</p>
</div>

{/* Form */}
<div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
  {/* Name */}
  <div style={{display:"flex",flexDirection:"column",gap:"0.375rem"}}>
    <label style={{fontSize:"var(--twants-text-sm)",fontWeight:"var(--twants-font-medium)"}}>Full name</label>
    <input className="twants-input" type="text" placeholder="John Doe" />
  </div>

  {/* Email */}
  <div style={{display:"flex",flexDirection:"column",gap:"0.375rem"}}>
    <label style={{fontSize:"var(--twants-text-sm)",fontWeight:"var(--twants-font-medium)"}}>Email</label>
    <input className="twants-input" type="email" placeholder="name@example.com" />
  </div>

  {/* Password */}
  <div style={{display:"flex",flexDirection:"column",gap:"0.375rem"}}>
    <label style={{fontSize:"var(--twants-text-sm)",fontWeight:"var(--twants-font-medium)"}}>Password</label>
    <input className="twants-input" type="password" placeholder="Create a password" />
    <span style={{fontSize:"var(--twants-text-xs)",color:"var(--twants-foreground-muted)"}}>Must be at least 8 characters.</span>
  </div>

  {/* Confirm Password */}
  <div style={{display:"flex",flexDirection:"column",gap:"0.375rem"}}>
    <label style={{fontSize:"var(--twants-text-sm)",fontWeight:"var(--twants-font-medium)"}}>Confirm password</label>
    <input className="twants-input" type="password" placeholder="Confirm your password" />
  </div>

  {/* Terms */}
  <div style={{display:"flex",alignItems:"flex-start",gap:"0.5rem"}}>
    <input type="checkbox" style={{width:"1rem",height:"1rem",borderRadius:"var(--twants-radius-sm)",accentColor:"var(--twants-primary)",marginTop:"0.15rem"}} />
    <label style={{fontSize:"var(--twants-text-sm)",color:"var(--twants-foreground-secondary)"}}>I agree to the <a href="#" style={{color:"var(--twants-primary)",textDecoration:"none"}}>Terms of Service</a> and <a href="#" style={{color:"var(--twants-primary)",textDecoration:"none"}}>Privacy Policy</a></label>
  </div>

  {/* Submit */}
  <button className="twants-button twants-button-primary" style={{width:"100%"}}>Create account</button>
</div>

{/* Divider */}
<div className="twants-separator" style={{margin:"1.5rem 0"}}>
  <span style={{fontSize:"var(--twants-text-xs)",color:"var(--twants-foreground-muted)",background:"var(--twants-surface)",padding:"0 0.5rem"}}>or continue with</span>
</div>

{/* Social */}
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"0.5rem"}}>
  <button className="twants-button twants-button-outline twants-button-sm">
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
    Google
  </button>
  <button className="twants-button twants-button-outline twants-button-sm">
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
    GitHub
  </button>
  <button className="twants-button twants-button-outline twants-button-sm">
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    X
  </button>
</div>

{/* Footer */}
<div style={{textAlign:"center",marginTop:"1.5rem",fontSize:"var(--twants-text-sm)",color:"var(--twants-foreground-secondary)"}}>
  Already have an account? <a href="#" style={{color:"var(--twants-primary)",textDecoration:"none",fontWeight:500}}>Sign in</a>
</div>

</div>
</div>

## Components Used

| Component | Purpose |
|---|---|
| Field | Form field wrapper with label and hint |
| Input | Text, email, and password inputs |
| Checkbox | Terms acceptance |
| Button | Submit and social login |
| Separator | Divider between form and social |
