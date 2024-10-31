import PrimaryButton from '../PrimaryButton/PrimaryButon';
import styles from './HeroSection.module.css';

function HeroSection() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroFrame}>
        <Vector />
        <LabelH1 />
        <LabelSlogan />
        <div>
          <PrimaryButton href="/events">Explore Events</PrimaryButton>
        </div>
      </div>
    </div>
  );
}

function Vector() {
  return (
    <div className={styles.box}>
      <img className={styles.vector} alt="Vector" src="/images/favicon.ico" />
    </div>
  );
}

function LabelH1() {
  return (
    <div className={styles.labelH1}>
      <div className={styles.lightUpYourDay}>
        Light&nbsp;&nbsp;Up Your Day
        <br />
        with Adventure
      </div>
    </div>
  );
}

function LabelSlogan() {
  return (
    <div className={styles.labelSlogan}>
      <p className={styles.unforgettable}>
        Unforgettable Experiences,
        <br />
        One Event at a Time!
      </p>
    </div>
  );
}

export default HeroSection;
