<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Prime Tint UI Conventions

- Reuse existing components before adding new markup or primitives.
- Keep component directories and component files kebab-case, for example `components/site-header/site-header.tsx`.
- Use named, typed arrow-function component exports, for example `export const SiteHeader = () => { ... };`.
- Keep Next.js App Router entry filenames framework-native (`page.tsx`, `layout.tsx`) and use arrow functions with a separate default export.
- Follow the established visual system: white primary canvas, black contrast surfaces, saffron for primary actions, restrained glass treatments only for informational surfaces, and consistent rounded image frames.
