# Specification

## Summary
**Goal:** Remove the older/placeholder portfolio video embed so the Portfolio only shows the user-provided video links.

**Planned changes:**
- Remove the existing embed URL `https://www.youtube.com/embed/dQw4w9WgXcQ` from `frontend/src/components/portfolio/portfolioData.ts`.
- Ensure the Portfolio grid and preview dialog only reference/play the existing user-provided video links already present in the portfolio data (no other older/placeholder embeds).

**User-visible outcome:** The Portfolio section no longer shows or plays the previous placeholder/older video; only the user-provided video links appear in the grid and can be opened in the preview dialog.
