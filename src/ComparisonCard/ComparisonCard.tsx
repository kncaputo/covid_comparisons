import './ComparisonCard.scss';
import { Comparison } from '../comparisonData';

const ComparisonCard = (prop: {title: string, body: JSX.Element[], styleId: string, image?: string}) => {
  const generateComparisonCards = () => {
    return(
      <section className={`${prop.styleId}-cards`}>
        <h1>{prop.title}</h1>
        <section className={`${prop.styleId}}-body`}>{prop.body}</section>
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