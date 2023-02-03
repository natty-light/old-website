# natty-light.github.io
Personal website and portfolio for Nat Gallant

Built using Astro, SolidJS, and CSS modules.

## 🚀 Project Structure

A diagram showing where to find stuff if you're looking for something in particular

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── types.ts
│   ├── components/
│   │   └── Button.tsx
│   │   └── ProjectCard.tsx
│   │   └── Island.tsx
│   │   └── Footer.tsx
│   │   └── CardCarousel.tsx 
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│   │   └── index.astro
│   ├── styles/
│   │   └── Button.module.css
│   │   └── ProjectCard.module.css
│   │   └── Island.module.css
│   │   └── Footer.module.css
│   │   └── CardCarousel.module.css
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `yarn install`         | Installs dependencies                            |
| `yarn dev`             | Starts local dev server at `localhost:3000`      |
| `yarn build`           | Build your production site to `./dist/`          |
| `yarn preview`         | Preview your build locally, before deploying     |
| `yarn astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `yarn astro --help`    | Get help using the Astro CLI                     |
