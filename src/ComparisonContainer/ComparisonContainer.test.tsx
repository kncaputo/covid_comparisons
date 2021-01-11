import { render, screen } from '@testing-library/react';
import ComparisonContainer from './ComparisonContainer';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

describe('ComparisonContainer', () => {
  it('should render correctly', () => {
    const mockedHandleComparisonClick = jest.fn()
    render(
      <MemoryRouter>
        <ComparisonContainer 
          handleComparisonClick={ mockedHandleComparisonClick } />
      </MemoryRouter>
    );

    const howDoesItCompare = screen.getByText('How Does It Compare?');
    const dropdown = screen.getByTestId('dropdown');
    const comparisonCategory = screen.getByText('9/11 Deaths');

    expect(howDoesItCompare).toBeInTheDocument();
    expect(dropdown).toBeInTheDocument();
    expect(comparisonCategory).toBeInTheDocument();
  });
});
