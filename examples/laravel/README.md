# Laravel + Blade + Vite + TWANTS

## 1. Install

```bash
composer create-project laravel/laravel my-app
cd my-app
npm install twants

2. Import styles

@import "tailwindcss";
@import "twants/styles";

3. Add a Blade layout

```
<!doctype html>
<html lang="en" data-theme="light">
  <head>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
  </head>
  <body class="twants-mica" style="min-height:100vh">
    <div class="twants-app-frame">
      <div class="twants-title-bar">
        <span class="twants-title-bar-title">{{ config('app.name') }}</span>
      </div>
      <main class="twants-container" style="padding-block:2rem">
        @yield('content')
      </main>
      <div class="twants-status-bar"><span class="twants-status-bar-item">Ready</span></div>
    </div>
  </body>
</html>
```

4. Use components in Blade

```
@extends('layouts.app')
@section('content')
  <h1 style="font-size:var(--twants-text-2xl)">Dashboard</h1>
  <button class="twants-button twants-button-primary">Save changes</button>
@endsection
```

5. Theme switching

```
// resources/js/app.js
import 'twants/styles'
import { ThemeSwitcher } from 'twants'
ThemeSwitcher.init()