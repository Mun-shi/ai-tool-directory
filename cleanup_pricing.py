import re

# Read the file
with open('src/data/aiTools.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove duplicate pricingType lines
content = re.sub(r'\n\s*pricingType: "[^"]*",\s*\n\s*pricingType: "[^"]*",', lambda m: m.group(0).split('\n')[2] + '\n', content)

# Also remove any standalone duplicate pricingType lines that might exist
lines = content.split('\n')
clean_lines = []
i = 0
while i < len(lines):
    line = lines[i]
    # If this line contains pricingType and the next line also contains pricingType, skip the first one
    if 'pricingType:' in line and i + 1 < len(lines) and 'pricingType:' in lines[i + 1]:
        i += 1  # Skip the first duplicate
        continue
    clean_lines.append(line)
    i += 1

content = '\n'.join(clean_lines)

# Write back to file
with open('src/data/aiTools.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Cleaned up duplicate pricingType fields!")