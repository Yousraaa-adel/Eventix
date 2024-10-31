import { Children } from 'react';
import styles from './SectionLabel.module.css';

interface SectionLabelProps {
  labelText: string;
}

function SectionLabel({ labelText }: SectionLabelProps) {
  return (
    <div className={styles.SectionTopLabelDix}>
      <p className={styles.SectionTopLabelText}>{labelText}</p>
    </div>
  );
}

export default SectionLabel;
