
import { FC } from 'react';
import styles from './ErrorPage.module.scss'
import { Link } from "react-router-dom";
import NavBar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';


const ErrorPage: FC = () => {
  return (
    <>
      <NavBar />
      <section className={styles.errorPageContainer} data-testid="error-page">
        <h1>Ooops! That's illegal!</h1>
        <iframe title="illegal" src="https://giphy.com/embed/f8lDluiWJ7yQTtdS3L" width="480" height="270" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
        <button 
          className={`button ${styles.errorBtn} mt-md`}
          aria-label='Return to home page'
        >
          <Link to={`/`}>Return to home</Link></button>
      </section>
      <Footer />
    </>
  )
}

export default ErrorPage;

