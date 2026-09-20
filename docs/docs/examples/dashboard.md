---
title: Dashboard
---

# Dashboard Example

A complete dashboard layout with sidebar, header, stats, and data table.

<div style={{border:"1px solid var(--twants-border)",borderRadius:"var(--twants-radius-lg)",overflow:"hidden",maxHeight:"40rem"}}>
<div style={{display:"flex",minHeight:"24rem"}}>

<div style={{width:"14rem",borderRight:"1px solid var(--twants-border)",background:"var(--twants-surface)",display:"flex",flexDirection:"column"}}>
  <div style={{padding:"1rem",borderBottom:"1px solid var(--twants-border)",display:"flex",alignItems:"center",gap:"0.5rem"}}>
    <div style={{width:"1.75rem",height:"1.75rem",borderRadius:"var(--twants-radius-sm)",background:"var(--twants-primary)",color:"white",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"var(--twants-text-xs)",fontWeight:700}}>T</div>
    <span style={{fontWeight:"var(--twants-font-semibold)",fontSize:"var(--twants-text-sm)"}}>TWANTS</span>
  </div>
  <nav style={{padding:"0.5rem",flex:1,display:"flex",flexDirection:"column",gap:"0.125rem"}}>
    <span style={{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0.5rem 0.625rem",borderRadius:"var(--twants-radius-sm)",background:"var(--twants-primary-subtle)",color:"var(--twants-primary)",fontSize:"var(--twants-text-sm)",fontWeight:500}}>
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
      Dashboard
    </span>
    <span style={{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0.5rem 0.625rem",borderRadius:"var(--twants-radius-sm)",color:"var(--twants-foreground-secondary)",fontSize:"var(--twants-text-sm)"}}>
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
      Users
    </span>
    <span style={{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0.5rem 0.625rem",borderRadius:"var(--twants-radius-sm)",color:"var(--twants-foreground-secondary)",fontSize:"var(--twants-text-sm)"}}>
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
      Projects
    </span>
    <span style={{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0.5rem 0.625rem",borderRadius:"var(--twants-radius-sm)",color:"var(--twants-foreground-secondary)",fontSize:"var(--twants-text-sm)"}}>
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
      Settings
    </span>
  </nav>
</div>

<div style={{flex:1,display:"flex",flexDirection:"column",background:"var(--twants-surface-secondary)"}}>
  <div style={{padding:"0.75rem 1.25rem",background:"var(--twants-surface)",borderBottom:"1px solid var(--twants-border)",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
    <div style={{fontSize:"var(--twants-text-md)",fontWeight:"var(--twants-font-semibold)"}}>Dashboard</div>
    <div style={{display:"flex",alignItems:"center",gap:"0.75rem"}}>
      <div style={{width:"2rem",height:"2rem",borderRadius:"50%",background:"var(--twants-primary)",color:"white",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"var(--twants-text-xs)",fontWeight:600}}>JD</div>
    </div>
  </div>

  <div style={{padding:"1.25rem",flex:1,overflowY:"auto"}}>
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1rem",marginBottom:"1.25rem"}}>
      <div style={{background:"var(--twants-surface)",border:"1px solid var(--twants-border)",borderRadius:"var(--twants-radius-md)",padding:"1rem"}}>
        <div style={{fontSize:"var(--twants-text-xs)",color:"var(--twants-foreground-muted)",marginBottom:"0.25rem"}}>Total Revenue</div>
        <div style={{fontSize:"var(--twants-text-xl)",fontWeight:700}}>$45,231.89</div>
        <div style={{fontSize:"var(--twants-text-xs)",color:"var(--twants-success)",marginTop:"0.25rem"}}>+20.1% from last month</div>
      </div>
      <div style={{background:"var(--twants-surface)",border:"1px solid var(--twants-border)",borderRadius:"var(--twants-radius-md)",padding:"1rem"}}>
        <div style={{fontSize:"var(--twants-text-xs)",color:"var(--twants-foreground-muted)",marginBottom:"0.25rem"}}>Subscriptions</div>
        <div style={{fontSize:"var(--twants-text-xl)",fontWeight:700}}>+2,350</div>
        <div style={{fontSize:"var(--twants-text-xs)",color:"var(--twants-success)",marginTop:"0.25rem"}}>+180.1% from last month</div>
      </div>
      <div style={{background:"var(--twants-surface)",border:"1px solid var(--twants-border)",borderRadius:"var(--twants-radius-md)",padding:"1rem"}}>
        <div style={{fontSize:"var(--twants-text-xs)",color:"var(--twants-foreground-muted)",marginBottom:"0.25rem"}}>Active Now</div>
        <div style={{fontSize:"var(--twants-text-xl)",fontWeight:700}}>+573</div>
        <div style={{fontSize:"var(--twants-text-xs)",color:"var(--twants-success)",marginTop:"0.25rem"}}>+19% from last hour</div>
      </div>
    </div>

    <div style={{background:"var(--twants-surface)",border:"1px solid var(--twants-border)",borderRadius:"var(--twants-radius-md)",overflow:"hidden"}}>
      <div style={{padding:"1rem",borderBottom:"1px solid var(--twants-border)",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div>
          <div style={{fontWeight:"var(--twants-font-semibold)",fontSize:"var(--twants-text-sm)"}}>Recent Invoices</div>
          <div style={{fontSize:"var(--twants-text-xs)",color:"var(--twants-foreground-muted)"}}>Managing your recent transactions</div>
        </div>
        <button className="twants-button twants-button-outline twants-button-sm">Export</button>
      </div>
      <table className="twants-table">
        <thead>
          <tr><th>Invoice</th><th>Status</th><th>Method</th><th style={{textAlign:"right"}}>Amount</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>INV001</td>
            <td><span className="twants-badge twants-badge-success">Paid</span></td>
            <td>Credit Card</td>
            <td style={{textAlign:"right"}}>$250.00</td>
          </tr>
          <tr>
            <td>INV002</td>
            <td><span className="twants-badge twants-badge-warning">Pending</span></td>
            <td>PayPal</td>
            <td style={{textAlign:"right"}}>$150.00</td>
          </tr>
          <tr>
            <td>INV003</td>
            <td><span className="twants-badge twants-badge-danger">Overdue</span></td>
            <td>Bank Transfer</td>
            <td style={{textAlign:"right"}}>$350.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

</div>
</div>

## Components Used

| Component | Purpose |
|---|---|
| Sidebar | Navigation with sections and items |
| Badge | Status indicators (Paid, Pending, Overdue) |
| Avatar | User profile icon |
| Button | Export action |
| Table | Invoice data display |
