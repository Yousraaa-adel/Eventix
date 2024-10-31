import FeaturesBox from './FeaturesBox/FeaturesBox';
import styles from './Features.module.css';

function Features() {
  return (
    <div className={styles.featuresFrame}>
      <FeaturesBox
        src="/images/fastIcon.jpg"
        name="Fast"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            consectetur tristique velit nec tempor."
      />

      <FeaturesBox
        src="/images/easyIcon.jpg"
        name="Easy"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            consectetur tristique velit nec tempor."
      />

      <FeaturesBox
        src="/images/safeIcon.jpg"
        name="Safe"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            consectetur tristique velit nec tempor."
      />
    </div>
  );
}

export default Features;
