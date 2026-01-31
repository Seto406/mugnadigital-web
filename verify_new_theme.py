import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        # Navigate to home
        print("Navigating to home page...")
        await page.goto("http://localhost:3000")
        await page.wait_for_timeout(2000)

        # Take screenshot of default state (Dark Mode likely)
        await page.screenshot(path="/home/jules/verification/new_1_default.png")
        print("Screenshot taken: new_1_default.png")

        # Check for new Theme Toggle (Moon or Sun icon)
        # The button has title="Switch to Light Mode" or "Switch to Dark Mode"
        # Initial state is likely Dark, so button title should be "Switch to Light Mode" (Sun icon is visible if dark mode is active? No, if dark mode is active, usually we show Sun to switch to light, or Moon to indicate current?
        # My code: {themeMode === 'light' ? <Moon /> : <Sun />}
        # If theme is 'dark', it shows <Sun />.
        # Title: {themeMode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}

        print("Clicking Theme Toggle...")
        # Try to find the button by title
        toggle_btn = page.get_by_role("button", name="Toggle Dark Mode") # I added aria-label="Toggle Dark Mode"
        if await toggle_btn.count() == 0:
             # Fallback to title
             toggle_btn = page.locator('button[title="Switch to Light Mode"]')

        if await toggle_btn.count() > 0:
            await toggle_btn.click()
            await page.wait_for_timeout(1000)
            await page.screenshot(path="/home/jules/verification/new_2_light_mode.png")
            print("Screenshot taken: new_2_light_mode.png")
        else:
            print("Theme toggle button not found!")

        # Check Vision Menu
        print("Opening Vision Menu...")
        vision_btn = page.get_by_role("button", name="Vision Settings") # aria-label="Vision Settings"
        if await vision_btn.count() > 0:
            await vision_btn.click()
            await page.wait_for_timeout(500)
            await page.screenshot(path="/home/jules/verification/new_3_vision_menu_open.png")
            print("Screenshot taken: new_3_vision_menu_open.png")

            # Select Protanopia
            await page.get_by_role("button", name="Protanopia").click()
            await page.wait_for_timeout(1000)
            await page.screenshot(path="/home/jules/verification/new_4_protanopia.png")
            print("Screenshot taken: new_4_protanopia.png")
        else:
            print("Vision settings button not found!")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
