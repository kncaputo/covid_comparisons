export const simplifyAPIDataForSingleState = (data: { date: number, state: string, 
  positive: number, hospitalizedCurrently: number, death: number }): void => { 
    const stateData = {
    date: data.date,
    state: data.state,
    positive: data.positive,
    hospitalizedCurrently: data.hospitalizedCurrently,
    death: data.death
  }
}

export const simplifyAPIDataForAllStates = (data: { positive: number, death: number, hospitalizedCurrently: number }): void => {
  const USAData = {
    positive: data.positive,
    death: data.death,
    hospitalizedCurrently: data.hospitalizedCurrently
  }
  this.setState({ allUSAData: USAData })
}