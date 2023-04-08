
import logo from '../../assets/images/logo.svg'
import styles from './Navbar.module.scss';

const NavBar = () => {

  return (
    <nav className={`${styles.container} ${styles.navContainer}`} data-testid="navbar">
      <ul className={styles.navMenu}>
        <li className={styles.logo}><img src={logo} alt="logo"/></li>
        <li><a href="#about">About</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#recommendations">Recommendations</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#credentials">Credentials</a></li>
        <li className="button button-outline"><a href="/Resume-Ricky-Garcia.pdf" target="_blank">Resume</a></li>
      </ul>
    </nav>
  )
}

export default NavBar; 