import { GiCoffin } from 'react-icons/gi';
import { RiHospitalFill, RiVirusFill } from 'react-icons/ri';
import './Stat.scss';

const Stat = (prop: {icon: any, number: number, title: string, details: string}) => {
  return(
    <section>
      { prop.icon === GiCoffin && 
        <GiCoffin/>
      }
      { prop.icon === GiCoffin && 
        <RiVirusFill/>
      }
      { prop.icon === GiCoffin && 
        <RiHospitalFill/>
      }
      <p>{ prop.number }</p>
      <p>{ prop.title }</p>
      <p>{ prop.details }</p>
    </section>
  )
}

export default Stat;