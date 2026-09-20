---
title: Charts
---

# Charts

Charts visualize data using bar, line, and pie/donut variants.

## Bar Chart

<Preview
  code={`<div class="twants-chart" style="max-width:28rem">
  <svg viewBox="0 0 400 200">
    <!-- Grid lines -->
    <line class="twants-chart-grid-line" x1="40" y1="20" x2="380" y2="20"/>
    <line class="twants-chart-grid-line" x1="40" y1="65" x2="380" y2="65"/>
    <line class="twants-chart-grid-line" x1="40" y1="110" x2="380" y2="110"/>
    <line class="twants-chart-grid-line" x1="40" y1="155" x2="380" y2="155"/>
    <!-- Y-axis labels -->
    <text class="twants-chart-axis-label" x="35" y="24" text-anchor="end">100</text>
    <text class="twants-chart-axis-label" x="35" y="69" text-anchor="end">75</text>
    <text class="twants-chart-axis-label" x="35" y="114" text-anchor="end">50</text>
    <text class="twants-chart-axis-label" x="35" y="159" text-anchor="end">25</text>
    <!-- Bars -->
    <rect class="twants-chart-bar" x="55" y="50" width="40" height="125" rx="4"/>
    <rect class="twants-chart-bar twants-chart-bar-success" x="105" y="80" width="40" height="95" rx="4"/>
    <rect class="twants-chart-bar" x="155" y="30" width="40" height="145" rx="4"/>
    <rect class="twants-chart-bar twants-chart-bar-warning" x="205" y="100" width="40" height="75" rx="4"/>
    <rect class="twants-chart-bar" x="255" y="60" width="40" height="115" rx="4"/>
    <rect class="twants-chart-bar twants-chart-bar-info" x="305" y="90" width="40" height="85" rx="4"/>
    <rect class="twants-chart-bar twants-chart-bar-danger" x="355" y="110" width="40" height="65" rx="4"/>
    <!-- X-axis labels -->
    <text class="twants-chart-axis-label" x="75" y="185" text-anchor="middle">Mon</text>
    <text class="twants-chart-axis-label" x="125" y="185" text-anchor="middle">Tue</text>
    <text class="twants-chart-axis-label" x="175" y="185" text-anchor="middle">Wed</text>
    <text class="twants-chart-axis-label" x="225" y="185" text-anchor="middle">Thu</text>
    <text class="twants-chart-axis-label" x="275" y="185" text-anchor="middle">Fri</text>
    <text class="twants-chart-axis-label" x="325" y="185" text-anchor="middle">Sat</text>
    <text class="twants-chart-axis-label" x="375" y="185" text-anchor="middle">Sun</text>
  </svg>
</div>`}
>
  <div className="twants-chart" style={{maxWidth:'28rem'}}>
    <svg viewBox="0 0 400 200">
      <line className="twants-chart-grid-line" x1="40" y1="20" x2="380" y2="20"/>
      <line className="twants-chart-grid-line" x1="40" y1="65" x2="380" y2="65"/>
      <line className="twants-chart-grid-line" x1="40" y1="110" x2="380" y2="110"/>
      <line className="twants-chart-grid-line" x1="40" y1="155" x2="380" y2="155"/>
      <text className="twants-chart-axis-label" x="35" y="24" textAnchor="end">100</text>
      <text className="twants-chart-axis-label" x="35" y="69" textAnchor="end">75</text>
      <text className="twants-chart-axis-label" x="35" y="114" textAnchor="end">50</text>
      <text className="twants-chart-axis-label" x="35" y="159" textAnchor="end">25</text>
      <rect className="twants-chart-bar" x="55" y="50" width="40" height="125" rx="4"/>
      <rect className="twants-chart-bar twants-chart-bar-success" x="105" y="80" width="40" height="95" rx="4"/>
      <rect className="twants-chart-bar" x="155" y="30" width="40" height="145" rx="4"/>
      <rect className="twants-chart-bar twants-chart-bar-warning" x="205" y="100" width="40" height="75" rx="4"/>
      <rect className="twants-chart-bar" x="255" y="60" width="40" height="115" rx="4"/>
      <rect className="twants-chart-bar twants-chart-bar-info" x="305" y="90" width="40" height="85" rx="4"/>
      <rect className="twants-chart-bar twants-chart-bar-danger" x="355" y="110" width="40" height="65" rx="4"/>
      <text className="twants-chart-axis-label" x="75" y="185" textAnchor="middle">Mon</text>
      <text className="twants-chart-axis-label" x="125" y="185" textAnchor="middle">Tue</text>
      <text className="twants-chart-axis-label" x="175" y="185" textAnchor="middle">Wed</text>
      <text className="twants-chart-axis-label" x="225" y="185" textAnchor="middle">Thu</text>
      <text className="twants-chart-axis-label" x="275" y="185" textAnchor="middle">Fri</text>
      <text className="twants-chart-axis-label" x="325" y="185" textAnchor="middle">Sat</text>
      <text className="twants-chart-axis-label" x="375" y="185" textAnchor="middle">Sun</text>
    </svg>
  </div>
