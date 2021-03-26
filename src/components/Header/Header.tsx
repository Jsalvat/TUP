import React from 'react';
import { connect } from 'react-redux';
import styles from './header.module.scss';
import { AppState } from '../../store/store';
import { SelectOpenRegisterLoginModal } from '../../store/registerLogin/types';
import registerLoginSlice from '../../store/registerLogin/registerLoginSlice';

interface HeaderProps {
  phantomElement?: boolean;
  openModal: (data: SelectOpenRegisterLoginModal) => void;
}

const UnconnectedHeader: React.FC<HeaderProps> = ({
  phantomElement,
  openModal,
}) => {
  const open = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    openModal({
      title: 'registro',
      text: <div>asd</div>,
    });
  };
  return (
    <div
      className={
        phantomElement ? styles.phantomContainer : styles.headerContainer
      }
    >
      <div className={styles.textContainer}>
        <span className={styles.title}>Entonces que</span>
        <span className={styles.subtitle}>{'Qué harías tu'}</span>
      </div>
      <div className={styles.registerLoginContainer}>
        <button onClick={open}>Registro</button>|
        <button onClick={open}>Login</button>
      </div>
    </div>
  );
};

const Header = connect(
  (state: AppState) => ({
    loading: state.userAuth.loading,
    test: state.userAuth.user,
  }),
  {
    openModal: registerLoginSlice.actions.selectOpenModal,
  }
)(UnconnectedHeader);

export default Header;
