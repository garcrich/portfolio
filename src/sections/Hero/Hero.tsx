
import styles from './Hero.module.scss';
import HeroLogo from './HeroLogo'
const Header = () => {
  return (
  <section className={styles.container} data-testid="hero">
    <HeroLogo />
    <p>Hey there, I'm</p>
    <h1 className={styles.name}>Ricky Garcia</h1>
    <h2 className={styles.title}>Your Salt Lake City-based frontend engineer</h2>
    <p className={styles.subtitle}>With a passion for creating accessible, high-performing websites and a knack for problem-solving, I thrive on turning innovative ideas into digital reality.</p>
    <button className="button">View My Work</button>
  </section>
  )
}

export default Header;