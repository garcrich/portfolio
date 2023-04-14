import { FC } from 'react'
import styles from './Hero.module.scss'
import HeroLogo from './HeroLogo'
// import { useInView } from '@react-spring/web'
import { Link as ScrollLink } from 'react-scroll'

// const refAnimationProps = {
//   from: {
//     opacity: 0,
//     y: 50,
//   },
//   to: {
//     opacity: 1,
//     y: 0,
//   },
// }

// const intersectionArgs = { rootMargin: '0% 0%', threshold: 0.30, once: true }

const Header:FC = () => {

  // const [heroRef, springs] = useInView(() => (refAnimationProps), intersectionArgs)

  return (
  <section className={styles.heroContainer} data-testid="hero" id="Hero">
         
      <div className={styles.contentContainer}>

        <h3 className={`ft-wt-norm mb-0`}>Hey there, I'm</h3>
      <h1 className={`${styles.name} mt-0 mb-0`}>Ricky Garcia</h1>
      <h2 className={`${styles.location} mt-sm mb-0`}>Your very own Salt Lake City-based</h2>
      <div className={`${styles.titleContainer} mt-0`}>
        <h2 className={`${styles.title} mt-0 mb-0`}><strong className="ft-clr-2">frontend engineer</strong>.</h2>
        <HeroLogo />
      </div>
      

      <p className={`${styles.description} mt-sm`}>With a passion for creating accessible, high-performing websites and a knack for problem-solving, I thrive on turning innovative ideas into digital reality.</p>
        <ScrollLink 
          className={`${styles.ctaButton} mt-md button`}
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
    </div>
  </section>
  )
}

export default Header;
