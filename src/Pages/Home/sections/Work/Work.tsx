import { FC, useState } from 'react';
import styles from './Work.module.scss';
import Position from './_Position/_Position';
import workHistoryData from './workHistoryData';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const Work: FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0)
  return (
    <section className={`section-spacing`} data-testid="work">
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
    </section>
  );
};

export default Work;
