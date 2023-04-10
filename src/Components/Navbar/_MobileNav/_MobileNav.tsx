import { FC } from 'react';
import styles from './_MobileNav.module.scss';
import { MenuData } from '../NavBarTypes';

type MobileNavProps = {
  menuItems: MenuData;
}

const MobileNav:FC<MobileNavProps> = ({menuItems}) => {
  return (
    <ul className={styles.mobileMenu} data-testid="mobile-nav">
        <li><a href="#about">{menuItems.about}</a></li>
        <li><a href="#work">{menuItems.work}</a></li>
        <li><a href="#projects">{menuItems.projects}</a></li>
        <li><a href="#recommendations">{menuItems.Recommendations}</a></li>
        <li><a href="#contact">{menuItems.contact}</a></li>
        <li><a href="#credentials">{menuItems.Credentials}</a></li>
        <li className="button button-outline">
          <a 
            href={`/${menuItems.Resume.link}`}
            target="_blank"
            rel="noreferrer" 
          >
              {menuItems.Resume.title}
          </a>
        </li>
    </ul>
  )
}

export default MobileNav;