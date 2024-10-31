import styles from './page.module.css';
import Navbar from '../components/NavBar/NavBar';
import PageTopSection from '../components/PageTopSection/PageTopSection';

function EventInfo() {
  return (
    <>
      <Navbar />
      <section className={styles.eventInfo}>
        <PageTopSection labelText="Coffee 101" />
      </section>
    </>
  );
}

export default EventInfo;
