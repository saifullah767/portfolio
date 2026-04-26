## React Migration Plan (Simple V1, Manual Commands by You)

### Summary
Convert only `index.html` into a Vite + React (JavaScript) single-page app while preserving the current design and behavior by reusing existing `assets/` files and legacy plugins first.  
Implementation will avoid refactoring effects/sliders now; we will stabilize the React structure first, then modernize plugins in a later phase.

### Implementation Changes
1. Project bootstrap (no scaffold overwrite):
- Add React/Vite setup files in-place (`package.json`, `vite.config.js`, `index.html`, `src/main.jsx`, `src/App.jsx`).
- Keep current `assets/` directory as the source of CSS, JS vendor files, images, and resume.

2. Move current page into React structure:
- Rebuild the current `index.html` body inside `App.jsx` as JSX sections:
  - Header + mobile menu
  - Home/Hero
  - Resume
  - Portfolio
  - Testimonial/Experience sections
  - Footer
- Preserve existing class names so current CSS keeps working.
- Normalize duplicate IDs (currently multiple `id="footer"`) to unique IDs to avoid scroll/plugin conflicts.

3. Legacy plugin compatibility (keep-first strategy):
- Keep vendor CSS links in root `index.html` (same files under `/assets/css/...`).
- In `App.jsx` `useEffect`, load legacy JS in strict order so existing behavior remains:
  1. `/assets/js/vendor/jquery.js`
  2. other vendor scripts used by page
  3. `/assets/js/main.js`
- Ensure cleanup logic prevents duplicate script injection during HMR/dev reload.

4. Routing/scope for V1:
- No React Router in this phase.
- Keep single-page anchors (`#home`, `#resume`, `#portfolio`) as-is.

5. Non-goals for this phase:
- No content rewrite, no visual redesign, no plugin replacement, no Cloudflare/GitHub deployment setup yet.
- Leave `index-developer*.html`, `modal.html`, `DBA-portfolio.html` untouched.

### Public Interfaces / Contract Changes
- Dev workflow changes from static HTML to npm scripts:
  - `npm run dev`
  - `npm run build`
  - `npm run preview`
- Entry point changes from static root HTML document body to React mount (`#root`).
- Asset URLs become root-absolute (`/assets/...`) in JSX to work in Vite dev/build.

### Manual Command Checklist (You run all commands)
1. `npm init -y`
2. `npm install react react-dom`
3. `npm install -D vite @vitejs/plugin-react`
4. Add npm scripts in `package.json`:
   - `"dev": "vite"`
   - `"build": "vite build"`
   - `"preview": "vite preview"`
5. `npm run dev`
6. `npm run build`
7. `npm run preview`

### Test Plan
1. Smoke tests:
- App starts with `npm run dev` and renders full portfolio page.
- All major sections visible and styled (hero, resume, portfolio, footer).

2. Behavior parity checks:
- Mobile menu open/close works.
- Smooth-scroll nav links work.
- Slick portfolio slider initializes and responds.
- AOS/feather icons initialize correctly.
- Back-to-top button works.

3. Build checks:
- `npm run build` succeeds with no missing asset errors.
- `npm run preview` serves equivalent output.

### Assumptions and Defaults
- Scope is only `index.html` migration (confirmed).
- Stack is Vite + React + JavaScript (confirmed).
- Legacy plugins are intentionally retained for V1 (confirmed).
- Deployment is local-first only for now (confirmed).
- You will run all terminal commands manually (added explicitly).
