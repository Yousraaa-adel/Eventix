'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';
import styles from '../page.module.css';
import Navbar from '../../components/NavBar/NavBar';
import PageTopSection from '../../components/PageTopSection/PageTopSection';
import MainContainer from '../../components/MainContainer/MainContainer';
import SideLabel from '../../components/SideLabel/SideLabel';
import IconInfo from '../../components/EventsCardsContainer/EventCard/IconInfo/IconInfo';
import { EventCardProps } from '@/app/components/EventsCardsContainer/EventCard/EventCard';

type Props = {
  params: {
    id: string;
  };
};

function EventInfo({ params }: Props) {
  const { id } = params; // Extract the id from the query params
  const [eventData, setEventData] = useState<EventCardProps | null>(null);
  const [loading, setLoading] = useState(true);

  const [count, setCount] = useState(1);

  const handleIncrement = () => setCount((prevCount) => prevCount + 1);
  const handleDecrement = () =>
    setCount((prevCount) => (prevCount > 1 ? prevCount - 2 : 1)); // Prevent negative values

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/events/${id}`
        );

        setEventData(response.data.data.event);
      } catch (error) {
        console.error('Error fetching event data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchEventData();
  }, [id]);

  const formatDate = (date: string | Date): string => {
    // If the date is already a string, return it as is.
    if (typeof date === 'string') {
      return date.split('T')[0]; // Ensure it's in y-m-d format
    }

    // If the date is a Date object, format it to y-m-d
    const dateObj = new Date(date);
    return dateObj.toISOString().split('T')[0];
  };

  // console.log('Event data:', eventData);

  if (loading) return <p>Loading event data...</p>;
  if (!eventData) return <p>Event not found.</p>;

  return (
    <>
      <Navbar />
      <section className={styles.eventInfo}>
        <PageTopSection labelText={eventData.eventName} />
        <MainContainer>
          <div className={styles.eventDetailsCont}>
            <div className={styles.cont}>
              <div className={styles.imgCont}>
                <img src="/images/rectangleImage.png" />
              </div>
              <div className={styles.eventDetails}>
                <SideLabel labelText="Event Info" />
                <div className={styles.eventIconsCont}>
                  <IconInfo
                    src="/images/calendarIcon.jpg"
                    alt="Calendar Icon"
                    text={formatDate(eventData.date)}
                  />
                  <IconInfo
                    src="/images/timeIcon.jpg"
                    alt="Time Icon"
                    text={eventData.time}
                  />
                  <IconInfo
                    src="/images/locationIcon.jpg"
                    alt="Location Icon"
                    text={eventData.location}
                  />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolorem assumenda ipsum rerum, molestiae doloribus aliquam?
                </p>
              </div>
            </div>
            <div className={styles.bookingBigContainer}>
              <div className={styles.linkBigCont}>
                <div className={styles.linkCont}>
                  <p>
                    It's always better with a friend. Share this event with your
                    people and let them know!
                  </p>
                  <div className={styles.copyCont}>
                    <span>Event Link</span>
                    <span>📋</span>
                  </div>
                </div>
              </div>
              <form className={styles.bookingForm}>
                <div className={styles.ticketBigContainer}>
                  <div className={styles.ticketCont}>
                    <div className={styles.priceCont}>
                      <span className={styles.priceTitle}>Ticket Price</span>
                      <span className={styles.price}>
                        {eventData.price} LE/Person
                      </span>
                    </div>
                    <div className={styles.ticketsNeededCont}>
                      <span className={styles.neededTitle}>Tickets Left</span>
                      <span>11 Tickets</span>
                    </div>
                  </div>
                  <div className={styles.counterCont}>
                    <span className={styles.neededTitle}>Tickets Needed</span>
                    <div className={styles.counter}>
                      <button
                        className={styles.counterLess}
                        type="button"
                        onClick={() => handleDecrement()}
                      >
                        -
                      </button>
                      <span className={styles.counterCount}>{count}</span>
                      <button
                        className={styles.counterMore}
                        type="button"
                        onClick={() => handleIncrement()}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className={styles.confirmBtnCont}>
                    <Link href={`/confirmbooking/${id}?ticketCount=${count}`}>
                      <button type="submit">Go to Target Page</button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </MainContainer>
      </section>
    </>
  );
}

export default EventInfo;
