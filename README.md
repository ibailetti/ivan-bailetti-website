# Iván Bailetti Ferreyra — Personal website

Minimalist bilingual (EN/ES) personal website for Iván Bailetti Ferreyra, with his education, certifications and work experience.

Live site: <https://ibailetti.github.io/ivan-bailetti-website/>

Plain HTML, CSS and JavaScript: no build step, no dependencies.

## Structure

```
index.html    page content (English by default)
styles.css    layout and theme (palette taken from the resume)
script.js     EN/ES translations and language switch
assets/       portrait and favicon
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## Languages

The language is chosen in this order: `?lang=es|en` in the URL, the last choice saved in the browser, then the browser language (Spanish if it starts with `es`, otherwise English).
All translated strings live in `script.js`.

## Design

Colors and typography follow the resume: navy `#1d446d`, coral `#f88b8b`, charcoal `#454545` and light grey `#d9dddc`.
The resume uses Matisse Pro (a commercial sans-serif); the site uses Figtree from Google Fonts as a web-friendly stand-in.

## Deploy

Works as-is on GitHub Pages (Settings → Pages → deploy from `main`, root folder).

## License

[MIT](LICENSE)
