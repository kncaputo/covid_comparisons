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
        <select id='dropdown'>
          <option value="Alyssa and Kara">alyssa and kara</option>
          <option value="Alyssa">alyssa</option>
          <option value="Kara">kara</option>
          <option value="Joe">Joe</option>
        </select>
      </section>
    </section>
  )
}

export default ComparisonContainer;