import styles from './page.module.css';
import AdminNavbar from '@/app/components/admin/adminNavbar/adminNavbar';
import MainContainer from '@/app/components/MainContainer/MainContainer';
import PageTopSection from '@/app/components/PageTopSection/PageTopSection';
import AdminSideLabel from '@/app/components/admin/AdminSideLabel/AdminSideLabel';
import EventCard from '@/app/components/EventsCardsContainer/EventCard/EventCard';
import PrimaryButton from '@/app/components/PrimaryButton/PrimaryButon';

function EventForm() {
  return (
    <section className={styles.eventForm}>
      <AdminNavbar />
      <PageTopSection isEventForm={true} />
      <MainContainer>
        <div className={styles.eventFormTop}>
          <AdminSideLabel labelText="Create Event" />
        </div>
        <div className={styles.eventFormBigCont}>
          <div className={styles.eventFormCont}>
            <form className={styles.form}>
              <div className={styles.fieldBox}>
                <div className={styles.placeholderTitle}>Event Name</div>
                <input placeholder="Enter event name" />
              </div>
              <div className={styles.fieldBox}>
                <div className={styles.placeholderTitle}>Event Name</div>
                <input placeholder="Enter event name" />
              </div>
              <div className={styles.fieldBox}>
                <div className={styles.placeholderTitle}>Event Name</div>
                <input placeholder="Enter event name" />
              </div>
              <div className={styles.fieldBox}>
                <div className={styles.placeholderTitle}>Event Name</div>
                <input placeholder="Enter event name" />
              </div>
              <div className={styles.fieldBox}>
                <div className={styles.placeholderTitle}>Event Name</div>
                <input placeholder="Enter event name" />
              </div>
              <div className={styles.fieldBox}>
                <div className={styles.placeholderTitle}>Event Name</div>
                <input placeholder="Enter event name" />
              </div>
              <div className={styles.fieldBox}>
                <div className={styles.placeholderTitle}>Event Name</div>
                <input placeholder="Enter event name" />
              </div>
              <div className={styles.addEventBtn}>
                <PrimaryButton href="" children="Add Event" />
              </div>
            </form>
          </div>
          <div className={styles.previewCont}>
            <EventCard
              eventCategory="workshop"
              eventName="Coffee 101"
              eventDate="15/10"
              eventTime="16:30"
              eventLocation="Downtown"
              eventPrice="40"
              coverImgSrc="/images/rectangleImage.png"
              iconImageSrc={{
                calendar: '/images/calendarIcon.jpg',
                time: '/images/timeIcon.jpg',
                location: '/images/locationIcon.jpg',
                ticket: '/images/ticketIcon.png',
              }}
              iconImgAlt={{
                calendar: 'Calendar Icon',
                time: 'Time Icon',
                location: 'Location Icon',
                ticket: 'Ticket Icon',
              }}
              eventBrief="Lorem ipsum dolor sit amet, consectetur a nulla, id lacinia est
            condimentum sed. Sed eu magna sit amet libero feugiat lobortis sit
            amet sit amet ex."
            />
          </div>
        </div>
      </MainContainer>
    </section>
  );
}

export default EventForm;
