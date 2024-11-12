'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { ReactNode } from 'react';
import styles from './AdminTable.module.css';
import { EventCardProps } from '../../EventsCardsContainer/EventCard/EventCard';
import { OrdersProps } from '@/app/admin/dashboard/page';
import { redirect } from 'next/dist/server/api-utils';
import Link from 'next/link';

export type OrdersAndEventsProps = {
  attendeeNameTitle?: string;
  eventNameTitle?: string;
  ticketsBookedTitle?: string;
  createdAtTitle?: string;
  categoryTitle?: string;
  locationTitle?: string;
  statusTitle?: string;
  actionTitle?: string;
  action?: ReactNode;
  attendeeName?: string;
  isEventMang?: boolean;
  isEventBookings?: boolean;

  orders: OrdersProps[];
};

function AdminTable({
  orders,
  attendeeNameTitle = 'Attendee Name',
  eventNameTitle = 'Event Name',
  ticketsBookedTitle = 'Tickets Booked',
  createdAtTitle = 'Created At',
  categoryTitle = 'Category',
  locationTitle = 'Location',
  statusTitle = 'Status',
  actionTitle = 'Action',
  action,
  isEventMang = false,
  isEventBookings = false,
}: OrdersAndEventsProps) {
  const formatDate = (date: string | undefined) => {
    if (!date) return 'Invalid Date'; // Fallback if date is undefined or null

    const dateObj = new Date(date);
    if (isNaN(dateObj.getTime())) {
      return 'Invalid Date'; // Return a fallback if date is invalid
    }

    return dateObj.toISOString().split('T')[0]; // Format as YYYY-MM-DD
  };

  return (
    <table className={styles.tableCont}>
      <thead>
        <tr>
          <th>{isEventMang ? eventNameTitle : attendeeNameTitle}</th>
          <th>{isEventMang ? categoryTitle : eventNameTitle}</th>
          <th>{isEventMang ? ticketsBookedTitle : ticketsBookedTitle}</th>
          <th>{isEventMang ? locationTitle : createdAtTitle}</th>
          {isEventMang && (
            <>
              <th>{createdAtTitle}</th>
              <th>{statusTitle}</th>
              <th>{actionTitle}</th>
            </>
          )}
        </tr>
      </thead>
      <tbody>
        {orders && orders.length > 0 ? (
          orders.map((order) => (
            <tr key={order._id}>
              <td className={styles.tdColor}>
                {isEventMang && order.eventId
                  ? order.eventId.eventName // Only access eventName if eventId exists
                  : `${order.firstName} ${order.lastName}`}
              </td>
              <td className={styles.tdColor}>
                {isEventMang && order.eventId
                  ? order.eventId.category // Only access category if eventId exists
                  : order.eventId
                  ? order.eventId.eventName
                  : 'No event name'}
              </td>
              <td className={styles.tdColor}>{order.ticketsBooked}</td>
              <td className={styles.tdColor}>
                {isEventMang && order.eventId
                  ? order.eventId.location // Only access location if eventId exists
                  : formatDate(order.createdAt)}
              </td>
              {isEventMang && order.eventId && (
                <>
                  <td className={styles.tdColor}>
                    {formatDate(order.createdAt)}
                  </td>
                  <td className={styles.tdColor}>{order.eventId.status}</td>
                  <td className={`${styles.tdColor}`}>
                    <div className={styles.butnsContainer}>
                      <Link
                        href={`/admin/eventForm?eventId=${order.eventId._id}`}
                        passHref
                      >
                        <img src="/images/editIcon.png" alt="Edit" />
                      </Link>
                      <button
                        className={styles.deleteBtn}
                        onClick={async () => {
                          try {
                            // Send DELETE request to backend to delete the order
                            const response = await axios.delete(
                              `http://localhost:5000/api/v1/orders/${order._id}`
                            );
                            console.log('Order deleted:', response.data);

                            // Update local state to remove the deleted order from UI
                            // setLocalOrders((prevOrders) =>
                            //   prevOrders.filter((o) => o._id !== order._id)
                            // );
                          } catch (error) {
                            console.error('Error deleting order:', error);
                            alert('Failed to delete order');
                          }
                        }}
                      >
                        <img src="/images/deleteIcon.png" alt="Delete" />
                      </button>
                    </div>
                  </td>
                </>
              )}
            </tr>
          ))
        ) : (
          <tr>
            <td className={styles.tdColor} colSpan={6}>
              No events available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default AdminTable;
