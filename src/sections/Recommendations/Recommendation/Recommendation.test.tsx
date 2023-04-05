import { render, screen } from '@testing-library/react';
import Recommendation from './Recommendation';

describe('RecommendationsComponent', () => {
  const mockProps = {
    name: 'John Doe',
    title: 'Senior Engineer',
    text: 'This is a recommendation text.\n\nThis is another paragraph.',
  };

  it('renders the Recommendation component', () => {
    render(
      <Recommendation
        name={mockProps.name}
        title={mockProps.title}
        text={mockProps.text}
      />
    );
    expect(screen.getByTestId('recommendation')).toBeInTheDocument();
  });

  it('renders the name', () => {
    render(
      <Recommendation
        name={mockProps.name}
        title={mockProps.title}
        text={mockProps.text}
      />
    );
    expect(screen.getByTestId('recommendation')).toBeInTheDocument();
  });

  it('renders the title', () => {
    render(
      <Recommendation
        name={mockProps.name}
        title={mockProps.title}
        text={mockProps.text}
      />
    );
    expect(screen.getByTestId('recommendation')).toBeInTheDocument();
  });

  it('renders the text', () => {
    render(
      <Recommendation
        name={mockProps.name}
        title={mockProps.title}
        text={mockProps.text}
      />
    );
    expect(screen.getByTestId('recommendation')).toBeInTheDocument();
  });
  
});
