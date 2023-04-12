import Certification from './_Certifications/_Certification';
import styles from './EduAndCerts.module.scss';
import { certifications } from './certificationData';
import { FC, useRef } from 'react';

const EduAndCerts:FC = () => {
  const eduAndCertsRef = useRef<HTMLDivElement>(null);
  return (
    <section className={`section-spacing`} ref={eduAndCertsRef}  data-testid="edu-and-certs">
      <h2 className={styles.title}>Credentials</h2>

      <h3 className={`${styles.subtitle} ft-clr-3`}>Education</h3>
      <div className={styles.container}>
        <p>Bachelor of Science (BS), Computer Science</p>
        <p>Idaho State University, 2012 - 2016</p>
      </div>

      <div className={`${styles.certsContainer} mt-lg`}>
        <h3 className={`${styles.subtitle} ft-clr-3`}>Certifications</h3>
        {certifications.map((cert, idx) => (
          <Certification 
            key={cert.title}
            title={cert.title}
            description={cert.description} 
            certification={cert.certification}
            idx={idx}
          />
        ))}
      </div>
    </section>
  )
}

export default EduAndCerts;
