# Vorta for Borg Backup: Documentation

This repository contains the documentation website for [vorta.borgbase.com](https://vorta.borgbase.com). Feel free to open a pull request if you notice any mistake or would like to add something.

Pages live in `src/content/docs/` as Markdown/MDX. Images and other static files go in `public/`.

## Development

Requires Node 24 and [pnpm](https://pnpm.io/).

```bash
pnpm install
pnpm dev       # http://localhost:4321
```

## Building

```bash
pnpm build     # output in dist/
pnpm preview   # serve the build locally
```

The build checks all internal links and fails on broken ones.

## Code Formatting

To ensure consistent formatting, you can format Markdown files with Prettier:

```bash
prettier --check "src/**/*.md"
prettier --write "src/**/*.md"
```

## Credits

- **Theme**: [Starlight](https://starlight.astro.build/)
- **Colors**: [Vuetify Color Palette](https://vuetifyjs.com/en/styles/colors/)
