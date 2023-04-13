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
          <li onClick={() => handleNavClick('credentials')}>{menuItems.credentials}</li>
          <li onClick={() => handleNavClick('recommendations')}>{menuItems.recommendations}</li>
          <li onClick={() => handleNavClick('contact')}>{menuItems.contact}</li>
          <li>
            <a 
              href={`/${menuItems.resume.link}`}
              target='_blank'
              rel='noreferrer' 
            >
                {menuItems.resume.title}
            </a>
          </li>
      </ul>
    </div>
  )
}

export default MobileNav;
