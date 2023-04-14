import Certification from './_Certifications/_Certification'
import styles from './EduAndCerts.module.scss'
import { certifications } from './certificationData'
import { FC, useRef } from 'react'
import Education from './_Education/_Education'
import { GobalSectionRootMargin, gobalFromSectionTranslateY, gobalSectionDelay, gobalSectionDuration, gobalToSectionTranslateY } from '../../../_utilities/animationConfigs'
import { animated, useInView } from '@react-spring/web'

const EduAndCerts:FC = () => {

  const [eduCertRef, eduCertSpring] = useInView(() => ({
    from: { opacity: 0, transform: gobalFromSectionTranslateY },
    to: { opacity: 1, transform: gobalToSectionTranslateY },
    delay: gobalSectionDelay,
    config: { duration: gobalSectionDuration }
  }), {rootMargin: GobalSectionRootMargin})
  
  return (
    <animated.section style={eduCertSpring} ref={eduCertRef} className={`section-spacing ${styles.eduCertsContainer}`}  data-testid="edu-and-certs" id="EduAndCerts">

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
    </animated.section>
  )
}

export default EduAndCerts;
