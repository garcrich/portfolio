import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Navbar from './Navbar';

describe('NavComponent', () => {
  it('renders the Nav component', () => {
    render(<Navbar />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });

  it('should fade in the mobile underlay', async () => {
    render(<Navbar />);
    const mobileMenuButton = screen.getByTestId('mobile-menu-button');
    const mobileMenuUnderlay = screen.getByTestId('mobile-menu-underlay');
    
    fireEvent.click(mobileMenuButton);

    await waitFor(() => {
      expect(mobileMenuUnderlay).toHaveClass('active');
    }, { timeout: 300 }); // Increase the timeout to allow for the animation to complete
  });

  it('should fade out the mobile underlay', async () => {
    render(<Navbar />);
    const mobileMenuButton = screen.getByTestId('mobile-menu-button');
    const mobileMenuUnderlay = screen.getByTestId('mobile-menu-underlay');
    
    fireEvent.click(mobileMenuButton);
    fireEvent.click(mobileMenuButton);

    await waitFor(() => {
      expect(mobileMenuUnderlay).not.toHaveClass('active');
    }, { timeout: 300 }); // Increase the timeout to allow for the animation to complete
  });
});
