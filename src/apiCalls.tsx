export const fetchCurrentStateData = () => {
  return (
    fetch('https://api.covidtracking.com/v1/states/co/current.json')
    .then(response => {
      if (!response.ok) {
        throw Error('Failed to fetch data')
        }
      return response.json()
      }
    )
  )
}