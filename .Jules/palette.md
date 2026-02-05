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
