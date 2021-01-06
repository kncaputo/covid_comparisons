import React from 'react';
import ComparisonDetails from '../ComparisonDetails/ComparisonDetails';
import './ComparisonContainer.scss';

const ComparisonContainer = () => {
  return(
    <section>
      <h3>How Does It Compare?</h3>
      <section>
        <section>
          <p>Write up text explaining app</p>
        </section>
        <select>
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