# Portfolio

Single-page portfolio — HTML, CSS and vanilla JavaScript. Responsive, dark theme with red accent. Sections: About, Experience & Education, Projects, Contact. Experience and project cards open detail modals; projects support video or image. Language switcher (EN / FR / PT) with preference stored in `localStorage`. Contact form uses Formspree.

**Live:** [sacchetta.dev](https://sacchetta.dev)

---

## Tech

- HTML5, CSS3, JavaScript (no framework)
- [AOS](https://michalsnik.github.io/aos/) — scroll animations
- [Boxicons](https://boxicons.com/) — icons
- [Formspree](https://formspree.io/) — contact form

---

## Project structure

```
├── index.html
├── style.css
├── main.js
├── i18n.js
├── images/
├── media/
└── README.md
```

Put hero video in `media/` (e.g. `BackGround.mp4`). Project thumbnails and optional videos go in `images/` and `media/`; project details and links are in `i18n.js` (per language).

---

## Run locally

Open `index.html` in a browser, or use a local server:

```bash
npx serve .
```

Or use the “Live Server” extension in VS Code.

---

## Deploy

Static site: upload the repo or connect it to GitHub Pages, Netlify, Vercel, or any static host. The entry point is `index.html`.

1. **Formspree** — In `index.html`, the form `action` must point to your Formspree endpoint (`https://formspree.io/f/xxxxx`). Replace with your form ID if needed.
2. **Assets** — Ensure `images/` and `media/` contain the files referenced in the page (hero video, project images/videos, favicon).

---

## Contact

- **Email:** contact@sacchetta.dev
- **LinkedIn:** [Alexandre Sacchetta Virginio](https://www.linkedin.com/in/alexandre-sacchetta-virginio-3b06723ab/)
- **GitHub:** [SacchettaDev](https://github.com/SacchettaDev)
