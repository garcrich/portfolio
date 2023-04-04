import styles from './Header.module.scss';

const Header = () => {
  return (
    <section className={styles.container} data-testid="header">
      <h2 className={styles.title}>Header right here boi</h2>
    </section>
  )
}

export default Header;