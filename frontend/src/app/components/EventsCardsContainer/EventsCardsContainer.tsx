'use client';

import { useState } from 'react';
import PrimaryButton from '../PrimaryButton/PrimaryButon';
import EventCard, { EventCardProps } from './EventCard/EventCard';
import styles from './EventsCardsContainer.module.css';

type EventsCardsContainerProps = {
  events: EventCardProps[];
  showButton?: boolean;
};

function EventsCardsContainer({
  events = [],
  showButton = true,
}: EventsCardsContainerProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 3;
  const totalPages = Math.ceil(events.length / eventsPerPage);

  const startIndex = (currentPage - 1) * eventsPerPage;
  const eventsToDisplay = events.slice(startIndex, startIndex + eventsPerPage);

  // Log the events to display once before returning JSX
  // console.log('Events to display:', eventsToDisplay);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={styles.eventsContainer}>
      <div className={styles.cardsContainer}>
        {eventsToDisplay?.length > 0 ? (
          eventsToDisplay.map((eventItem) => {
            // console.log('Event data:', eventItem);
            // Parse the eventDate safely
            const eventDate = new Date(eventItem.date);
            const isValidDate = !isNaN(eventDate.getTime());

            return (
              <EventCard
                key={eventItem._id}
                _id={eventItem._id}
                category={eventItem.category}
                eventName={eventItem.eventName}
                date={eventItem.date ? new Date(eventItem.date) : new Date()}
                time={eventItem.time}
                location={eventItem.location}
                price={eventItem.price}
                coverImgSrc={
                  eventItem.coverImgSrc || '/images/rectangleImage.png'
                }
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
                brief={eventItem.brief}
              />
            );
          })
        ) : (
          <p>No events available</p>
        )}
      </div>
      {/* {showButton && (
        <div className={styles.viewMoreBtn}>
          <PrimaryButton href="/events">
            View all upcoming events &gt;
          </PrimaryButton>
        </div>
      )} */}
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

{
  /* <EventCard
  key={event._id}
  eventCategory={event.eventCategory}
  eventName={event.eventName}
  eventDate={new Date(event.eventDate).toLocaleDateString()}
  eventTime={event.eventTime}
  eventLocation={event.eventLocation}
  eventPrice={event.eventPrice}
  coverImgSrc={event.coverImgSrc || '/images/rectangleImage.png'}
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
  eventBrief={event.eventBrief}
/>; */
}

export default EventsCardsContainer;
