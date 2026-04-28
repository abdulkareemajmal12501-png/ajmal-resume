with open('src/styles.css', 'r', encoding='utf-8') as f:
    content = f.read()

old_skill_grid = """.skill-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  max-width: 960px;
  margin: 0 auto;
  perspective: 1200px;
}"""

new_skill_styles = """.skill-groups {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  max-width: 960px;
  margin: 0 auto;
}

.skill-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.skill-category-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: #8de6ff;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin: 0;
  padding-left: 0.25rem;
}

.skill-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  perspective: 1200px;
}"""

content = content.replace(old_skill_grid, new_skill_styles)

with open('src/styles.css', 'w', encoding='utf-8') as f:
    f.write(content)

print("CSS updated!")
