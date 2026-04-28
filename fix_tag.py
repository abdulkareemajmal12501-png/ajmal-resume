with open('src/App.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the missing closing div for skill-group
content = content.replace(
    """                </div>
            ))}""",
    """                </div>
            ))}"""
)

with open('src/App.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed!")
