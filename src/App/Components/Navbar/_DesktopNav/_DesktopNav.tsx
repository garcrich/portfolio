import { FC } from 'react';
import styles from './_DesktopNav.module.scss';
import { MenuData } from '../NavBarTypes';
import { Link as ScrollLink } from 'react-scroll';
import useCustomSpring from './useReactSpringFade';
import { animated } from '@react-spring/web';

type DesktopNavProps = {
  menuItems: MenuData;
}



const DesktopNav: FC<DesktopNavProps> = ({ menuItems }) => {
  const { spring: aboutSpring } = useCustomSpring(1);
  const { spring: workSpring } = useCustomSpring(2);
  const { spring: eduAndCertsSpring } = useCustomSpring(3);
  const { spring: recommendationsSpring } = useCustomSpring(4);
  const { spring: contactSpring } = useCustomSpring(5);
  const { spring: resumeSpring } = useCustomSpring(6);


  return (
    <ul className={styles.desktopMenu} data-testid="desktop-nav">

      <animated.li style={aboutSpring}>
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
      </animated.li>


      <animated.li style={workSpring}>
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
      </animated.li>


      <animated.li style={eduAndCertsSpring}>
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
      </animated.li>


      <animated.li style={recommendationsSpring}>
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
      </animated.li>


      <animated.li style={contactSpring}>
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
      </animated.li>


      <animated.li style={resumeSpring}>
        <a
          className={`${styles.buttonLink} button button-outline`}
          href={`/${menuItems.resume.link}`}
          target="_blank"
          rel="noreferrer"
        >
          {menuItems.resume.title}
        </a>
      </animated.li>

    </ul>
  )
}

export default DesktopNav; 