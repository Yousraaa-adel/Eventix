import styles from './page.module.css';
import AdminNavbar from '@/app/components/admin/adminNavbar/adminNavbar';
import MainContainer from '@/app/components/MainContainer/MainContainer';
import AdminSideLabel from '@/app/components/admin/AdminSideLabel/AdminSideLabel';
import AdminTable from '@/app/components/admin/AdminTable/AdminTable';
import PrimaryButton from '@/app/components/PrimaryButton/PrimaryButon';

function EventMang() {
  return (
    <section className={styles.eventMan}>
      <AdminNavbar />
      <MainContainer>
        <div className={styles.eventsListPart}>
          <div className={styles.eventListTop}>
            <AdminSideLabel labelText="Events List" />
            <div className={styles.addEventBtn}>
              <PrimaryButton href="/admin/eventForm" children="Add Event" />
            </div>
          </div>
          <div className={styles.tableSection}>
            <AdminTable
              isEventMang={true}
              attendeeNameTitle="Attendee Name"
              eventNameTitle="Event Name"
              ticketsBookedTitle="Tickets Sold"
              dateTitle="Date"
              category="Workshop"
              location="Downtown"
              eventName="Coffee 101"
              ticketsBooked="5"
              date="15/10/24"
              status="Done"
            />
          </div>
        </div>
      </MainContainer>
    </section>
  );
}

export default EventMang;
