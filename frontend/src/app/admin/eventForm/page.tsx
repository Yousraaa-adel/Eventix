'use client';

import { useState } from 'react';
import axios from 'axios';
import styles from './page.module.css';
import AdminNavbar from '@/app/components/admin/adminNavbar/adminNavbar';
import MainContainer from '@/app/components/MainContainer/MainContainer';
import PageTopSection from '@/app/components/PageTopSection/PageTopSection';
import AdminSideLabel from '@/app/components/admin/AdminSideLabel/AdminSideLabel';
import EventCard from '@/app/components/EventsCardsContainer/EventCard/EventCard';
import PrimaryButton from '@/app/components/PrimaryButton/PrimaryButon';
import Link from 'next/link';

const EventForm = () => {
  const [eventName, setEventName] = useState('');
  const [category, setCategory] = useState('');
  const [eventPrice, setEventPrice] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');
  const [brief, setBrief] = useState('');
  const [ticketsBooked, setTicketsBooked] = useState('');
  const [status, setStatus] = useState('upcoming');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const eventData = {
      eventName,
      category,
      eventPrice,
      date,
      time,
      location,
      image,
      brief,
      ticketsBooked,
      status,
    };

    try {
      const response = await axios.post(
        'http://localhost:5000/api/v1/events',
        eventData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Event added:', response.data);

      // Reset fields after successful submission
      resetFields();
    } catch (error) {
      console.error('Error adding event:', error);
      // Handle error, e.g., show a notification or alert
    }
  };

  const resetFields = () => {
    setEventName('');
    setCategory('');
    setEventPrice('');
    setDate('');
    setTime('');
    setLocation('');
    setImage('');
    setBrief('');
    setTicketsBooked('0');
    setStatus('upcoming'); // Reset to default status
  };

  return (
    <section className={styles.eventForm}>
      <AdminNavbar />
      <PageTopSection isEventForm={true} />
      <MainContainer>
        <div className={styles.eventFormTop}>
          <AdminSideLabel labelText="Create Event" />
        </div>
        <div className={styles.eventFormBigCont}>
          <div className={styles.eventFormCont}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.fieldBox}>
                <div className={styles.placeholderTitle}>Event Name</div>
                <input
                  name="eventName"
                  type="text"
                  required
                  value={eventName} // Bind to state
                  placeholder="Enter event name"
                  onChange={(e) => setEventName(e.target.value)} // Set state directly
                />
              </div>
              <div className={styles.fieldBox}>
                <div className={styles.placeholderTitle}>Category</div>
                <input
                  name="category"
                  value={category} // Bind to state
                  placeholder="Enter event category"
                  onChange={(e) => setCategory(e.target.value)} // Set state directly
                />
              </div>
              <div className={styles.fieldBox}>
                <div className={styles.placeholderTitle}>Event Date</div>
                <input
                  name="date"
                  type="date"
                  value={date} // Bind to state
                  onChange={(e) => setDate(e.target.value)} // Set state directly
                />
              </div>
              <div className={styles.fieldBox}>
                <div className={styles.placeholderTitle}>Event Time</div>
                <input
                  name="time"
                  type="time"
                  value={time} // Bind to state
                  onChange={(e) => setTime(e.target.value)} // Set state directly
                />
              </div>
              <div className={styles.fieldBox}>
                <div className={styles.placeholderTitle}>Price/Person</div>
                <input
                  name="eventPrice"
                  type="number"
                  value={eventPrice} // Bind to state
                  placeholder="Enter event price"
                  onChange={(e) => setEventPrice(e.target.value)} // Set state directly
                />
              </div>
              <div className={styles.fieldBox}>
                <div className={styles.placeholderTitle}>Location</div>
                <input
                  name="location"
                  value={location} // Bind to state
                  placeholder="Enter event location"
                  onChange={(e) => setLocation(e.target.value)} // Set state directly
                />
              </div>
              <div className={styles.fieldBox}>
                <div className={styles.placeholderTitle}>Tickets Booked</div>
                <input
                  name="ticketsBooked"
                  type="number"
                  placeholder="Enter event tickets booked"
                  value={ticketsBooked} // Bind to state
                  onChange={(e) => setTicketsBooked(e.target.value)} // Set state directly
                />
              </div>
              <div className={styles.fieldBox}>
                <div className={styles.placeholderTitle}>Event Status</div>
                <input
                  name="status"
                  placeholder="Enter event status"
                  value={status} // Bind to state
                  onChange={(e) => setStatus(e.target.value)} // Set state directly
                />
              </div>
              <div className={styles.fieldBox}>
                <div className={`${styles.placeholderTitle} ${styles.brief}`}>
                  Brief
                </div>
                <textarea
                  name="brief"
                  placeholder="Enter event brief"
                  value={brief} // Bind to state
                  onChange={(e) => setBrief(e.target.value)} // Set state directly
                />
              </div>
              <div className={styles.addEventBtn}>
                <button type="submit" className={styles.addEventBtn}>
                  Add Event
                </button>
              </div>
            </form>
          </div>
          <div className={styles.previewCont}>
            <EventCard
              eventCategory={category}
              eventName={eventName}
              eventDate={date}
              eventTime={time}
              eventLocation={location}
              eventPrice={eventPrice}
              coverImgSrc="/images/rectangleImage.png"
              iconImageSrc={{
                calendar: '/images/calendarIcon.jpg',
                time: '/images/timeIcon.jpg',
                location: '/images/locationIcon.jpg',
                ticket: '/images/ticketIcon.png',
              }}
              iconImgAlt={{
                calendar: 'Calendar Icon',
                time: 'Time Icon',
                location: 'Location Icon',
                ticket: 'Ticket Icon',
              }}
              eventBrief={brief}
            />
          </div>
        </div>
      </MainContainer>
    </section>
  );
};

export default EventForm;
