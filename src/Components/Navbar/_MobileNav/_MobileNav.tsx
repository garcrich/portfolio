import { Dispatch, FC } from 'react';
import styles from './_MobileNav.module.scss';
import { MenuData } from '../NavBarTypes';
import { Link as ScrollLink } from 'react-scroll';

type MobileNavProps = {
  menuItems: MenuData;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: Dispatch<React.SetStateAction<boolean>>
}

const MobileNav: FC<MobileNavProps> = ({ menuItems, isMobileMenuOpen, setIsMobileMenuOpen }) => {


  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div data-testid='mobile-menu-container' className={`${styles.mobileMenuContainer} ${isMobileMenuOpen && styles.isMobileMenuOpen}`}>
      <button className={styles.closeButton} onClick={() => setIsMobileMenuOpen(false)} data-testid='close-button'>
        <span className={styles.closeIcon}></span>
      </button>

      <ul className={styles.mobileMenu} data-testid='mobile-nav'>
        <li>
          <ScrollLink
            to="About"
            activeClass={styles.active}
            smooth={true}
            offset={-120}
            duration={500}
            spy={true}
            hashSpy={true}
            onClick={handleNavClick}
          >
            {menuItems.about}
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="Work"
            activeClass={styles.active}
            smooth={true}
            offset={-120}
            duration={500}
            spy={true}
            hashSpy={true}
            onClick={handleNavClick}
          >
            {menuItems.work}
          </ScrollLink></li>
        <li>
          <ScrollLink
            to="EducAndCerts"
            activeClass={styles.active}
            smooth={true}
            offset={-120}
            duration={500}
            spy={true}
            hashSpy={true}
            onClick={handleNavClick}
          >
            {menuItems.credentials}
          </ScrollLink></li>
        <li>
          <ScrollLink
            to="Recommendations"
            activeClass={styles.active}
            smooth={true}
            offset={-120}
            duration={500}
            spy={true}
            hashSpy={true}
            onClick={handleNavClick}
          >
            {menuItems.recommendations}
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="Contact"
            activeClass={styles.active}
            smooth={true}
            offset={-120}
            duration={500}
            spy={true}
            hashSpy={true}
            onClick={handleNavClick}
          >
            {menuItems.contact}
          </ScrollLink>
        </li>
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
