import styles from './Modal.module.scss';

import { ReactNode, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { AnimatePresence, motion } from 'framer-motion';

export interface ModalProps {
  onClose(): void;
  display: boolean;
  children: ReactNode;
}

const Modal = ({ display, onClose, children }) => {
  useEffect(() => {
    if (display) {
      document.body.classList.add('noscroll');
    } else {
      document.body.classList.remove('noscroll');
    }
  }, [ display ]);

  return (
    <AnimatePresence>
      {display && <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: 'linear', duration: 0.3 }}
        key="modal"
      >
        <div className={styles.modal}>
          <div className={styles.close} onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} className={styles.alignFix}/>
          </div>
          {children}
        </div>

        <div className={styles.overlay} onClick={onClose} />
      </motion.div>}
    </AnimatePresence>
  );
};

export default Modal;
