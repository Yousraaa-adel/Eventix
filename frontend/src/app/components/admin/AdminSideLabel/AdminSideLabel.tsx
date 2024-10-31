import styles from './AdminSideLabel.module.css';

interface AdminSideLabelProps {
  labelText: string;
}

function AdminSideLabel({ labelText }: AdminSideLabelProps) {
  return (
    <div className={styles.admiSideLabel}>
      <p>{labelText}</p>
    </div>
  );
}

export default AdminSideLabel;
