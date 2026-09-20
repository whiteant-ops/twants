# Django Templates + Vite + TWANTS

## 1. Install

```bash
pip install django
django-admin startproject mysite
cd mysite
npm install twants
```

## 2. Configure Vite

vite.config.js:

```js
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({ plugins: [tailwindcss()] });
```
### 3. Template

templates/base.html:

```html
{% load static %}
<!doctype html>
<html lang="en" data-theme="light">
<head>
  <meta charset="utf-8" />
  {% block head %}{% endblock %}
</head>
<body class="twants-mica" style="min-height:100vh">
  {% block content %}{% endblock %}
</body>
</html>
```

### 4. Include styles + theme
```html
<link rel="stylesheet" href="/static/twants/styles.css" />
<script type="module">
  import "{% static 'js/main.js' %}";
</script>