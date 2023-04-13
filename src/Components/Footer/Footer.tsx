import styles from './Footer.module.scss';
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className={styles.footer} data-testid="footer">
      <a href="https://www.linkedin.com/in/ricky-g-garcia/" target="_blank" rel="noopener noreferrer">
        <ImLinkedin />
      </a>
      <a href="https://github.com/garcrich" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="mailto:your.rg3646aws@gmail.com">
        <MdEmail />
      </a>
    </footer>
  )
}

export default Footer;
