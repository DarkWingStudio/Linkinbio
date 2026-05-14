# DarkWing Studio Link-in-Bio

A static, mobile-first link-in-bio site for DarkWing Studio. It presents the brand profile, priority links, email access, and a small digital product section in a dark cyberpunk visual style.

The project uses plain HTML, CSS, JavaScript, and JSON. There is no build step, package manager, framework, or backend required.

Live site: `https://darkwingstudio.netlify.app/`

## What Is Included

- Responsive profile page with banner, avatar, bio, and social buttons
- Tabbed sections for Links and Shop
- Link cards loaded from `links.json`
- Product cards loaded from `products.json`
- Shop tab appears only when `products.json` contains at least one real product
- Email/Gmail-style button in the social icon row
- Email address is assembled in JavaScript to reduce simple scraper exposure
- Open Graph and Twitter Card metadata for social previews
- JSON-LD structured data using Schema.org
- `robots.txt` and `sitemap.xml` for crawler discovery
- Accessible labels, semantic landmarks, and screen-reader helper text

## Project Structure

```text
.
|-- index.html          # Main page and SEO metadata
|-- Styles.css          # Visual styling and responsive layout
|-- script.js           # Tabs, JSON loading, and internal links
|-- links.json          # Link card data
|-- products.json       # Shop/product card data
|-- robots.txt          # Search crawler rules
|-- sitemap.xml         # Canonical sitemap
|-- README.md           # Project documentation
`-- assets/
    |-- banner.jpg
    |-- pfp.jpeg
    |-- image-unavailable.svg
    |-- neon-core.svg
    `-- void-textures.svg
```

## Run Locally

The site fetches `links.json` and `products.json`, so serve it with a local web server instead of opening `index.html` directly.

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

VS Code Live Server works too.

## Edit Links

Update `links.json` to change the cards in the Links tab.

```json
{
  "label": "GitHub Repos",
  "cmd": "$ git --code",
  "icon": "fa-brands fa-github",
  "link": "https://github.com/DarkWingStudio",
  "priority": "secondary"
}
```

Fields:

- `label`: visible link title
- `cmd`: terminal-style subtitle
- `icon`: Font Awesome class names
- `link`: destination URL, `mailto:` URL, or internal section hash
- `priority`: optional visual class suffix, such as `primary`, `secondary`, or `tertiary`

Internal section links should point to real section IDs, for example `#shop-section`.

## Edit Products

Update `products.json` to change the Shop tab.

```json
{
  "title": "Neon Core Bundle",
  "desc": "Full UI kit with glitch effects and dark components.",
  "price": "$49.00",
  "tag": "New",
  "image": "assets/neon-core.svg",
  "link": "#neon-core"
}
```

Fields:

- `title`: product name
- `desc`: short product description
- `price`: display price
- `tag`: optional badge text
- `image`: image path
- `link`: product or checkout URL

If an image fails to load, `assets/image-unavailable.svg` is used as the fallback.

Blank product objects are ignored. At minimum, a product needs a `title` and `link` to appear.

## SEO Setup

SEO is implemented in the real site files rather than separate report documents.

Current SEO files and markup:

- `index.html`
  - descriptive title and meta description
  - canonical URL
  - robots meta tag
  - Pinterest domain verification meta tag
  - Google Search Console verification meta tag
  - Open Graph tags
  - Twitter Card tags
  - favicon and Apple touch icon
  - Schema.org JSON-LD Person data
  - semantic `header`, `main`, `section`, `nav`, `article`, and `footer` elements
- `robots.txt`
  - allows public crawling
  - blocks common non-public paths
  - points crawlers to `sitemap.xml`
- `sitemap.xml`
  - lists the canonical homepage
  - includes important image metadata

Before production launch, update these values if the final URL changes:

- canonical URL in `index.html`
- `og:url` in `index.html`
- JSON-LD `url` and `@id` in `index.html`
- sitemap URL entries in `sitemap.xml`
- sitemap location in `robots.txt`

## Assets

- Replace `assets/banner.jpg` for the social preview and top banner.
- Replace `assets/pfp.jpeg` for the avatar and favicon.
- Keep important assets compressed before deployment.
- Use descriptive filenames for new assets when possible.

## Deployment

This project can be hosted on any static hosting service:

- Netlify
- GitHub Pages
- Vercel
- Cloudflare Pages

For Netlify:

1. Push the files to the repository.
2. Connect the repository to Netlify.
3. Use the project root as the publish directory.
4. Leave the build command empty.
5. Confirm that `/robots.txt` and `/sitemap.xml` are publicly accessible after deployment.

## Post-Deployment SEO Checklist

- Submit `https://darkwingstudio.netlify.app/sitemap.xml` in Google Search Console.
- Submit the sitemap in Bing Webmaster Tools.
- Keep the Google Search Console and Pinterest verification meta tags in `index.html`.
- Add analytics only after you have the real GA4 measurement ID.
- Replace placeholder product hash links with real product or checkout URLs.
- Test social previews with platform preview tools after deployment.

## Notes

- Keep JSON files valid. Trailing commas are not allowed.
- The site should be served over HTTP or HTTPS for JSON loading to work.
- Do not add the raw email address back into `index.html`, `links.json`, or JSON-LD if you want to keep it harder to scrape.
- External fonts and Font Awesome icons require network access.
- The old SEO report markdown files were removed because the README now documents the actual SEO setup.
