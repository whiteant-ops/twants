---
title: Date Picker
---

# Date Picker

Date pickers let users select a date from a calendar popup.

## Basic

<Preview
  code={`<div class="twants-date-picker" style="max-width:16rem">
  <input class="twants-input" type="text" placeholder="Select date..." readOnly />
</div>`}
>
  <div className="twants-date-picker" style={{maxWidth:'16rem'}}>
    <input className="twants-input" type="text" placeholder="Select date..." readOnly />
  </div>
</Preview>

## With Calendar Popup

<Preview
  code={`<div style="position:relative;display:inline-block">
  <div class="twants-date-picker" style="max-width:16rem">
    <input class="twants-input" type="text" value="Sep 20, 2026" readOnly />
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--twants-foreground-muted)"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
  </div>
  <div class="twants-calendar" style="position:absolute;top:calc(100% + 4px);left:0;z-index:var(--twants-z-dropdown);box-shadow:var(--twants-shadow-lg);background:var(--twants-surface);border:1px solid var(--twants-border);border-radius:var(--twants-radius-md);padding:0.75rem">
    <div class="twants-calendar-header">
      <button class="twants-button twants-button-icon twants-button-ghost twants-button-sm">←</button>
      <div class="twants-calendar-title">September 2026</div>
      <button class="twants-button twants-button-icon twants-button-ghost twants-button-sm">→</button>
    </div>
    <div class="twants-calendar-grid">
      <div class="twants-calendar-weekday">Su</div><div class="twants-calendar-weekday">Mo</div><div class="twants-calendar-weekday">Tu</div><div class="twants-calendar-weekday">We</div><div class="twants-calendar-weekday">Th</div><div class="twants-calendar-weekday">Fr</div><div class="twants-calendar-weekday">Sa</div>
      <button class="twants-calendar-day" data-outside="true" style="opacity:0.4">30</button>
      <button class="twants-calendar-day">1</button><button class="twants-calendar-day">2</button><button class="twants-calendar-day">3</button><button class="twants-calendar-day">4</button><button class="twants-calendar-day">5</button><button class="twants-calendar-day">6</button>
      <button class="twants-calendar-day">7</button><button class="twants-calendar-day">8</button><button class="twants-calendar-day">9</button><button class="twants-calendar-day">10</button><button class="twants-calendar-day">11</button><button class="twants-calendar-day">12</button><button class="twants-calendar-day">13</button>
      <button class="twants-calendar-day">14</button><button class="twants-calendar-day">15</button><button class="twants-calendar-day">16</button><button class="twants-calendar-day">17</button><button class="twants-calendar-day">18</button><button class="twants-calendar-day">19</button>
      <button class="twants-calendar-day" aria-current="date" style="background:var(--twants-primary);color:white;border-radius:var(--twants-radius-sm)">20</button>
      <button class="twants-calendar-day">21</button><button class="twants-calendar-day">22</button><button class="twants-calendar-day">23</button><button class="twants-calendar-day">24</button><button class="twants-calendar-day">25</button><button class="twants-calendar-day">26</button>
      <button class="twants-calendar-day">27</button><button class="twants-calendar-day">28</button><button class="twants-calendar-day">29</button><button class="twants-calendar-day">30</button>
      <button class="twants-calendar-day" data-outside="true" style="opacity:0.4">1</button>
    </div>
  </div>
</div>`}
>
  <div style={{position:'relative',display:'inline-block'}}>
    <div className="twants-date-picker" style={{maxWidth:'16rem'}}>
      <input className="twants-input" type="text" defaultValue="Sep 20, 2026" readOnly />
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" style={{color:'var(--twants-foreground-muted)'}}><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
    </div>
    <div className="twants-calendar" style={{position:'absolute',top:'calc(100% + 4px)',left:0,zIndex:'var(--twants-z-dropdown)',boxShadow:'var(--twants-shadow-lg)',background:'var(--twants-surface)',border:'1px solid var(--twants-border)',borderRadius:'var(--twants-radius-md)',padding:'0.75rem'}}>
      <div className="twants-calendar-header">
        <button className="twants-button twants-button-icon twants-button-ghost twants-button-sm">←</button>
        <div className="twants-calendar-title">September 2026</div>
        <button className="twants-button twants-button-icon twants-button-ghost twants-button-sm">→</button>
      </div>
      <div className="twants-calendar-grid">
        <div className="twants-calendar-weekday">Su</div><div className="twants-calendar-weekday">Mo</div><div className="twants-calendar-weekday">Tu</div><div className="twants-calendar-weekday">We</div><div className="twants-calendar-weekday">Th</div><div className="twants-calendar-weekday">Fr</div><div className="twants-calendar-weekday">Sa</div>
        <button className="twants-calendar-day" data-outside="true" style={{opacity:0.4}}>30</button>
        <button className="twants-calendar-day">1</button><button className="twants-calendar-day">2</button><button className="twants-calendar-day">3</button><button className="twants-calendar-day">4</button><button className="twants-calendar-day">5</button><button className="twants-calendar-day">6</button>
        <button className="twants-calendar-day">7</button><button className="twants-calendar-day">8</button><button className="twants-calendar-day">9</button><button className="twants-calendar-day">10</button><button className="twants-calendar-day">11</button><button className="twants-calendar-day">12</button><button className="twants-calendar-day">13</button>
        <button className="twants-calendar-day">14</button><button className="twants-calendar-day">15</button><button className="twants-calendar-day">16</button><button className="twants-calendar-day">17</button><button className="twants-calendar-day">18</button><button className="twants-calendar-day">19</button>
        <button className="twants-calendar-day" aria-current="date" style={{background:'var(--twants-primary)',color:'white',borderRadius:'var(--twants-radius-sm)'}}>20</button>
        <button className="twants-calendar-day">21</button><button className="twants-calendar-day">22</button><button className="twants-calendar-day">23</button><button className="twants-calendar-day">24</button><button className="twants-calendar-day">25</button><button className="twants-calendar-day">26</button>
        <button className="twants-calendar-day">27</button><button className="twants-calendar-day">28</button><button className="twants-calendar-day">29</button><button className="twants-calendar-day">30</button>
        <button className="twants-calendar-day" data-outside="true" style={{opacity:0.4}}>1</button>
      </div>
    </div>
  </div>
