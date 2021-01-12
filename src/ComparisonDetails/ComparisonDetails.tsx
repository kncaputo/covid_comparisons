import React, { useState } from 'react';
import ComparisonCard from '../ComparisonCard/ComparisonCard';
import './ComparisonDetails.scss';
import { Comparison } from '../comparisonData';

const ComparisonDetails = (prop: { selection?: Comparison, usaStateDeaths: number, totalUSADeaths: number }) => {
  const [deathIcons, setDeathIcons] = useState<any>([])

  const convertDeaths = (numDeaths: number): JSX.Element[] => {
    let deathConversion = Math.floor(numDeaths/100)
    let arrayLength = deathConversion
    return displayDeaths(deathConversion, arrayLength)
  }
  
  const displayDeaths = (deathConversion: number, arrayLength: number): JSX.Element[] => { 
    if (deathConversion >= 0 && deathIcons.length < arrayLength) {
      let newIcon: JSX.Element = <p key={`${deathConversion}`}>X</p>
      deathIcons.push(newIcon)
      setDeathIcons(deathIcons)

      return displayDeaths(deathConversion - 1, arrayLength)
    }
    return deathIcons
  }
  
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
    return <p>Sorry no data available at this time.</p>
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
    <section>
        <section className='main'>
          <ComparisonCard
            title={`${ prop.selection?.data.subtitle } saw ${prop.selection?.data.deaths} deaths.`}
            body={convertDeaths(prop.usaStateDeaths)}
            styleId='usa-total-deaths'
            key='1'
          />
          <ComparisonCard
            text={compareStateDeathsToUSADeaths()}
            styleId='usa-total-deaths'
            key='4'
          />
          <ComparisonCard
            text={calculateDeathRatio()}
            styleId='usa-total-deaths'
            key='2'
          />
          <ComparisonCard
            title={`This is compared to ${prop.usaStateDeaths } deaths in Colorado to date.`}
            styleId='usa-total-deaths'
            key='3'
          />
          <section>
            <section>
              <p></p>
            </section>
            <section>
              <p>This is compared to {prop.usaStateDeaths } deaths in Colorado to date.</p>
            </section>
          </section>
      </section>
    </section>
  )
}
export default ComparisonDetails;
