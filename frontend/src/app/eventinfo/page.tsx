import Link from 'next/link';
import styles from './page.module.css';
import Navbar from '../components/NavBar/NavBar';
import PageTopSection from '../components/PageTopSection/PageTopSection';
import MainContainer from '../components/MainContainer/MainContainer';
import SideLabel from '../components/SideLabel/SideLabel';
import IconInfo from '../components/EventsCardsContainer/EventCard/IconInfo/IconInfo';

function EventInfo() {
  return (
    <>
      <Navbar />
      <section className={styles.eventInfo}>
        <PageTopSection labelText="Coffee 101" />
        <MainContainer>
          <div className={styles.eventDetailsCont}>
            <div className={styles.cont}>
              <div className={styles.imgCont}>
                <img src="/images/rectangleImage.png" />
              </div>
              <div className={styles.eventDetails}>
                <SideLabel labelText="Event Info" />
                <div className={styles.eventIconsCont}>
                  <IconInfo
                    src="/images/calendarIcon.jpg"
                    alt="Calendar Icon"
                    text="17/11/2024"
                  />
                  <IconInfo
                    src="/images/timeIcon.jpg"
                    alt="Time Icon"
                    text="16:30"
                  />
                  <IconInfo
                    src="/images/locationIcon.jpg"
                    alt="Location Icon"
                    text="Maadi"
                  />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolorem assumenda ipsum rerum, molestiae doloribus aliquam?
                </p>
              </div>
            </div>
            <div className={styles.bookingBigContainer}>
              <div className={styles.linkBigCont}>
                <div className={styles.linkCont}>
                  <p>
                    It's always better with a friend. Share this event with your
                    people and let them know!
                  </p>
                  <div className={styles.copyCont}>
                    <span>Event Link</span>
                    <span>📋</span>
                  </div>
                </div>
              </div>
              <form className={styles.bookingForm}>
                <div className={styles.ticketBigContainer}>
                  <div className={styles.ticketCont}>
                    <div className={styles.priceCont}>
                      <span className={styles.priceTitle}>Ticket Price</span>
                      <span className={styles.price}>40 LE/Person</span>
                    </div>
                    <div className={styles.ticketsNeededCont}>
                      <span className={styles.neededTitle}>Tickets Left</span>
                      <span>11 Tickets</span>
                    </div>
                  </div>
                  <div className={styles.counterCont}>
                    <span className={styles.neededTitle}>Tickets Needed</span>
                    <div className={styles.counter}>
                      <span className={styles.counterMore}>+</span>
                      <span className={styles.counterCount}>0</span>
                      <span className={styles.counterLess}>-</span>
                    </div>
                  </div>
                  <div className={styles.confirmBtnCont}>
                    <Link href="/confirmbooking">
                      <button type="submit">Go to Target Page</button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </MainContainer>
      </section>
    </>
  );
}

export default EventInfo;
