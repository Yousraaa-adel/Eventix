import React, { ReactNode } from 'react';
import styles from './SideLabel.module.css';

interface SideLabelProp {
  labelText: string;
}

function SideLabel({ labelText }: SideLabelProp) {
  return (
    <>
      <div className={styles.label}>
        <div className={styles.wrapper}>{labelText}</div>
      </div>
    </>
  );
}

export default SideLabel;
