import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import USAState from '../USAState/USAState';
import ComparisonContainer from '../ComparisonContainer/ComparisonContainer';
import Stat from '../Stat/Stat';
import { fetchAllCurrentUSAData, fetchCurrentStateData } from '../apiCalls'
import { singleState, usaData } from '../sampleData';
import { GiCoffin } from 'react-icons/gi';
import { RiVirusFill, RiHospitalFill } from 'react-icons/ri';
import '@testing-library/jest-dom';
import '@types/jest';
jest.mock('../apiCalls');
 
describe('App', () => {
  beforeEach(() => {
    const mockedUSAFetch = fetchAllCurrentUSAData as jest.MockedFunction<() => any>
    const mockedSingleFetch = fetchCurrentStateData as jest.MockedFunction<() => any>

    mockedUSAFetch.mockResolvedValueOnce(usaData[0])
    mockedSingleFetch.mockResolvedValueOnce(singleState)

    render(
      <App />
    );
  });

  it('should render correctly', () => {
    const tagline = screen.getByText('Covid Comparisons');
    
    expect(tagline).toBeInTheDocument();
  });
});


    // const mockedFetch = fetchAllCurrentUSAData as jest.Mocked <typeof any>
