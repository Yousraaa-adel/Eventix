'use client';

import { useState } from 'react';
import axios from 'axios';
import styles from './page.module.css';
import AdminNavbar from '@/app/components/admin/adminNavbar/adminNavbar';
import MainContainer from '@/app/components/MainContainer/MainContainer';
import PageTopSection from '@/app/components/PageTopSection/PageTopSection';
import AdminSideLabel from '@/app/components/admin/AdminSideLabel/AdminSideLabel';
import EventCard from '@/app/components/EventsCardsContainer/EventCard/EventCard';
import PrimaryButton from '@/app/components/PrimaryButton/PrimaryButon';
import Link from 'next/link';

const EventForm = () => {
  const [eventName, setEventName] = useState('Preview  Event');
  const [category, setCategory] = useState('workshop');
  const [eventPrice, setEventPrice] = useState('50');
  const [date, setDate] = useState('11/5/2024');
  const [time, setTime] = useState('16:30');
  const [location, setLocation] = useState('Maadi');
  const [image, setImage] = useState('');
  const [brief, setBrief] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
  );
  const [imagePreview, setImagePreview] = useState(
    '/images/rectangleImage.png'
  );
  const [ticketsBooked, setTicketsBooked] = useState('');
  const [status, setStatus] = useState('upcoming');

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader(); // Create a new FileReader

      // When the file is loaded, set the preview to the base64 image string
      reader.onloadend = () => {
        setImagePreview(reader.result as string); // Set the preview to the base64 string
      };

      // Read the file as a data URL (base64 string)
      reader.readAsDataURL(file);

      setImage(file); // Store the actual file for submission to the server later
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const eventData = new FormData();

    eventData.append('eventName', eventName);
    eventData.append('category', category);
    eventData.append('eventPrice', eventPrice);
    eventData.append('date', date);
    eventData.append('time', time);
    eventData.append('location', location);
    eventData.append('brief', brief);
    eventData.append('ticketsBooked', ticketsBooked);
    eventData.append('status', status);
    if (image) {
      eventData.append('image', image); // Append the image file to FormData
    }

    try {
      const response = await axios.post(
        'http://localhost:5000/api/v1/events',
        eventData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log('Event added:', response.data);

      // Reset fields after successful submission
      resetFields();
    } catch (error) {
      console.error('Error adding event:', error);
      // Handle error, e.g., show a notification or alert
    }
  };

  const resetFields = () => {
    setEventName('');
    setCategory('');
    setEventPrice('');
    setDate('');
    setTime('');
    setLocation('');
    setImage('');
    setBrief(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
    );
    setImagePreview('/images/rectangleImage.png');
    setTicketsBooked('0');
    setStatus('upcoming'); // Reset to default status
  };

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
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.fieldBox}>
                <div className={styles.placeholderTitle}>Event Name</div>
                <input
                  name="eventName"
                  type="text"
                  required
                  value={eventName}
                  placeholder="Enter event name"
                  onChange={(e) => setEventName(e.target.value)}
                />
              </div>
              <div className={styles.fieldBox}>
                <div className={styles.placeholderTitle}>Category</div>
                <select
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select event category
                  </option>
                  <option value="workshop">Workshop</option>
                  <option value="educational">Educational</option>
                  <option value="cultural">Cultural</option>
                </select>
              </div>
              <div className={styles.fieldBox}>
                <div className={styles.placeholderTitle}>Event Date</div>
                <input
                  name="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
              <div className={styles.fieldBox}>
                <div className={styles.placeholderTitle}>Event Time</div>
                <input
                  name="time"
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
              </div>
              <div className={styles.fieldBox}>
                <div className={styles.placeholderTitle}>Price/Person</div>
                <input
                  name="eventPrice"
                  type="number"
                  value={eventPrice}
                  placeholder="Enter event price"
                  onChange={(e) => setEventPrice(e.target.value)}
                  required
                />
              </div>
              <div className={styles.fieldBox}>
                <div className={styles.placeholderTitle}>Location</div>
                <select
                  name="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select event location
                  </option>
                  <option value="Maadi">Maadi</option>
                  <option value="Downtown">Downtown</option>
                  <option value="Zamalek">Zamalek</option>
                </select>
              </div>
              <div className={styles.fieldBox}>
                <div className={styles.placeholderTitle}>Tickets Booked</div>
                <input
                  name="ticketsBooked"
                  type="number"
                  placeholder="Enter event tickets booked"
                  value={ticketsBooked}
                  onChange={(e) => setTicketsBooked(e.target.value)}
                  required
                />
              </div>
              <div className={styles.fieldBox}>
                <div className={styles.placeholderTitle}>Event Status</div>
                <input
                  name="status"
                  placeholder="Enter event status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  required
                />
              </div>
              <div className={styles.fieldBox}>
                <div className={styles.placeholderTitle}>Upload Image</div>
                <input
                  type="file"
                  accept="image/*" // Allows only image files
                  onChange={handleImageChange} // Set the first file to state
                />
              </div>
              <div className={`${styles.fieldBox} ${styles.brief}`}>
                <div className={`${styles.placeholderTitle}`}>Brief</div>
                <textarea
                  name="brief"
                  placeholder="Enter event brief"
                  value={brief}
                  onChange={(e) => setBrief(e.target.value)}
                  required
                />
              </div>
              <div className={styles.addEventBtn}>
                <button type="submit" className={styles.addEventBtn}>
                  Add Event
                </button>
              </div>
            </form>
          </div>
          <div className={styles.previewCont}>
            <EventCard
              eventCategory={category}
              eventName={eventName}
              eventDate={date}
              eventTime={time}
              eventLocation={location}
              eventPrice={eventPrice}
              coverImgSrc={imagePreview}
              coverImgAlt="Cover Image"
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
              eventBrief={brief}
            />
          </div>
        </div>
      </MainContainer>
    </section>
  );
};

export default EventForm;
