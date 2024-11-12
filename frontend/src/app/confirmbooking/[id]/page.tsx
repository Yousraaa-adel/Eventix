'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';
import styles from '../page.module.css';
import Navbar from '@/app/components/NavBar/NavBar';
import PageTopSection from '@/app/components/PageTopSection/PageTopSection';
import MainContainer from '@/app/components/MainContainer/MainContainer';
import { EventCardProps } from '@/app/components/EventsCardsContainer/EventCard/EventCard';

function ConfirmBookingForm() {
  const router = useRouter();
  const [eventData, setEventData] = useState<EventCardProps | null>(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const searchParams = useSearchParams();
  const params = useParams();

  if (!params.id && !searchParams.get('ticketCount')) {
    return <div>Loading...</div>;
  }

  const eventId = params.id;
  const ticketsBooked = searchParams.get('ticketCount');

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/events/${eventId}`
        );

        setEventData(response.data.data.event);
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };

    if (eventId) fetchEventData();
  }, [eventId]);

  const formatDate = (date: string | undefined) => {
    if (!date) return 'Invalid Date'; // Fallback if date is undefined or null

    const dateObj = new Date(date);
    if (isNaN(dateObj.getTime())) {
      return 'Invalid Date'; // Return a fallback if date is invalid
    }

    return dateObj.toISOString().split('T')[0]; // Format as YYYY-MM-DD
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior

    console.log('Form submitted');

    // Perform the form submission logic here, like making the POST request
    // For example:
    // await axios.post('/api/confirmBooking', { firstName, lastName, email, phone });
    try {
      const response = await axios.post(`http://localhost:5000/api/v1/orders`, {
        firstName,
        lastName,
        email,
        phoneNumber,
        eventId,
        ticketsBooked,
      });

      console.log('Booking successful:', response.data);

      localStorage.setItem('eventName', eventData?.eventName);

      // Redirect to another page if needed
      router.push(`/bookingsuccessful`);
    } catch (error) {
      console.log('Error submitting the form:', error);
    }
  };

  return (
    <>
      <Navbar />
      <section className={styles.confirmBooking}>
        <PageTopSection labelText={eventData?.eventName} />
        <MainContainer>
          <div className={styles.smallContainer}>
            <form className={styles.bookingForm} onSubmit={handleSubmit}>
              <div className={styles.fieldsCont}>
                <div className={styles.box}>
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name={firstName}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className={styles.box}>
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name={lastName}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className={styles.box}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="id"
                    name={email}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={styles.box}>
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name={phoneNumber}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.ticketOverviewCont}>
                <span>Details Overview</span>
                <div className={styles.detailsCont}>
                  <div className={styles.detailsBox}>
                    <span className={styles.boxTitle}>Tickets Booked</span>
                    <span>{ticketsBooked} Ticket</span>
                  </div>
                  <div className={styles.detailsBox}>
                    <span className={styles.boxTitle}>Event Name</span>
                    <span>{eventData?.eventName}</span>
                  </div>
                  <div className={styles.detailsBox}>
                    <span className={styles.boxTitle}>Location</span>
                    <span>{eventData?.location}</span>
                  </div>
                  <div className={styles.detailsBox}>
                    <span className={styles.boxTitle}>Date & Time</span>
                    <span>
                      {formatDate(eventData?.date)} - {eventData?.time}
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.confirmBtn}>
                <button type="submit">Confirm Booking</button>
              </div>
            </form>
          </div>
        </MainContainer>
        {/* <Footer /> */}
      </section>
    </>
  );
}

export default ConfirmBookingForm;
