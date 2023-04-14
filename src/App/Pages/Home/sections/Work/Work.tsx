import { FC, useState } from 'react';
import styles from './Work.module.scss';
import Position from './_Position/_Position';
import workHistoryData from './workHistoryData';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { animated, useInView } from '@react-spring/web';
import { gobalSectionDelay, gobalSectionDuration, GobalSectionRootMargin, gobalFromSectionTranslateY, gobalToSectionTranslateY  } from '../../../_utilities/animationConfigs';

const Work: FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0)

  const [workHistRef, workHistSpring] = useInView(() => ({
    from: { opacity: 0, transform: gobalFromSectionTranslateY },
    to: { opacity: 1, transform: gobalToSectionTranslateY },
    delay: gobalSectionDelay,
    config: { duration: gobalSectionDuration }
  }), {rootMargin: GobalSectionRootMargin})


  return (
    <animated.section ref={workHistRef} style={workHistSpring} className={`section-spacing ${styles.workContainer}`} data-testid="work" id="Work">
      <h2 className={styles.title}>Work History</h2>

      <Tabs onSelect={(index) => setActiveIdx(index)}>
        <TabList className={styles.tabList}>
          {workHistoryData.map((job, index) => (
            <Tab 
              className={`${styles.tab} ${index === activeIdx && styles.active}  pb-xs`} 
              key={`${index}_${job.company}`}
            >
              {job.company}
            </Tab>
          ))}
        </TabList>
        {workHistoryData.map((job, index) => (
          <TabPanel 
            className={`mt-sm ${styles.tabPanel} ${index === activeIdx && styles.active}`} 
            key={`${index}_${job.company}`}
          >
            <Position job={job} />
          </TabPanel>
        ))}
      </Tabs>
    </animated.section>
  );
};

export default Work;
