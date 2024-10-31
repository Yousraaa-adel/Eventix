'use client';

import { useState } from 'react';
import styles from './FindEventsAreaSection.module.css';
import MainContainer from '../MainContainer/MainContainer';
import EventsCardsContainer from '../EventsCardsContainer/EventsCardsContainer';
import SectionTop from '../SectionTop/SectionTop';

function FindEventsAreaSection() {
  const [showButton, setShowButton] = useState(false);

  return (
    <section className={styles.findEventsAreaSection}>
      <SectionTop labelText="Find Events in Your Area" />
      <EventsCardsContainer showButton={showButton} />
    </section>
  );
}

export default FindEventsAreaSection;
