import styles from './ComingEventsConainer.module.css';
import ComingEventsCards from './ComingEventsCards/ComingEventsCards';
import EventCard from '../EventsCardsContainer/EventCard/EventCard';

function ComingEventsConainer() {
  return (
    <div className={styles.comingContainer}>
      <EventCard
        isSideUpcomingEvent={true}
        eventCategory="workshop"
        eventName="Coffee 101"
        eventDate="15/10"
        eventTime="16:30"
        eventLocation="Downtown"
        eventPrice="40"
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
        eventBrief="Lorem ipsum dolor sit amet, consectetur a nulla, id lacinia est
            condimentum sed. Sed eu magna sit amet libero feugiat lobortis sit
            amet sit amet ex."
      />
    </div>
  );
}

export default ComingEventsConainer;
