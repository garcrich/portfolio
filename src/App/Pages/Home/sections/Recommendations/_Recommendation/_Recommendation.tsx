import { FC } from "react";
import { RecommendationData } from "../recommendationTypes";
import styles from "./_Recommendation.module.scss";
type RecommendationProps = RecommendationData;

const Recommendation: FC<RecommendationProps> = ({ name, title, text, img })  => (
  <div className={styles.recommendationContainer} data-testid="recommendation">
    <div className={styles.header}>
      <img className={styles.img} src={img} alt={name} />
      <h3 className={`ft-clr-3 mb-sm`}>{name}</h3>
      <h4 className={`mt-0`}>{title}</h4>
    </div>
    <div className={styles.body}>
      {text.map((paragraph, index) => (
        <blockquote key={`${index}_${paragraph.slice(0,5)}`}>{paragraph}</blockquote>
      ))}
    </div>
  </div>
);

export default Recommendation;
