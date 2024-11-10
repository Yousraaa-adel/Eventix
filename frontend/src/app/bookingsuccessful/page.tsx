import Link from 'next/link';
import styles from './page.module.css';
import Navbar from '../components/NavBar/NavBar';
import PageTopSection from '../components/PageTopSection/PageTopSection';
import MainContainer from '../components/MainContainer/MainContainer';
import Footer from '../components/Footer/Footer';

function BookingSuccessful() {
  return (
    <>
      <Navbar />
      <section className={styles.bookinfSuccessful}>
        <PageTopSection labelText="Booking for Coffee 101" />
        <MainContainer>
          <div className={styles.smallCont}>
            <div className={styles.iconCont}>
              <img src="/images/doneIcon.png" alt="Done Icon" />
            </div>
            <div className={styles.successTextCont}>
              <span className={styles.successTitle}>Booking Successful</span>
              <p>Please check your email where you can find your QR code</p>
              <div className={styles.backBtn}>
                <Link href="/">Go back to home page</Link>
              </div>
            </div>
            <div className={styles.shareCont}>
              <p>
                It's always better with a friend. Share this event with your
                people and let them know!
              </p>
            </div>
          </div>
        </MainContainer>
      </section>
    </>
  );
}

export default BookingSuccessful;
