'use client';

import styles from './page.module.css';
import AdminNavbar from '@/app/components/admin/adminNavbar/adminNavbar';
import MainContainer from '@/app/components/MainContainer/MainContainer';
import AdminSideLabel from '@/app/components/admin/AdminSideLabel/AdminSideLabel';
import AdminTable from '@/app/components/admin/AdminTable/AdminTable';
import PrimaryButton from '@/app/components/PrimaryButton/PrimaryButon';
import { useEffect, useState } from 'react';
import axios from 'axios';

function EventMang() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/events');
        console.log('Response data:', response.data.data.allEvents);
        setEvents(response.data.data.allEvents);
      } catch (error) {
        setError('Error fetching events data');
        console.error(error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchEvents();
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>; // Show loading state
  // }

  // if (error) {
  //   return <div>{error}</div>; // Show error message
  // }

  return (
    <section className={styles.eventMan}>
      <AdminNavbar />
      <MainContainer>
        <div className={styles.eventsListPart}>
          <div className={styles.eventListTop}>
            <AdminSideLabel labelText="Events List" />
            <div className={styles.addEventBtn}>
              <PrimaryButton href="/admin/eventForm" children="Add Event" />
            </div>
          </div>
          <div className={styles.tableSection}>
            <AdminTable
              events={events}
              isEventMang={true}
              attendeeNameTitle="Attendee Name"
              eventNameTitle="Event Name"
              ticketsBookedTitle="Tickets Sold"
              dateTitle="Date"
            />
          </div>
        </div>
      </MainContainer>
    </section>
  );
}

export default EventMang;
