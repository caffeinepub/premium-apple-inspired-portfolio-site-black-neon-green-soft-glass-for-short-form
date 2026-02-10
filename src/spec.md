# Specification

## Summary
**Goal:** Make the global site background render darker on both desktop and mobile/portrait so foreground content and bubble overlays stand out more.

**Planned changes:**
- Update `frontend/src/index.css` to apply a dark overlay/gradient on top of the existing desktop background image (set on the `html` element) without changing the image path or existing cover/center/no-repeat/fixed behavior.
- Update the existing mobile/portrait media rule (`@media (max-width: 768px), (orientation: portrait)`) to apply the same darkening approach on top of the mobile background image, preserving existing background behavior.

**User-visible outcome:** The site background appears noticeably darker on desktop and mobile/portrait while still showing the neon bubble/line visuals, and foreground sections plus bubble overlay decorations remain clearly visible.
