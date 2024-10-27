import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './EventCard.css';

function EventCard() {
  return (
    <div className="event-card">
      <img
        className="rectangle"
        alt="Rectangle"
        src="/images/rectangleImage.png"
      />
      <div className="event-card-frame">
        <div className="div">
          <div className="top">
            <div className="event-type">Workshops</div>

            <div className="event">
              <div className="event-info">
                <div className="div-2">
                  <div className="icon">
                    <img
                      className="vector"
                      alt="vector"
                      src="/images/calendarIcon.jpg"
                    />
                  </div>
                  <div className="text">15/10</div>
                </div>

                <div className="div-2">
                  <div className="icon">
                    <img
                      className="vector"
                      alt="vector"
                      src="/images/timeIcon.jpg"
                    />
                  </div>
                  <div className="text">16:30</div>
                </div>

                <div className="div-2">
                  <div className="vector-wrapper">
                    <img
                      className="img"
                      alt="vector"
                      src="/images/locationIcon.jpg"
                    />
                  </div>
                  <div className="text">Downtown</div>
                </div>
              </div>
              <div className="event-name-wrapper">
                <div className="event-name">Coffee 101</div>
              </div>
            </div>
          </div>
          <p className="event-description">
            Lorem ipsum dolor sit amet, consectetur a nulla, id lacinia est
            condimentum sed. Sed eu magna sit amet libero feugiat lobortis sit
            amet sit amet ex.
          </p>
        </div>
        <div className="frame-2">
          <div className="ticket-price">
            <div className="icon">
              <img
                className="vector-2"
                alt="Vector"
                src="/images/ticketIcon.png"
              />
            </div>
            <div className="text-2">40 LE/Person</div>
          </div>
          <div className="details-btn">
            <Link to="/eventinfo" className="secondary-button-instance">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
