import { render, screen } from '@testing-library/react';
import ErrorPage from './ErrorPage';
import { MemoryRouter } from 'react-router-dom';

describe('ErrorPageComponent', () => {
  test('landing on a bad page from root', () => {
    const badRoute = '/asdf'
  
    // use <MemoryRouter> when you want to manually control the history
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <ErrorPage />
      </MemoryRouter>,
    )
  
    // verify navigation to "no match" route
    expect(screen.getByTestId('error-page')).toBeInTheDocument()
  })
})