import styles from './Projects.module.scss';
import Project from './_Project/_Project';
import { projectsData } from './projectsData';

const Projects = () => {
  return (
    <section className={styles.container} data-testid="projects">
      <h2 className={styles.title}>Projects</h2>
      
      {projectsData.map((project, index) => (
          <Project 
            title={project.title} 
            description={project.description} 
            key={project.title}
          />
      ))}
    </section>
  )
}

export default Projects;
