1. **Add Skip-to-Content Link**: Update `app/layout.tsx` to include a visually hidden "Skip to content" link as the first element in the `<body>`.
2. **Update Main Container `app/page.tsx`**: Add `id="main-content"`, `tabIndex={-1}`, and `outline-none` to the `<main>` tag.
3. **Update Main Container `app/not-found.tsx`**: Add `id="main-content"`, `tabIndex={-1}`, and `outline-none` to the `<main>` tag.
4. **Pre-commit**: Run pre-commit checks (`pnpm lint`, `pnpm build`).
5. **Submit**: Create PR with Palette's format.
