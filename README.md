# TheFalseCreator.com

A free-first, static website starter for a philosophical and experimental digital world.

## Stack
- Astro + TypeScript
- Three.js for a procedural, real-time architectural scene
- GitHub Pages for static hosting
- No paid libraries or runtime services required

## Local development
Install Node.js LTS, then run:

```bash
npm install
npm run dev
```

Open the local URL printed by Astro.

Check the production build:

```bash
npm run build
npm run preview
```

The static site is generated in `dist/`.

## GitHub Pages deployment

1. Push the repository to GitHub.
2. In repository Settings → Pages, choose **GitHub Actions** as the build/deployment source.
3. Add a workflow that installs dependencies, runs `npm run build`, and uploads/deploys `dist/`.
4. Keep `public/CNAME` containing `thefalsecreator.com`.
5. In Astro config, `site` should remain `https://thefalsecreator.com`. Since this is a root custom domain, no `base` path is required.
6. Preserve the existing custom domain and HTTPS settings.

A workflow file is not included in this starter yet, so Pages will not automatically build this Astro project until the workflow is added.

## Page architecture

The starter demonstrates reusable layouts and content areas. Add more routes under `src/pages/`, for example:
- `src/pages/the-false-creator.astro`
- `src/pages/paradoxes/index.astro`
- `src/pages/essays/index.astro`
- `src/pages/ai-experiments/index.astro`
- `src/pages/3d-archive/index.astro`
- `src/pages/code-and-systems/index.astro`
- `src/pages/notes/index.astro`
- `src/pages/projects/[slug].astro` (dynamic routes need static paths/content configuration)

## Notes
- The central Three.js scene is generated from simple geometry; no paid 3D assets are used.
- Test on a real mobile device and check WebGL performance before expanding the scene.
- This is a starter implementation, not a fully populated 16-page launch.
- Do not commit secrets, API keys, or private credentials.
