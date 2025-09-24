# Mr. Shawarma Portfolio

This repository now runs the Mr. Shawarma restaurant site on [Next.js](https://nextjs.org/) using the App Router while preserving the original HTML layout and styling.

Static assets live in `public/assets` and the original static HTML files are kept in the root directory for reference.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

The compiled app is fully static, so you can deploy the `out` or `.next` output to any static host.

## Project Structure

- `app/` – Next.js routes (`/`, `/menu`, `/blog`)
- `components/` – Page wrappers rendering the preserved HTML markup
- `public/assets/` – Fonts, images, CSS, and scripts carried over from the static site

## Notes

- The interaction script (`public/assets/js/script.js`) now includes safety guards so it can run on every page without console errors.
- Replace `public/assets/images/store-1.jpg` and `store-2.jpg` with real store photos if you have them—currently they reuse blog imagery.
- The legacy static files (`index.html`, `menu.html`, `blog.html`) remain untouched for comparison.

## License

[MIT](LICENSE)
