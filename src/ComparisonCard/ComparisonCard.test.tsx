import { render, screen } from '@testing-library/react';
import ComparisonCard from './ComparisonCard';
import { jsxElements } from '../sampleData';
import '@testing-library/jest-dom';

describe('ComparisonCard', () => {
  it('should render correctly', () =>  {    
    render(
      <ComparisonCard
        title='September saw 2,974 deaths.'
        body={jsxElements}
        styleId='sept-11'
        key='1'
      />
    );
  
    const title = screen.getByText('September saw 2,974 deaths.');
    const icons = screen.queryAllByText('X');

    expect(title).toBeInTheDocument();
    expect(icons).toHaveLength(2);
  });
});
