import styles from './EduAndCerts.module.scss';

const EduAndCerts = () => {
  return (
    <section className={styles.container} data-testid="edu-and-certs">
      <h2 className={styles.title}>Credentials</h2>

      <h3 className={styles.subtitle}>Education</h3>
      <p>Bachelor of Science (BS), Computer Science</p>
      <p>Idaho State University, 2012 - 2016</p>

      <h3 className={styles.subtitle}>Certifications</h3>
      <div className={styles.certification}>
        <h4>AWS Certified DevOps Engineer - Professional</h4>
        <p>As a DevOps Professional, I've trained to implement and manage a continuous delivery system, automate infrastructure, and manage application lifecycles on the AWS platform.</p>
      </div>
      <div className={styles.certification}>
        <h4>AWS Certified Developer - Associate</h4>
        <p>This certification has equipped me with the skills to develop, deploy, and debug cloud-based applications using AWS. I focus on best practices, security, and performance optimization.</p>
      </div>
      <div className={styles.certification}>
        <h4>Udacity Front-End Web Developer Nanodegree</h4>
        <p>Through this Nanodegree, I gained hands-on experience and in-depth knowledge in building responsive, accessible, and performant web applications using HTML, CSS, and JavaScript.</p>
      </div>
    </section>
  )
}

export default EduAndCerts;
