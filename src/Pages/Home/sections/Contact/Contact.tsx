import { FC } from 'react';
import styles from './Contact.module.scss';

const Contact: FC = () => {

  return (
    <section className={`${styles.contactContainer}`} data-testid="contact" id="Contact">
      <div className={`${styles.contactContent} section-spacing`}>
        <h2>Let's Connect & Create!</h2>
        <p className={`mt-0`}>
          I'm a <span className='ft-clr-3 ft-wt-extra-bold'>collaboration enthusiast</span> eager to connect and create remarkable projects. Ready to chat?
        </p>
        <p className={``}>
          <strong><span className={`mt-0`}>Let's make magic happen!</span></strong>
        </p>
        <a href="mailto:rg3646aws@gmail.com?subject=Let's%20Connect" className={`${styles.link} button mt-md`}>
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Contact;
