## React Componentization Plan for `portfolio-body.html`

### Summary
Convert the current legacy HTML-injection page into a phased React architecture, preserving current UX while replacing plugin-driven behavior with React state and component logic.  
Target section structure: `Layout`, `About` (split from hero intro), `MyDetails`, `Projects`, `Testimonials`, `Certifications`, `Footer`.

### Implementation Changes
1. **Create a new page composition under `src/components/portfolio/`**
   - `PortfolioPage` (top-level composition).
   - `Layout` (header, mobile menu, main wrapper, back-to-top container, shared nav anchors).
   - Section components: `About`, `MyDetails`, `Projects`, `Testimonials`, `Certifications`, `Footer`.
   - Keep existing CSS classes initially to avoid visual regressions.

2. **Replace legacy global-script behaviors with React equivalents**
   - Header/mobile menu open-close: React state + class toggles.
   - My Details tabs: controlled tab state (`education`, `professional`, `experience`) instead of Bootstrap tab JS.
   - Projects carousel: React-friendly carousel implementation (or horizontal scroll fallback) without jQuery Slick.
   - Scroll animations/icons: initialize via React-friendly approach; remove direct runtime dependence on jQuery plugins where possible.
   - Remove `dangerouslySetInnerHTML` from `App.jsx` after section parity is complete.

3. **Move repeated content into a central data layer**
   - Add `src/data/portfolioData.js` with arrays/objects for:
     - nav items
     - education/experience entries
     - design/dev skills
     - projects
     - testimonials
     - certifications
     - footer link groups/social links
   - Components render via `.map()` from this data source.

4. **Phased migration sequence (safe incremental)**
   - Phase 1: Add `PortfolioPage` + `Layout` + `About` and wire into `App.jsx` while temporarily keeping legacy scripts if still needed.
   - Phase 2: Migrate `MyDetails` (tabs + skills + experience).
   - Phase 3: Migrate `Projects` + `Testimonials` + `Certifications`.
   - Phase 4: Migrate `Footer`, remove legacy HTML import and script loader, and clean unused assets/hooks.
   - Phase 5: final pass for anchor navigation, accessibility, and responsive parity.

### Public Interfaces / Types
- `portfolioData` shape (stable contract for sections):
  - `navItems: {label, href}[]`
  - `about: {name, title, bio, email, role, cta[], socialLinks[]}`
  - `details: {education[], skills: {design[], development[]}, experience[]}`
  - `projects: {title, category, image, url, status?}[]`
  - `testimonials: {name, role, source, title, text, image}[]`
  - `certifications: {title, issuer, subtitle, image, credentialUrl}[]`
  - `footer: {logo, socialLinks[], groups: {title, links[]}[]}`
- Section component props should consume these typed slices directly (PropTypes or TS interfaces if you decide to upgrade later).

### Test Plan
- Render tests for each section component with mocked `portfolioData`.
- Interaction tests:
  - mobile menu toggle open/close.
  - My Details tab switching content.
  - back-to-top visibility/interaction.
- Integration checks in browser:
  - all nav anchors jump correctly.
  - visual parity against current legacy page at mobile + desktop breakpoints.
  - no console errors after legacy script removal.
- Build/preview validation:
  - `npm run build` succeeds.
  - `npm run preview` manual smoke test.

### Assumptions
- Migration is **phased hybrid** (not big-bang).
- Goal is **UX parity with plugin replacement**, not redesign.
- Content is maintained via a **central data file** (not inline JSX-only).
- `About` is split out from hero intro content under shared `Layout`.
