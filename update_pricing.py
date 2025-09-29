import re

# Read the file
with open('src/data/aiTools.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Function to determine pricing type from pricing string
def get_pricing_type(pricing):
    pricing = pricing.lower()
    if 'free' in pricing and ('paid' in pricing or '$' in pricing):
        return 'freemium'
    elif 'free' in pricing:
        return 'free'
    else:
        return 'paid'

# Find all tool objects and add pricingType
pattern = r'(\s+)(\{[^}]*?pricing:\s*["\'][^"\']*?["\'][^}]*?\})'

def add_pricing_type(match):
    indent = match.group(1)
    tool_obj = match.group(2)
    
    # Extract the pricing value
    pricing_match = re.search(r'pricing:\s*["\']([^"\']*?)["\']', tool_obj)
    if pricing_match:
        pricing_value = pricing_match.group(1)
        pricing_type = get_pricing_type(pricing_value)
        
        # Add pricingType field after pricing
        new_tool_obj = re.sub(
            r'(pricing:\s*["\'][^"\']*?["\'],)',
            r'\1\n' + indent + f'    pricingType: "{pricing_type}",',
            tool_obj
        )
        return indent + new_tool_obj
    
    return match.group(0)

# Apply the transformation
new_content = re.sub(pattern, add_pricing_type, content, flags=re.DOTALL)

# Write back to file
with open('src/data/aiTools.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated all tools with pricingType field!")