
import { useEffect, useState } from 'react';
import logo from '../../assets/images/logo.svg'
import menuData from './MenuData';
import styles from './Navbar.module.scss';
import DesktopNav from './_DesktopNav/_DesktopNav';
import MobileNav from './_MobileNav/_MobileNav';
import { useMediaQuery } from 'react-responsive'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [underlayPosHolder, setUnderlayPosHolder] = useState<boolean>(false);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

  useEffect(() => {
    if (!underlayPosHolder) {
      setUnderlayPosHolder(true);
    }
  
    const hideUnderlayTimeout = setTimeout(() => {
      setUnderlayPosHolder(false);
    }, 200);
  
    return () => {
      clearTimeout(hideUnderlayTimeout);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobileMenuOpen]);
  
  useEffect(() => {
    if(!isTabletOrMobile) {
      setIsMobileMenuOpen(false);
      setUnderlayPosHolder(false);
    }
  }, [isTabletOrMobile]);

  const handleUnderlayClick = (): void => {

    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <nav className={`${styles.navContainer}`} data-testid='navbar'>
      <ScrollLink
        className={styles.logoLink}
        activeClass="active"
        to="Hero"
        smooth={true}
        offset={-100}
        duration={500}
        hashSpy={true}
      >
        <img src={logo} className={styles.logo} alt='logo' />
      </ScrollLink>
      <button
        className={styles.mobileMenuIcon}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        data-testid='mobile-menu-button'
        aria-label='Open mobile menu'
        aria-expanded={isMobileMenuOpen}    
      >
        <span className={styles.mobileMenuIconBar} />
        <span className={styles.mobileMenuIconBar} />
        <span className={styles.mobileMenuIconBar} />
      </button>
      {isTabletOrMobile && (
        <div 
          data-testid='mobile-menu-underlay' 
          className={`${styles.mobileMenuUnderlay} ${isMobileMenuOpen && styles.active} ${underlayPosHolder && styles.underlayPosHolder}`} 
          onClick={handleUnderlayClick}
        />
      )}
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