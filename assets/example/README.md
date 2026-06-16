# Example images

Drop the researcher's example photo(s) here, e.g. `example-1.jpg`.

Then reference them:

- **In-app example screen** (`/index.html`, search for `TODO: replace these placeholder entries`):
  ```html
  <img class="entry-card-media" src="assets/example/example-1.jpg" alt="Describe the photo here">
  ```
  (replaces the `<div class="example-photo">…</div>` placeholder)

- **Standalone page** (`/example/index.html`, same `TODO` marker):
  ```html
  <img class="card-photo" style="object-fit:cover;" src="../assets/example/example-1.jpg" alt="Describe the photo here">
  ```

Notes:
- This repo is **public**, so only use images cleared for public hosting — the researcher's own example or consented/created shots, never a real participant's photo.
- Keep them small (≈1280px on the long edge, JP/WebP) for fast loading on school Wi‑Fi.
- Always give each `<img>` meaningful `alt` text (the rest of the app is accessibility-checked).
