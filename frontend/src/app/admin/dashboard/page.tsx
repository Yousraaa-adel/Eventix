'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './page.module.css';
import AdminNavbar from '@/app/components/admin/adminNavbar/adminNavbar';
import PageTopSection from '@/app/components/PageTopSection/PageTopSection';
import MainContainer from '@/app/components/MainContainer/MainContainer';
import AdminSideLabel from '@/app/components/admin/AdminSideLabel/AdminSideLabel';
import AdminInsightBox from '@/app/components/admin/AdminInsightBox/AdminInsightBox';
import AdminTable from '@/app/components/admin/AdminTable/AdminTable';
import { EventCardProps } from '@/app/components/EventsCardsContainer/EventCard/EventCard';

export type OrdersProps = {
  _id: string; // Add this line
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  ticketsBooked: number;
  createdAt: string;

  eventId: EventCardProps;
};

function Dashboard() {
  const [orders, setOrders] = useState([]); // State to hold the fetched orders
  // const [firstName, setFirstName] = useState('');
  // const [LastName, setLastName] = useState('');
  // const [event, setEventName] = useState('');
  // const [bookingDate, setBookingDate] = useState();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/orders`);
        setOrders(response.data.data.orders);

        console.log(response.data.data.orders);
      } catch (error) {
        console.error('Error fetching orders data:', error);
      }
    };

    fetchOrders();
  }, []);

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
          <AdminTable orders={orders} />
        </div>
      </MainContainer>
    </section>
  );
}

export default Dashboard;
