import PrimaryButton from '../PrimaryButton/PrimaryButon';
import EventCard from './EventCard/EventCard';
import styles from './EventsCardsContainer.module.css';

function EventsCardsContainer({ showButton = true }) {
  return (
    <div className={styles.eventsContainer}>
      <div className={styles.cardsContainer}>
        <EventCard
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
        <EventCard
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
        <EventCard
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
      {showButton && (
        <div className={styles.viewMoreBtn}>
          <PrimaryButton href="/events">
            View all upcoming events &gt;
          </PrimaryButton>
        </div>
      )}
    </div>
  );
}

export default EventsCardsContainer;
