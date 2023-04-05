import { render, screen } from '@testing-library/react';
import Credentials from './EduAndCerts';


describe('CredentialsComponent', () => {
  it('renders the Credentials component', () => {
    render(<Credentials />);
    expect(screen.getByTestId('edu-and-certs')).toBeInTheDocument()
  })
})

