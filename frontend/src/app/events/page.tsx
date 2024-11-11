'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
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
  const [events, setEvents] = useState([]); // State to hold the fetched events
  const [loading, setLoading] = useState(true); // State to track loading status

  // Function to fetch events from the backend
  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/events'); // API endpoint to get all events

      const fetchedEvents = response.data.data.events;

      if (JSON.stringify(events) !== JSON.stringify(fetchedEvents)) {
        setEvents(fetchedEvents); // Update only if the data has changed
      }

      console.log('Fetched Events:', fetchEvents); // Log fetched data before setting state

      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error('Error fetching events:', error);
      setLoading(false); // Set loading to false in case of error
    }
  };

  // Fetch events when the component mounts
  useEffect(() => {
    fetchEvents();
  }, []); // Empty dependency array to run once when the component mounts

  useEffect(() => {
    console.log('Updated events:', events); // This will log the events after state is updated
  }, [events]);

  return (
    <>
      <Navbar />
      <section className={styles.findEventType}>
        <PageTopSection labelText="An Event For Everyone" />
        <MainContainer>
          <SectionTop
            labelText="Find Your Type of Event"
            isCategoryFilter={true}
          />
          {/* Show loading spinner if events are being fetched */}
          {loading ? (
            <div>Loading...</div>
          ) : (
            // If events are fetched, pass them to the EventsCardsContainer
            <EventsCardsContainer events={events} />
          )}
          <FindEventsAreaSection isCategoryFilter={false} />
          <SideUpcomingSection />
        </MainContainer>
      </section>
    </>
  );
}

export default Events;
