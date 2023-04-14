import { FC } from 'react';
import styles from './_DesktopNav.module.scss';
import { MenuData } from '../NavBarTypes';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
type DesktopNavProps = {
  menuItems: MenuData;
}

const DesktopNav:FC<DesktopNavProps> = ({menuItems}) => {

  return (
    <ul className={styles.desktopMenu} data-testid="desktop-nav">
      <li>
          <ScrollLink
          to="About"
          activeClass={styles.active}
          smooth={true}
          offset={-120}
          duration={500}
          spy={true}
          hashSpy={true}
        >
          {menuItems.about}
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass={styles.active}
          to="Work"
          
          smooth={true}
          offset={-120}
          duration={500}
          spy={true}
          hashSpy={true}
        >
          {menuItems.work}
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
            activeClass={styles.active}
            to="EduAndCerts"
            
            smooth={true}
            offset={-120}
            duration={500}
            spy={true}
            hashSpy={true}
          >
          {menuItems.credentials}
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass={styles.active}
          to="Recommendations"
          
          smooth={true}
          offset={-120}
          duration={500}
          spy={true}
          hashSpy={true}
        >
          {menuItems.recommendations}
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass={styles.active}
          to="Contact"
          smooth={true}
          offset={0}
          duration={500}
          spy={true}
          hashSpy={true}
          
        >
          {menuItems.contact}
        </ScrollLink>
      </li>
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