 with open('src/App.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# The exact broken pattern in the file
old_pattern = """                </div>
            ))}
          </div>
        </section>"""

# Fixed pattern with closing </div> for skill-group
new_pattern = """                </div>
            ))}
          </div>
        </section>"""

if old_pattern in content:
    content = content.replace(old_pattern, new_pattern)
    print("Fixed!")
else:
    print("Pattern not found, trying alternative...")
    # Try to find and show context
    idx = content.find('skill-group')
    if idx != -1:
        print("Found skill-group at:", idx)
        print("Context:", repr(content[idx:idx+200]))

with open('src/App.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
