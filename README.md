# Hauke Roggenkamp - Personal Website

A minimalist academic landing page featuring an interactive card flip effect based on mouse movement.

## Directory Structure

```
.
├── index.html              # Main HTML file
├── README.md              # This file
├── .gitignore             # Git configuration
│
├── assets/
│   ├── images/
│   │   └── christine-hauke-sv-65.jpg    # Profile image
│   └── 02-cv.pdf          # CV document
│
└── src/
    ├── css/
    │   └── style.css      # Styling
    └── js/
        └── main.js        # Interaction & animation
```

## Features

- **Interactive Card Flip**: Mouse movement triggers smooth 3D card rotation (cubic acceleration)
- **Minimalist Design**: Clean, professional layout with SVG icons
- **Real Icons**: Uses SVG icons from Google Scholar, GitHub, ORCID, LinkedIn, Bluesky, and OSF
- **Mobile Responsive**: Optimized for desktop and mobile devices
- **Quick Links**: Direct access to all academic profiles
- **CV Download**: One-click PDF download

## How to Use

### Local Development

1. Open `index.html` in your web browser
2. Move your mouse around the card to see the 3D flip effect
3. Click the card to manually flip between content and image

### GitHub Pages Deployment

1. Create a GitHub repository (e.g., `username.github.io`)
2. Push all files to the repository
3. Enable GitHub Pages in repository settings (if needed)
4. Your site will be live at your GitHub Pages URL

## Interaction

- **Desktop**: Move mouse around the card to see the 3D flip effect
- **Click**: Click the card to toggle between content view and image view
- **Mouse Leave**: Card resets when mouse leaves the window

## Customization

To personalize your site:

- **Name/Title**: Edit `.card__name`, `.card__title` in `index.html`
- **Biography**: Update `.card__bio` text in `index.html`
- **Links**: Modify URLs in the `<nav class="card__links">` section
- **Profile Image**: Replace `christine-hauke-sv-65.jpg` with your own image
- **CV File**: Replace `assets/02-cv.pdf` with your CV
- **Colors**: Modify color values in `src/css/style.css`
- **Animation Speed**: Adjust `maxY: 180` in `src/js/main.js`

## Browser Support

Works best in modern browsers with CSS 3D transforms support:
- Chrome/Edge 36+
- Firefox 16+
- Safari 9+
- Opera 23+
