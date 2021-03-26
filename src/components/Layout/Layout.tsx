import React, { ReactNode } from 'react';
import styles from './layout.module.scss';
import Header from '../Header/Header';
import RegisterLoginModal from '../Modal/RegisterLoginModal';

export interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.generalContainer}>
      <Header />
      <Header phantomElement />
      <div className={styles.menu}></div>
      <main className={styles.layoutContainer}>{children}</main>
      registerLoginModal
      <RegisterLoginModal />
    </div>
  );
};

export default Layout;
