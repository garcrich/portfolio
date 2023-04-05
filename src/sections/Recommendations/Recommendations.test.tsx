import { render, screen } from '@testing-library/react';
import Recommendations from './Recommendations';
import recommendationsData from './recommendationsData';

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
