# null Dallas website

A static website for null Dallas. No build step, no framework: plain HTML, CSS and JavaScript, ready for GitHub Pages.

## Files

| File | What it is |
|---|---|
| `index.html` | Home page: hero with next meet, upcoming events, formats, past sessions, social links |
| `events.html` | All upcoming and past events |
| `about.html` | What null is, formats, code of conduct, FAQ |
| `team.html` | Organizers |
| `get-involved.html` | Talk, workshop, venue and volunteer calls to action |
| `404.html` | Not-found page (GitHub Pages uses it automatically) |
| `js/data.js` | **All editable content**: links, events, team |
| `js/main.js` | Renders header, footer, events and team from `data.js` |
| `css/style.css` | Styles |
| `favicon.svg` | Browser tab icon |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |

## Updating the site

Edit `js/data.js`, commit, and the live site updates within a minute or two.
Events dated today or later appear as upcoming; older ones move to past sessions automatically.
Delete every `sample: true` entry (these show a red "Sample" badge) before announcing the site.

## Hosting on GitHub Pages

1. Create a public repository on GitHub (e.g. `null-dallas`).
2. Upload every file and folder here to the root of the repo (Add file → Upload files), keeping `css/` and `js/` folders.
3. Settings → Pages → Build and deployment → Source: **Deploy from a branch**, Branch: **main**, folder **/(root)** → Save.
4. Wait 1–2 minutes. The site is live at `https://<username>.github.io/null-dallas/`.

Tip: name the repo `<username>.github.io` to get `https://<username>.github.io/` with no path.

### Custom domain (optional, e.g. nulldallas.org)

1. Settings → Pages → Custom domain → enter `nulldallas.org` → Save (this creates a `CNAME` file).
2. At your domain registrar add DNS records:
   - `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www` → `<username>.github.io`
3. When the DNS check passes, tick **Enforce HTTPS**.

## Test locally

Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.
