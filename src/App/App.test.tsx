import App from './App';
import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { fetchAllCurrentUSAData, fetchCurrentStateData } from '../apiCalls'
import { singleState, simplifiedStateData, usaData } from '../sampleData';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
jest.mock('../apiCalls');
 
describe('App', () => {
  let mockedUSAFetch = fetchAllCurrentUSAData as jest.MockedFunction<typeof fetchAllCurrentUSAData>
  let mockedSingleFetch = fetchCurrentStateData as jest.MockedFunction<typeof fetchCurrentStateData>
  beforeEach(() => {
    mockedUSAFetch.mockResolvedValueOnce(usaData[0])
    mockedSingleFetch.mockResolvedValueOnce(singleState)

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });
  afterEach(()=> cleanup())

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
    
    expect(mockedUSAFetch).toHaveBeenCalled();
    expect(mockedSingleFetch).toHaveBeenCalled();

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

  it('should render comparison details when a category is selected and the button is clicked', async () => {
      const accessDropdown = screen.getByTestId('dropdown');
      const sept11 = screen.getByTestId('3');
      const viewComparisonButton = screen.getByText('View Comparison');
      
      userEvent.selectOptions(accessDropdown, ['sept11'] );
      userEvent.click(viewComparisonButton);


      const death = await waitFor(() => screen.getByText(2977));
      expect(death).toBeInTheDocument()
    })

    it('should return home when title is clicked from comparison details page', async () => {
      const accessDropdown = screen.getByTestId('dropdown');
      const viewComparisonButton = screen.getByText('View Comparison');
      const title = screen.getByText('C🦠C🦠');

      userEvent.selectOptions(accessDropdown, ['sept11']);
      userEvent.click(viewComparisonButton);
      
      expect(screen.queryByText('USA Overview:')).not.toBeInTheDocument();
      expect(screen.queryByText('Cases')).not.toBeInTheDocument();
      expect(screen.queryByText('Deaths')).not.toBeInTheDocument();
      expect(screen.queryByText('Current Hospitalizations')).not.toBeInTheDocument();
      
      userEvent.click(title);

      const overview = await waitFor(() => screen.getByText('USA Overview:'));
      const cases = await waitFor(() => screen.getByText('Cases'));
      const deaths = await waitFor(() => screen.getByText('Deaths'));
      const currentHospitalizations = await waitFor(() => screen.getByText('Current Hospitalizations'));
      expect(overview).toBeInTheDocument();
      expect(cases).toBeInTheDocument();
      expect(deaths).toBeInTheDocument();
      expect(currentHospitalizations).toBeInTheDocument();
    });

    it('should render a new comparison on dropdown change and button click', async () => {
      const accessDropdown = screen.getByTestId('dropdown');
      const viewComparisonButton = screen.getByText('View Comparison');
      
      userEvent.selectOptions(accessDropdown, ['sept11']);
      userEvent.click(viewComparisonButton);
      
      expect(screen.queryByText('USA Overview:')).not.toBeInTheDocument();
      expect(screen.queryByText('Cases')).not.toBeInTheDocument();
      expect(screen.queryByText('Deaths')).not.toBeInTheDocument();
      expect(screen.queryByText('Current Hospitalizations')).not.toBeInTheDocument();

      const sept11Deaths = await waitFor(() => screen.getByText(2977));
      expect(sept11Deaths).toBeInTheDocument();
      
      userEvent.selectOptions(accessDropdown, ['shark-attacks']);
      userEvent.click(viewComparisonButton);

      const ddayDeaths = await waitFor(() => screen.getByText(41));
      expect(ddayDeaths).toBeInTheDocument();
    })

  // describe('Methods', () => {
  // it('should simplify data for single state', () => {
  //     const singleAPIData = simplifyAPIDataForSingleState(singleState)
  //     expect(singleAPIData).toBe(simplifiedStateData)
  //   });
  // })
  
});