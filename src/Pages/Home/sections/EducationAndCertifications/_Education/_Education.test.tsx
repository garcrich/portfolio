import { screen, render } from '@testing-library/react';
import Education from './_Education';


describe('Education', () => {
  it('renders the Education component', () => {
    render(<Education />);
    expect(screen.getByTestId('education')).toBeInTheDocument();
  });
});
