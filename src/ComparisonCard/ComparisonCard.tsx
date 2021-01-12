import './ComparisonCard.scss';

const ComparisonCard = (prop: {title?: string, body?: JSX.Element[], text?: JSX.Element, styleId: string, source?: string}) => {
  const generateComparisonCards = () => {
    return(
      <section>
        <section className={`${prop.styleId}-cards cards`}>
          <section>
            <p className='card-title'>{prop.title}</p>
          </section>
          <section>{prop.text}</section>
          <section className={`${prop.styleId}-body`}>{prop.body}</section>
        </section>
        <section className='source'>{prop.source}</section>
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