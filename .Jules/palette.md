## 2026-02-01 - Missing Skip-to-Content Link
**Learning:** Even modern applications with clean UI often overlook the basic "Skip to Content" mechanism, which is critical for keyboard users navigating past fixed headers with multiple links.
**Action:** Always include a visually hidden, focus-visible skip link as the first interactive element, pointing to the main content area.

## 2026-02-02 - Accessible Required Indicators
**Learning:** Visual indicators for required fields (like asterisks) should be hidden from screen readers using `aria-hidden="true"` when the semantic `required` attribute is already present on the input, to avoid redundant announcements.
**Action:** When adding visual decorations for form state, ensure they are hidden from assistive technology if the input already conveys the state semantically.

## 2026-02-03 - Inert Hero Buttons
**Learning:** Component library buttons often default to inert `<button>` tags if no `href` or `onClick` is provided, leaving critical CTA elements non-functional despite visual prominence.
**Action:** Systematically check all "Call to Action" buttons during UX audits to ensure they have valid `href` attributes or event handlers.

## 2026-02-04 - Escape Key Hatch
**Learning:** Custom UI components like dropdowns and mobile menus often trap keyboard users if they don't explicitly listen for the "Escape" key to close, forcing users to tab through the entire DOM to exit.
**Action:** Always attach a `keydown` listener for 'Escape' on any modal, dropdown, or overlay component to provide an immediate exit route.

## 2026-05-20 - Tailwind v4 Dark Mode Mismatch
**Learning:** Tailwind v4 defaults to system-preference for `dark:` variants. If the app manually toggles a `.dark` class, utility classes won't trigger even if CSS variables do, leading to invisible text or broken backgrounds.
**Action:** Explicitly define `@custom-variant dark (&:where(.dark, .dark *));` in the global CSS when using class-based dark mode in Tailwind v4.

## 2026-05-20 - Inert Forms
**Learning:** Portfolio contact forms without submission logic create a broken experience (reload or no-op). Even if backend is absent, simulated success states are essential for user feedback.
**Action:** Implement client-side state handling (loading/success) for all public-facing forms to provide immediate, delightful feedback.

## 2026-02-07 - Accessible Custom Dropdowns
**Learning:** Custom interactive elements like the Vision Mode dropdown are invisible to screen readers without explicit ARIA states (`aria-expanded`, `aria-haspopup`) and roles (`menu`, `menuitem`), making them appear as broken buttons.
**Action:** Systematically audit all `useState`-driven toggles to ensure they communicate their open/closed state via ARIA attributes.

## 2026-05-24 - Hidden Horizontal Scroll
**Learning:** Horizontal scroll containers (like galleries) often hide scrollbars for aesthetics, making them invisible to mouse users and inaccessible to keyboard users if the container isn't focusable.
**Action:** Always add a visual "scroll hint" (like a fading edge or arrow) and ensure the container has `tabIndex={0}` with an `aria-label` for keyboard navigation.

## 2026-05-26 - Mobile Menu Toggle State
**Learning:** Hamburger menus often rely on visual icon changes (X vs Menu) to indicate state, leaving screen reader users unaware if the menu is open or closed without explicit ARIA attributes.
**Action:** Always add `aria-expanded` and `aria-controls` to mobile menu toggle buttons, and ensure the toggle button's label reflects the action (e.g., "Toggle main menu" or dynamic "Open/Close").

## 2026-05-27 - Icon-Only Menu Toggles
**Learning:** Secondary actions in mobile menus (like Theme/Vision toggles) are often implemented as icon-only buttons without labels, making them completely inaccessible to screen readers who rely on text alternatives.
**Action:** Always provide `aria-label` for icon-only buttons and use `aria-pressed` or `aria-current` to communicate the active state of toggle buttons.
