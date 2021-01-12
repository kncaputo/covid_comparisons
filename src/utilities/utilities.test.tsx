import { simplifyAPIDataForSingleState, simplifyAPIDataForAllStates } from './utilities';
import { singleState, simplifiedStateData, simplifiedUSAData, usaData } from '../sampleData';
import '@testing-library/jest-dom';

describe('utilities', () => {
  it('should simplify API data for a single state when given a complex object', () => {
    const simpleStateData = simplifyAPIDataForSingleState(singleState);

    expect(simpleStateData).toStrictEqual(simplifiedStateData);
  });

 
})