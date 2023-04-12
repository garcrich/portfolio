import { render, screen } from '@testing-library/react';
import Recommendations from './Recommendations';
import recommendationsData from './recommendationsData';
import { slideBuilder } from './Recommendations.utilities';

describe('RecommendationsComponent', () => {

  it('renders the Recommendations component', () => {
    render(<Recommendations />);
    expect(screen.getByTestId('recommendations')).toBeInTheDocument();
  });

  it('renders the correct number of Recommendation components', () => {
    render(<Recommendations />);
    const recommendationComponents = screen.getAllByTestId('recommendation');
    expect(recommendationComponents.length).toBe(recommendationsData.length);
  });
});

describe('slideBuilder', () => {
  it('returns an array of arrays', () => {
    const result = slideBuilder(2, recommendationsData);
    expect(result).toBeInstanceOf(Array);
    expect(result[0]).toBeInstanceOf(Array);
  });
  it('returns an array of arrays of the correct length', () => {
    const result = slideBuilder(2, recommendationsData);
    expect(result.length).toBe(2);
    expect(result[0].length).toBe(2);
    expect(result[1].length).toBe(2);
  });
});
