import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('AppComponent', () => {
  it('renders the App component', () => {
    render(<App />);
    expect(screen.getByTestId('app')).toBeInTheDocument()
  })
})