
import { FC } from 'react';
import styles from './ErrorPage.module.scss'
import { Link } from "react-router-dom";


const ErrorPage:FC = () => {
  return (
  <section className={styles.container} data-testid="error-page">
    <h1>Ooops! That's illegal!</h1>
    <iframe title="illegal" src="https://giphy.com/embed/f8lDluiWJ7yQTtdS3L" width="480" height="270" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
    <button className="button"><Link to={`/`}>Return to home</Link></button>
    
  </section>
  )
}

export default ErrorPage;

