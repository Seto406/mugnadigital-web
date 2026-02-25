from playwright.sync_api import sync_playwright

def verify_reduced_motion():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        # Set reduced motion preference
        context = browser.new_context(reduced_motion='reduce')
        page = context.new_page()

        try:
            print("Navigating to localhost:3000...")
            page.goto("http://localhost:3000")
            page.wait_for_selector("text=The Filipino Engine")

            # Wait a bit to ensure animations would have started if enabled
            page.wait_for_timeout(2000)

            # Take screenshot
            page.screenshot(path="verification_reduced_motion.png")
            print("Screenshot taken: verification_reduced_motion.png")

            # Verify GearAnimation
            # Locator: `svg.lucide-settings`. Parent is the motion div.
            gears = page.locator("svg.lucide-settings")
            count = gears.count()
            print(f"Found {count} gears.")

            if count > 0:
                # Check the first gear's parent (the motion.div)
                first_gear_parent = gears.first.locator("xpath=..")
                style = first_gear_parent.get_attribute("style")
                print(f"Gear style: {style}")

                # Check FloatingElement
                # FloatingElement wraps icons in Services section.
                # Icons are e.g. Code2, Smartphone, etc.
                # Let's look for a service icon.
                code_icon = page.locator("svg.lucide-code2").first
                if code_icon.count() > 0:
                    floating_parent = code_icon.locator("xpath=..")
                    floating_style = floating_parent.get_attribute("style")
                    print(f"Floating element style: {floating_style}")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_reduced_motion()
