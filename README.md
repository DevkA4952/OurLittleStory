# Our Little Story - Valentine's Proposal 💌

A specialized, "Nanobana-inspired" interactive storybook built with React, Tailwind CSS, and Framer Motion.

## Start the Journey

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Run locally:**
    ```bash
    npm run dev
    ```

## Customization

### Images
The story currently uses placeholder images from Unsplash. To use your own photos:
1.  Place your images (e.g., `image1.jpg`, `image2.jpg`) in the `public/images/` folder.
2.  Open `src/App.jsx`.
3.  Update the `images` object at the top of the file to point to your local files:
    ```javascript
    const images = {
        ch1: "/images/image1.jpg",
        ch2: "/images/image2.jpg",
        // ...
    };
    ```

### Music
Chapter 4 features a UI card for "Perfect" by Ed Sheeran. This is a visual element only.

## Deployment
Ready for Netlify!
-   **Build Command:** `npm run build`
-   **Publish Directory:** `dist`

## Features
-   **Gift Box Reveal:** A "zip" opening animation.
-   **Nanobana Style:** Wobbly image borders (`border-radius: 60% 40%...`), hand-drawn fonts (Caveat, Patrick Hand), and warm cream colors.
-   **Interactive:** "Runaway" No button and Confetti Yes button.
-   **Heart Rain:** Background particle effects.
