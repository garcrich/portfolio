import { Dispatch, FC } from 'react';
import styles from './_MobileNav.module.scss';
import { MenuData } from '../NavBarTypes';

type MobileNavProps = {
  menuItems: MenuData;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: Dispatch<React.SetStateAction<boolean>>
}

const MobileNav:FC<MobileNavProps> = ({menuItems, isMobileMenuOpen, setIsMobileMenuOpen}) => {


  const handleNavClick = (target: string) => {

    setIsMobileMenuOpen(false);
  };

  return (
    <div data-testid='mobile-menu-container' className={`${styles.mobileMenuContainer} ${isMobileMenuOpen && styles.isMobileMenuOpen}`}>
      <button className={styles.closeButton} onClick={() => setIsMobileMenuOpen(false)} data-testid='close-button'>
        <span className={styles.closeIcon}></span>
      </button>

      <ul className={styles.mobileMenu} data-testid='mobile-nav'>
          <li onClick={() => handleNavClick('about')}>{menuItems.about}</li>
          <li onClick={() => handleNavClick('work')}>{menuItems.work}</li>
          <li onClick={() => handleNavClick('projects')}>{menuItems.projects}</li>
          <li onClick={() => handleNavClick('recommendations')}>{menuItems.Recommendations}</li>
          <li onClick={() => handleNavClick('contact')}>{menuItems.contact}</li>
          <li onClick={() => handleNavClick('credentials')}>{menuItems.Credentials}</li>
          <li>
            <a 
              href={`/${menuItems.Resume.link}`}
              target='_blank'
              rel='noreferrer' 
            >
                {menuItems.Resume.title}
            </a>
          </li>
      </ul>
    </div>
  )
}

export default MobileNav;
