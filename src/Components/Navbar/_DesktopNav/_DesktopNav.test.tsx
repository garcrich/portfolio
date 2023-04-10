import { render, screen } from '@testing-library/react';
import DesktopNav from './_DesktopNav';
import menuData from '../MenuData';

describe('NavComponent', () => {

  it('renders the Nav component', () => {
    render(<DesktopNav menuItems={menuData} />);
    expect(screen.getByTestId('desktop-nav')).toBeInTheDocument()
  })
})