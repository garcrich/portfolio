import { FC } from 'react';
import styles from './_Position.module.scss';
type PositionProps = {
  job: {
    company: string;
    position: string;
    description: string[];
  };
};

const Position: FC<PositionProps> = ({ job }) => {
  return (
    <section className={`${styles.positionContainer} grid`} data-testid="position">
      <div className={`col-12 col-10-mb`}>
      <h3 className={`${styles.company} mt-0 mb-0`}>{job.company}</h3>
      <h4 className={`${styles.position} mt-xs ft-clr-3`}>{job.position}</h4>
      <ul className={styles.descriptionList}>
        {job.description.map((item, index) => (
          <li key={index} className={styles.descriptionItem} data-testid="description-item">
            {item}
          </li>
        ))}
      </ul>
      </div>
    </section>
  );
};

export default Position;
