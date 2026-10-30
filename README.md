# CI/CD Deployment Lab

A small static application with a GitHub Actions pipeline that builds and tests every pull request, then deploys pushes to `main` to GitHub Pages.

## Run locally

Requires Node.js 20 or newer. No packages need to be installed.

```sh
npm run build
npm test
```

The generated site is in `dist/`. To preview it locally, serve that directory with any static file server.

## Enable deployment

1. Push this repository to GitHub.
2. In the repository, open **Settings > Pages** and set the source to **GitHub Actions**.
3. Push or merge a change to `main`. The **CI/CD** workflow will build and test the site, then publish it. Its deployment URL appears in the workflow run and in **Settings > Pages**.

Pull requests run the build and tests but do not deploy. The first deployment requires the one-time Pages setting above; the workflow cannot change repository settings on your behalf.
