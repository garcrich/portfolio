import { render, screen } from '@testing-library/react';
import Credentials from './Credentials';


describe('CredentialsComponent', () => {
  it('renders the Credentials component', () => {
    render(<Credentials />);
    expect(screen.getByTestId('credentials')).toBeInTheDocument()
  })
})

