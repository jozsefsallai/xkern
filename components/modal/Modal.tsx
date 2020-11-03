import styles from './Modal.module.scss';

import { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export interface ModalProps {
  onClose(): void;
  children: ReactNode;
}

const Modal = ({ onClose, children }) => {
  return (
    <>
      <div className={styles.modal}>
        <div className={styles.close} onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </div>

        {children}
      </div>

      <div className={styles.overlay} onClick={onClose} />
    </>
  );
};

export default Modal;
