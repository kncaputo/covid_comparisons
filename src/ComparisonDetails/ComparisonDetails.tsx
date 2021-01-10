import './ComparisonDetails.scss';
import { Link } from 'react-router-dom';
import { Comparison } from '../comparisonData'



const ComparisonDetails = (prop: { selection?: Comparison }) => {
  const verifyProps = () => {
    if (prop.selection) {
      return(
        <section>
          <p>This is ComparisonDetails Component</p>
          <p>{prop.selection?.data.title}</p>
          <p>{prop.selection?.data.deaths}</p>
        </section>
      )
    }
  }
  return <>{verifyProps()}</>
}

export default ComparisonDetails;