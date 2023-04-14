import { render, screen } from '@testing-library/react';
import TechList from './_TechList';

describe('TechList', () => {
  it('renders the TechList component', () => {
    render(<TechList title="Test Title" items={['Item 1', 'Item 2']} />);
    expect(screen.getByTestId('tech-list')).toBeInTheDocument();
  });
});