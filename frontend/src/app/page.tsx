'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/NavBar/NavBar';
import MainContainer from './components/MainContainer/MainContainer';
import HeroSection from './components/HeroSection/HeroSection';
import UpcomingEventsSection from './components/UpcomingEventsSection/UpcomingEventsSection';
import WhyUsSection from './components/WhyUsSection/WhyUsSectin';
import Footer from './components/Footer/Footer';
import styles from './page.module.css';
import { EventCardProps } from './components/EventsCardsContainer/EventCard/EventCard';

type Home = {
  onChoiceClick: (choice: string) => void;
};

export default function Home({ onChoiceClick }: Home) {
  const [events, setEvents] = useState<EventCardProps[]>([]); // State to hold the fetched events
  const [loading, setLoading] = useState(true); // State to track loading status
  const [selectedCategory, setSelectedCategory] = useState('All'); // Track selected category

  // Function to fetch events from the backend
  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/events'); // API endpoint to get all events

      const fetchedEvents = response.data.data.events;

      if (JSON.stringify(events) !== JSON.stringify(fetchedEvents)) {
        setEvents(fetchedEvents); // Update only if the data has changed
      }

      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error('Error fetching events:', error);
      setLoading(false); // Set loading to false in case of error
    }
  };

  // Filter the events based on the selected category
  const filteredEvents =
    selectedCategory === 'All'
      ? events
      : events.filter((event) => event.category === selectedCategory);

  // Fetch events when the component mounts
  useEffect(() => {
    fetchEvents();
  }, []); // Empty dependency array to run once when the component mounts

  // Handle category selection from the Filters component
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category); // Update the selected category
  };

  return (
    <main className={styles.main}>
      <Navbar />
      <HeroSection />
      <UpcomingEventsSection
        events={filteredEvents}
        onChoiceClick={handleCategoryChange}
      />
      <WhyUsSection />
      <Footer />
    </main>
  );
}
