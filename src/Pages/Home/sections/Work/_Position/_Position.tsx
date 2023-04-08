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
    <section className={styles.container} data-testid="position">
      <h3 className={styles.company}>{job.company}</h3>
      <h4 className={styles.position}>{job.position}</h4>
      <ul className={styles.descriptionList}>
        {job.description.map((item, index) => (
          <li key={index} className={styles.descriptionItem} data-testid="description-item">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Position;
