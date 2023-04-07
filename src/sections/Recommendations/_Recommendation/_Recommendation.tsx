import { RecommendationData } from "../recommendationTypes";
import styles from "./_Recommendation.module.scss";
type RecommendationProps = RecommendationData

const Recommendation: React.FC<RecommendationProps> = ({ name, title, text }) => (
  <div className={styles.container} data-testid="recommendation">
    <h3>{name}</h3>
    <h4>{title}</h4>
    {text.map((paragraph, index) => (
      <p key={`${index}_${paragraph.slice(0,5)}`}>{paragraph}</p>
    ))}
  </div>
);

export default Recommendation;