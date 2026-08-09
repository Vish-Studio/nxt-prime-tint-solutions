# Prime Tint Solutions

Static Next.js website for Prime Tint Solutions, built with the App Router and prepared for GitHub Pages.

## Local development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Production export

```bash
npm run lint
npm run build
```

The static site is exported to `out/`. GitHub Pages does not support the Next.js image optimization server, so the project is configured to export images without optimization.

## GitHub Pages deployment

The deployment workflow is at `.github/workflows/deploy-pages.yml` and runs when changes are pushed to the `prod` branch.

In GitHub:

1. Open the repository **Settings**.
2. Go to **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push this configuration to `prod`, or run **Deploy to GitHub Pages** manually from the **Actions** tab.
5. After the workflow completes, GitHub shows the published Pages URL in the deployment summary.

The workflow uses GitHub's configured Pages base path during the build, so it works for a project site such as `https://vish-studio.github.io/nxt-prime-tint-solutions/` without hardcoding the repository name. If the deployment branch changes, update `branches: [prod]` in the workflow.
