import styles from './SectionTop.module.css';
import SectionLabel from './SectionLabel/SectionLabel';
import Filters from '../UpcomingEventsSection/Filters/Filters';

export interface SectionTopProps {
  labelText: string;
  isCategoryFilter?: boolean; // Accept the prop
  onChoiceClick: (choice: string) => void;
}

function SectionTop({
  labelText,
  isCategoryFilter = false,
  onChoiceClick,
}: SectionTopProps) {
  return (
    <div className={styles.sectionTop}>
      <SectionLabel labelText={labelText} />
      <Filters
        isCategoryFilter={isCategoryFilter}
        onChoiceClick={onChoiceClick}
      />
    </div>
  );
}

export default SectionTop;
