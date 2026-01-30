import os

COLORS = {
    "gold": "#FCD116",
    "red": "#CE1126",
    "blue": "#0038A8",
    "ube": "#6B3FA0",
    "green": "#4E552A"
}

FILES = ["icon.svg", "logo.svg"]

def generate():
    for filename in FILES:
        if not os.path.exists(filename):
            print(f"Skipping {filename}, not found.")
            continue

        with open(filename, "r") as f:
            content = f.read()

        for name, hex_code in COLORS.items():
            # Replace the default slate color with the variant color
            new_content = content.replace("#0F172A", hex_code)

            # Construct new filename, e.g., icon-gold.svg
            base, ext = os.path.splitext(filename)
            new_filename = f"{base}-{name}{ext}"

            with open(new_filename, "w") as f:
                f.write(new_content)

            print(f"Generated {new_filename}")

if __name__ == "__main__":
    generate()
