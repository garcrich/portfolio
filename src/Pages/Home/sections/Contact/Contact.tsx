import { FC } from 'react';
import styles from './Contact.module.scss';

const Contact: FC = () => {
  return (
    <section className={`${styles.contactContainer}`} data-testid="contact">
      <h2>Let's Connect & Create!</h2>
      <p>
        I'm a <span className='ft-clr-3 ft-wt-extra-bold'>collaboration enthusiast</span> eager to connect and create remarkable projects. Ready to chat?
      </p>
      <p className={``}>
        <strong><span className=''>Let's make magic happen!</span></strong>
      </p>
      <button className='button mt-md'>
        <a href="mailto:your.email@example.com">Get in Touch</a>
      </button>
    </section>
  );
};

export default Contact;
