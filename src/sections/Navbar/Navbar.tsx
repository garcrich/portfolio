import logo from '../../assets/images/logo.svg'
import styles from './Navbar.module.scss';


const NavBar = () => {
  return (
    <nav className={`${styles.container} ${styles.navContainer}`} data-testid="navbar">
      <ul className={styles.navMenu}>
        <li className={styles.logo}><img src={logo} alt="logo"/></li>
        <li>About</li>
        <li>Work</li>
        <li>Projects</li>
        <li>Recommendations</li>
        <li>Contact</li>
        <li>Credentials</li>
      </ul>
    </nav>
  )
}

export default NavBar;