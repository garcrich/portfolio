import { FC } from 'react';
import styles from './_Project.module.scss';
import { ProjectData } from '../ProjectType';

const Project:FC<ProjectData> = ({ title, description }) => {
  return (
    <div className={styles.project} data-testid="project">
      <h3 className={styles.projectTitle}>{title}</h3>
      <p className={styles.projectDescription}>
        {description}
      </p>
    </div>
  )
}

export default Project;