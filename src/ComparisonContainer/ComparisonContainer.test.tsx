import { render, screen } from '@testing-library/react';
import ComparisonContainer from './ComparisonContainer';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

describe('ComparisonContainer', () => {
  it('should render correctly', () => {
    const mockedHandleComparisonClick = jest.fn();
    
    render(
      <MemoryRouter>
        <ComparisonContainer 
          styleId='test'
          handleComparisonClick={ mockedHandleComparisonClick } />
      </MemoryRouter>
    );

    const howDoesItCompare = screen.getByText('How Does It Compare?');
    const dropdown = screen.getByTestId('dropdown');
    const comparisonCategory = screen.getByText('September 11th Deaths');

    expect(howDoesItCompare).toBeInTheDocument();
    expect(dropdown).toBeInTheDocument();
    expect(comparisonCategory).toBeInTheDocument();
  });
});
