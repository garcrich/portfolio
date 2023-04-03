import { render, screen } from '@testing-library/react';
import Contact from './Contact';

describe('ContactComponent', () => {
  it('renders the Contact component', () => {
    render(<Contact />);
    expect(screen.getByTestId('contact')).toBeInTheDocument()
  })
})
