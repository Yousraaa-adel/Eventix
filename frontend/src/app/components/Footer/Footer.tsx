import Brief from './Brief/Brief';
import styles from './Footer.module.css';
import Subscribe from './Subscribe/Subscribe';
import FooterLinks from './FooterLinks/FooterLinks';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Subscribe />
      <Brief />
      <FooterLinks />
    </footer>
  );
}

export default Footer;