</Preview>

## Date Range

<Preview
  code={`<div style="display:flex;gap:0.5rem;max-width:24rem">
  <div class="twants-date-picker" style="flex:1">
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--twants-foreground-muted)"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
    <input class="twants-input" type="text" placeholder="Start date..." readOnly />
  </div>
  <span style="display:flex;align-items:center;color:var(--twants-foreground-muted)">—</span>
  <div class="twants-date-picker" style="flex:1">
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--twants-foreground-muted)"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
    <input class="twants-input" type="text" placeholder="End date..." readOnly />
  </div>
</div>`}
>
  <div style={{display:'flex',gap:'0.5rem',maxWidth:'24rem'}}>
    <div className="twants-date-picker" style={{flex:1}}>
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" style={{color:'var(--twants-foreground-muted)'}}><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
      <input className="twants-input" type="text" placeholder="Start date..." readOnly />
    </div>
    <span style={{display:'flex',alignItems:'center',color:'var(--twants-foreground-muted)'}}>—</span>
    <div className="twants-date-picker" style={{flex:1}}>
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" style={{color:'var(--twants-foreground-muted)'}}><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
      <input className="twants-input" type="text" placeholder="End date..." readOnly />
    </div>
  </div>
</Preview>

## JS Usage

```typescript
import { DatePicker } from "twants";

DatePicker.init(inputElement, {
  format: "MMM DD, YYYY",
  placeholder: "Select date...",
  minDate: new Date("2026-01-01"),
  maxDate: new Date("2026-12-31"),
  onSelect: (date) => console.log("Selected:", date),
});
```

## Props

<PropsTable
  rows={[
    { name: "format", type: "string", default: "'MMM DD, YYYY'", description: "Date display format." },
    { name: "placeholder", type: "string", default: "'Select date...'", description: "Input placeholder." },
    { name: "minDate", type: "Date", default: "—", description: "Minimum selectable date." },
    { name: "maxDate", type: "Date", default: "—", description: "Maximum selectable date." },
    { name: "disabled", type: "boolean", default: "false", description: "Disables the date picker." },
    { name: "onSelect", type: "(date: Date) => void", default: "—", description: "Called when a date is selected." },
  ]}
/>

## Accessibility

- The input should have `aria-label` or be paired with a visible label.
- Calendar navigation should use arrow keys.
- Today should have `aria-current="date"`.
- Selected date should be announced with `aria-live="polite"`.
