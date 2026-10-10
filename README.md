# Andrew Evboifo | Developer Portfolio

A personal portfolio website for Andrew Evboifo, a full-stack developer and Software Development co-op student at Mohawk College. It is a blueprint for an updated version of my [current portfolio](https://stat3m3nts-portfolio.netlify.app/), built as a course assignment and hosted on GitHub Pages.

**Live site:** https://stat3m3nt.github.io/

## About

The design borrows from engineering drawings, a nod to my civil engineering background. The hero is a truss that draws itself on load, with its joints labelled Client, API and Database to show how load travels through a full-stack application. The contact section is laid out like a drawing title block, and the skills section reads like a materials schedule.

## Sections

- **Summary:** who I am, what I build and what I'm looking for
- **Education:** Mohawk College co-op program and Azure Fundamentals (in progress)
- **Skills:** grouped by layer of the stack
- **Projects:** MFG (a live client project, with an order-flow diagram), PropertyOS, CityFix, Vine & Dine, Reactive Deck and Pawffee Break, with filters by type
- **Resume:** on-page resume that prints cleanly or saves as a PDF
- **Contact:** email, GitHub, LinkedIn and current availability

## Features

- Light and dark "blueprint" themes that follow the visitor's system setting and remember their choice
- Project filtering built with React state
- Responsive layout down to small phones
- Accessible by design: semantic landmarks, skip link, visible keyboard focus, labelled controls and `prefers-reduced-motion` support
- Print stylesheet that outputs only the resume
- Automatic deployment to GitHub Pages through GitHub Actions

## Built with

- [React 18](https://react.dev/) for the interface
- [Vite](https://vitejs.dev/) for development and builds, with `vite-plugin-singlefile` to produce a single self-contained `index.html`
- Plain CSS with custom properties for theming
- Archivo and Source Serif 4 from Google Fonts
- GitHub Actions and GitHub Pages for hosting

## Project structure

```
src/
  App.jsx      React components for each section
  data.js      Content: education, skills and project details
  style.css    Theme tokens (light and dark), layout, responsive and print styles
  main.jsx     App entry point
.github/workflows/deploy.yml   Builds and deploys to GitHub Pages on every push to main
```

## Running locally

Requires [Node.js](https://nodejs.org/) 18 or newer.

```
npm install
npm run dev
```

The site is then available at http://localhost:5173. Use `npm run build` to create the production version in `dist/`.

## Contact

- Email: andrew.evboifo1@gmail.com
- GitHub: [github.com/stat3m3nt](https://github.com/stat3m3nt)
- LinkedIn: [linkedin.com/in/andrew-evboifo-78a655187](https://www.linkedin.com/in/andrew-evboifo-78a655187)
