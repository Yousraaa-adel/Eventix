import MainContainer from '../MainContainer/MainContainer';
import SideLabel from '../SideLabel/SideLabel';
import ComingEventsConainer from '../ComingEventsConainer/ComingEventsConainer';
import styles from './SideUpcomingSection.module.css';

function SideUpcomingSection() {
  return (
    <section className={styles.sideUpcomingSection}>
      <div className={styles.comingEvents}>
        <SideLabel labelText="Upcoming Events" />
        <ComingEventsConainer />
      </div>
    </section>
  );
}

export default SideUpcomingSection;
