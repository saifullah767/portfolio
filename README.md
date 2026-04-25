# portfolio-design

[Portfolio](https://saifullah767.github.io/portfolio/)

## Run locally with npm

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

Vite serves `index.html` from project root and uses your existing `assets/` folder.

## Optional production build (Vite)

```bash
npm run build
npm run preview
```

## Cloudflare Pages Deploy (index.html only)

This project is configured to deploy only `index.html` as the live entry page, plus `assets/`.

### Build command

```bash
bash scripts/cloudflare-build.sh
```

### Deploy command (manual CLI)

```bash
npm run deploy:pages
```

### Build output directory

```text
public
```

### What gets deployed

- `public/index.html`
- `public/assets/**`

No other root HTML files are included in the deploy output.
