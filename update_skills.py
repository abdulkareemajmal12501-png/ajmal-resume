

import re

with open('src/App.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Replace skills array
old_skills = """const skills = [
  'Website Development',
  'UI/UX Design',
  'Python',
  'HTML',
  'CSS',
  'Data Entry',
  'MS Packages',
  'Prompt Engineering',
  'AI Tools',
];"""

new_skills = """const skills = [
  { name: 'Website Development', category: 'Frontend' },
  { name: 'UI/UX Design', category: 'Frontend' },
  { name: 'HTML', category: 'Frontend' },
  { name: 'CSS', category: 'Frontend' },
  { name: 'Python', category: 'Backend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Supabase', category: 'Backend' },
  { name: 'MS Packages', category: 'Tools' },
  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
  { name: 'VS Code', category: 'Tools' },
  { name: 'Data Entry', category: 'AI & Other' },
  { name: 'Prompt Engineering', category: 'AI & Other' },
  { name: 'AI Tools', category: 'AI & Other' },
];"""

content = content.replace(old_skills, new_skills)

# 2. Replace Skills section JSX
old_skills_section = """        <section id="skills" className="section section-fade">
          <div className="section-header">
            <span>Skills</span>
            <h2>Tools and strengths I bring to every project.</h2>
          </div>
          <div className="skill-grid">
            {skills.map((skill) => (
              <motion.div
                key={skill}
                className="skill-pill"
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </section>"""

new_skills_section = """        <section id="skills" className="section section-fade">
          <div className="section-header">
            <span>Skills</span>
            <h2>Tools and strengths I bring to every project.</h2>
          </div>
          <div className="skill-groups">
            {['Frontend', 'Backend', 'Tools', 'AI & Other'].map((category) => (
              <div key={category} className="skill-group">
                <h3 className="skill-category-title">{category}</h3>
                <div className="skill-grid">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <motion.div
                        key={skill.name}
                        className="skill-pill"
                        whileHover={{ y: -6, scale: 1.03 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                      >
                        {skill.name}
                      </motion.div>
                    ))}
                </div>
            ))}
          </div>
        </section>"""

content = content.replace(old_skills_section, new_skills_section)

with open('src/App.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done!")
