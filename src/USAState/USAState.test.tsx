import { render, screen } from '@testing-library/react';
import USAState from './USAState';
import '@testing-library/jest-dom';

describe('ComparisonContainer', () => {
  it('should render correctly', () => {
    render(
      <USAState 
        date={ 1/1/21 }
      />
    );

    const stateName = screen.getByText('Colorado');
    // const date = screen.getByText(1/1/21);

    expect(stateName).toBeInTheDocument();
    // expect(date).toBeInTheDocument();
  });
});
