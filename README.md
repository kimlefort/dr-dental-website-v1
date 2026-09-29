# Dr. Dental Care Center — website v1

Ready-to-publish static website for Ponciano, Davao City. No install or build step is required.

## Publish on GitHub Pages

1. Create a GitHub repository with a `main` branch.
2. Extract this ZIP. Upload its contents into the repository root, so `index.html` is at the top level. Upload the extracted files, not the ZIP itself.
3. Include `.github/workflows/pages.yml`. On macOS, press Command+Shift+Period in Finder to reveal hidden files/folders when selecting them.
4. In repository **Settings → Pages → Build and deployment → Source**, choose **GitHub Actions**.
5. Open **Actions → Publish website to GitHub Pages → Run workflow** and run it on `main`. Future pushes to `main` publish automatically.
6. The deployment's `github-pages` environment shows the live URL.

Workflow instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

### Simpler alternative: publish from a branch

If you omit the workflow folder, select **Deploy from a branch**, choose `main`, and select `/ (root)` in Pages settings. The site is already static. Use only one publishing method.

## Files

- `index.html`: page content and metadata
- `redesign.css`, `tokens.css`: layout and colors
- `site.js`: service explorer, navigation, motion, contact dock
- `assets/`: real logo variants, self-hosted fonts and font licenses
- `.github/workflows/pages.yml`: optional deployment workflow

Relative asset paths support both username.github.io and username.github.io/repository/ URLs. The Google map requires an internet connection. Message, call and directions links use the clinic's existing channels; this site has no booking backend.

## Future media

No clinic photography/video has been fabricated or included. Elements marked `data-media-slot` are prepared for approved hero, service and location media. `.clinic-media` styles are available for insertion. Keep the official logo and map attribution intact.

## Domain and ownership

Once the final URL is selected, add its canonical URL, og:url and sitemap if desired. No domain has been invented. The supplied logo is client-provided; font license files are included. No blanket license is granted for clinic branding.
