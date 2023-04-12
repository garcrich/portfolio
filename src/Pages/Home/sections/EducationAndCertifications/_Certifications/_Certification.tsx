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
    <div className={`${styles.certContainer} grid ${idx !== 0 ? 'mt-xxxl' : 'mt-0'}`} data-testid="certification">
      <div className={`col-12`}>
        <h4 className={`ft-clr-1`} style={{"textAlign" : `${isEvenElem ? 'left' : 'right'}`}}>{title}</h4>
        <div className={`grid mt-md ${!isEvenElem ? 'g-ji-end' : 'g-ji-start'}`}>
          
          <div 
            style={{"order" : `${isEvenElem ? 0 : 1}`, "textAlign" : `${isEvenElem ? 'left' : 'right'}`}}
            className={`${styles.certificationDescriptionContainer} col-6`}
          >
            <p className={`${styles.certificationDescription} mt-0 mb-0`}>
              {description}
              <a 
                href={certification.verificationUrl}
                rel="noreferrer"
                target="_blank"
                className={`button button-outline mt-md ${styles.certificationButton}`}
                style={{"marginLeft" : `${isEvenElem ? '' : 'auto'}`}}
              >
                View certification
              </a>
            </p>
          </div>
          
          <div className={`col-6 grid g-as-ctr`}>
            <img 
              src={certification.img} 
              alt={title} 
              style={{"justifySelf" : `${isEvenElem ? 'start' : 'end'}`}}
              className={`${styles.certImg} ${!isEvenElem ? 'col-7': 'g-os-5'}`} />
          </div>
        </div>
        </div>
    </div>
  );
};

export default Certification;
