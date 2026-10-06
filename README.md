# DarkWing Studio

This is the main site for DarkWing Studio. I built it with plain HTML, CSS, and vanilla JavaScript—no build steps or frameworks. It holds my Minecraft mods, coding projects, and digital art.

## Layout

The design is a two-column setup that stacks on mobile. The content is split into a few sections:

- **`/` (Home)** — Links out to everywhere else.
- **`/about/`** — What the studio is about.
- **`/minecraft/`** — Minecraft mods and guides.
- **`/projects/`** — Open-source code and web tools.
- **`/art/`** — Digital art portfolio.
- **`/art/assets/`** — A gallery for 4K wallpapers and avatars. You can filter these using the buttons.

## Details

- **No Build Step:** Just edit the files and hit refresh in your browser.
- **Styling:** I used a radial gradient background and some CSS shadows. Hover animations use custom cubic-bezier curves so they feel natural.
- **Gallery Filters:** The `/art/assets/` page uses a small JS script to hide/show items based on their `data-category`.
- **SEO Ready:** Open Graph tags, sitemap, robots.txt, and Schema.org structured data are already set up.

## Working on it

Open `index.html` in a browser. That's it.
If you add new `.asset-card` elements to `/art/assets/index.html`, just make sure they have a `data-category` attribute so the filter buttons pick them up.

## Deployment

Since it's static, you can drop this repo onto Netlify, Vercel, or GitHub Pages. No build command needed.
