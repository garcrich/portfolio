import { FC } from 'react';
import styles from './_DesktopNav.module.scss';
import { MenuData } from '../NavBarTypes';

type DesktopNavProps = {
  menuItems: MenuData;
}

const DesktopNav:FC<DesktopNavProps> = ({menuItems}) => {

  return (
    <ul className={styles.desktopMenu} data-testid="desktop-nav">
      <li><a href="#about">{menuItems.about}</a></li>
      <li><a href="#work">{menuItems.work}</a></li>
      <li><a href="#credentials">{menuItems.credentials}</a></li>
      <li><a href="#recommendations">{menuItems.recommendations}</a></li>
      <li><a href="#contact">{menuItems.contact}</a></li>
      <li>
        <a
          className={`${styles.buttonLink} button button-outline`}
          href={`/${menuItems.resume.link}`}
          target="_blank"
          rel="noreferrer" 
        >
            {menuItems.resume.title}
        </a>
      </li>
    </ul>
  )
}

export default DesktopNav; 