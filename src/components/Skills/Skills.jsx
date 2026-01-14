import React from 'react';
import { motion } from 'framer-motion';
import { ANIMATION_DELAY_INCREMENT } from '../../constants/animations';
import styles from './Skills.module.css';

const skills = [
  {
    category: "Backend",
    description: "Server-side development and API-driven architectures.",
    items: ["Java", "Spring Boot", "RESTful APIs", "JWT", "Microservices"]
  },
  {
    category: "Frontend",
    description: "Modern user interfaces and web application development.",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5 / CSS3"]
  },
  {
    category: "Databases",
    description: "Relational and NoSQL database design and optimization.",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQL", "PL/SQL"]
  },
  {
    category: "Cloud & DevOps",
    description: "Cloud infrastructure, containerization and deployment workflows.",
    items: ["AWS", "Docker", "CI/CD"]
  },
  {
    category: "Engineering Principles",
    description: "Applied software design principles and architectural patterns.",
    items: ["Clean Code", "SOLID Principles", "RESTful Architecture"]
  },
  {
    category: "Platform Experience",
    description: "Native mobile application development and platform-specific technologies.",
    items: ["Android", "Kotlin", "Jetpack Compose", "OSMdroid", "Android Location APIs"]
  },
  {
    category: "Testing & Tooling",
    description: "Development, testing and collaboration tools.",
    items: ["JUnit 5", "Mockito", "Jest", "Cypress", "Postman", "Git"]
  },
  {
    category: "Additional Technical Expertise",
    description: "Complementary skills used in specific contexts and projects.",
    items: ["Python (data analysis, scripting)", "Pandas", "NumPy", "SciPy", "Matplotlib", "Node.js"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className="section-title">Core Technologies</h2>
          <p className="text-body-secondary max-w-2xl">
            Technologies used in production-grade and business-critical systems.
          </p>
        </div>

        <div className={styles.skillsGrid}>
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * ANIMATION_DELAY_INCREMENT }}
              className={styles.skillCard}
            >
              <h3 className={styles.skillTitle}>
                {skillGroup.category}
              </h3>
              <p className={styles.skillDescription}>
                {skillGroup.description}
              </p>
              
              <ul className={styles.skillList}>
                {skillGroup.items.map((item, i) => (
                  <li key={i} className={styles.skillItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
