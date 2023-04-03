import React from 'react';
import styles from './Navbar.module.scss';


const NavBar = () => {
  return (
    <nav className={styles.container} data-testid="navbar">
      <h2 className={styles.title}>Navbar</h2>
    </nav>
  )
}

export default NavBar;