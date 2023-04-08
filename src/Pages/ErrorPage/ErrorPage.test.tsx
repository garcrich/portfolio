import { render, screen } from '@testing-library/react';
import ErrorPage from './ErrorPage';

describe('ErrorPageComponent', () => {
  it('renders the ErrorPage component', () => {
    render(<ErrorPage />);
    expect(screen.getByTestId('error-page')).toBeInTheDocument()
  })
})