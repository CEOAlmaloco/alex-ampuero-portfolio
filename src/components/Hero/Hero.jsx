import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Toast from '../Toast/Toast';
import SocialLink from '../SocialLink/SocialLink';
import { CONTACT_EMAIL, SOCIAL_LINKS, TOAST_MESSAGES } from '../../constants/contact';
import styles from './Hero.module.css';

const Hero = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState(TOAST_MESSAGES.copySuccess);
  const [isError, setIsError] = useState(false);

  const handleCopyEmail = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setToastMessage(TOAST_MESSAGES.copySuccess);
      setIsError(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      console.error('Failed to copy email:', err);
      setToastMessage(TOAST_MESSAGES.copyError);
      setIsError(true);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <>
      <Toast show={showToast} message={toastMessage} isError={isError} />
      <section id="home" className={styles.heroSection}>
      <div className={styles.backgroundGradient} />
      <div className={styles.lightOrb1} />
      <div className={styles.lightOrb2} />
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className={styles.title}>
            Alex Ampuero
          </h1>
          
          <div className={styles.badge}>
            <span className={styles.badgeText}>
              Computer Engineer · Backend-Oriented Full Stack Developer
            </span>
          </div>

          <p className={styles.description}>
            I build scalable web applications with measurable business impact,
            with a strong focus on backend architecture, APIs, and data-driven systems.
          </p>

          <div className={styles.actions}>
            <a 
              href="#projects"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <span>View Professional Work</span>
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </a>
            <a 
              href="#contact"
              className="btn-secondary inline-flex items-center justify-center"
            >
              <span>Contact Me</span>
            </a>
          </div>

          <div className={styles.socialLinks}>
            <SocialLink
              href={SOCIAL_LINKS.github}
              icon={Github}
              label="Visit GitHub profile"
              className={styles.socialLink}
            />
            <SocialLink
              href={SOCIAL_LINKS.linkedin}
              icon={Linkedin}
              label="Visit LinkedIn profile"
              className={styles.socialLink}
            />
            <SocialLink
              icon={Mail}
              label="Copy email to clipboard"
              className={styles.socialLink}
              onClick={handleCopyEmail}
              isButton
            />
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default Hero;
