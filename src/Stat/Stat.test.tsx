import { render, screen } from '@testing-library/react';
import Stat from './Stat';
import { RiVirusFill } from 'react-icons/ri';
import '@testing-library/jest-dom';

describe('Stat', () => {
  it('should render correctly', () => {
    render(
      <Stat 
        icon={ RiVirusFill }
        number={ 22 }
        title={ 'Cases' }
        details={ `Cases in US` }
      />
    );

    const caseNumber = screen.getByText('22');
    const title = screen.getByText('Cases');
    const details = screen.getByText('Cases in US');

    expect(caseNumber).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(details).toBeInTheDocument();
  });
});
