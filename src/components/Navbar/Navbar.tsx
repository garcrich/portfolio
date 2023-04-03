import React from 'react';
import styles from './Navbar.module.scss';


const Footer = () => {
  return (
    <footer className={styles.container} data-testid="nav">
      <h2 className={styles.title}>Navbar</h2>
    </footer>
  )
}

export default Footer;