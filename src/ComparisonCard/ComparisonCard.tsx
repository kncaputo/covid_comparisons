import './ComparisonCard.scss';
import { Comparison } from '../comparisonData';

const ComparisonCard = (prop: {title: string, body: JSX.Element[], styleId: string, image?: string}) => {
  const generateComparisonCards = () => {
    return(
      <section className={`cards ${`{styleId}`}`}>
        <h1>{prop.title}</h1>
        <p>{prop.body}</p>
      </section>
    )
  }

  return(
    <section>
      {generateComparisonCards()}
    </section>
  )
}


export default ComparisonCard;