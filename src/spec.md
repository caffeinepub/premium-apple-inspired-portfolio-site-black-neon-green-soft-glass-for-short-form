# Specification

## Summary
**Goal:** Darken the site-wide background by increasing the opacity of the existing global overlay gradient while keeping the same background images and behaviors.

**Planned changes:**
- Update `frontend/src/index.css` to increase the alpha values of the `linear-gradient` overlay applied to the `html` `background-image` for the default (desktop) styling.
- Update `frontend/src/index.css` to increase the alpha values of the `linear-gradient` overlay applied to the `html` `background-image` within the mobile/portrait `@media` rule.
- Ensure the background image paths and global background behaviors (cover/center/no-repeat/fixed) remain unchanged and that foreground content stays readable.

**User-visible outcome:** The site background appears noticeably darker on both desktop and mobile/portrait layouts, improving contrast while keeping the same bubble background visuals and readable foreground content.
