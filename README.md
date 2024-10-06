# Promt-Generator for Midjourney, Stable Diffusion, Adobe Firefly, etc in NUXT3.

Inspiration provided by [ deaex.](https://deaex.at). Developed by [tom.](https://leiter.cc)

DEMO: https://promtgenerator.pages.dev/

No warranty is provided. Use at your own risk.


# Prompt Generator

The Prompt Generator is a tool specifically designed to assist users in creating detailed prompts for various AI-powered text-to-image models like MidJourney, Stable Diffusion, and Adobe Firefly (where possible).

With this tool, users can enter creatively formulated descriptions using a simple user interface, adjust additional parameters such as aspect ratio, quality, style, and exclusion terms, and generate prompts directly.

### Features include:
- **Dynamic Category Selection**: Choose from various predefined terms to expand the prompt.
- **Exclusion of Terms**: Allows the removal of unwanted elements using exclusion parameters like `--no` (MidJourney) or `--neg` (Stable Diffusion).
- **Automatic Conversion**: The entered prompt is converted for different models such as MidJourney, Stable Diffusion, and Adobe Firefly (where possible).
- **Storage**: Prompts are stored locally (Local Storage) and can be copied later.
- **Easy Copying**: By double-clicking the generated prompt, it is automatically copied to the clipboard, making it easy to paste into the desired platform.
- The tool provides flexibility and efficiency to create creative and customized prompts.



## Setup / Installation
(https://nuxt.com/docs/getting-started/introduction) to learn more.
Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
