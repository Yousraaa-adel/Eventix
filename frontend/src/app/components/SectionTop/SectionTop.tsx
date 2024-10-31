import styles from './SectionTop.module.css';
import SectionLabel from './SectionLabel/SectionLabel';
import Filters from '../UpcomingEventsSection/Filters/Filters';

interface SectionTopProps {
  labelText: string;
}

function SectionTop({ labelText }: SectionTopProps) {
  return (
    <div className={styles.sectionTop}>
      <SectionLabel labelText={labelText} />
      <Filters />
    </div>
  );
}

export default SectionTop;
