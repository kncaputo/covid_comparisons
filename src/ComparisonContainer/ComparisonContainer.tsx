import React from 'react';
import ComparisonDetails from '../ComparisonDetails/ComparisonDetails';
import './ComparisonContainer.scss';

const ComparisonContainer = () => {
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
        <select id='dropdown' data-testid='dropdown'>
          <option id='dropdown-value' value="9/11">9/11</option>
          <option id='dropdown-value' value="WWII">WWII</option>
          <option id='dropdown-value' value="Shark Attacks">Shark Attacks</option>
          <option id='dropdown-value' value="Car Crash Fatalities (2019)">Car Crash Fatalities (2019)</option>
          <option id='dropdown-value' value="Flu Fatalities (2019)">Flu Fatalities (2019)</option>
          <option id='dropdown-value' value="Hurricane Katrina">Hurricane Katrina</option>
        </select>
      </section>
    </section>
  )
}

export default ComparisonContainer;