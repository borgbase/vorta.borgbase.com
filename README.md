# Vorta for Borg Backup: Documentation

This repository contains the documentation website for [vorta.borgbase.com](https://vorta.borgbase.com). Feel free to open a pull request if you notice any mistake or would like to add something.

## Development

### Docker (Recommended)

The easiest way to run the site locally is using Docker:

```bash
# Start development server with live reload
docker-compose up develop

# Build production site
docker-compose run build
```

The development server will be available at:
- **Site**: http://localhost:4000
- **LiveReload**: http://localhost:35729

### Local Setup (Alternative)

If you prefer to run Jekyll locally:

```bash
# Install dependencies
gem install --user-install jekyll bundler

# Install project dependencies
bundle install

# Start development server
bundle exec jekyll serve
```

## Building

### Production Build

To build the static site for production:

```bash
# Using Docker
docker-compose run build

# Using local Jekyll
JEKYLL_ENV=production bundle exec jekyll build
```

The built site will be available in the `_site/` directory.

## Contributing

### Code Formatting

To ensure consistent formatting, you can format Markdown files with Prettier:

```bash
# Check formatting
prettier --check **/*.md

# Fix formatting
prettier --write **/*.md
```

## Credits

- **Theme**: [Just the Docs](https://github.com/pmarsceill/just-the-docs)
- **Colors**: [Vuetify Color Palette](https://vuetifyjs.com/en/framework/colors#colors)
