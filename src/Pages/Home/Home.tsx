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

const intersectionArgs = { rootMargin: '0% 0%', threshold: 0.30, once: true }
const intersectionArgsEduCerts = { rootMargin: '0% 0%', threshold: 0.05, once: true }


const Home: FC = () => {
  const [ref1, springs] = useInView(() => (refAnimationProps), intersectionArgs)
  const [ref2, springs2] = useInView(() => (refAnimationProps), intersectionArgs)
  const [ref3, springs3] = useInView(() => (refAnimationProps), intersectionArgs)
  const [ref4, springs4] = useInView(() => (refAnimationProps), intersectionArgsEduCerts)
  const [ref5, springs5] = useInView(() => (refAnimationProps), intersectionArgs)
  const [ref6, springs6] = useInView(() => (refAnimationProps), intersectionArgs)


  return (
    <div data-testid='home'>
      <NavBar />
      <main className={styles.contentContainer}>
        <animated.div ref={ref1} style={springs}>
          <Hero />
        </animated.div>
        <animated.div ref={ref2} style={springs2}>
          <About />
        </animated.div>
        <animated.div ref={ref3} style={springs3}>
          <Work />
        </animated.div>
        <animated.div ref={ref4} style={springs4}>
          <EduAndCerts />
        </animated.div>
        <animated.div ref={ref5} style={springs5}>
          <Recommendations />
        </animated.div>
        <animated.div ref={ref6} style={springs6}>
          <Contact />
        </animated.div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
