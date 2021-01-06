import './USAState.scss';

const USAState = (prop: {date: number}) => {
  return(
    <section>
      <section>
       <img alt='Current State' className='current-state'/>
        <h1>Colorado</h1>
      </section>
      <h2>{prop.date}</h2>
    </section>
  )
}

export default USAState;