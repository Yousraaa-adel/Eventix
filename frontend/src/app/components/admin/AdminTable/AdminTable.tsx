'use client';

import { ReactNode } from 'react';
import styles from './AdminTable.module.css';

interface AdminTableProps {
  attendeeNameTitle?: string;
  eventNameTitle?: string;
  ticketsBookedTitle?: string;
  dateTitle?: string;
  categoryTitle?: string;
  locationTitle?: string;
  statusTitle?: string;
  actionTitle?: string;
  action?: ReactNode;
  attendeeName?: string;
  isEventMang?: boolean;
  isEventBookings?: boolean;

  events: Array<{
    eventName?: string;
    eventPrice?: string;
    ticketsBooked?: string;
    date?: string;
    time?: string;
    category?: string;
    location?: string;
    brief?: string;
    status?: string;
  }>;
}

function AdminTable({
  events,
  attendeeNameTitle = 'Attendee Name',
  eventNameTitle = 'Event Name',
  ticketsBookedTitle = 'Tickets Booked',
  dateTitle = 'Date',
  categoryTitle = 'Category',
  locationTitle = 'Location',
  statusTitle = 'Status',
  actionTitle = 'Action',
  attendeeName,
  action,
  isEventMang = false,
  isEventBookings = false,
}: AdminTableProps) {
  return (
    <table className={styles.tableCont}>
      <thead>
        <tr>
          <th>{isEventMang ? eventNameTitle : attendeeNameTitle}</th>
          <th>{isEventMang ? categoryTitle : eventNameTitle}</th>
          <th>{isEventMang ? ticketsBookedTitle : ticketsBookedTitle}</th>
          <th>{isEventMang ? locationTitle : dateTitle}</th>
          {isEventMang && (
            <>
              <th>{dateTitle}</th>
              <th>{statusTitle}</th>
              {/* <th>{actionTitle}</th> */}
            </>
          )}
        </tr>
      </thead>
      <tbody>
        {events && events.length > 0 ? (
          events.map((event) => (
            <tr key={event._id}>
              <td className={styles.tdColor}>
                {isEventMang ? event.eventName : attendeeName}
              </td>
              <td className={styles.tdColor}>
                {isEventMang ? event.category : event.eventName}
              </td>
              <td className={styles.tdColor}>{event.ticketsBooked}</td>
              <td className={styles.tdColor}>
                {isEventMang ? event.location : event.date}
              </td>
              {isEventMang && (
                <>
                  <td className={styles.tdColor}>{event.date}</td>
                  <td className={styles.tdColor}>{event.status}</td>
                </>
              )}
            </tr>
          ))
        ) : (
          <tr>
            <td className={styles.tdColor}>No events available</td>
          </tr>
        )}

        {/* <tr>
          <td className={styles.tdColor}>
            {isEventMang ? eventName : attendeeName}
          </td>
          <td className={styles.tdColor}>
            {isEventMang ? category : eventName}
          </td>
          <td className={styles.tdColor}>
            {isEventMang ? ticketsBooked : ticketsBooked}
          </td>
          <td className={styles.tdColor}>{isEventMang ? location : date}</td>
          {isEventMang && (
            <>
              <td className={styles.tdColor}>{date}</td>
              <td className={styles.tdColor}>{status}</td>
              <td className={styles.tdColor}>{action}</td>
            </>
          )}
        </tr>
        <tr>
          <td className={styles.tdColor}>
            {isEventMang ? eventName : attendeeName}
          </td>
          <td className={styles.tdColor}>
            {isEventMang ? category : eventName}
          </td>
          <td className={styles.tdColor}>
            {isEventMang ? ticketsBooked : ticketsBooked}
          </td>
          <td className={styles.tdColor}>{isEventMang ? location : date}</td>
          {isEventMang && (
            <>
              <td className={styles.tdColor}>{date}</td>
              <td className={styles.tdColor}>{status}</td>
              <td className={styles.tdColor}>{action}</td>
            </>
          )}
        </tr>
        <tr>
          <td className={styles.tdColor}>
            {isEventMang ? eventName : attendeeName}
          </td>
          <td className={styles.tdColor}>
            {isEventMang ? category : eventName}
          </td>
          <td className={styles.tdColor}>
            {isEventMang ? ticketsBooked : ticketsBooked}
          </td>
          <td className={styles.tdColor}>{isEventMang ? location : date}</td>
          {isEventMang && (
            <>
              <td className={styles.tdColor}>{date}</td>
              <td className={styles.tdColor}>{status}</td>
              <td className={styles.tdColor}>{action}</td>
            </>
          )}
        </tr>
        <tr>
          <td className={styles.tdColor}>
            {isEventMang ? eventName : attendeeName}
          </td>
          <td className={styles.tdColor}>
            {isEventMang ? category : eventName}
          </td>
          <td className={styles.tdColor}>
            {isEventMang ? ticketsBooked : ticketsBooked}
          </td>
          <td className={styles.tdColor}>{isEventMang ? location : date}</td>
          {isEventMang && (
            <>
              <td className={styles.tdColor}>{date}</td>
              <td className={styles.tdColor}>{status}</td>
              <td className={styles.tdColor}>{action}</td>
            </>
          )}
        </tr> */}
      </tbody>
    </table>
  );
}

export default AdminTable;
