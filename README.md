# CVX — Convex Website

Marketing site for Convex. Static export ready for Netlify.
Built 2025-09-02.

## Local
```
npm install
npm run dev
```

## Build export
```
npm run build
npm run export
```
Upload the `out/` folder in Netlify Deploys.

## Netlify from Git
- Build command: `npm run build && npm run export`
- Publish directory: `out`
- Env: `NODE_VERSION=20` (optional)
