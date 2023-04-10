
import { useEffect, useState } from 'react';
import logo from '../../assets/images/logo.svg'
import menuData from './MenuData';
import styles from './Navbar.module.scss';
import DesktopNav from './_DesktopNav/_DesktopNav';
import MobileNav from './_MobileNav/_MobileNav';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [underlayPosHolder, setUnderlayPosHolder] = useState<boolean>(false);

  useEffect(() => {
    setUnderlayPosHolder(true);
    const timer = setTimeout(() => {
      setUnderlayPosHolder(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className={`${styles.container} ${styles.navContainer}`} data-testid="navbar">
      <img src={logo} className={styles.logo} alt="logo" />

      <button
        className={styles.mobileMenuIcon}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        data-testid="mobile-menu-button"
        aria-label="Open mobile menu"
        aria-expanded={isMobileMenuOpen}    
      >
        <span className={styles.mobileMenuIconBar} />
        <span className={styles.mobileMenuIconBar} />
        <span className={styles.mobileMenuIconBar} />
      </button>
      <div data-testid="mobile-menu-underlay" className={`${styles.mobileMenuUnderlay} ${isMobileMenuOpen && styles.active} ${underlayPosHolder && styles.underlayPosHolder}`} />
      <DesktopNav menuItems={menuData} />
      <MobileNav
        menuItems={menuData}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </nav>
  )
}

export default NavBar; 