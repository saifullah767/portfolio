# portfolio-design

[Portfolio](https://saifullah767.github.io/portfolio/)

## React migration (Vite + React JS)

The project now uses a simple Vite + React setup while preserving the existing
portfolio layout and behavior from `index.html` using the same `assets/` files.

## Manual commands (run by you)

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Build and preview:

```bash
npm run build
npm run preview
```

## Notes

- Main app entry: `src/main.jsx`
- Page shell and legacy script loader: `src/App.jsx`
- Legacy page markup source: `src/legacy/portfolio-body.html`
- Existing static files remain under `assets/`
