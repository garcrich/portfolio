import React from 'react';
import styles from './Contact.module.scss';
import { Button } from '@mui/material';

const Contact: React.FC = () => {
  return (
    <section className={styles.container} data-testid="contact">
      <h2>Contact</h2>
      <p>
        I enjoy connecting with like-minded professionals and exploring exciting projects. If you're considering a collaboration or have an interesting project in mind, let's turn those ideas into reality!
      </p>
      <div className={styles.contactInfo}>
        <div className={styles.email}>
          <Button variant="contained">
            <a style={{"color": 'white'}} href="mailto:your.rg3646aws@gmail.com">Get in Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
