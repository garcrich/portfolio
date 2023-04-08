import { FC } from "react";
import { RecommendationData } from "../recommendationTypes";
import styles from "./_Recommendation.module.scss";
type RecommendationProps = RecommendationData;

const Recommendation: FC<RecommendationProps> = ({ name, title, text }) => (
  <div className={styles.card} data-testid="recommendation">
    <div className={styles.header}>
      <h3>{name}</h3>
      <h4>{title}</h4>
    </div>
    <div className={styles.body}>
      {text.map((paragraph, index) => (
        <p key={`${index}_${paragraph.slice(0,5)}`}>{paragraph}</p>
      ))}
    </div>
  </div>
);

export default Recommendation;
