## Drawbee Illustration Gallery

**Drawbee** is a fully static illustration gallery built with **HTML**, **CSS**, and **vanilla JavaScript**.  
It showcases AI-generated illustration concepts, each with multiple visual variations and the full prompt that produced them.  
The site is designed to run on **GitHub Pages** with no backend or database.

### Core features

- **Masonry Gallery Layout**: Dynamic, Pinterest-style grid that elegantly handles varying illustration aspect ratios.
- **Sticky Header**: Compact, persistent navigation bar with integrated search and filters.
- **Spotlight Search (⌘K)**: Instant search focus via `Cmd+K` (Mac) or `Ctrl+K` (Windows/Linux) hotkey.
- **Copy SVG to Clipboard**: Easily copy the raw SVG code for any illustration variation directly from the detail view.
- **Category Filters**: Quickly switch between Full Color, Monochrome, and Black variations with a responsive filter dropdown on mobile.
- **Modal Detail View**: Click any card to see all variations side-by-side with high-quality previews.
- **Prompt Viewer**: Prompts are loaded from plain `.txt` files so you can keep art and text versioned together.
- **Zero Backend**: Everything runs statically and is GitHub Pages–ready. No database or build step required.

### Project structure

- **`index.html`**: Main page layout, header, search, filters, and modal markup.
- **`style.css`**: Visual design for the layout, cards, modal, and typography.
- **`main.js`**: Renders the gallery from a small data array, wires up search, filters, and the modal logic.
- **`/prompts`**: Plain‑text prompt files (e.g. `prompts/illustration-1.txt`).
- **`drawbee__logo.png` / `drawbee__logo.svg`**: Brand mascot used for the header, favicon, and social previews.
- **`github-thumb.png`**: Social preview image used for GitHub/Open Graph cards.

You can extend the gallery by adding more images (e.g. under an `/images` folder) and expanding the `illustrations` array in `main.js` to point to your new assets.

### Local development

1. **Clone the repo**:

   ```bash
   git clone https://github.com/<your-username>/drawbee.git
   cd drawbee
   ```

2. **Serve the files locally** (any static server works). For example, with Python:

   ```bash
   python -m http.server 8000
   ```

3. Open `http://localhost:8000` in your browser to view the gallery.

Because everything is static, there is no build step required.

### Deploying to GitHub Pages

1. Push this repository to GitHub (e.g. `drawbee`).
2. In your GitHub repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (or your default branch) and `/ (root)`.
4. Save, then wait for GitHub Pages to build. Your site will be available at:

   ```text
   https://<your-username>.github.io/drawbee/
   ```

Make sure any new illustration images and `.txt` prompt files are committed so they’re available on the published site.
