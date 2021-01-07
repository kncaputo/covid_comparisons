import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { fetchAllCurrentUSAData, fetchCurrentStateData } from '../apiCalls'
import { singleState, usaData } from '../sampleData';
import '@testing-library/jest-dom';
jest.mock('../apiCalls');
 
describe('App', () => {
  beforeEach(() => {
    const mockedUSAFetch = fetchAllCurrentUSAData as jest.MockedFunction<typeof fetchAllCurrentUSAData>
    const mockedSingleFetch = fetchCurrentStateData as jest.MockedFunction<typeof fetchCurrentStateData>

    mockedUSAFetch.mockResolvedValueOnce(usaData[0])
    mockedSingleFetch.mockResolvedValueOnce(singleState)

    render(
      <App />
    );
  });

  it('should render correctly', () => {
    const tagline = screen.getByText('Covid Comparisons');
    const overviewTitle = screen.getByText('USA Overview:');
    const stateName = screen.getByText('Colorado');
    const cases = screen.getByText('Cases');
    const deaths = screen.getByText('Deaths');
    const currentHospitalizations = screen.getByText('Current Hospitalizations');
    const howDoesItCompare = screen.getByText('How Does It Compare?');
    const dropdown = screen.getByTestId('dropdown');
    const casesIcon = screen.getByTestId('cases');
    
    expect(tagline).toBeInTheDocument();
    expect(overviewTitle).toBeInTheDocument();
    expect(stateName).toBeInTheDocument();
    expect(cases).toBeInTheDocument();
    expect(deaths).toBeInTheDocument();
    expect(currentHospitalizations).toBeInTheDocument();
    expect(howDoesItCompare).toBeInTheDocument();
    expect(dropdown).toBeInTheDocument();
    expect(casesIcon).toBeInTheDocument();
  });

  it('should simplify data for single state', () => {
    // const simplifyAPIDataForSingleState = jest.fn();
    
    // expect(simplifyAPIDataForSingleState).toHaveBeenCalled();
    // expect(mockSimplifyAPIDataForSingleState).toBeCalledWith(singleState);
  });
});