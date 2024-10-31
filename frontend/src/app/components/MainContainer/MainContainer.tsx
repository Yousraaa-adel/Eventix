import React, { ReactNode } from 'react';
import styles from './MainContainer.module.css';

interface MainContainer {
  children: ReactNode;
}

function MainContainer({ children }: MainContainer) {
  return <div className={styles.mainContainer}>{children}</div>;
}

export default MainContainer;
