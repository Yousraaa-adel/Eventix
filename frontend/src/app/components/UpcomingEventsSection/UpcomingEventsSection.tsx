import MainContainer from '../MainContainer/MainContainer';
import SideLabel from '../SideLabel/SideLabel';
import EventsCardsContainer from '../EventsCardsContainer/EventsCardsContainer';
import Filters from './Filters/Filters';
import styles from './UpcomingEventsSection.module.css';

function UpcomingEventsSection() {
  return (
    <MainContainer>
      <section className={styles.upcomingEvents}>
        <SideLabel labelText="Upcoming Events" />
        <Filters />
        <EventsCardsContainer />
      </section>
    </MainContainer>
  );
}

export default UpcomingEventsSection;
