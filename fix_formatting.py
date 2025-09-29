import re

# Read the file
with open('src/data/aiTools.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix formatting issues with pricingType field alignment
# Replace malformed pricing/pricingType patterns
content = re.sub(r'pricing: "([^"]*)",\s*pricingType: "([^"]*)",', r'pricing: "\1",\n    pricingType: "\2",', content)

# Remove extra spaces and fix indentation
lines = content.split('\n')
clean_lines = []
for line in lines:
    # Fix pricingType alignment
    if 'pricingType:' in line and not line.strip().startswith('pricingType:'):
        # Extract the pricingType value and reformat
        match = re.search(r'pricingType:\s*"([^"]*)"', line)
        if match:
            pricing_type = match.group(1)
            clean_lines.append(f'    pricingType: "{pricing_type}",')
            continue
    clean_lines.append(line)

content = '\n'.join(clean_lines)

# Write back to file
with open('src/data/aiTools.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed formatting and alignment issues!")