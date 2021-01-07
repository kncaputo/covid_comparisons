import { render, screen } from '@testing-library/react';
import ComparisonContainer from './ComparisonContainer';
import '@testing-library/jest-dom';

describe('ComparisonContainer', () => {
  it('should render correctly', () => {
    render(
      <ComparisonContainer />
    )
    const howDoesItCompare = screen.getByText('How Does It Compare?');
    const dropdown = screen.getByTestId('dropdown');
    const comparisonCategory = screen.getByText('9/11');

    expect(howDoesItCompare).toBeInTheDocument();
    expect(dropdown).toBeInTheDocument();
    expect(comparisonCategory).toBeInTheDocument();
  });
});