</Preview>

## Line Chart

<Preview
  code={`<div class="twants-chart" style="max-width:28rem">
  <svg viewBox="0 0 400 200">
    <line class="twants-chart-grid-line" x1="40" y1="20" x2="380" y2="20"/>
    <line class="twants-chart-grid-line" x1="40" y1="65" x2="380" y2="65"/>
    <line class="twants-chart-grid-line" x1="40" y1="110" x2="380" y2="110"/>
    <line class="twants-chart-grid-line" x1="40" y1="155" x2="380" y2="155"/>
    <!-- Area -->
    <path class="twants-chart-area" d="M55,120 L125,80 L195,100 L265,40 L335,60 L335,155 L55,155 Z"/>
    <!-- Line -->
    <polyline class="twants-chart-line" points="55,120 125,80 195,100 265,40 335,60"/>
    <!-- Dots -->
    <circle class="twants-chart-dot" cx="55" cy="120" r="4"/>
    <circle class="twants-chart-dot" cx="125" cy="80" r="4"/>
    <circle class="twants-chart-dot" cx="195" cy="100" r="4"/>
    <circle class="twants-chart-dot" cx="265" cy="40" r="4"/>
    <circle class="twants-chart-dot" cx="335" cy="60" r="4"/>
    <!-- X-axis labels -->
    <text class="twants-chart-axis-label" x="55" y="175" text-anchor="middle">Jan</text>
    <text class="twants-chart-axis-label" x="125" y="175" text-anchor="middle">Feb</text>
    <text class="twants-chart-axis-label" x="195" y="175" text-anchor="middle">Mar</text>
    <text class="twants-chart-axis-label" x="265" y="175" text-anchor="middle">Apr</text>
    <text class="twants-chart-axis-label" x="335" y="175" text-anchor="middle">May</text>
  </svg>
</div>`}
>
  <div className="twants-chart" style={{maxWidth:'28rem'}}>
    <svg viewBox="0 0 400 200">
      <line className="twants-chart-grid-line" x1="40" y1="20" x2="380" y2="20"/>
      <line className="twants-chart-grid-line" x1="40" y1="65" x2="380" y2="65"/>
      <line className="twants-chart-grid-line" x1="40" y1="110" x2="380" y2="110"/>
      <line className="twants-chart-grid-line" x1="40" y1="155" x2="380" y2="155"/>
      <path className="twants-chart-area" d="M55,120 L125,80 L195,100 L265,40 L335,60 L335,155 L55,155 Z"/>
      <polyline className="twants-chart-line" points="55,120 125,80 195,100 265,40 335,60"/>
      <circle className="twants-chart-dot" cx="55" cy="120" r="4"/>
      <circle className="twants-chart-dot" cx="125" cy="80" r="4"/>
      <circle className="twants-chart-dot" cx="195" cy="100" r="4"/>
      <circle className="twants-chart-dot" cx="265" cy="40" r="4"/>
      <circle className="twants-chart-dot" cx="335" cy="60" r="4"/>
      <text className="twants-chart-axis-label" x="55" y="175" textAnchor="middle">Jan</text>
      <text className="twants-chart-axis-label" x="125" y="175" textAnchor="middle">Feb</text>
      <text className="twants-chart-axis-label" x="195" y="175" textAnchor="middle">Mar</text>
      <text className="twants-chart-axis-label" x="265" y="175" textAnchor="middle">Apr</text>
      <text className="twants-chart-axis-label" x="335" y="175" textAnchor="middle">May</text>
    </svg>
  </div>
</Preview>

## Donut Chart

