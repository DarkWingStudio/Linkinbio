# DarkWing Studio link page

A responsive, static link-in-bio page for DarkWing Studio. The design uses the existing profile artwork and a restrained editorial palette, with a clear portfolio link, concise social destinations, and a direct contact action.

## Files

- index.html contains the page content, metadata, canonical URL, verification tags, and Organization structured data.
- Styles.css contains the responsive layout and visual styles.
- script.js sets the current year and prepares the Gmail contact link.
- robots.txt and sitemap.xml point crawlers to the public site.
- assets retains the existing brand artwork.

## Preview

Open index.html in a browser. The page has no build step or package dependencies.

## Update links and copy

Edit the anchor cards in index.html. Keep the canonical URL, social preview URLs, structured data URL, robots.txt sitemap URL, and sitemap.xml location in sync if the public domain changes.

The contact address is assembled in script.js to make it less visible to basic email scrapers. Change the character codes there if the address changes.

## Search notes

- The existing Netlify URL is retained as the canonical URL.
- The Google Search Console and Pinterest verification tags are preserved.
- The page uses one clear title and description, crawlable links in the HTML, and Organization structured data that points to the studio's public profiles.
- Search engines decide how to display and rank pages. These signals help describe the site; they do not guarantee a particular position.

## Deploy

Publish the contents of this folder to the existing static host. There is no build command.
