import PrimaryButton from '../../PrimaryButton/PrimaryButon';
import styles from './Subscribe.module.css';

function Subscribe() {
  return (
    <div className={styles.subscribe}>
      <div className={styles.div}>
        <p className={styles.textWrapper}>Don't miss out on any event!</p>
        <p className={styles.p}>
          Register your email and get updates in all events you love
        </p>
      </div>

      <div className={styles.div2}>
        <div className={styles.divWrapper}>
        <input className={styles.inertEmail} placeholder="Enter your email" />
        </div>

        <div className={styles.subscribeBtn}>
          <PrimaryButton href="/">Subscribe</PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
