import Certification from './_Certifications/_Certification';
import styles from './EduAndCerts.module.scss';
import { certifications } from './certificationData';
import { FC } from 'react';

const EduAndCerts:FC = () => {
  return (
    <section className={styles.container} data-testid="edu-and-certs">
      <h2 className={styles.title}>Credentials</h2>

      <h3 className={styles.subtitle}>Education</h3>
      <div className={styles.container}>
        <p>Bachelor of Science (BS), Computer Science</p>
        <p>Idaho State University, 2012 - 2016</p>
      </div>

      <h3 className={styles.subtitle}>Certifications</h3>
      {certifications.map((cert) => (
        <Certification key={cert.title} title={cert.title} description={cert.description} />
      ))}
    </section>
  )
}

export default EduAndCerts;
