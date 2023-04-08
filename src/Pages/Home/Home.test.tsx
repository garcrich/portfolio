import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('HomeComponent', () => {
  
  it('renders the Home component', () => {
    render(<Home />);

    expect(screen.getByTestId('home')).toBeInTheDocument()
  })

  it('renders the navbar component', () => {
    render(<Home />);

    expect(screen.getByTestId('navbar')).toBeInTheDocument()
  })

  it('renders the Hero component', () => {
    render(<Home />);
    expect(screen.getByTestId('hero')).toBeInTheDocument()
  })

  it('renders the About component', () => {
    render(<Home />);
    expect(screen.getByTestId('about')).toBeInTheDocument()
  })

  it('renders the Work component', () => {
    render(<Home />);
    expect(screen.getByTestId('work')).toBeInTheDocument()
  })

  it('renders the Credentials component', () => {
    render(<Home />);
    expect(screen.getByTestId('edu-and-certs')).toBeInTheDocument()
  })

  it('renders the Recommendations component', () => {
    render(<Home />);
    expect(screen.getByTestId('recommendations')).toBeInTheDocument()
  })

  it('renders the Projects component', () => {
    render(<Home />);
    expect(screen.getByTestId('projects')).toBeInTheDocument()
  })
  
  it('renders the Contact component', () => {
    render(<Home />);
    expect(screen.getByTestId('contact')).toBeInTheDocument()
  })

  it('renders the footer component', () => {
    render(<Home />);
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })
})