// import logo from '../assets/images/Print_Transparent.svg';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import styles from './Home.module.scss';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Work from './sections/Work/Work';
import EduAndCerts from './sections/EducationAndCertifications/EduAndCerts';
import Recommendations from './sections/Recommendations/Recommendations';
import Contact from './sections/Contact/Contact';
import Projects from './sections/Projects/Projects';
import NavBar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { FC } from 'react';

const Home:FC = () => {
  return (
    <div data-testid='home'>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Work />
        <EduAndCerts />
        <Recommendations />
        <Projects /> {/*<- currently messing up mobile styles*/}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