<Preview
  code={`<div class="twants-chart" style="max-width:14rem">
  <svg viewBox="0 0 120 120">
    <circle cx="60" cy="60" r="50" fill="none" stroke="var(--twants-surface-tertiary)" stroke-width="12"/>
    <circle cx="60" cy="60" r="50" fill="none" stroke="var(--twants-primary)" stroke-width="12" stroke-dasharray="157 157" stroke-dashoffset="0" transform="rotate(-90 60 60)"/>
    <circle cx="60" cy="60" r="50" fill="none" stroke="var(--twants-success)" stroke-width="12" stroke-dasharray="94 220" stroke-dashoffset="-157" transform="rotate(-90 60 60)"/>
    <circle cx="60" cy="60" r="50" fill="none" stroke="var(--twants-warning)" stroke-width="12" stroke-dasharray="63 251" stroke-dashoffset="-251" transform="rotate(-90 60 60)"/>
    <text x="60" y="56" text-anchor="middle" font-size="14" font-weight="600" fill="var(--twants-foreground)">265</text>
    <text x="60" y="70" text-anchor="middle" font-size="9" fill="var(--twants-foreground-muted)">total</text>
  </svg>
  <div class="twants-chart-legend" style="justify-content:center">
    <span class="twants-chart-legend-item"><span class="twants-chart-legend-dot" style="background:var(--twants-primary)"></span>Desktop</span>
    <span class="twants-chart-legend-item"><span class="twants-chart-legend-dot" style="background:var(--twants-success)"></span>Mobile</span>
    <span class="twants-chart-legend-item"><span class="twants-chart-legend-dot" style="background:var(--twants-warning)"></span>Tablet</span>
  </div>
</div>`}
>
  <div className="twants-chart" style={{maxWidth:'14rem'}}>
    <svg viewBox="0 0 120 120">
      <circle cx="60" cy="60" r="50" fill="none" stroke="var(--twants-surface-tertiary)" strokeWidth="12"/>
      <circle cx="60" cy="60" r="50" fill="none" stroke="var(--twants-primary)" strokeWidth="12" strokeDasharray="157 157" strokeDashoffset="0" transform="rotate(-90 60 60)"/>
      <circle cx="60" cy="60" r="50" fill="none" stroke="var(--twants-success)" strokeWidth="12" strokeDasharray="94 220" strokeDashoffset="-157" transform="rotate(-90 60 60)"/>
      <circle cx="60" cy="60" r="50" fill="none" stroke="var(--twants-warning)" strokeWidth="12" strokeDasharray="63 251" strokeDashoffset="-251" transform="rotate(-90 60 60)"/>
      <text x="60" y="56" textAnchor="middle" fontSize="14" fontWeight="600" fill="var(--twants-foreground)">265</text>
      <text x="60" y="70" textAnchor="middle" fontSize="9" fill="var(--twants-foreground-muted)">total</text>
    </svg>
    <div className="twants-chart-legend" style={{justifyContent:'center'}}>
      <span className="twants-chart-legend-item"><span className="twants-chart-legend-dot" style={{background:'var(--twants-primary)'}}></span>Desktop</span>
      <span className="twants-chart-legend-item"><span className="twants-chart-legend-dot" style={{background:'var(--twants-success)'}}></span>Mobile</span>
      <span className="twants-chart-legend-item"><span className="twants-chart-legend-dot" style={{background:'var(--twants-warning)'}}></span>Tablet</span>
    </div>
  </div>
</Preview>

## Legend

<Preview
  code={`<div class="twants-chart-legend">
  <span class="twants-chart-legend-item"><span class="twants-chart-legend-dot" style="background:var(--twants-primary)"></span>Revenue</span>
  <span class="twants-chart-legend-item"><span class="twants-chart-legend-dot" style="background:var(--twants-success)"></span>Profit</span>
  <span class="twants-chart-legend-item"><span class="twants-chart-legend-dot" style="background:var(--twants-warning)"></span>Expenses</span>
</div>`}
>
  <div className="twants-chart-legend">
    <span className="twants-chart-legend-item"><span className="twants-chart-legend-dot" style={{background:'var(--twants-primary)'}}></span>Revenue</span>
    <span className="twants-chart-legend-item"><span className="twants-chart-legend-dot" style={{background:'var(--twants-success)'}}></span>Profit</span>
    <span className="twants-chart-legend-item"><span className="twants-chart-legend-dot" style={{background:'var(--twants-warning)'}}></span>Expenses</span>
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Additional CSS classes." },
  ]}
/>

## Accessibility

- Use `<title>` and `<desc>` elements inside SVG for screen reader descriptions.
- Add `role="img"` on the SVG element with an `aria-label`.
- Provide a data table alternative for complex charts.
- Ensure chart colors have sufficient contrast.
- Use `aria-hidden="true"` on decorative grid lines.
