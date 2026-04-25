# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio / CV single-page site for Daniel Ceballos, deployed to GitHub Pages at `sepanyol.github.io`. Content (bio, stack, experience timeline) lives inline in `src/App.tsx` — there is no CMS, router, or data layer.

## Commands

- `npm run dev` — Vite dev server
- `npm run build` — type-check (`tsc -b`) then production build to `dist/`
- `npm run lint` — ESLint over the repo
- `npm run preview` — serve the built `dist/` locally

There is no test runner configured.

## Stack and conventions

- **React 19** + **Vite 6** + **TypeScript ~5.8** (strict, plus `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`, `verbatimModuleSyntax`). Use `import type { ... }` for type-only imports — the build will fail otherwise.
- **Tailwind CSS v4** via `@tailwindcss/vite` (no `tailwind.config.js`; configuration is inline in `src/index.css` via `@import "tailwindcss"` and `@plugin "daisyui"`).
- **daisyUI v5** with the `emerald` theme as default. The theme is also pinned in `index.html` via `data-theme="emerald"`. Many class names in `App.tsx` (`avatar`, `timeline`, `card`, `card-body`) are daisyUI utilities, not raw Tailwind.
- **Icons**: `react-icons` (`fa`, `fa6`, `md` packs).
- **Fonts**: `@fontsource-variable/ubuntu-sans` imported once in `src/main.tsx`; `font-family` set in `src/index.css`.

## Build pipeline detail

`tsconfig.json` uses project references (`tsconfig.app.json` for `src/`, `tsconfig.node.json` for Vite config). `npm run build` runs `tsc -b` first, so type errors anywhere in the graph block the Vite build. `tsc` is configured with `noEmit: true` — it only type-checks; Vite produces the bundle.

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) builds and publishes `dist/` to GitHub Pages on **every push to any branch**. There is no preview environment and no test step in CI — a broken main pushes straight to production. Treat the build green bar as the deploy gate.

## Content edits

The bio, primary-stack section, and experience timeline are hand-written JSX in `src/App.tsx`. When editing copy, preserve the timeline alternating layout (`timeline-start` ↔ `timeline-end` per `<li>`) so entries continue to alternate sides on desktop.

The email address is base64-encoded as the `EMAIL` constant in `src/App.tsx` and decoded with `window.atob` only on click (anti-scrape). Don't inline it as plain text.
