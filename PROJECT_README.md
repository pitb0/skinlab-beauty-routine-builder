# Skinlab UK — Beauty Routine Builder

## Quick Start

1. **Create the GitHub repository**
   - Go to GitHub → New repository
   - Repository name: `skinlab-beauty-routine-builder` (or pick from suggested names)
   - Description: "Free personalized skincare & makeup routine builder with tested discount codes for top UK retailers — powered by Skinlab UK"
   - Set to **Public**
   - Initialize with: **README.md** (already exists locally)
   - License: MIT
   - Topics: beauty skincare makeup routine-builder discount-codes deals product-recommendation uk-beauty skinlabuk

2. **Push your code**
   ```bash
   cd projects/skinlab-uk/github
   git init
   git add .
   git commit -m "Initial commit — Skinlab UK Beauty Routine Builder"
   git branch -M main
   git remote add origin https://github.com/yourusername/skinlab-beauty-routine-builder.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / root folder
   - Click Save
   - Your site will be live at: `https://skinlabuk.github.io/skinlab-beauty-routine-builder`

## Project Structure

```
github/
├── index.html          # Main GitHub Pages site
├── README.md           # Repository homepage
├── .gitignore          # Git ignore file
├── assets/             # Add your Skinlab UK branding images here
│   ├── banner.png      # Hero banner (recommended 1200×400px)
│   ├── logo.png        # Skinlab UK logo (72×72px or SVG)
│   └── favicon.ico     # Optional favicon
├── css/
│   └── styles.css      # Site styling
└── js/
    └── app.js          # Interactive routine builder logic
```

## Affiliate Disclosure

This page contains affiliate links. Skinlab UK may earn a commission on qualifying purchases at no extra cost to you. All recommendations are based on real product testing and research.

## Features

- Fully responsive, mobile-first design
- Interactive routine builder (no sign-up required)
- Real-time product recommendations
- Contextual affiliate links (4–6 max as per guidelines)
- Clean, modern UI with Skinlab UK branding
- MIT licensed

## Customisation

- **Colours**: Edit CSS variables in `css/styles.css` under `:root`
- **Products**: Update the `products` object in `js/app.js`
- **Branding**: Replace images in `assets/` folder

## License

MIT — free to use, modify, and distribute.

---

*Built for Skinlab UK.*