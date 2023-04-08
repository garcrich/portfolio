import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('NavComponent', () => {
  it('renders the Nav component', () => {
    render(<Navbar />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
  })
})