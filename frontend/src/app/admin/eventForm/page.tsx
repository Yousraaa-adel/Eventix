'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './page.module.css';
import AdminNavbar from '@/app/components/admin/adminNavbar/adminNavbar';
import MainContainer from '@/app/components/MainContainer/MainContainer';
import PageTopSection from '@/app/components/PageTopSection/PageTopSection';
import AdminSideLabel from '@/app/components/admin/AdminSideLabel/AdminSideLabel';
import EventCard from '@/app/components/EventsCardsContainer/EventCard/EventCard';
import PrimaryButton from '@/app/components/PrimaryButton/PrimaryButon';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

type Props = {
  eventId?: string | null; // Optional prop
};

const EventForm = ({ eventId: propEventId }: Props) => {
  const searchParams = useSearchParams();
  const [eventId, setEventId] = useState<string | null>(propEventId || null);
  const [loading, setLoading] = useState(true);
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const searchEventId = searchParams.get('eventId');
    if (searchEventId) {
      setEventId(searchEventId); // Update state if eventId is found in search params
    }
  }, [searchParams]);

  const [eventName, setEventName] = useState();
  const [category, setCategory] = useState('workshop');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');
  const [brief, setBrief] = useState('');
  const [imagePreview, setImagePreview] = useState(
    '/images/rectangleImage.png'
  );
  const [ticketsBooked, setTicketsBooked] = useState('');
  const [status, setStatus] = useState('upcoming');
  const router = useRouter();

  useEffect(() => {
    // Fetch event data for editing if eventId is provided
    if (eventId) {
      console.log(eventId);
      const fetchEventData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/v1/events/${eventId}`
          );
          const event = response.data.data.event;

          console.log('Fetched event data:', event);

          setEventName(event.eventName);
          setCategory(event.category);
          setPrice(event.price);
          setDate(event.date);
          setTime(event.time);
          setLocation(event.location);
          setBrief(event.brief);
          setTicketsBooked(event.ticketsBooked);
          setStatus(event.status);
          setImagePreview(event.image || '/images/rectangleImage.png');
        } catch (error) {
          console.error('Error fetching event data:', error);
        } finally {
          setLoading(false); // Data fetch completed, turn off loading state
        }
      };

      fetchEventData(); // Call the function to fetch data on mount
    } else {
      setLoading(false); // No eventId, directly set loading to false
    }
  }, [eventId]);

  if (loading) {
    return <p>Loading event data...</p>; // Render a loading state
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      setImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Submit triggered');
    console.log('Event ID:', eventId);
    console.log('Event Data:', {
      eventName,
      category,
      price,
      date,
      time,
      location,
      brief,
      ticketsBooked,
      status,
      image,
    });

    const eventData = new FormData();
    // Add only non-empty fields to the FormData
    if (eventName) eventData.append('eventName', eventName);
    if (category) eventData.append('category', category);
    if (price) eventData.append('price', price);
    if (date) eventData.append('date', date);
    if (time) eventData.append('time', time);
    if (location) eventData.append('location', location);
    if (brief) eventData.append('brief', brief);
    if (ticketsBooked) eventData.append('ticketsBooked', ticketsBooked);
    if (status) eventData.append('status', status);
    if (image) eventData.append('image', image);

    try {
      if (eventId) {
        // If eventId exists, send a PUT request to update the event
        console.log('Event id from patch', eventId);

        const response = await axios.patch(
          `http://localhost:5000/api/v1/events/${eventId}`,
          eventData,
          { headers: { 'Content-Type': 'multipart/form-data' } }
        );
        console.log('Event updated:', response.data);
      } else {
        // If eventId does not exist, send a POST request to create a new event
        const response = await axios.post(
          'http://localhost:5000/api/v1/events',
          eventData,
          { headers: { 'Content-Type': 'multipart/form-data' } }
        );
        console.log('Event added:', response.data);
      }

      router.push('/admin/eventMang'); // Redirect after submitting
    } catch (error) {
      console.error('Error submitting event:', error);
      if (error.response) {
        console.error('Error response:', error.response.data);
      }
    }
  };

  const formatDate = (date: string | undefined) => {
    if (!date) return 'Invalid Date'; // Fallback if date is undefined or null

    const dateObj = new Date(date);
    if (isNaN(dateObj.getTime())) {
      return 'Invalid Date'; // Return a fallback if date is invalid
    }

    return dateObj.toISOString().split('T')[0]; // Format as YYYY-MM-DD
  };

  // Ensure date is formatted correctly on input change
  const handleDateChange = (e) => {
    const rawDate = e.target.value;
    const dateObj = new Date(rawDate);
    const formattedDate = !isNaN(dateObj.getTime())
      ? dateObj.toISOString().split('T')[0]
      : ''; // Format if valid
    setDate(formattedDate); // Set formatted date
  };

  return (
    <section className={styles.eventForm}>
      <AdminNavbar />
      <PageTopSection isEventForm={true} />
      <MainContainer>
        <div className={styles.eventFormTop}>
          <AdminSideLabel labelText={eventId ? 'Edit Event' : 'Create Event'} />
        </div>
        <div className={styles.eventFormBigCont}>
          <div className={styles.eventFormCont}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.fieldBox}>
                <div className={styles.placeholderTitle}>Event Name</div>
                <input
                  name="eventName"
                  type="text"
                  // required
                  value={eventName || ''}
                  placeholder="Enter event name"
                  onChange={(e) => setEventName(e.target.value)}
                />
              </div>
              <div className={styles.fieldBox}>
                <div className={styles.placeholderTitle}>Category</div>
                <select
                  name="category"
                  value={category || ''}
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
                  onChange={handleDateChange}
                  required
                />
              </div>
              <div className={styles.fieldBox}>
                <div className={styles.placeholderTitle}>Event Time</div>
                <input
                  name="time"
                  type="time"
                  value={time || ''}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
              </div>
              <div className={styles.fieldBox}>
                <div className={styles.placeholderTitle}>Price/Person</div>
                <input
                  name="price"
                  type="number"
                  value={price || ''}
                  placeholder="Enter event price"
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
              <div className={styles.fieldBox}>
                <div className={styles.placeholderTitle}>Location</div>
                <select
                  name="location"
                  value={location || ''}
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
                  value={ticketsBooked || ''}
                  onChange={(e) => setTicketsBooked(e.target.value)}
                  required
                />
              </div>
              <div className={styles.fieldBox}>
                <div className={styles.placeholderTitle}>Event Status</div>
                <input
                  name="status"
                  placeholder="Enter event status"
                  value={status || ''}
                  onChange={(e) => setStatus(e.target.value)}
                  required
                />
              </div>
              <div className={styles.fieldBox}>
                <div className={styles.placeholderTitle}>Upload Image</div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
              <div className={`${styles.fieldBox} ${styles.brief}`}>
                <div className={`${styles.placeholderTitle}`}>Brief</div>
                <textarea
                  name="brief"
                  placeholder="Enter event brief"
                  value={brief || ''}
                  onChange={(e) => setBrief(e.target.value)}
                  required
                />
              </div>
              <div className={styles.addEventBtn}>
                <button type="submit" className={styles.addEventBtn}>
                  {eventId ? 'Update Event' : 'Add Event'}
                </button>
              </div>
            </form>
          </div>
          <div className={styles.previewCont}>
            <EventCard
              category={category}
              eventName={eventName}
              date={date}
              time={time}
              location={location}
              price={price}
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
              brief={brief}
            />
          </div>
        </div>
      </MainContainer>
    </section>
  );
};

export default EventForm;
