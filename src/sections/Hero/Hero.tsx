import styles from './Hero.module.scss';

const Header = () => {
  return (
    <section className={styles.container} data-testid="hero">
      <h2 className={styles.title}>Header right here boi</h2>
    </section>
  )
}

export default Header;