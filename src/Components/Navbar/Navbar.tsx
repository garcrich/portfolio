
import logo from '../../assets/images/logo.svg'
import menuData from './MenuData';
import styles from './Navbar.module.scss';
import DesktopNav from './_DesktopNav/_DesktopNav';
import MobileNav from './_MobileNav/_MobileNav';

const NavBar = () => {

  return (
    <nav className={`${styles.container} ${styles.navContainer}`} data-testid="navbar">
      <img src={logo} className={styles.logo} alt="logo"/>
      <DesktopNav menuItems={menuData} />
      <MobileNav menuItems={menuData} />
    </nav>
  )
}

export default NavBar; 