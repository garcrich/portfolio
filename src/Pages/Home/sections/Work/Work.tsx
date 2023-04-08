import { FC } from 'react';
import styles from './Work.module.scss';
import Position from './_Position/_Position';
import workHistoryData from './workHistoryData';

const Work:FC = () => {
  return (
    <section className={styles.container} data-testid="work">
      <h2 className={styles.title}>Work History</h2>
      {workHistoryData.map((job, index) => (
        <Position key={`${index}_${job.company}`} job={job} />
      ))}
    </section>
  );
};

export default Work;
