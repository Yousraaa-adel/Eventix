import styles from './Brief.module.css';

function Brief() {
  return (
    <div className={styles.brief}>
      <img className={styles.logo} alt="logo" src="/images/logo.png" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        consectetur tristique velit nec tempor. Etiam mattis tincidunt placerat.
        Vestibulum condimentum nulla nulla, id lacinia est condimentum sed. Sed
        eu magna sit amet libero feugiat lobortis sit amet sit amet ex. Mauris
        nec aliquet mi.
      </p>
    </div>
  );
}

export default Brief;
