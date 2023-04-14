import {render, screen, waitFor} from '@testing-library/react';
import MobileNav from './_MobileNav';
import menuData from '../MenuData';

describe('MobileNav', () => {
  it('should set isMobileMenuOpen to false when the close button is clicked', () => {
    const setIsMobileMenuOpen = jest.fn();
    render(<MobileNav menuItems={menuData} isMobileMenuOpen={true} setIsMobileMenuOpen={setIsMobileMenuOpen}/>);
    screen.getByTestId('close-button').click();
    expect(setIsMobileMenuOpen).toHaveBeenCalledWith(false);
  });
  it('renders the MobileNav component', () => {
    const setIsMobileMenuOpen = jest.fn();
    render(<MobileNav menuItems={menuData} isMobileMenuOpen={true} setIsMobileMenuOpen={setIsMobileMenuOpen}/>);
    expect(screen.getByTestId('mobile-nav')).toBeInTheDocument();
  });

  it('has isMobileMenuOpen class when isMobileMenuOpen is true', async () => {
    const setIsMobileMenuOpen = jest.fn();
    render(<MobileNav menuItems={menuData} isMobileMenuOpen={true} setIsMobileMenuOpen={setIsMobileMenuOpen} />);
    await waitFor(() => {
      expect(screen.getByTestId('mobile-menu-container')).toHaveClass('isMobileMenuOpen');
    }, { timeout: 200 });
  });

  it('does not have isMobileMenuOpen class when isMobileMenuOpen is false', () => {
    const setIsMobileMenuOpen = jest.fn();
    render(<MobileNav menuItems={menuData} isMobileMenuOpen={false} setIsMobileMenuOpen={setIsMobileMenuOpen}/>);
    expect(screen.getByTestId('mobile-nav')).not.toHaveClass('isMobileMenuOpen');
  });
})