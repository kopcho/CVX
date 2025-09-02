# Netlify Manual Upload (Static Export)

If you just want to drag-and-drop a folder into Netlify (no Git), do this:

```bash
npm install
npm run build
npm run export
```
This creates an **out/** folder with static HTML.

Now go to Netlify → **Add new site → Deploy manually** → drag & drop the **out/** folder.

Notes:
- We set `output: 'export'` in `next.config.mjs` so Next.js emits static HTML.
- We added favicon links in the layout, and images are set to `unoptimized` for export.
- Any new pages you add will be exported as long as they don’t rely on server-side rendering.