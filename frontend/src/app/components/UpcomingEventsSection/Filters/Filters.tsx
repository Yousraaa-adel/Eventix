'use client';

import React, { useState } from 'react';
import Choices from './Choices/Choices';
import TimeFilter from './TimeFilter/TimeFilter';
import styles from './Filters.module.css';

function Filters() {
  const [selectedChoice, setSelectedChoice] = useState('All');

  const handleChoiceClick = (choice: string) => {
    setSelectedChoice(choice);
  };

  return (
    <div className={styles.filters}>
      <div className={styles.upcomingEventsFrame}>
        <Choices
          className={styles.designComponentInstanceNode}
          property1={selectedChoice === 'All' ? 'selected' : 'default'}
          text="All"
          onClick={() => handleChoiceClick('All')}
        />
        <Choices
          className="design-component-instance-node"
          property1={selectedChoice === 'Educational' ? 'selected' : 'default'}
          text="Educational"
          onClick={() => handleChoiceClick('Educational')}
        />
        <Choices
          className="design-component-instance-node"
          property1={
            selectedChoice === 'Entertainment' ? 'selected' : 'default'
          }
          text="Entertainment"
          onClick={() => handleChoiceClick('Entertainment')}
        />
        <Choices
          className="design-component-instance-node"
          property1={selectedChoice === 'Workshops' ? 'selected' : 'default'}
          text="Workshops"
          onClick={() => handleChoiceClick('Workshops')}
        />
      </div>

      {/* <TimeFilter initialProperty="default" /> */}
    </div>
  );
}

export default Filters;
