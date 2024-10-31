import styles from './page.module.css';
import AdminNavbar from '@/app/components/admin/adminNavbar/adminNavbar';
import PageTopSection from '@/app/components/PageTopSection/PageTopSection';
import MainContainer from '@/app/components/MainContainer/MainContainer';
import AdminSideLabel from '@/app/components/admin/AdminSideLabel/AdminSideLabel';
import AdminInsightBox from '@/app/components/admin/AdminInsightBox/AdminInsightBox';
import AdminTable from '@/app/components/admin/AdminTable/AdminTable';

function Dashboard() {
  return (
    <section className={styles.dashboard}>
      <AdminNavbar />
      <PageTopSection labelText="Hi Admin" />
      <MainContainer>
        <div className={styles.insightSection}>
          <AdminSideLabel labelText="Quick Insights" />
          <div className={styles.insightsBoxesCont}>
            <AdminInsightBox statNum="5" statTitle="Current active Events" />
            <AdminInsightBox statNum="5" statTitle="Current active Events" />
            <AdminInsightBox statNum="5" statTitle="Current active Events" />
          </div>
        </div>
        <div className={styles.tableSection}>
          <AdminSideLabel labelText="Latest Bookings" />
          <AdminTable
            attendeeNameTitle="Attendee Name"
            eventNameTitle="Event Name"
            ticketsBookedTitle="Tickets Booked"
            dateTitle="Date"
            attendeeName="Test"
            eventName="Coffee 101"
            ticketsBooked="5"
            date="15/10/24"
          />
        </div>
      </MainContainer>
    </section>
  );
}

export default Dashboard;
