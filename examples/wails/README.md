# Wails + Vite + TWANTS

```bash
wails init -n myapp -t vanilla
cd myapp/frontend
npm install twants
```

`frontend/src/main.js`:

```js
import "twants/styles";
import { ThemeSwitcher } from "twants";
ThemeSwitcher.init();
```

`frontend/index.html` uses the desktop frame:

```html
<body class="twants-mica" style="margin:0">
  <div class="twants-app-frame">
    <div class="twants-title-bar" style="--wails-draggable:drag">
      <span class="twants-title-bar-title">Wails App</span>
    </div>
    <main class="twants-container" style="padding:1rem"></main>
  </div>
</body>
```