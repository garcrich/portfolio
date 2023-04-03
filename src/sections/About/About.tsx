import styles from './About.module.scss';


const About = () => {
  return (
    <section className={styles.container} data-testid="about">
      <h2 className={styles.title}>About Me</h2>
    </section>
  )
}

export default About;