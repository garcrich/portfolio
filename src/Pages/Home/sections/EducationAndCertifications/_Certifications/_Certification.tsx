  // Certification.tsx
import { FC } from 'react';
import styles from './_Certification.module.scss';

type CertificationProps = {
  title: string;
  description: string;
  certification: {
    verificationUrl: string;
    img: string;
  },
  idx: number;
}

const Certification: FC<CertificationProps> = ({ title, description, certification, idx }) => {
  let isEvenElem = idx % 2 === 0;
  return (
    <div className={`grid ${idx !== 0 ? 'mt-xxxl' : 'mt-0 mt-lg-lmb'}`} data-testid="certification">
      <div className={`col-12 grid`}>
        
        <h4 className={`ft-clr-1 col-12 ${isEvenElem ? styles.txtAlgEven : styles.txtAlgOdd}`}>{title}</h4>

        <div className={`grid mt-md mt-0-lmb col-12 ${!isEvenElem ? 'g-ji-end' : 'g-ji-start'}`}>

          <div 
            className={`${styles.certificationDescriptionContainer} ${!isEvenElem && styles.isOdd} col-6 col-12-lmb`}
          >
            <p className={`${styles.certificationDescription} mt-0 mb-0`}>
              {description}
              <a 
                href={certification.verificationUrl}
                rel="noreferrer"
                target="_blank"
                className={`button button-outline mt-md ${styles.certificationButton} ${isEvenElem && styles.marginLeft}`}
              >
                View certification
              </a>
            </p>
          </div>
          
          <div className={`col-6 col-12-lmb mt-md-lmb grid g-as-ctr g-js-ctr`}>
            <img 
              src={certification.img} 
              alt={title} 
              className={`${styles.certImg} ${!isEvenElem ? 'col-12': 'col-12'}`} />
          </div>
        </div>
        </div>
    </div>
  );
};

export default Certification;
