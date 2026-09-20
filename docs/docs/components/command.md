---
title: Command
---

# Command

Command (or command palette) provides a searchable list of actions, navigation, or data.

## Basic

<Preview
  code={`<div class="twants-command" style="max-width:28rem">
  <div class="twants-command-input-wrapper">
    <svg class="twants-command-search-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
    <input class="twants-command-input" placeholder="Type a command or search..." />
  </div>
  <div class="twants-command-list">
    <div class="twants-command-group">
      <div class="twants-command-group-heading">Suggestions</div>
      <button class="twants-command-item">
        <span class="twants-command-item-icon">📄</span>
        <span class="twants-command-item-text">Calendar</span>
      </button>
      <button class="twants-command-item">
        <span class="twants-command-item-icon">😊</span>
        <span class="twants-command-item-text">Search Emoji</span>
      </button>
      <button class="twants-command-item">
        <span class="twants-command-item-icon">🔢</span>
        <span class="twants-command-item-text">Calculator</span>
      </button>
    </div>
    <div class="twants-command-separator"></div>
    <div class="twants-command-group">
      <div class="twants-command-group-heading">Settings</div>
      <button class="twants-command-item">
        <span class="twants-command-item-icon">👤</span>
        <span class="twants-command-item-text">Profile</span>
        <span class="twants-command-item-shortcut">⌘P</span>
      </button>
      <button class="twants-command-item">
        <span class="twants-command-item-icon">⚙️</span>
        <span class="twants-command-item-text">Settings</span>
        <span class="twants-command-item-shortcut">⌘S</span>
      </button>
    </div>
  </div>
</div>`}
>
  <div className="twants-command" style={{maxWidth:'28rem'}}>
    <div className="twants-command-input-wrapper">
      <svg className="twants-command-search-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      <input className="twants-command-input" placeholder="Type a command or search..." />
    </div>
    <div className="twants-command-list">
      <div className="twants-command-group">
        <div className="twants-command-group-heading">Suggestions</div>
        <button className="twants-command-item">
          <span className="twants-command-item-icon">📄</span>
          <span className="twants-command-item-text">Calendar</span>
        </button>
        <button className="twants-command-item">
          <span className="twants-command-item-icon">😊</span>
          <span className="twants-command-item-text">Search Emoji</span>
        </button>
        <button className="twants-command-item">
          <span className="twants-command-item-icon">🔢</span>
          <span className="twants-command-item-text">Calculator</span>
        </button>
      </div>
      <div className="twants-command-separator"></div>
      <div className="twants-command-group">
        <div className="twants-command-group-heading">Settings</div>
        <button className="twants-command-item">
          <span className="twants-command-item-icon">👤</span>
          <span className="twants-command-item-text">Profile</span>
          <span className="twants-command-item-shortcut">⌘P</span>
        </button>
        <button className="twants-command-item">
          <span className="twants-command-item-icon">⚙️</span>
          <span className="twants-command-item-text">Settings</span>
          <span className="twants-command-item-shortcut">⌘S</span>
        </button>
      </div>
    </div>
  </div>
</Preview>

## JS Usage

```typescript
import { CommandPalette } from "twants";

CommandPalette.init({
  items: [
    { id: "profile", label: "Profile", icon: "👤", shortcut: "⌘P", action: () => goToProfile() },
    { id: "settings", label: "Settings", icon: "⚙️", shortcut: "⌘S", action: () => goToSettings() },
  ],
});

// Open programmatically
CommandPalette.open();

// Close
CommandPalette.close();
```

## Props

<PropsTable
  rows={[
    { name: "items", type: "CommandItem[]", default: "—", description: "Array of items with id, label, icon, shortcut, action." },
    { name: "placeholder", type: "string", default: "'Type a command...'", description: "Search input placeholder." },
    { name: "groups", type: "CommandGroup[]", default: "—", description: "Group items by category with headings." },
  ]}
/>

## Accessibility

- Use `role="dialog"` and `aria-modal="true"` on the command palette.
- Search input should have `aria-label="Search commands"`.
- Arrow keys navigate between items, Enter activates the selected item.
- Escape closes the palette.
- Use `role="option"` and `aria-selected` on each item.
