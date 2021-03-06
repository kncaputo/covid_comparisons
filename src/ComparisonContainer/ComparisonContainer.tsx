import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { comparisonData } from '../comparisonData';
import './ComparisonContainer.scss';

const ComparisonContainer = (prop: { styleId: string, handleComparisonClick(dropdownValue: string): any}) => {
  const [dropdownValue, setDropdownValue] = useState('')
  
  let handleChange = (event: any) => {
    setDropdownValue(event.target.value)
  }

  const createDropdownValues = (): JSX.Element[] => {
   return comparisonData.map(data => {
      return(
        <option 
          data-testid={`${data.id}`}
          id={`dropdown-${data.id}`} 
          key={`dropdown-${data.id}`} 
          value={`${data.category}`}>
            {`${data.data.title}`}
        </option>
      );  
    })
  }

  return(
    <section className={`${prop.styleId}-comparison-container`}>
      <h3 className='comparison-title'>How Does It Compare?</h3>
      <section>

        <article id={`${prop.styleId}-description-container`}>
          <section id={`${prop.styleId}-description`}>
            <p>
              The number of deaths from the coronavirus is astounding but is often hard to picture the magnitude of.
            </p>
            <p className='paragraph2'>
              Select an event from the dropdown menu below to see how the deaths in this state compare to other castastrophic events in history.
            </p>
          </section>
        </article>

        <section id='dropdown-container'>
          <select 
            id='dropdown' 
            data-testid='dropdown'
            onChange={handleChange}>
            <option 
              id='dropdown-default'
              key='dropdown-default'
              value='select-a-comparison'
              disabled
              selected>
              Select a Comparison Category
            </option>  
            {createDropdownValues()}
          </select>
          <section>
            <Link to={`/${dropdownValue}`}>
              <button id='comparison-button' onClick={() => prop.handleComparisonClick(dropdownValue)}>View Comparison</button>
            </Link>
          </section>
        </section>
      </section>
    </section>
  )
}

export default ComparisonContainer;