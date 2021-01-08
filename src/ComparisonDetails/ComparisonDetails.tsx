import './ComparisonDetails.scss';
import { Link } from 'react-router-dom';

const ComparisonDetails = (prop: { selection: string }) => {
  return(
      <section>
        <p>This is ComparisonDetails Component</p>
        {prop.selection}
      </section>
  )
}

export default ComparisonDetails;