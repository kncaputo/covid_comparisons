export const fetchCurrentStateData = () => {
  return (
    fetch('https://api.covidtracking.com/v1/states/co/current.json')
    .then(response => response.json())
  )
}