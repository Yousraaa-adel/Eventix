import styles from './AdminInsightBox.module.css';

interface AdminInsightBoxProps {
  statNum: string;
  statTitle: string;
}

function AdminInsightBox({ statNum, statTitle }: AdminInsightBoxProps) {
  return (
    <div className={styles.insightBox}>
      <span className={styles.stat}>{statNum}</span>
      <span className={styles.statLabel}>{statTitle}</span>
    </div>
  );
}

export default AdminInsightBox;
