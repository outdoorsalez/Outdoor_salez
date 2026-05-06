# Product Images

Drop your product photos in this folder. Each product in `products.js` references
an image by filename (e.g. `images/senko.jpg`).

## How to add / change a product photo

1. Save your photo into this folder. JPG or PNG works best.
   - Recommended: square or 4:3, at least 800x800px, under 500KB.
2. Open `/products.js` in the project root.
3. Find the product you want to update and set its `image` field to match your
   filename, for example:
   ```js
   image: "images/my-new-photo.jpg",
   ```
4. Save. The site updates automatically.

If you leave `image` empty (`image: ""`), the card falls back to a colored
placeholder with an emoji.

## Default filenames used right now

- senko.jpg
- keitech.jpg
- vision110.jpg
- frog.jpg
- mojo-bass.jpg
- slx-rod.jpg
- slx-dc.jpg
- daiwa-bg.jpg

You can either name your photos to match these, or rename the `image:` paths
in `products.js` to whatever you prefer.
