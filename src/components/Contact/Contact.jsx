import React, { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import Toast from '../Toast/Toast';
import { CONTACT_EMAIL, SOCIAL_LINKS, TOAST_MESSAGES } from '../../constants/contact';
import styles from './Contact.module.css';

const Contact = () => {
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
      <section id="contact" className={styles.contactSection}>
        <div className={styles.container}>
          <h2 className="section-title mb-8">Let's Talk</h2>
          <p className={styles.description}>
            I'm interested in backend-focused full stack roles where I can contribute
            technical depth and product-driven solutions.
          </p>
          
          <div className={styles.contactActions}>
            <button 
              onClick={handleCopyEmail}
              className="btn-primary"
              aria-label="Copy email address to clipboard"
            >
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span>{CONTACT_EMAIL}</span>
            </button>
            <a 
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              aria-label="Visit LinkedIn profile"
            >
              <Linkedin className="w-4 h-4 flex-shrink-0" />
              <span>LinkedIn</span>
            </a>
          </div>

        <footer className={styles.footer}>
          <p className={styles.footerText}>
            © 2026 · Built with React & Tailwind
          </p>
          <div className={styles.footerLinks}>
            <a 
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
              aria-label="Visit GitHub profile"
            >
              <Github className={styles.githubIcon} />
              Github
            </a>
          </div>
        </footer>
      </div>
    </section>
    </>
  );
};

export default Contact;
