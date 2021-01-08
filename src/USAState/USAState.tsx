import './USAState.scss';

const USAState = (prop: { date?: string }) => {
  return(
    <section>
      <section className='title-info'>
        <h1 className='state-image'></h1>
        <h2 className='state-name'>Colorado</h2>
      </section>
      <h3 className='date'>Information for { prop.date }</h3>
    </section>
  )
}

export default USAState;