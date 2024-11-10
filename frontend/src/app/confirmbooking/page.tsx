import Link from 'next/link';
import styles from './page.module.css';
import Navbar from '../components/NavBar/NavBar';
import PageTopSection from '../components/PageTopSection/PageTopSection';
import MainContainer from '../components/MainContainer/MainContainer';
import Footer from '../components/Footer/Footer';

function ConfirmBookingForm() {
  return (
    <>
      <Navbar />
      <section className={styles.confirmBooking}>
        <PageTopSection labelText="Booking for Coffee 101" />
        <MainContainer>
          <div className={styles.smallContainer}>
            <form className={styles.bookingForm}>
              <div className={styles.fieldsCont}>
                <div className={styles.box}>
                  <span>First Name</span>
                  <input type="text" />
                </div>
                <div className={styles.box}>
                  <span>Last Name</span>
                  <input type="text" />
                </div>
                <div className={styles.box}>
                  <span>Email Address</span>
                  <input type="email" />
                </div>
                <div className={styles.box}>
                  <span>Phone Number</span>
                  <input type="tel" />
                </div>
              </div>
              <div className={styles.ticketOverviewCont}>
                <span>Details Overview</span>
                <div className={styles.detailsCont}>
                  <div className={styles.detailsBox}>
                    <span className={styles.boxTitle}>Tickets Booked</span>
                    <span>1 Ticket</span>
                  </div>
                  <div className={styles.detailsBox}>
                    <span className={styles.boxTitle}>Event Name</span>
                    <span>Coffee 101</span>
                  </div>
                  <div className={styles.detailsBox}>
                    <span className={styles.boxTitle}>Location</span>
                    <span>Maadi</span>
                  </div>
                  <div className={styles.detailsBox}>
                    <span className={styles.boxTitle}>Date & Time</span>
                    <span>15/10 - 17:00</span>
                  </div>
                </div>
              </div>
              <div className={styles.confirmBtn}>
                <Link href="/bookingsuccessful">
                  <button type="submit">Confirm Booking</button>
                </Link>
              </div>
            </form>
          </div>
        </MainContainer>
        {/* <Footer /> */}
      </section>
    </>
  );
}

export default ConfirmBookingForm;
