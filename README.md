# changeroa.github.io

Personal portfolio website built with Astro.

## Tech Stack

- **Astro 5** - Static site generator
- **Tailwind CSS 4** - Styling
- **TypeScript** - Type safety
- **GitHub Actions** - CI/CD

## Features

- Multi-language support (English / Korean)
- Dark/Light theme toggle
- Blog with Markdown
- Portfolio showcase
- Responsive design

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── blog/           # Blog posts (en/ko)
├── components/     # Astro components
├── content/        # Portfolio content
├── i18n/           # Translations
├── layouts/        # Page layouts
├── pages/          # Routes (en/ko)
└── styles/         # Global styles
```

## Deployment

Automatically deployed to GitHub Pages on push to `main` branch.

**Live**: https://changeroa.github.io
