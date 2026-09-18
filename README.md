
# Areej Alward — Google AI Studio ready React site

This project is a React/Vite recreation of the approved final homepage concept.

## Google AI Studio
1. Open Google AI Studio → Build → Web app.
2. Create a blank web app (React is the default web frontend).
3. Open the Code panel.
4. Replace the generated project files with the files in this package, preserving `/public/assets`.
5. Run the preview.

Alternative: push this folder to GitHub and use AI Studio Build → Add files (+) → Import from GitHub.

## Local run
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
```

## Main files
- `src/main.jsx` — all page markup, data, FAQ, slider controls, reveal animation.
- `src/styles.css` — full RTL responsive design system and animations.
- `public/assets/` — crops from the approved design mockup so the page works immediately.

## Editing photos
Replace any file in `public/assets` with your client's original photography using the same filename.
The layout automatically keeps the same crop using `object-fit: cover`.

## Brand palette
- Background: `#FFFAF8`
- Surface: `#FFFDFC`
- Soft rose: `#FDE8EA`
- Rose: `#DC6D7C`
- Burgundy: `#7E1727`
- Chocolate: `#4A281F`
