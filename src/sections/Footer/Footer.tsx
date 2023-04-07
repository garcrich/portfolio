import styles from './Footer.module.scss';


const Footer = () => {
  return (
    <footer className={styles.container} data-testid="footer">
      <h2 className={styles.title}>Footer</h2>
      <p>Linkedin</p>
      <p>GitHub</p>
      <p>Email</p>
    </footer>
  )
}

export default Footer;