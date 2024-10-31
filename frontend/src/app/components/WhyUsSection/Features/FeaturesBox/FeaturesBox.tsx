import styles from './FeaturesBox.module.css';

interface FeaturesBox {
  src: string;
  name: string;
  text: string;
}

function FeaturesBox({ src, name, text }: FeaturesBox) {
  return (
    <div className={styles.featuresDiv}>
      <div className={styles.featuresImageContainer}>
        <img className={styles.featuresImg} alt="icon" src={src} />
      </div>
      <div className={styles.featuresDiv2}>
        <div className={styles.featuresTextWrapper}>{name}</div>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default FeaturesBox;
