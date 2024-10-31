import styles from './page.module.css';
import AdminNavbar from '@/app/components/admin/adminNavbar/adminNavbar';
import PageTopSection from '@/app/components/PageTopSection/PageTopSection';

function EventForm() {
  return (
    <section className={styles.eventForm}>
      <AdminNavbar />
      <div className={styles.eventFormPart}>
        <PageTopSection isEventForm={true} />
      </div>
    </section>
  );
}

export default EventForm;
