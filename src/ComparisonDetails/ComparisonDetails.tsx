import React, { useEffect, useState } from 'react';
import ComparisonCard from '../ComparisonCard/ComparisonCard';
import './ComparisonDetails.scss';
import { Comparison } from '../comparisonData';
import { FaMale } from 'react-icons/fa';

const ComparisonDetails = (prop: { selection?: Comparison, usaStateDeaths: number, totalUSADeaths: number }) => {
  const [stateDeathIcons] = useState<any>([])
  const [comparisonDeathIcons, setComparisonDeathIcons] = useState<any>([])

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  useEffect(() => {
    setComparisonDeathIcons([])
    convertDeaths(comparisonDeathIcons, Number(prop.selection?.data.deaths))
  }, [Number(prop.selection?.data.deaths)])

 const convertDeaths = (conversion: JSX.Element[], numDeaths: number): JSX.Element[] => {
    let deathConversion = Math.floor(numDeaths/50)
    let arrayLength = deathConversion
    return displayDeaths(conversion, deathConversion, arrayLength)
  }
  
  const displayDeaths = (conversion: JSX.Element[], deathConversion: number, arrayLength: number): JSX.Element[] => { 
    if (deathConversion >= 0 && conversion.length < arrayLength) {
      let newIcon: JSX.Element = <p className='people-icon' key={`${deathConversion}`}><FaMale size={20}/></p>
      conversion.push(newIcon)

      return displayDeaths(conversion, deathConversion - 1, arrayLength)
    }
    return conversion
  }

  
  const compareStateDeathsToUSADeaths = () => {
    let percentOfAllUSADeaths = prop.usaStateDeaths / prop.totalUSADeaths;
    return (
      <p>The number of deaths due to COVID-19 in the state of Colorado account
        for <span className='comparison-nums'>{ (percentOfAllUSADeaths * 100).toFixed(1) }%</span> of all deaths in the United States.
      </p>
    )
  }

  const calculateDeathRatio = () => {
    if (typeof prop.selection?.data.deaths === 'number') {
      let deathRatio = (prop.usaStateDeaths / prop.selection.data.deaths)
      return generateComparisonText(deathRatio)
    } 
    return <p>Sorry no data available at this time.</p>
  }

  const generateComparisonText = (deathRatio: number): JSX.Element => {
    if(deathRatio < 1) {
      return(
        <section>
          <p className='comparison-text'>Despite the staggering number of COVID-19 deaths in 2020, COVID-19 
            deaths are only equivalent to <span className='comparison-nums'>{ (deathRatio).toFixed(1) }%</span> of all &nbsp;
            {prop.selection?.data.title} deaths in all of the United States.
          </p> 
        </section>
      )
    } else {
      return(
        <section>
          <p className='comparison-text'>The number of COVID-19 deaths in Colorado is equivalent to <span className='comparison-nums'>{ deathRatio.toFixed(1) }</span> times the 
            number of all { prop.selection?.data.title }. 
          </p> 
        </section>
      )
    }
  }

  return(
    <section>
        <h1 className='key'><FaMale size={20}/> = 50 Deaths</h1>
        <section className='main'>
          <ComparisonCard
            title={`${ prop.selection?.data.subtitle } saw ${new Intl.NumberFormat('en-US').format(Number(prop.selection?.data.deaths))} deaths.`}
            body={convertDeaths(comparisonDeathIcons, Number(prop.selection?.data.deaths))}
            styleId='usa-total-deaths'
            source={String(prop.selection?.data.source)}
            key='1'
          />
          <ComparisonCard
            title={`This is compared to ${new Intl.NumberFormat('en-US').format(Number(prop.usaStateDeaths) )} deaths in Colorado to date.`}
            body={convertDeaths(stateDeathIcons, prop.usaStateDeaths)}
            styleId='usa-total-deaths'
            source='https://api.covidtracking.com/'
            key='2'
          />
          <ComparisonCard
            text={calculateDeathRatio()}
            styleId='usa-total-deaths'
            key='3'
          />
          <ComparisonCard
            text={compareStateDeathsToUSADeaths()}
            styleId='usa-total-deaths'
            key='4'
          />
      </section>
    </section>
  )
}
export default ComparisonDetails;
