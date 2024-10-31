import Navbar from './components/NavBar/NavBar';
import MainContainer from './components/MainContainer/MainContainer';
import HeroSection from './components/HeroSection/HeroSection';
import UpcomingEventsSection from './components/UpcomingEventsSection/UpcomingEventsSection';
import WhyUsSection from './components/WhyUsSection/WhyUsSectin';
import Footer from './components/Footer/Footer';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <HeroSection />
      <UpcomingEventsSection />
      <WhyUsSection />
      <Footer />
    </main>
  );
}
