import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('FooterComponent', () => {
  it('renders the Footer component', () => {
    render(<Footer />)
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })
})
