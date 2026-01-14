import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Toast from '../Toast/Toast';
import SocialLink from '../SocialLink/SocialLink';
import { CONTACT_EMAIL, SOCIAL_LINKS, TOAST_MESSAGES } from '../../constants/contact';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState(TOAST_MESSAGES.copySuccess);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const navLinks = [
    { name: 'Work', href: '#projects' },
    { name: 'Stack', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <Toast show={showToast} message={toastMessage} isError={isError} />
      <nav 
        className={`${styles.nav} ${scrolled ? styles.navScrolled : styles.navTransparent}`}
      >
      <div className={styles.navContainer}>
        <a href="#" className={styles.logo}>
          AA
        </a>

        <div className={styles.desktopMenu}>
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className={styles.navLink}
            >
              {link.name}
            </a>
          ))}
          <div className={styles.divider} />
          <div className={styles.socialIcons}>
            <SocialLink
              href={SOCIAL_LINKS.github}
              icon={Github}
              label="Visit GitHub profile"
              className={styles.socialIcon}
              iconSize="w-4 h-4"
            />
            <SocialLink
              href={SOCIAL_LINKS.linkedin}
              icon={Linkedin}
              label="Visit LinkedIn profile"
              className={styles.socialIcon}
              iconSize="w-4 h-4"
            />
          </div>
        </div>

        <button 
          className={styles.mobileMenuButton}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={styles.mobileMenuOverlay}
            >
              <div className={styles.mobileMenuContent}>
                {navLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.href}
                    className={styles.mobileNavLink}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <div className={styles.mobileDivider} />
                <div className={styles.mobileSocialIcons}>
                  <SocialLink
                    href={SOCIAL_LINKS.github}
                    icon={Github}
                    label="Visit GitHub profile"
                    className={styles.mobileSocialIcon}
                  />
                  <SocialLink
                    href={SOCIAL_LINKS.linkedin}
                    icon={Linkedin}
                    label="Visit LinkedIn profile"
                    className={styles.mobileSocialIcon}
                  />
                  <SocialLink
                    icon={Mail}
                    label="Copy email to clipboard"
                    className={styles.mobileSocialIcon}
                    onClick={handleCopyEmail}
                    isButton
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
