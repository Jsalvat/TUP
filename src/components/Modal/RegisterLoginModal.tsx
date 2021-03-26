import React, { ReactNode } from 'react';
import { connect } from 'react-redux';
import registerLoginSlice from '../../store/registerLogin/registerLoginSlice';
import { AppState } from '../../store/store';
import ModalContainer from './Modal';
import styles from './registerLoginModal.module.scss';

interface RegisterLoginModalProps {
  isOpen: boolean;
}

const UnconnectedRegisterLoginModal: React.FC<RegisterLoginModalProps> = ({
  isOpen,
}) => (
  <ModalContainer isOpen={isOpen}>
    <div className={styles.loginModalContainer}>
      <div className={styles.titlecontainer}>Registro</div>
      <span>Nombre</span>
      <span>Primer Apellido</span>
      <span>Segundo Apellido</span>
      <span>Email</span>
      <span>Contraseña</span>
      <span>Contraseña</span>
    </div>
  </ModalContainer>
);

const RegisterLoginModal = connect((state: AppState) => ({
  isOpen: state.registerLogin.isOpen,
}))(UnconnectedRegisterLoginModal);

export default RegisterLoginModal;
