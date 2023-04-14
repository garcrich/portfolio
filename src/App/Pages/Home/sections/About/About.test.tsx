import { render, screen } from '@testing-library/react';
import About from './About';

describe('AboutComponent', () => {
  it('renders the About component', () => {
    render(<About />);
    expect(screen.getByTestId('about')).toBeInTheDocument()
  })
})
