// import logo from '../assets/images/Print_Transparent.svg';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import styles from './App.module.scss';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Header from '../sections/Header/Header';
import About from '../sections/About/About';
import Work from '../sections/Work/Work';
import Credentials from '../sections/Credentials/Credentials';
import Recommendations from '../sections/Recommendations/Recommendations';
import Contact from '../sections/Contact/Contact';
import Projects from '../sections/Projects/Projects';

function App() {
  return (
    <div className={styles.App} data-testid='app'>
      <Navbar/>
      <main className={styles.main}>
        <Header />
        <About />
        <Work />
        <Credentials />
        <Recommendations />
        <Projects />
        <Contact />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
