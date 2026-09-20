---
title: Calendar
---

# Calendar

Calendars display a grid of days for date selection.

## Basic

<Preview
  code={`<div class="twants-calendar">
  <div class="twants-calendar-header">
    <button class="twants-button twants-button-icon twants-button-ghost twants-button-sm">←</button>
    <div class="twants-calendar-title">September 2026</div>
    <button class="twants-button twants-button-icon twants-button-ghost twants-button-sm">→</button>
  </div>
  <div class="twants-calendar-grid">
    <div class="twants-calendar-weekday">Su</div>
    <div class="twants-calendar-weekday">Mo</div>
    <div class="twants-calendar-weekday">Tu</div>
    <div class="twants-calendar-weekday">We</div>
    <div class="twants-calendar-weekday">Th</div>
    <div class="twants-calendar-weekday">Fr</div>
    <div class="twants-calendar-weekday">Sa</div>
    <button class="twants-calendar-day" data-outside="true" style="opacity:0.4">30</button>
    <button class="twants-calendar-day" data-outside="true" style="opacity:0.4">31</button>
    <button class="twants-calendar-day">1</button>
    <button class="twants-calendar-day">2</button>
    <button class="twants-calendar-day">3</button>
    <button class="twants-calendar-day">4</button>
    <button class="twants-calendar-day">5</button>
    <button class="twants-calendar-day">6</button>
    <button class="twants-calendar-day">7</button>
    <button class="twants-calendar-day">8</button>
    <button class="twants-calendar-day">9</button>
    <button class="twants-calendar-day" aria-current="date" style="background:var(--twants-primary);color:white;border-radius:var(--twants-radius-sm)">20</button>
    <button class="twants-calendar-day">21</button>
    <button class="twants-calendar-day">22</button>
    <button class="twants-calendar-day">23</button>
    <button class="twants-calendar-day">24</button>
    <button class="twants-calendar-day">25</button>
    <button class="twants-calendar-day">26</button>
    <button class="twants-calendar-day">27</button>
    <button class="twants-calendar-day">28</button>
    <button class="twants-calendar-day">29</button>
    <button class="twants-calendar-day">30</button>
    <button class="twants-calendar-day" data-outside="true" style="opacity:0.4">1</button>
  </div>
</div>`}
>
  <div className="twants-calendar">
    <div className="twants-calendar-header">
      <button className="twants-button twants-button-icon twants-button-ghost twants-button-sm">←</button>
      <div className="twants-calendar-title">September 2026</div>
      <button className="twants-button twants-button-icon twants-button-ghost twants-button-sm">→</button>
    </div>
    <div className="twants-calendar-grid">
      <div className="twants-calendar-weekday">Su</div>
      <div className="twants-calendar-weekday">Mo</div>
      <div className="twants-calendar-weekday">Tu</div>
      <div className="twants-calendar-weekday">We</div>
      <div className="twants-calendar-weekday">Th</div>
      <div className="twants-calendar-weekday">Fr</div>
      <div className="twants-calendar-weekday">Sa</div>
      <button className="twants-calendar-day" data-outside="true" style={{opacity:0.4}}>30</button>
      <button className="twants-calendar-day" data-outside="true" style={{opacity:0.4}}>31</button>
      <button className="twants-calendar-day">1</button>
      <button className="twants-calendar-day">2</button>
      <button className="twants-calendar-day">3</button>
      <button className="twants-calendar-day">4</button>
      <button className="twants-calendar-day">5</button>
      <button className="twants-calendar-day">6</button>
      <button className="twants-calendar-day">7</button>
      <button className="twants-calendar-day">8</button>
      <button className="twants-calendar-day">9</button>
      <button className="twants-calendar-day" aria-current="date" style={{background:'var(--twants-primary)',color:'white',borderRadius:'var(--twants-radius-sm)'}}>20</button>
      <button className="twants-calendar-day">21</button>
      <button className="twants-calendar-day">22</button>
      <button className="twants-calendar-day">23</button>
      <button className="twants-calendar-day">24</button>
      <button className="twants-calendar-day">25</button>
      <button className="twants-calendar-day">26</button>
      <button className="twants-calendar-day">27</button>
      <button className="twants-calendar-day">28</button>
      <button className="twants-calendar-day">29</button>
      <button className="twants-calendar-day">30</button>
      <button className="twants-calendar-day" data-outside="true" style={{opacity:0.4}}>1</button>
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

- Use `aria-current="date"` on today's date.
- Days outside the current month should have `data-outside="true"`.
- Arrow keys navigate between days, Enter/Space selects.
- Use `aria-label` on each day (e.g., "September 20, 2026").
