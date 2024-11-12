'use client';

import styles from './page.module.css';
import AdminNavbar from '@/app/components/admin/adminNavbar/adminNavbar';
import MainContainer from '@/app/components/MainContainer/MainContainer';
import AdminSideLabel from '@/app/components/admin/AdminSideLabel/AdminSideLabel';
import AdminTable from '@/app/components/admin/AdminTable/AdminTable';
import PrimaryButton from '@/app/components/PrimaryButton/PrimaryButon';
import { useEffect, useState } from 'react';
import axios from 'axios';

function BookingMang() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/orders');
        console.log('Response data:', response.data.data.orders);
        setOrders(response.data.data.orders);
      } catch (error) {
        setError('Error fetching orders data');
        console.error(error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchEvents();
  }, []);

  return (
    <section className={styles.eventMan}>
      <AdminNavbar />
      <MainContainer>
        <div className={styles.eventsListPart}>
          <div className={styles.eventListTop}>
            <AdminSideLabel labelText="Bookings List" />
            {/* <div className={styles.addEventBtn}>
              <PrimaryButton href="/admin/eventForm" children="Add Event" />
            </div> */}
          </div>
          <div className={styles.tableSection}>
            <AdminTable orders={orders} isEventMang={true} />
          </div>
        </div>
      </MainContainer>
    </section>
  );
}

export default BookingMang;
