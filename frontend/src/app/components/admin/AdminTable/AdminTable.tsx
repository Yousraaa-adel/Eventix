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
  attendeeName?: string;
  eventName: string;
  ticketsBooked?: string;
  date?: string;
  category?: string;
  location?: string;
  status?: string;
  action?: ReactNode;
  isEventMang?: boolean;
  isEventBookings?: boolean;
}

function AdminTable({
  attendeeNameTitle = 'Attendee Name',
  eventNameTitle = 'Event Name',
  ticketsBookedTitle = 'Tickets Booked',
  dateTitle = 'Date',
  categoryTitle = 'Category',
  locationTitle = 'Location',
  statusTitle = 'Status',
  actionTitle = 'Action',
  attendeeName,
  eventName,
  ticketsBooked,
  date,
  category,
  location,
  status,
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
              <th>{actionTitle}</th>
            </>
          )}
        </tr>
      </thead>
      <tbody>
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
      </tbody>
    </table>
  );
}

export default AdminTable;
