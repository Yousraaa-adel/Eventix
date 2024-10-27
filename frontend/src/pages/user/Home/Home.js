import React, { useState } from 'react';
import MainContainer from '../../../components/MainContainer/MainContainer';
import Choices from '../../../components/Choices/Choices';
import Label from '../../../components/Label/Label';
import { TimeFilter } from '../../../components/TimeFilter/TimeFilter';
import EventCard from '../../../components/EventCard/EventCard';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButon';
import './Home.css';

function Home() {
  return (
    <>
      <Hero />
      <UpcomingEvents />
    </>
  );
}

/*** Start Hero Section *****/

function Hero() {
  return (
    <div className="hero">
      <div className="frame">
        <Vector />
        <LabelH1 />
        <LabelSlogan />
        <div className="explore-events-btn">
          <PrimaryButton route="/events">Explore Events</PrimaryButton>
        </div>
      </div>
    </div>
  );
}

function Vector() {
  return (
    <div className="box">
      <img
        className="vector"
        alt="Vector"
        src={`${process.env.PUBLIC_URL}/images/Vector.png`}
      />
    </div>
  );
}

function LabelH1() {
  return (
    <div className="label-h1">
      <div className="light-up-your-day">
        Light&nbsp;&nbsp;Up Your Day
        <br />
        with Adventure
      </div>
    </div>
  );
}

function LabelSlogan() {
  return (
    <div className="labelSlogan">
      <p className="unforgettable">
        Unforgettable Experiences,
        <br />
        One Event at a Time!
      </p>
    </div>
  );
}

/*** End Hero Section *****/
/*** Start Upcoming Events Section *****/

function Filters() {
  const [selectedChoice, setSelectedChoice] = useState('All');

  const handleChoiceClick = (choice) => {
    setSelectedChoice(choice);
  };

  return (
    <div className="filters">
      <div className="upcoming-events-frame">
        <Choices
          className="design-component-instance-node"
          property1={selectedChoice === 'All' ? 'selected' : 'default'}
          text="All"
          onClick={() => handleChoiceClick('All')}
        />
        <Choices
          className="design-component-instance-node"
          property1={selectedChoice === 'Educational' ? 'selected' : 'default'}
          text="Educational"
          onClick={() => handleChoiceClick('Educational')}
        />
        <Choices
          className="design-component-instance-node"
          property1={
            selectedChoice === 'Entertainment' ? 'selected' : 'default'
          }
          text="Entertainment"
          onClick={() => handleChoiceClick('Entertainment')}
        />
        <Choices
          className="design-component-instance-node"
          property1={selectedChoice === 'Workshops' ? 'selected' : 'default'}
          text="Workshops"
          onClick={() => handleChoiceClick('Workshops')}
        />
      </div>

      <TimeFilter
        className="design-component-instance-node"
        property1="default"
      />
    </div>
  );
}

function EventsContainer() {
  return (
    <div className="events-container">
      <div className="cards-container">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
      <div className="view-more-btn">
        <PrimaryButton route="/events">
          View all upcoming events &gt;
        </PrimaryButton>
      </div>
    </div>
  );
}

function UpcomingEvents() {
  return (
    <MainContainer>
      <section className="upcoming-events">
        <Label>Upcoming Events</Label>
        <Filters />
        <EventsContainer />
      </section>
    </MainContainer>
  );
}

export default Home;
