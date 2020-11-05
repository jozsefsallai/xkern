import styles from './Modal.module.scss';

import { ReactNode, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { AnimatePresence, motion } from 'framer-motion';

export interface ModalProps {
  onClose(): void;
  children: ReactNode;
}

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    document.body.classList.add('noscroll');
    return () => document.body.classList.remove('noscroll');
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: 'linear', duration: 0.2 }}
        key="modal"
      >
        <div className={styles.modal}>
          <div className={styles.close} onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </div>

          {children}
        </div>

        <div className={styles.overlay} onClick={onClose} />
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
