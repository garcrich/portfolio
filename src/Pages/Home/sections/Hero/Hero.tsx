import { FC } from 'react';
import styles from './Hero.module.scss'
import HeroLogo from './HeroLogo'

const Header:FC = () => {
  return (
  <section className={styles.heroContainer} data-testid="hero">
    <div className={styles.contentContainer}>
      <h3 className={`ft-wt-norm mb-0`}>Hey there, I'm</h3>
      <h1 className={`${styles.name} mt-0 mb-0 ft-wt-bold`}>Ricky Garcia</h1>
      <h2 className={`${styles.location} mt-sm mb-0 ft-wt-bold`}>Your very own Salt Lake City-based</h2>
      <div className={`${styles.titleContainer} mt-0`}>
        <h2 className={`${styles.title} mt-0 mb-0`}><strong className="ft-clr-2">frontend engineer</strong>.</h2>
        <HeroLogo />
      </div>
      

      <p className={`${styles.description} mt-sm`}>With a passion for creating accessible, high-performing websites and a knack for problem-solving, I thrive on turning innovative ideas into digital reality.</p>
      <button className={`${styles.ctaButton} mt-md button`}>Learn About Me</button>
    </div>
  </section>
  )
}

export default Header;
