import MainContainer from '../MainContainer/MainContainer';
import SideLabel from '../SideLabel/SideLabel';
import EventsCardsContainer from '../EventsCardsContainer/EventsCardsContainer';
import Filters from './Filters/Filters';
import styles from './UpcomingEventsSection.module.css';
import { EventCardProps } from '../EventsCardsContainer/EventCard/EventCard';

type UpcomingEventsSectionProps = {
  events: EventCardProps[];
  onChoiceClick: (choice: string) => void;
};

function UpcomingEventsSection({
  events = [],
  onChoiceClick,
}: UpcomingEventsSectionProps) {
  return (
    <MainContainer>
      <section className={styles.upcomingEvents}>
        <SideLabel labelText="Upcoming Events" />
        <Filters isCategoryFilter={true} onChoiceClick={onChoiceClick} />
        <EventsCardsContainer events={events} />
      </section>
    </MainContainer>
  );
}

export default UpcomingEventsSection;
