# ACN Bank

ACN Bank marketing homepage with AI Daily Banking Assistant powered by Google Chat Messenger SDK.

## Stack

- React 18 + Vite
- Google Chat Messenger SDK v1.16
- Accenture colour scheme — `#A100FF` purple + black + white

## Getting started

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000`

## Environment

Create a `.env` file in the root (already included, do not commit):

```
VITE_DEPLOYMENT_NAME=projects/483471568825/locations/us/apps/.../deployments/...
```

## Structure

```
src/
  components/
    Navbar.jsx          — sticky top navigation
    PromoBanner.jsx     — dismissible promo bar
    Hero.jsx            — hero section with AI feature card
    Products.jsx        — product grid (chequing, savings, mortgage etc.)
    AIStrip.jsx         — AI assistant promotional strip
    ChatWidget.jsx      — Google Chat Messenger SDK integration + FAB
  styles/
    global.css          — design tokens, base styles, SDK theming
  main.jsx
  App.jsx
```

## Deploying

```bash
npm run build
```

Output goes to `/dist` — deploy to any static host (Vercel, Netlify, GitHub Pages).

For Vercel, just connect the repo and it auto-detects Vite.
