import { FC } from 'react';
import Recommendation from './_Recommendation/_Recommendation';
import styles from './Recommendations.module.scss'
import recommendationsData from './recommendationsData'

const Recommendations: FC = () => {
  return (
    <section className={`section-spacing`} data-testid="recommendations">
      <h2 className={styles.title}>Recommendations</h2>
      <div className={styles.cardContainer}>
        {recommendationsData.map((rec, index) => (
          <Recommendation key={index} name={rec.name} title={rec.title} text={rec.text} />
        ))}
      </div>
    </section>
  );
};

export default Recommendations;
