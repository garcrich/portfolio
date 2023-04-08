import { FC } from 'react';
import styles from './About.module.scss';


const About: FC = () => {
  return (
    <section className={styles.container} data-testid="about">
      <h2 className={styles.title}>About Me</h2>
      <p>Hi, I'm Ricky Garcia, a senior frontend engineer who's been crafting captivating digital experiences since 2016. My core skills lie in frontend technologies such as React, TypeScript, and Jest. As a versatile engineer, I'm also adept at working in .NET environments and cloud environments. I proudly hold both AWS Certified Developer - Associate and AWS Certified DevOps Engineer - Professional certificates.</p>
      <p>I'm dedicated to continuous growth and improvement, ensuring my frontend and cloud computing skills remain up-to-date and relevant. By embracing new challenges and staying adaptable, I strive to create exceptional digital solutions in the ever-evolving world of web development.</p>
      <ul>
        <li>Frontend: TypeScript, JavaScript, SCSS, React, Webpack, Vue, Razor, and Jest</li>
        <li>Backend: .NET Core, .Net MVC, C#, and Entity Framework</li>
        <li>Cloud: AWS, Azure</li>
      </ul>
    </section>
  )
}

export default About;