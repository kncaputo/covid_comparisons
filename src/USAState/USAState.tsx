import './USAState.scss';

const USAState = (prop: { date?: number }) => {
  return(
    <section>
      <section className='title-info'>
        <h1 className='state-image'></h1>
        <h2 className='state-name'>Colorado</h2>
      </section>
      <h3>{ prop.date }</h3>
    </section>
  )
}

export default USAState;