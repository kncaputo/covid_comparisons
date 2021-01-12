import ComparisonCard from '../ComparisonCard/ComparisonCard';
import './ComparisonDetails.scss';
import { Comparison } from '../comparisonData';

const ComparisonDetails = (prop: { selection?: Comparison, usaStateDeaths: number, totalUSADeaths: number }) => {

  // function convertDeaths(numDeaths: number) {
  //   let deathConversion = Math.floor(numDeaths/50)
  //   displayDeaths(deathConversion)
  // }
  // let deathIcons = []
  
  // function displayDeaths(deathConversion: number) { 
  //   if (deathConversion <= 0) {
  //     return deathIcons
  //   }
  //   deathIcons.push('X')
  //   return displayDeaths(deathConversion - 1)
  // }
  
  const compareStateDeathsToUSADeaths = () => {
    let percentOfAllUSADeaths = prop.usaStateDeaths / prop.totalUSADeaths;
    return (
      <p>The number of deaths due to COVID-19 in the state of Colorado account
        for { (percentOfAllUSADeaths * 100).toFixed(1) }% of all deaths in the United States.</p>
    )
  }

  const calculateDeathRatio = () => {
    if (typeof prop.selection?.data.deaths === 'number') {
      let deathRatio = (prop.usaStateDeaths / prop.selection.data.deaths)
      return generateComparisonText(deathRatio)
    } 
    return 'Sorry no data available at this time.'
  }

  const generateComparisonText = (deathRatio: number): JSX.Element => {
    if(deathRatio < 1) {
      return(
        <section className='comparison-text'>
          <p>Despite the staggering number of COVID-19 deaths in 2020, COVID-19 
            deaths are only equivalent to { (deathRatio).toFixed(1) }% of all &nbsp;
            {prop.selection?.data.title} deaths in all of the United States.
          </p> 
        </section>
      )
    } else {
      return(
        <section className='comparison-text'>
          <p>The number of COVID-19 deaths in Colorado is equivalent to { deathRatio.toFixed(1) } times the 
            number of all { prop.selection?.data.title }. 
          </p> 
        </section>
      )
    }
  }

  return(
    <section className='main'>
      <ComparisonCard
      deathData={ prop }
      comparisonText={ generateComparisonText } />
      <h2 id='page-title'>COVID-19 deaths compared to {prop.selection?.data.title}</h2>
      <section>
        <section>
          <p>{ prop.selection?.data.title } saw {prop.selection?.data.deaths} deaths.</p>
        </section>
        <section>
          <p>This is compared to {prop.usaStateDeaths } deaths in Colorado to date.</p>
        </section>
      </section>
      <p>{ calculateDeathRatio() }</p>
      <p>{ compareStateDeathsToUSADeaths() }</p>
    </section>
  )
}
export default ComparisonDetails;
