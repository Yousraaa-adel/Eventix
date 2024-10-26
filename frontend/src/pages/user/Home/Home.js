import './Home.css';
import MainContainer from '../../../components/MainContainer/MainContainer';

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

function UpcomingEvents() {
  return (
    <MainContainer>
      <div className="upcoming-events-section">
        <h1>Hello Eventix!</h1>
        <h2>Welcome Home!</h2>
      </div>
    </MainContainer>
  );
}

export default Home;
