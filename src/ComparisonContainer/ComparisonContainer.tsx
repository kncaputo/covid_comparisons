import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ComparisonDetails from '../ComparisonDetails/ComparisonDetails';
import './ComparisonContainer.scss';

const ComparisonContainer = (prop: { handleComparisonClick(dropdownValue: string): any}) => {
  const [dropdownValue, setDropdownValue] = useState('default')
  
  let handleChange = (event: any) => {
    setDropdownValue(event.target.value)
  }

  return(
    <section className='comparison-container'>
      <h3 className='comparison-title'>How Does It Compare?</h3>
      <section>
        <section className='app-description'>
          <p>The number of deaths from the coronavirus is astounding but 
            is often hard to picture the magnitude of.</p>
          <p className='paragraph2'>Select an event from 
            the dropdown menu below to see how the deaths in this state compare 
            to other castastrophic events in history.</p>
        </section>
        <select id='dropdown' data-testid='dropdown' onChange={handleChange}>
          <option id='dropdown-value' value='default'>Select a Comparison</option>
          <option id='dropdown-value' value='911'>9/11</option>
          <option id='dropdown-value' value='worldWar'>WWII</option>
          <option id='dropdown-value' value='shark-attacks'>Shark Attacks</option>
          <option id='dropdown-value' value='car-crash-fatalities-2020'>Car Crash Fatalities (2020)</option>
          <option id='dropdown-value' value='flu-fatalities-2020'>Flu Fatalities (2020)</option>
          <option id='dropdown-value' value='hurricane-katrina'>Hurricane Katrina</option>
        </select>
      </section>
      <Link to={`/${dropdownValue}`}>
        <button className='comparison-button' onClick={() => prop.handleComparisonClick(dropdownValue)}>View Comparison</button>
      </Link>
    </section>
  )
}

export default ComparisonContainer;