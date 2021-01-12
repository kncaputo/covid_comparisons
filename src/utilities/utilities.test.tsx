import { simplifyAPIDataForSingleState, simplifyAPIDataForAllStates } from './utilities';
import { singleState, simplifiedStateData, simplifiedUSAData, usaData } from '../sampleData';
import '@testing-library/jest-dom';

describe('utilities', () => {
  it('should simplify API data for a single state when given a complex object', () => {
    const simpleStateData = simplifyAPIDataForSingleState(singleState);

    expect(simpleStateData).toStrictEqual(simplifiedStateData);
  });

  it('should simplify API data for all states when given a complex object', () => {
    const simpleUSAData = simplifyAPIDataForAllStates(usaData[0]);

    expect(simpleUSAData).toStrictEqual(simplifiedUSAData);
  });
})