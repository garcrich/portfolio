import Recommendation from './Recommendation/Recommendation';
import styles from './Recommendations.module.scss'
import recommendationsData from './recommendationsData'

const Recommendations: React.FC = () => {
  return (
    <section className={styles.container} data-testid="recommendations">
      <h2>Recommendations</h2>
      {recommendationsData.map((rec, index) => (
        <Recommendation key={index} name={rec.name} title={rec.title} text={rec.text} />
      ))}
    </section>
  );
};

export default Recommendations;
