export const fetchCurrentStateData = () => {
  return (
    fetch('https://api.covidtracking.com/v1/states/co/current.json')
    .then(response => {
      if (!response.ok) {
        throw Error('Failed to fetch data for a single state.')
        }
      return response.json()
      }
    )
  )
}

export const fetchAllCurrentUSAData = () => {
  return (
    fetch('https://api.covidtracking.com/v1/us/current.json')
    .then(response => {
      if (!response.ok) {
        throw Error('Failed to fetch data for the entire United States.')
        }
      return response.json()
      }
    ) 
  )
}