# Contributing to TWANTS

Thanks for wanting to contribute! TWANTS aims to stay framework-agnostic,
dependency-free in the CSS layer, and easy to fork.

## Getting started

```bash
git clone https://github.com/twants/twants.git
cd twants
npm install
npm run dev
```

Open `/demo/` to preview components.

## Adding a component

1. Add styles to `src/styles/components.css` inside the `@layer components` block.
2. Prefix every class with `twants-`.
3. Use **only** semantic CSS variables (`--twants-surface`, `--twants-primary`, …) — never hard-coded colors.
4. If the component needs behavior, add a small class under `src/components/<name>/index.ts` and export it from `src/components/index.ts`.
5. Document it under `docs/` and add a live preview to `demo/index.html`.

## Design principles

- Fluent / WinUI-inspired: Mica, Acrylic, layered surfaces, compact density, subtle motion.
- Accessible by default: semantic HTML, ARIA, keyboard operability, visible focus.
- No arbitrary rounded cards, no gradient soup, no excessive blur.

## Commit style

Conventional Commits: `feat(button): add loading variant`, `fix(modal): trap focus on open`.

## Pull requests

- Keep PRs scoped to a single component or concern.
- Include a screenshot or a short clip for visual changes.
- Update `CHANGELOG.md` under `Unreleased`.

## Code of Conduct

By participating you agree to the [Code of Conduct](./CODE_OF_CONDUCT.md).