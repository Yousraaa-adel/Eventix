import React, { useState } from 'react';
import Choices from '../Choices/Choices';
import styles from './TimeFilter.module.css';

interface TimeFilterProps {
  initialProperty?: 'variant-2' | 'default';
}

function TimeFilter({ initialProperty }: TimeFilterProps) {
  const [property1, setProperty1] = useState<'variant-2' | 'default'>(
    initialProperty || 'default'
  );

  const handleClick = (value: 'variant-2' | 'default') => {
    setProperty1(value);
  };

  return (
    <div className={styles.timeFilter}>
      <Choices
        className={styles.choicesInstance}
        onClick={() => handleClick('default')}
        property1={property1 === 'default' ? 'selected' : 'default'}
        text="This Week"
      />
      <Choices
        className={styles.choicesInstance}
        onClick={() => handleClick('variant-2')}
        property1={property1 === 'variant-2' ? 'selected' : 'default'}
        text="This Month"
      />
    </div>
  );
}

export default TimeFilter;
