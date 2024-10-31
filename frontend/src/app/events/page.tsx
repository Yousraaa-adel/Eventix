'use client';

import { useState } from 'react';
import Navbar from '../components/NavBar/NavBar';
import MainContainer from '../components/MainContainer/MainContainer';
import PageTopSection from '../components/PageTopSection/PageTopSection';
import SectionTop from '../components/SectionTop/SectionTop';
import Filters from '../components/UpcomingEventsSection/Filters/Filters';
import styles from './page.module.css';
import EventsCardsContainer from '../components/EventsCardsContainer/EventsCardsContainer';
import FindEventsAreaSection from '../components/FindEventsAreaSection/FindEventsAreaSection';
import SideUpcomingSection from '../components/SideUpcomingSection/SideUpcomingSection';

function Events() {
  const [showButton, setShowButton] = useState(false);

  return (
    <>
      <Navbar />
      <section className={styles.findEventType}>
        <PageTopSection labelText="An Event For Everyone" />
        <MainContainer>
          <SectionTop labelText="Find Your Type of Event" />
          <EventsCardsContainer showButton={showButton} />
          <FindEventsAreaSection />
          <SideUpcomingSection />
        </MainContainer>
      </section>
    </>
  );
}

export default Events;
