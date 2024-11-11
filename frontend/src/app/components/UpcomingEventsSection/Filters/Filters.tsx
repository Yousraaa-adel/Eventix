'use client';

import React, { useState } from 'react';
import Choices from './Choices/Choices';
import TimeFilter from './TimeFilter/TimeFilter';
import styles from './Filters.module.css';

interface FiltersProps {
  isCategoryFilter: boolean; // Accept the prop
  onChoiceClick: (choice: string) => void; // Callback to update the selected filter choice
}

function Filters({ isCategoryFilter, onChoiceClick }: FiltersProps) {
  // State to track the selected choice (category or area)
  const [selectedChoice, setSelectedChoice] = useState<string>('All');

  // Use the prop directly instead of local state
  const filterType = isCategoryFilter; // true = categories, false = areas

  // Define the available choices based on the filter type (category or area)
  const categoryChoices = ['All', 'educational', 'entertainment', 'workshop'];
  const areaChoices = ['All', 'Maadi', 'Downtown', 'Zamalek'];

  // Select the appropriate list of choices based on the current filter type
  const choices = filterType ? categoryChoices : areaChoices;

  return (
    <div className={styles.filters}>
      <div className={styles.upcomingEventsFrame}>
        {/* Dynamically render choices based on filter type */}
        {choices.map((choice) => (
          <Choices
            key={choice}
            className={styles.designComponentInstanceNode}
            property1={selectedChoice === choice ? 'selected' : 'default'}
            text={choice}
            onClick={() => {
              setSelectedChoice(choice); // Update local state for UI
              onChoiceClick(choice); // Trigger parent callback to fetch filtered events
            }}
          />
        ))}
      </div>

      {/* <TimeFilter initialProperty="default" /> */}
    </div>
  );
}

export default Filters;
