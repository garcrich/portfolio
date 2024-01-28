import { FC } from 'react';
import styles from './About.module.scss';
import profile from '../../../../../assets/images/profile.jpg';
import TechList from './_TechList/_TechList';
import techListData from './_TechList/TechListData';
import { animated, useInView } from '@react-spring/web';
import { globalToSectionTranslateX1, globalToSectionTranslateX2, globalToSectionTranslateX3, globalToSectionTranslateX4, gobalSectionDelay, gobalSectionDuration, GobalSectionRootMargin, } from '../../../_utilities/animationConfigs';

const About: FC = () => {
  const [articleRef, articleSpring] = useInView(() => ({
    from: { opacity: 0, transform: globalToSectionTranslateX1 },
    to: { opacity: 1, transform: globalToSectionTranslateX2 },
    delay: gobalSectionDelay,
    config: { duration: gobalSectionDuration },
  }), 
  {
    rootMargin: GobalSectionRootMargin,
    once: true
  })

  const [imgRef, imageSpring] = useInView(() => ({
    from: { opacity: 0, transform: globalToSectionTranslateX3 },
    to: { opacity: 1, transform: globalToSectionTranslateX4 },
    delay: gobalSectionDelay,
    config: { duration: gobalSectionDuration },
  }), 
  {
    rootMargin: GobalSectionRootMargin,
    once: true
  })

  return (
    <section className={`${styles.container} grid section-spacing mt-xxl-dt`} data-testid="about" id="About">
      <animated.article ref={articleRef} style={articleSpring} className={`col-6 col-12-tbd order-1-tbd`}>
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
      </animated.article>
      <animated.div ref={imgRef} style={imageSpring} className={`col-6 col-12-tbd order-0-tbd`}>
      <div className={`${styles.aspectRatioWrapper}`}>
        <div className={`${styles.diamond} ml-dt`}>
          <img loading='lazy' className={`${styles.profile}`} src={profile} alt="profile of Ricky Garcia" />
        </div>
      </div>
      </animated.div>
    </section>
  )
}

export default About;