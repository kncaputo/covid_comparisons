import './ComparisonCard.scss';

const ComparisonCard = (prop: {title?: string, body?: JSX.Element[], text?: JSX.Element, styleId: string, image?: string}) => {
  const generateComparisonCards = () => {
    return(
      <section className={`${prop.styleId}-cards`}>
        <h1>{prop.title}</h1>
        <section>{prop.text}</section>
        <section className={`${prop.styleId}-body`}>{prop.body}</section>
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