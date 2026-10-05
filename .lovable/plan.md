# Homepage social footer

## What will change
- Add a centered social footer directly after the homepage project grid.
- Show Instagram, LinkedIn, and Vimeo in that order, linked to Gaurav's existing profiles and opening in new tabs.
- Match the supplied reference with black icons, a white background, 32px sizing, 28px spacing, and generous vertical whitespace.

## Animation
- Add a small homepage-only React component that observes the footer as it enters the viewport.
- Reveal each icon once with a 0.9-second fade-and-rise animation and 0.15-second stagger.
- Disconnect the observer after triggering, show immediately when IntersectionObserver is unavailable, and disable movement for reduced-motion users.
- Add a subtle 3px lift on hover.

## Technical details
- Reuse Lucide for Instagram and LinkedIn, and use an inline accessible Vimeo mark to match the reference without adding a library.
- Keep all styles scoped to the new homepage footer and leave the gallery, navigation, and other pages unchanged.
- Verify the footer visually on desktop and mobile and confirm all three destinations and accessibility labels.
