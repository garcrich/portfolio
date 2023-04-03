import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Header from '../sections/Header/Header';
import About from '../sections/About/About';

describe('AppComponent', () => {
  
  it('renders the App component', () => {
    render(<App />);

    expect(screen.getByTestId('app')).toBeInTheDocument()
  })

  it('renders the navbar component', () => {
    render(<App />);

    expect(screen.getByTestId('navbar')).toBeInTheDocument()
  })

  it('renders the Header component', () => {
    render(<App />);
    expect(screen.getByTestId('header')).toBeInTheDocument()
  })

  it('renders the About component', () => {
    render(<App />);
    expect(screen.getByTestId('about')).toBeInTheDocument()
  })

  it('renders the Work component', () => {
    render(<App />);
    expect(screen.getByTestId('work')).toBeInTheDocument()
  })

  it('renders the Credentials component', () => {
    render(<App />);
    expect(screen.getByTestId('credentials')).toBeInTheDocument()
  })

  it('renders the Recommendations component', () => {
    render(<App />);
    expect(screen.getByTestId('recommendations')).toBeInTheDocument()
  })

  it('renders the Projects component', () => {
    render(<App />);
    expect(screen.getByTestId('projects')).toBeInTheDocument()
  })
  
  it('renders the Contact component', () => {
    render(<App />);
    expect(screen.getByTestId('contact')).toBeInTheDocument()
  })

  it('renders the footer component', () => {
    render(<App />);
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })
})