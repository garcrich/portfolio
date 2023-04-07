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
      <p key={`${index}_${paragraph.slice(0,5)}`}>{paragraph}</p>
    ))}
  </div>
);

export default Recommendation;