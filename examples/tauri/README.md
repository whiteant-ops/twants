# Tauri + Vite + TWANTS

```bash
npm create tauri-app@latest
cd my-app
npm install twants
```

`src/main.ts`:

```ts
import "twants/styles";
import { ThemeSwitcher } from "twants";
ThemeSwitcher.init();
```

`src/index.html` wraps your app in a desktop-style frame:

```html
<body class="twants-mica" style="margin:0">
  <div class="twants-app-frame">
    <div class="twants-title-bar" data-tauri-drag-region>
      <span class="twants-title-bar-title">My Tauri App</span>
      <div class="twants-title-bar-controls">
        <button class="twants-title-bar-btn" onclick="window.__TAURI__.window.getCurrent().minimize()">–</button>
        <button class="twants-title-bar-btn" onclick="window.__TAURI__.window.getCurrent().toggleMaximize()">□</button>
        <button class="twants-title-bar-btn twants-title-bar-btn-close" onclick="window.__TAURI__.window.getCurrent().close()">×</button>
      </div>
    </div>
    <main class="twants-container" style="padding:1rem"></main>
  </div>
</body>
```