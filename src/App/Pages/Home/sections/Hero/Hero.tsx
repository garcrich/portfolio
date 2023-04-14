import { FC } from 'react'
import styles from './Hero.module.scss'
import HeroLogo from './HeroLogo'
import { Link as ScrollLink } from 'react-scroll'
import useCustomSpring from './useReactSpring'
import { animated, useSpring } from '@react-spring/web'

const delay = 120

const Header: FC = () => {
  const { spring: introSpring } = useCustomSpring(delay, 1);
  const { spring: nameSpring } = useCustomSpring(delay, 2);
  const { spring: locationSpring } = useCustomSpring(delay, 3);
  const { spring: titleSpring } = useCustomSpring(delay, 4);
  const { spring: descriptionSpring } = useCustomSpring(delay, 5);
  const { spring: ctaSpring } = useCustomSpring(delay, 6);


  const logoAnimation = useSpring({
    from: { transform: 'scale(1)', opacity: 0 },
    to: async (next) => {
      await next({ opacity: 1, transform: 'scale(1)' });
      await next({ opacity: 1, transform: 'scale(1.2)' });
      await next({ transform: 'scale(1)' });
    },
    delay: delay * 10, // Optional: Delay the animation by 120ms * 5
    config: { duration: 200 } // Optional: Set the duration for each step
  });


  return (
    <section className={styles.heroContainer} data-testid="hero" id="Hero">

      <div className={styles.contentContainer}>

        <animated.h3 className={`ft-wt-norm mb-0`} style={introSpring}>
          Hey there, I'm
        </animated.h3>
        <animated.h1 style={nameSpring} className={`${styles.name} mt-0 mb-0`}>Ricky Garcia</animated.h1>
        <animated.h2 style={locationSpring} className={`${styles.location} mt-sm mb-0`} >
          Your very own Salt Lake City-based
        </animated.h2>
          <div className={`${styles.titleContainer} mt-0`}>
            <animated.h2 className={`${styles.title} mt-0 mb-0`} style={titleSpring}>
              <strong className="ft-clr-2">frontend engineer</strong>.
            </animated.h2>
            <animated.span style={logoAnimation}>
              <HeroLogo />
            </animated.span>
          </div>

          <animated.p style={descriptionSpring}  className={`${styles.description} mt-sm`}>With a passion for creating accessible, high-performing websites and a knack for problem-solving, I thrive on turning innovative ideas into digital reality.</animated.p>

          <animated.span style={ctaSpring}>
          <ScrollLink
            className={`mt-md button ${styles.button}`}
            to="About"
            activeClass={styles.active}
            smooth={true}
            offset={-120}
            duration={500}
            spy={true}
            hashSpy={true}
            >
            Learn About Me
          </ScrollLink>
          </animated.span> 

      </div>
    </section>
  )
}

export default Header;
