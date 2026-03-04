import sys
import time
from playwright.sync_api import sync_playwright, expect

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        print("Navigating to http://localhost:3000...")
        page.goto("http://localhost:3000")

        # Wait for the page to fully load and the gallery to be visible
        print("Waiting for ShowroomGallery...")

        # Scroll to the work section to ensure it's in view and any lazy loading triggers
        page.evaluate("document.getElementById('work').scrollIntoView()")
        time.sleep(2) # Allow time for smooth scrolling and animations

        gallery = page.locator("#project-gallery")
        expect(gallery).to_be_visible()

        print("Checking accessibility attributes...")
        # Check that the container has the correct ID
        expect(gallery).to_have_attribute("id", "project-gallery")

        # Check links
        links = gallery.locator('a[aria-label^="View case study for"]')
        count = links.count()
        print(f"Found {count} 'View Case Study' links with aria-label.")
        if count == 0:
            print("ERROR: Could not find 'View Case Study' links with expected aria-label.")
            sys.exit(1)

        for i in range(count):
             link = links.nth(i)
             aria_label = link.get_attribute("aria-label")
             print(f"Link {i} aria-label: {aria_label}")

             # Check that the icon inside has aria-hidden="true"
             icon = link.locator("svg")
             expect(icon).to_have_attribute("aria-hidden", "true")

        # To check the scroll buttons, we might need to hover or focus the gallery if they only show on interaction,
        # or we might need to simulate a small screen where scrolling is possible.
        # Since the buttons only show if scrolling is possible, let's force a smaller viewport.
        page.set_viewport_size({"width": 800, "height": 600})
        time.sleep(1) # wait for resize event to trigger scroll state update

        # The right button should be visible initially if there are enough projects
        right_button = page.locator('button[aria-label="Scroll next projects"]')

        # We need to make sure the right button is present in the DOM
        if right_button.count() > 0:
            print("Checking right scroll button attributes...")
            expect(right_button).to_have_attribute("aria-controls", "project-gallery")
            icon = right_button.locator("svg")
            expect(icon).to_have_attribute("aria-hidden", "true")

            # Click right to show the left button
            right_button.click()
            time.sleep(1)

            left_button = page.locator('button[aria-label="Scroll previous projects"]')
            if left_button.count() > 0:
                print("Checking left scroll button attributes...")
                expect(left_button).to_have_attribute("aria-controls", "project-gallery")
                icon = left_button.locator("svg")
                expect(icon).to_have_attribute("aria-hidden", "true")
            else:
                print("Left button not found after scrolling.")
        else:
             print("Right button not found, perhaps viewport is still too wide or no overflow.")

        # Take a screenshot
        print("Taking screenshot...")
        page.screenshot(path="verification_gallery.png")
        print("Done.")

        browser.close()

if __name__ == "__main__":
    main()
