# DarkWing Studio

The official digital home for DarkWing Studio. Designed as a clean, editorial entity-hub built with static HTML, CSS, and Vanilla JavaScript. The site serves as the central directory for original Minecraft mods, software projects, and high-resolution digital artwork.

## Architecture

The site uses a responsive, two-column layout that shifts to a stacked single-column design on mobile devices. It is organized into specialized content hubs:

- **`/` (Home)** — The main entry point featuring top destinations and social links.
- **`/about/`** — Studio introduction and core areas of work.
- **`/minecraft/`** — Hub for original Minecraft modifications, guides, and resources.
- **`/projects/`** — Open-source software and web development tools.
- **`/art/`** — Overview of digital artwork.
- **`/art/assets/`** — A JavaScript-filterable gallery for 4K wallpapers and 1:1 PFPs.

## Features

- **No Build Step:** Pure static HTML, CSS, and JS. Zero dependencies.
- **Premium Aesthetics:** Features a subtle radial background gradient, deep multi-layered shadows, and `cubic-bezier` physics-based hover micro-animations.
- **Dynamic Asset Gallery:** The `/art/assets/` page uses a lightweight JavaScript filter system to instantly sort artworks by category (`wallpaper`, `pfp`).
- **SEO & Structured Data:** Includes canonical URLs, `robots.txt`, `sitemap.xml`, Open Graph tags, Google/Pinterest verification, and Organization structured data for optimal search presence.
- **Direct Downloads:** Asset gallery includes direct `download` attributes for locally hosted files (like the Studio PFP).

## Development

To preview the site, simply open `index.html` in your browser. Since there are no build steps, any edits to HTML or `Styles.css` will be instantly reflected upon refresh. 

To update the gallery filters, ensure any new `.asset-card` elements in `/art/assets/index.html` contain the correct `data-category` attribute.

## Deployment

Publish the contents of this repository to any static host (such as Netlify or GitHub Pages). There is no build command required.
