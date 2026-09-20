---
title: Empty
---

# Empty

Empty states communicate that there is no data to display, with a title, description, and optional action.

## Basic

<Preview
  code={`<div class="twants-empty">
  <div class="twants-empty-icon">📭</div>
  <div class="twants-empty-title">No messages</div>
  <div class="twants-empty-description">You don't have any messages yet. Start a conversation to see them here.</div>
</div>`}
>
  <div className="twants-empty">
    <div className="twants-empty-icon">📭</div>
    <div className="twants-empty-title">No messages</div>
    <div className="twants-empty-description">You don't have any messages yet. Start a conversation to see them here.</div>
  </div>
</Preview>

## With Action

<Preview
  code={`<div class="twants-empty">
  <div class="twants-empty-icon">📋</div>
  <div class="twants-empty-title">No projects</div>
  <div class="twants-empty-description">Create your first project to get started.</div>
  <button class="twants-button twants-button-primary" style="margin-top:0.5rem">Create project</button>
</div>`}
>
  <div className="twants-empty">
    <div className="twants-empty-icon">📋</div>
    <div className="twants-empty-title">No projects</div>
    <div className="twants-empty-description">Create your first project to get started.</div>
    <button className="twants-button twants-button-primary" style={{marginTop:'0.5rem'}}>Create project</button>
  </div>
</Preview>

## Search No Results

<Preview
  code={`<div class="twants-empty">
  <div class="twants-empty-icon">🔍</div>
  <div class="twants-empty-title">No results found</div>
  <div class="twants-empty-description">Try adjusting your search terms or filters.</div>
</div>`}
>
  <div className="twants-empty">
    <div className="twants-empty-icon">🔍</div>
    <div className="twants-empty-title">No results found</div>
    <div className="twants-empty-description">Try adjusting your search terms or filters.</div>
  </div>
</Preview>

## Error State

<Preview
  code={`<div class="twants-empty">
  <div class="twants-empty-icon" style="background:var(--twants-danger-subtle);color:var(--twants-danger)">⚠️</div>
  <div class="twants-empty-title">Something went wrong</div>
  <div class="twants-empty-description">We couldn't load your data. Please try again.</div>
  <button class="twants-button twants-button-outline" style="margin-top:0.5rem">Retry</button>
</div>`}
>
  <div className="twants-empty">
    <div className="twants-empty-icon" style={{background:'var(--twants-danger-subtle)',color:'var(--twants-danger)'}}>⚠️</div>
    <div className="twants-empty-title">Something went wrong</div>
    <div className="twants-empty-description">We couldn't load your data. Please try again.</div>
    <button className="twants-button twants-button-outline" style={{marginTop:'0.5rem'}}>Retry</button>
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Additional CSS classes." },
  ]}
/>

## Accessibility

- Use semantic HTML inside empty states — headings for title, paragraphs for description.
- Add `role="status"` if the empty state replaces loaded content.
- Ensure action buttons have clear, descriptive labels.
