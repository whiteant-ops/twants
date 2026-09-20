---
title: Quick start
---

# Quick start

Add a semantic TWANTS class to any HTML element:

```html
<button class="twants-button twants-button-primary">Save changes</button>
```

Theme switching is optional:

```ts
import { ThemeSwitcher } from "twants";

ThemeSwitcher.init();
ThemeSwitcher.set("dark");
```

The same markup can be used in server-rendered templates and frontend applications.
