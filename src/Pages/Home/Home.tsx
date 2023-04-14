import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Work from './sections/Work/Work';
import EduAndCerts from './sections/EducationAndCertifications/EduAndCerts';
import Recommendations from './sections/Recommendations/Recommendations';
import Contact from './sections/Contact/Contact';
import NavBar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { FC } from 'react';
import { useInView, animated } from '@react-spring/web'
import styles from './Home.module.scss';

const refAnimationProps = {
  from: {
    opacity: 0,
    y: 50,
  },
  to: {
    opacity: 1,
    y: 0,
  },
}

// const intersectionArgs = { rootMargin: '0% 0%', threshold: 0.30, once: true }
// const intersectionArgsEduCerts = { rootMargin: '0% 0%', threshold: 0.05, once: true }


const Home: FC = () => {

  return (
    <div data-testid='home'>
      <NavBar />
      <main className={styles.contentContainer}>
          <Hero />
          {/* <About />
          <Work />
          <EduAndCerts />
          <Recommendations />
          <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}

export default Home;
