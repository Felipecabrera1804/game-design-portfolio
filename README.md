# Game Design Portfolio

Astro site for narrative and game design case studies.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:4321.

## Add a project

1. Copy `src/content/projects/_template.mdx` to `src/content/projects/<your-slug>.mdx`.
2. Put media in `public/projects/<your-slug>/`.
3. Fill in the frontmatter (title, design question, mechanic map…) and write the sections.
4. Set `featured: true` for your strongest 2–4 projects. They appear on the home page.

The home page adapts on its own: with 1–2 featured projects each one gets a full-width spotlight, and with 3 or more you get one spotlight plus a grid. Non-featured projects appear under "Smaller experiments & jams" on `/projects/`.

## Add a design note

Add a `.md` file to `src/content/notes/` (copy an existing one). Notes show up on the home page automatically, and the section is hidden when there are none.

## Personalize

- `src/site.ts`: name, thesis, intro, links, the three "What I explore" pillars.
- `src/pages/about.astro`: about text.
- `src/styles/global.css`: colors and fonts (tokens at the top).
- Put your CV at `public/cv.pdf`.
- Remove the example projects (`paper-lanterns.mdx`, `hold-still.mdx`) once you've added your own.

## Deploy (GitHub Pages)

1. Push this folder to a GitHub repo.
2. Repo → Settings → Pages → Source: **GitHub Actions**.
3. In `astro.config.mjs`, set `site` to `https://<user>.github.io`. If the repo is not named `<user>.github.io`, also set `base: '/<repo-name>'`.
