import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { comparisonData } from '../comparisonData';
import './ComparisonContainer.scss';

const ComparisonContainer = (prop: { handleComparisonClick(dropdownValue: string): any}) => {
  const [dropdownValue, setDropdownValue] = useState('default')
  
  let handleChange = (event: any) => {
    setDropdownValue(event.target.value)
  }

  const createDropdownValues = (): JSX.Element[] => {
   return comparisonData.map(data => {
      return(
        <option 
          id={`dropdown-${data.id}`} 
          key={`dropdown-${data.id}`} 
          value={`${data.category}`}>
            {`${data.data.title}`}
        </option>
      );  
    })
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
          {createDropdownValues()}
        </select>
      </section>
      <Link to={`/${dropdownValue}`}>
        <button className='comparison-button' onClick={() => prop.handleComparisonClick(dropdownValue)}>View Comparison</button>
      </Link>
    </section>
  )
}

export default ComparisonContainer;