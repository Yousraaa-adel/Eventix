import styles from './FooterLinks.module.css';
import Link from 'next/link';

function FooterLinks() {
  return (
    <ul className={styles.FooterLinks}>
      <li className={styles.pageLink}>
        <Link href="/events">Events</Link>
      </li>
      <li className={styles.pageLink}>
        <Link href="/termsofuse">Terms of Use</Link>
      </li>
      <li className={styles.pageLink}>
        <Link href="/support">Support</Link>
      </li>
    </ul>
  );
}

export default FooterLinks;
