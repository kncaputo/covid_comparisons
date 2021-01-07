import './Stat.scss';

const Stat = (prop: { icon: any, number?: number, title: string, details: string }) => {
  return(
    <section className='stats'>
      <p className={prop.title.toLowerCase()}>{ <prop.icon /> }</p>
      <h3 className='stats-number'>{ prop.number }</h3>
      <h3 className='stats-title'>{ prop.title }</h3>
      <h3 className='stats-details'>{ prop.details }</h3>
    </section>
  )
}

export default Stat;