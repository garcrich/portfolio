// Certification.tsx
import { FC } from 'react';
import styles from './_Certification.module.scss';

interface CertificationProps {
  title: string;
  description: string;
}

const Certification: FC<CertificationProps> = ({ title, description }) => {
  return (
    <div className={styles.container} data-testid="certification">
      <h4 className={styles.certificationTitle}>{title}</h4>
      <p className={styles.certificationDescription}>{description}</p>
    </div>
  );
};

export default Certification;
