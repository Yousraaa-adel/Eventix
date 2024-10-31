import styles from './PageTopLabel.module.css';

interface PageTopLabelProps {
  labelText: string;
}

function PageTopLabel({ labelText }: PageTopLabelProps) {
  return <div className={styles.labelWrapper}>{labelText}</div>;
}

export default PageTopLabel;
