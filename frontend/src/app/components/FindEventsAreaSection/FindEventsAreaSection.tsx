'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './FindEventsAreaSection.module.css';
import MainContainer from '../MainContainer/MainContainer';
import EventsCardsContainer from '../EventsCardsContainer/EventsCardsContainer';
import SectionTop from '../SectionTop/SectionTop';

interface FindEventsAreaSectionProps {
  isCategoryFilter?: boolean; // Accept the prop
}

function FindEventsAreaSection({
  isCategoryFilter,
}: FindEventsAreaSectionProps) {
  const [showButton, setShowButton] = useState(false);

  const [events, setEvents] = useState([]); // State to hold the fetched events
  const [loading, setLoading] = useState(true); // State to track loading status
  const [selectedChoice, setSelectedChoice] = useState<string>('All'); // Default choice
  const [filteredEvents, setFilteredEvents] = useState([]); // To store filtered events

  // Function to fetch filtered events based on category or location
  const fetchFilteredEvents = async (filter: string) => {
    try {
      let url = 'http://localhost:5000/api/v1/events'; // Default API endpoint

      // Modify URL based on selected filter (category or location)
      if (filter !== 'All') {
        const filterType = isCategoryFilter ? 'category' : 'location';
        url += `?${filterType}=${filter}`;
      }

      // console.log('Fetching data from URL:', url);

      // Fetch filtered events from the backend
      const response = await axios.get(url);
      setFilteredEvents(response.data.data.events); // Update filtered events
    } catch (error) {
      console.error('Error fetching filtered events:', error);
    }
  };

  // Handle when a filter choice is clicked
  const handleChoiceClick = (choice: string) => {
    // console.log('Choice clicked:', choice); // Check if this gets logged
    setSelectedChoice(choice); // Update selected choice
    fetchFilteredEvents(choice); // Fetch filtered events based on the selected filter
  };

  useEffect(() => {
    fetchFilteredEvents('All'); // Fetch all events initially
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <section className={styles.findEventsAreaSection}>
      <SectionTop
        labelText="Find Events in Your Area"
        isCategoryFilter={isCategoryFilter}
        onChoiceClick={handleChoiceClick}
      />
      <EventsCardsContainer events={filteredEvents} showButton={showButton} />
    </section>
  );
}

export default FindEventsAreaSection;
