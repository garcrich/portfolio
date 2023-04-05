import styles from './Recommendation.module.scss';
type RecommendationProps = {
  name: string;
  title: string;
  text: string[];
}

const Recommendation: React.FC<RecommendationProps> = ({ name, title, text }) => (
  <div data-testid="recommendation">
    <h3>{name}</h3>
    <h4>{title}</h4>
    {text.map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ))}
  </div>
);

export default Recommendation;