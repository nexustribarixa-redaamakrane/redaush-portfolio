# Redaush Portfolio

This repository is a single-page static portfolio. The page content is in
`index.html`, presentation is in `style.css`, and the small interactive
message widget is in `script.js`. `RSS.xml` is a hand-maintained RSS 2.0
channel.

There is no package manager, generated site, server-side code, or build/test
suite in this repository. To preview it locally, serve the repository root:

```powershell
py -m http.server 8080
```

Then open <http://localhost:8080>. The page requests fonts from Google Fonts
and jQuery from the jQuery CDN, so those portions depend on network access.
The browser can display the local page and styles without a compilation step.

## Files

- `index.html` — portfolio sections and timeline content.
- `style.css` — page layout and responsive styling.
- `script.js` — randomized message generation and button behavior.
- `RSS.xml` — portfolio update feed.

No `LICENSE` file is present in this checkout; do not assume the page assets
or content are available under an open-source license.
