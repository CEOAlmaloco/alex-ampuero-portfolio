import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Toast.module.css';

const Toast = ({ show, message, isError = false }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`${styles.toast} ${isError ? styles.toastError : ''}`}
          role="status"
          aria-live="polite"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
