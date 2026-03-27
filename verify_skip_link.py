import time
from playwright.sync_api import sync_playwright

def verify_skip_link():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Go to home page
        page.goto("http://localhost:3000")

        # Wait for hydration
        time.sleep(2)

        # Press Tab to focus the first interactive element (should be skip link)
        page.keyboard.press("Tab")

        # Take a screenshot to verify it's visible and focused
        page.screenshot(path="verification_skip_link.png")

        # Press Enter to activate skip link
        page.keyboard.press("Enter")

        # Verify focus moved to main content
        is_main_focused = page.evaluate("document.activeElement.id === 'main-content'")
        print(f"Main content focused after skip link: {is_main_focused}")

        browser.close()

if __name__ == "__main__":
    verify_skip_link()
