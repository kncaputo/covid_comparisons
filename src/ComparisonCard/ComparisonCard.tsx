import './ComparisonCard.scss';
import { Comparison } from '../comparisonData';

interface DeathData {
  selection?: Comparison, 
  usaStateDeaths: number, 
  totalUSADeaths: number
}

const ComparisonCard = (prop: { deathData: DeathData, comparisonText(deathData: number): JSX.Element }) => {
  const generateComparisonCards = () => {
    
  }

  return(
    <section>
      <h1>HELLO!!!</h1>
    </section>
  )
}


export default ComparisonCard;