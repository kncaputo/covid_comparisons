import { render, screen } from '@testing-library/react';
import USAState from './USAState';
import '@testing-library/jest-dom';

describe('ComparisonContainer', () => {
  it('should render correctly', () => {
    render(
      <USAState 
        date={ '01/01/2021' }
      />
    );

    const stateName = screen.getByText('Colorado');
    const date = screen.getByText('Information for 01/01/2021');

    expect(stateName).toBeInTheDocument();
    expect(date).toBeInTheDocument();
  });
});
