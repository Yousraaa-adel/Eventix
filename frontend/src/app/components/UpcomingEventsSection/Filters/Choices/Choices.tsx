import React, { useState, useEffect } from 'react';
import styles from './Choices.module.css';

interface ChoicesProps {
  text?: string;
  className?: string;
  property1?: 'default' | 'hover' | 'selected';
  onClick?: () => void;
}

function Choices({
  text = 'All',
  className,
  property1 = 'default',
  onClick,
}: ChoicesProps) {
  const [currentProperty, setCurrentProperty] = useState<'default' | 'hover' | 'selected'>(property1);

  useEffect(() => {
    setCurrentProperty(property1);
  }, [property1]);

  const handleMouseEnter = () => {
    if (currentProperty === 'default') {
      setCurrentProperty('hover');
    }
  };

  const handleMouseLeave = () => {
    if (currentProperty === 'hover') {
      setCurrentProperty('default');
    }
  };

  const handleClick = () => {
    if (currentProperty === 'hover') {
      setCurrentProperty('selected');
    } else if (currentProperty === 'selected') {
      setCurrentProperty('default');
    }
    // Call the onClick prop if provided
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={`${styles.choices} ${styles[currentProperty]} ${className || ''}`}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
    >
      <div className={styles.all}>{text}</div>
    </div>
  );
}

export default Choices;
