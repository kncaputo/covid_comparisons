import './Stat.scss';

const Stat = (prop: {icon: any, number: number, title: string, details: string}) => {
  return(
    <section>
      { <prop.icon/> }
      <p>{ prop.number }</p>
      <p>{ prop.title }</p>
      <p>{ prop.details }</p>
    </section>
  )
}

export default Stat;