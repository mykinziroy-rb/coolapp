# RedStride AI Landing App

Static web app for the RedStride AI institutional assessment and curriculum builder.

## What is included

- branded landing page using the provided RedStride palette
- institutional assessment form
- locked curriculum builder that unlocks after form completion
- live pricing sidebar
- roadmap modal with project timeline visualization
- browser `localStorage` persistence for the saved assessment

## Local preview

Because this repo currently has no Node.js toolchain installed, this version is built as a simple static site.

You can preview it by opening `index.html` in a browser, or by serving the folder with any static server.

## Deploy on GitHub Pages

This repo includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.

1. Create a GitHub repository.
2. Push this project to the `main` branch.
3. In GitHub, open `Settings > Pages`.
4. Under `Build and deployment`, choose `GitHub Actions`.
5. Push again if needed, or run the workflow manually from the `Actions` tab.
6. GitHub will publish the site and give you a Pages URL.

## Future upgrade path

If you want login, saved submissions, or admin dashboards, the next step is to migrate this into:

- `Next.js`
- `Supabase Auth`
- `Supabase Postgres`
- `Vercel`

That would give us real authentication, a backend data store, protected routes, and a more scalable deployment setup.
