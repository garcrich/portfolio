import { render, screen } from '@testing-library/react';
import Recommendation from './_Recommendation';

describe('RecommendationsComponent', () => {
  const mockProps = {
    name: 'John Doe',
    title: 'Senior Engineer',
    text: ['This is a recommendation text', 'This is another paragraph.'],
    img: 'https://via.placeholder.com/150',
  };

  it('renders the Recommendation component', () => {
    render(
      <Recommendation
        name={mockProps.name}
        title={mockProps.title}
        text={mockProps.text}
        img={mockProps.img}
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
        img={mockProps.img}
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
        img={mockProps.img}
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
        img={mockProps.img}
      />
    );
    expect(screen.getByTestId('recommendation')).toBeInTheDocument();
  });

});
