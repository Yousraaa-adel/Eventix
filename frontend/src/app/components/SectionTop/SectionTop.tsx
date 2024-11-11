import styles from './SectionTop.module.css';
import SectionLabel from './SectionLabel/SectionLabel';
import Filters from '../UpcomingEventsSection/Filters/Filters';

interface SectionTopProps {
  labelText: string;
  isCategoryFilter?: boolean; // Accept the prop
}

function SectionTop({ labelText, isCategoryFilter }: SectionTopProps) {
  return (
    <div className={styles.sectionTop}>
      <SectionLabel labelText={labelText} />
      <Filters isCategoryFilter={isCategoryFilter} />
    </div>
  );
}

export default SectionTop;
