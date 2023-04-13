import Certification from './_Certifications/_Certification'
import styles from './EduAndCerts.module.scss'
import { certifications } from './certificationData'
import { FC, useRef } from 'react'
import Education from './_Education/_Education'

const EduAndCerts:FC = () => {
  const eduAndCertsRef = useRef<HTMLDivElement>(null);
  return (
    <section className={`section-spacing ${styles.eduCertsContainer}`} ref={eduAndCertsRef}  data-testid="edu-and-certs" id="EduAndCerts">
      <h2 className={styles.title}>Credentials</h2>

      <Education/>

      <div className={`mt-xxxl`}>
        <h3 className={`ft-clr-3 ${styles.certTitle}`}>Certifications</h3>
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
