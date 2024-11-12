import styles from './PageTopSection.module.css';
import PageTopLabel from './PageTopLabel/PageTopLabel';

interface PageTopSectionProp {
  labelText?: string | null;
  isEventForm?: boolean;
}

function PageTopSection({
  labelText,
  isEventForm = false,
}: PageTopSectionProp) {
  return (
    <div className={styles.backgroundContainer}>
      {!isEventForm && <PageTopLabel labelText={labelText || ''} />}
    </div>
  );
}

export default PageTopSection;
