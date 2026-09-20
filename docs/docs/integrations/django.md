---
title: Django
---

# Django

Build or copy the TWANTS stylesheet into your static assets, load it in the base template, and use the semantic classes in Django templates.

```html
{% load static %}
<link rel="stylesheet" href="{% static 'twants/styles.css' %}">
<button class="twants-button twants-button-primary">Save</button>
```
