import React, { useReducer } from 'react';
import Link from 'next/link';
import styles from './EventCard.module.css';
import IconInfo from './IconInfo/IconInfo';

interface EventCardProps {
  eventCategory: string;
  eventName: string;
  eventBrief: string;
  eventPrice: string;
  eventDate: string;
  eventTime: string;
  eventLocation: string;
  coverImgSrc?: string;
  coverImgAlt?: string;
  iconImageSrc: {
    calendar: string;
    time: string;
    location: string;
    ticket: string;
  };
  iconImgAlt: {
    calendar: string;
    time: string;
    location: string;
    ticket: string;
  };
  showCoverImg?: boolean;
  isSideUpcomingEvent?: boolean;
}

function EventCard({
  eventCategory,
  eventName,
  eventBrief,
  eventPrice,
  eventDate,
  eventTime,
  eventLocation,
  coverImgSrc,
  coverImgAlt,
  iconImageSrc,
  iconImgAlt,
  showCoverImg = true,
  isSideUpcomingEvent = false,
}: EventCardProps) {
  return (
    <div
      className={
        isSideUpcomingEvent ? styles.sideUpcomingEvent : styles.eventCard
      }
    >
      {showCoverImg && (
        <img
          className={
            isSideUpcomingEvent ? styles.sideUpcomingEventImg : styles.rectangle
          }
          alt={coverImgAlt}
          src={coverImgSrc}
        />
      )}
      <div
        className={
          isSideUpcomingEvent
            ? styles.sideUpcomingEventFrame
            : styles.eventCardFrame
        }
      >
        <div className={styles.eventCardFrameDiv}>
          <div
            className={isSideUpcomingEvent ? styles.sideEventTop : styles.top}
          >
            <div className={styles.eventType}>{eventCategory}</div>

            <div
              className={isSideUpcomingEvent ? styles.sideEvent : styles.event}
            >
              <div
                className={
                  isSideUpcomingEvent ? styles.sideEventInfo : styles.eventInfo
                }
              >
                <IconInfo
                  alt={iconImgAlt.calendar}
                  src={iconImageSrc.calendar}
                  text={eventDate}
                />

                <IconInfo
                  alt={iconImgAlt.time}
                  src={iconImageSrc.time}
                  text={eventTime}
                />

                <IconInfo
                  alt={iconImgAlt.location}
                  src={iconImageSrc.location}
                  text={eventLocation}
                />
              </div>
              <div className={styles.eventNameWrapper}>
                <div
                  className={
                    isSideUpcomingEvent
                      ? styles.sideEventName
                      : styles.eventName
                  }
                >
                  {eventName}
                </div>
              </div>
            </div>
          </div>
          <p
            className={
              isSideUpcomingEvent
                ? styles.sideEventDescription
                : styles.eventDescription
            }
          >
            {eventBrief}
          </p>
        </div>
        <div
          className={
            isSideUpcomingEvent
              ? styles.sideEventCardFrame2
              : styles.evetnCardFrame2
          }
        >
          <div
            className={
              isSideUpcomingEvent ? styles.sideEventPrice : styles.ticketPrice
            }
          >
            <div className={styles.icon}>
              <img
                className={styles.vector2}
                alt={iconImgAlt.ticket}
                src={iconImageSrc.ticket}
              />
            </div>
            <div className={styles.text2}>{eventPrice} LE/Person</div>
          </div>
          <div
            className={
              isSideUpcomingEvent
                ? styles.sideEventDetailsBtn
                : styles.detailsBtn
            }
          >
            <Link
              href="/eventinfo"
              className={
                isSideUpcomingEvent
                  ? styles.sideEventBtnLink
                  : styles.secondaryButtonInstance
              }
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
