import './ComparisonDetails.scss';
import { Link } from 'react-router-dom';
import { Comparison } from '../comparisonData'

const ComparisonDetails = (prop: { selection?: Comparison }) => {
  const verifyProps = () => {
    if (prop.selection) {
      return(

        <section className='main'>
          <h2 id='page-title'>Covid-19 deaths compared to {prop.selection?.data.title}</h2>

          <p>{prop.selection?.data.title}</p>
          <p>{prop.selection?.data.deaths}</p>
        </section>
      )
    }
  }
  return <>{verifyProps()}</>
}

export default ComparisonDetails;