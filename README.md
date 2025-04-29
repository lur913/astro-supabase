# Astro Supabase

build an SSR application with Supabase.

Install the related npm packages.

```sh
# init project
pnpm create astro@latest

# integrate vercel adapter
pnpm astro add vercel
# Or
pnpm add @astrojs/vercel

# integrate supabase sdk
pnpm add @supabase/supabase-js

# integrate tailwindcss
pnpm astro add tailwind
# Or
pnpm add tailwindcss @tailwindcss/vite

```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |
