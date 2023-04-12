import styles from './Footer.module.scss';


const Footer = () => {
  return (
    <footer className={styles.footer} data-testid="footer">
      <p>Linkedin</p>
      <p>GitHub</p>
      <p>Email</p>
    </footer>
  )
}

export default Footer;