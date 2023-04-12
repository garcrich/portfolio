import { FC } from 'react';
import styles from './About.module.scss';
import profile from '../../../../assets/images/profile.jpg';
import TechList from './_TechList/_TechList';
import techListData from './TechListData';

const About: FC = () => {
  return (
    <section className={`${styles.container} grid section-spacing`} data-testid="about">
      <div className={`col-6`}>
        <h2 className={`${styles.title}`}>About Me</h2>
        <p>I'm a senior frontend engineer specializing in captivating digital experiences using technologies like React, TypeScript, and SCSS. My expertise extends to .NET environments and cloud computing.</p> 
        
        <p>Committed to continuous growth, I ensure my skills stay up-to-date and relevant. I hold AWS Certified Developer - Associate and AWS Certified DevOps Engineer - Professional certificates.</p>

        <p>Embracing challenges and staying adaptable, I create exceptional digital solutions in the ever-evolving world of web development.</p>

        <h3 className={`mt-lg ft-clr-3 text-2xl ${styles.techHeader}`}>Tech Set</h3>
        <ul className={`mt-sm grid ${styles.techStackList}`}>
        {techListData.map((techList) => (
          <TechList 
            key={techList.title}
            title={techList.title}
            items={techList.items}
          />
        ))}
        </ul>
      </div>
      <div className={`col-6`}>
      <div className={`${styles.aspectRatioWrapper}`}>
        <div className={`${styles.diamond} ml-sm`}>
          <img className={`${styles.profile}`} src={profile} alt="profile of Ricky Garcia" />
        </div>
      </div>
      </div>
    </section>
  )
}

export default About;