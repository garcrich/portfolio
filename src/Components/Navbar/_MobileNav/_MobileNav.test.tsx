import {render, screen} from '@testing-library/react';
import MobileNav from './_MobileNav';
import menuData from '../MenuData';

describe('MobileNav', () => {
  it('renders the MobileNav component', () => {
    render(<MobileNav menuItems={menuData} />);
    expect(screen.getByTestId('mobile-nav')).toBeInTheDocument();
  });
})