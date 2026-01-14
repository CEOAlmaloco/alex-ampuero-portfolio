import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import levelUpGamerImage from '../../assets/levelup-gamer-preview.png';
import styles from './Projects.module.css';

const projects = [
  {
    id: 'levelup-gamer',
    title: 'LevelUp Gamer',
    category: 'Fullstack / E-commerce Gaming',
    problem: 'I design and develop a gaming store for Chile that required nationwide sales, loyalty programs, referrals, automatic discounts for students, and gaming event management with geolocation.',
    solution: 'Scalable e-commerce with 14 Spring Boot microservices, designed and iterated end-to-end from backend architecture to frontend and mobile integration. React + TypeScript frontend with gamer UX, native Android app, gamification system (LevelUp points), referrals with rotating codes, automatic discounts, advanced filters, persistent cart, post-purchase reviews, WhatsApp support, and event map with geolocation.',
    stack: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'Docker', 'AWS S3', 'Kotlin', 'Jetpack Compose', 'JWT', 'OpenFeign'],
    impact: 'Production platform with nationwide shipping in Chile, organic growth via referrals, tiered loyalty program, 9 active gaming categories and community participating in events with rewards.',
    links: { demo: '#', github: 'https://github.com/CEOAlmaloco/Fullstack_Ecommerce' }
  }
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className="section-title">Professional Work</h2>
          <p className="text-body-secondary max-w-2xl">
            Production systems with measurable business and operational impact.
          </p>
        </div>

        <div className={styles.projectsList}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={styles.projectCard}
            >
              <div className={styles.projectContent}>
                <div>
                  <span className={styles.category}>
                    {project.category}
                  </span>
                  <h3 className={styles.title}>
                    {project.title}
                  </h3>
                  
                  <div className={styles.details}>
                    <div className={styles.detailItem}>
                      <strong className={styles.detailLabel}>Business Problem</strong>
                      <p className={styles.detailText}>{project.problem}</p>
                    </div>
                    <div className={styles.detailItem}>
                      <strong className={styles.detailLabel}>Technical Solution</strong>
                      <p className={styles.detailText}>{project.solution}</p>
                    </div>
                    <div className={styles.detailItem}>
                      <strong className={styles.detailLabel}>Business Impact</strong>
                      <p className={`${styles.detailText} ${styles.detailTextHighlight}`}>{project.impact}</p>
                    </div>
                  </div>
                </div>

                <div className={styles.techStack}>
                  {project.stack.map((tech) => (
                    <span key={tech} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className={styles.projectLinks}>
                  {project.links.demo === '#' ? (
                    <span className={styles.privateDemo}>
                      Private Demo
                    </span>
                  ) : (
                    <a href={project.links.demo} className={styles.demoLink}>
                      Live Demo <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                  {project.links.github !== '#' && (
                    <a href={project.links.github} className={styles.githubLink}>
                      Code <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <div className={styles.projectVisual}>
                <img 
                  src={levelUpGamerImage} 
                  alt={`${project.title} interface preview`}
                  className={styles.projectImage}
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
