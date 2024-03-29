// Certification.test.tsx
import { render, screen } from '@testing-library/react';
import Certification from './_Certification';

const mockCertification = {
  title: 'Test Certification',
  description: 'This is a test certification description.',
  certification: {
    verificationUrl: 'https://www.google.com',
    img: 'https://www.google.com',
  },
  idx: 0,
};

describe('Certification', () => {

  it('renders the certification', () => {
    render(<Certification 
        title={mockCertification.title}
        description={mockCertification.description}
        certification={mockCertification.certification}
        idx={mockCertification.idx}
    />);
    expect(screen.getByTestId('certification')).toBeInTheDocument();
  });

  it('renders the correct certification title', () => {
    render(<Certification 
      title={mockCertification.title}
      description={mockCertification.description}
      certification={mockCertification.certification}
      idx={mockCertification.idx}
    />);
    expect(screen.getByText(mockCertification.title)).toBeInTheDocument();
  });

  it('renders the correct certification description', () => {
    render(<Certification 
      title={mockCertification.title}
      description={mockCertification.description}
      certification={mockCertification.certification}
      idx={mockCertification.idx}
    />);
    expect(screen.getByText(mockCertification.description)).toBeInTheDocument();
  });
});
