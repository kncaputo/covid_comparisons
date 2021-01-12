interface SimplifiedStateData { date: number, state: string, 
  positive: number, hospitalizedCurrently: number, death: number }
  
interface SimplifiedUSAData {
  positive: number,
  death: number,
  hospitalizedCurrently: number
}

export const simplifyAPIDataForSingleState = (data: { date: number, state: string, 
  positive: number, hospitalizedCurrently: number, death: number }): SimplifiedStateData => { 
    const stateData = {
    date: data.date,
    state: data.state,
    positive: data.positive,
    hospitalizedCurrently: data.hospitalizedCurrently,
    death: data.death
  }
  return stateData;
}

export const simplifyAPIDataForAllStates = (data: { positive: number, death: number, hospitalizedCurrently: number }): SimplifiedUSAData => {
  const USAData = {
    positive: data.positive,
    death: data.death,
    hospitalizedCurrently: data.hospitalizedCurrently
  }
  return USAData;
}