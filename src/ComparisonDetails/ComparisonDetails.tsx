import './ComparisonDetails.scss';
import { Link } from 'react-router-dom';
import { Comparison } from '../comparisonData'

const ComparisonDetails = (prop: { selection?: Comparison, usaStateDeaths: number }) => {

  const calculateDeathRatio = () => {
    if (typeof prop.selection?.data.deaths === 'number') {
      let deathRatio = prop.usaStateDeaths / prop.selection.data.deaths;
      return generateComparisonText(deathRatio)
    }
  }

  const generateComparisonText = (deathRatio: number) => {
    if(deathRatio < 1) {
      return(
        <section>
          <p>Despite the staggering number of COVID-19 deaths in 2020, COVID-19 
            deaths are only equivalent to {(deathRatio * 100).toFixed(1)}% of all &nbsp;
            {prop.selection?.data.title} deaths in all of the United States.
          </p> 
        </section>
      )
    } else {
      return(
        <section>
          <p>The number of COVID-19 deaths in Colorado is equivalent to { deathRatio.toFixed(1) } times the 
            number of all { prop.selection?.data.title }. 
          </p> 
        </section>
      )
    }
  }

  return(
    <section className='main'>
      <h2 id='page-title'>Covid-19 deaths compared to {prop.selection?.data.title}</h2>
      <p>{prop.selection?.data.title}</p>
      { calculateDeathRatio() }
      <p>{prop.selection?.data.deaths}</p>
    </section>
  )
}
export default ComparisonDetails;