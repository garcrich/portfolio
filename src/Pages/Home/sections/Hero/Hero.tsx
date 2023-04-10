import { FC } from 'react';
import styles from './Hero.module.scss'
import HeroLogo from './HeroLogo'

const Header:FC = () => {
  return (
  <section className={styles.heroContainer} data-testid="hero">
    <div className={styles.contentContainer}>
      <p className={styles.introduction}>Hey there, I'm</p>
      <h1 className={`${styles.name} mt-sm`}>Ricky Garcia</h1>
        <h2 className={`${styles.location} mt-md`}>Your very own Salt Lake City-based</h2>
      <div className={`${styles.titleContainer}`}>
        <h2 className={`${styles.title} mt-xs`}><strong>frontend engineer</strong>.</h2>
        <HeroLogo />
      </div>
      

      <p className={`${styles.subtitle} mt-md`}>With a passion for creating accessible, high-performing websites and a knack for problem-solving, I thrive on turning innovative ideas into digital reality.</p>
      <button className={`${styles.ctaButton} mt-lg button`}>View My Work</button>
    </div>
  </section>
  )
}

export default Header;
