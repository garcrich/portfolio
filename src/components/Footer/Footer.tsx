import React from 'react';
import styles from './Footer.module.scss';


const Footer = () => {
  return (
    <footer className={styles.container} data-testid="footer">
      <h2 className={styles.title}>Footer</h2>
    </footer>
  )
}

export default Footer;