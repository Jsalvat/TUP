import React, { ReactNode } from 'react';
import styles from './modal.module.scss';

interface ModalContainerProps {
  isOpen: boolean;
  children: ReactNode;
}

const ModalContainer: React.FC<ModalContainerProps> = ({
  isOpen,
  children,
}) => (
  <div className={`${styles.container} ${isOpen ? styles.isOpen : ''}`}>
    {children}
  </div>
);

export default ModalContainer;
