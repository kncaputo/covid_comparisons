import './ComparisonDetails.scss';
import { Link } from 'react-router-dom';

const ComparisonDetails = (prop: { selection: string }) => {
  return(
    <Link to={`'/${prop.selection}`}>
      <section>
        <p>This is ComparisonDetails Component</p>
      </section>
    </Link>
  )
}

export default ComparisonDetails;