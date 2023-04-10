import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

const useMediaQueryMock = (query: { query: string }): boolean => {
  return query['query'] === '(max-width: 768px)';
};

jest.mock('react-responsive', () => ({
  useMediaQuery: useMediaQueryMock,
}));

describe('NavComponent', () => {
  it('renders the Nav component', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });

  it('should fade in the mobile underlay', async () => {
    window.innerWidth = 768;
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const mobileMenuButton = screen.getByTestId('mobile-menu-button');
    const mobileMenuUnderlay = screen.getByTestId('mobile-menu-underlay');
    
    fireEvent.click(mobileMenuButton);

    await waitFor(() => {
      expect(mobileMenuUnderlay).toHaveClass('active');
    }, { timeout: 200 }); // Increase the timeout to allow for the animation to complete
  });

  it('should fade out the mobile underlay', async () => {
    window.innerWidth = 768;
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const mobileMenuButton = screen.getByTestId('mobile-menu-button');
    const mobileMenuUnderlay = screen.getByTestId('mobile-menu-underlay');
    
    fireEvent.click(mobileMenuButton);
    fireEvent.click(mobileMenuButton);

    await waitFor(() => {
      expect(mobileMenuUnderlay).not.toHaveClass('active');
    }, { timeout: 200 }); // Increase the timeout to allow for the animation to complete
  });
});
