import React, { Component } from 'react';
import USAState from '../USAState/USAState';
import ComparisonContainer from '../ComparisonContainer/ComparisonContainer';
import Stat from '../Stat/Stat';
import { fetchAllCurrentUSAData, fetchCurrentStateData } from '../apiCalls'
import { GiCoffin } from 'react-icons/gi';
import { RiVirusFill, RiHospitalFill } from 'react-icons/ri';
import './App.scss';

interface Props { 
}

interface State {
  allUSAData: Details, 
  selectedUSAState: Details
}

interface Details {
  date?: number,
  state?: string,
  positive: number,
  hospitalizedCurrently?: number,
  death: number
}


class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      allUSAData: {
        positive: 0,
        death: 0
      }, 
      selectedUSAState: {
        date: 0, 
        state: '',
        positive: 0,
        hospitalizedCurrently: 0,
        death: 0
      }
    }
  }

  componentDidMount() {
    fetchCurrentStateData()
    .then(data => this.simplifyAPIDataForSingleState(data))
    .catch(error => console.error(error));

    fetchAllCurrentUSAData()
    .then(data => this.simplifyAPIDataForAllStates(data[0]))
    .catch(error => console.error(error));
  }

  simplifyAPIDataForSingleState = (data: { date: number, state: string, 
    positive: number, hospitalizedCurrently: number, death: number }): void => {
    const stateData = {
      date: data.date,
      state: data.state,
      positive: data.positive,
      hospitalizedCurrently: data.hospitalizedCurrently,
      death: data.death
    }
    this.setState({ selectedUSAState: stateData })
  }

  simplifyAPIDataForAllStates = (data: { positive: number, death: number }): void => {
    console.log(data)
    const USAData = {
      positive: data.positive,
      death: data.death
    }
    this.setState({ allUSAData: USAData })
  }

  render() {
    return(
      <section>
        <header>
          <h1 className='title'>C🦠C🦠</h1>
          <h3 className='tagline'>Covid Comparisons</h3>
        </header>
        <section>
          <h3 className='usa-overview'>
            <section className='overview-title'>
              USA Overview: &nbsp; &nbsp;
            </section>
            <section>
              <span className='overview-numbers'>{ new Intl.NumberFormat('en-US').format(this.state.allUSAData.positive) }</span> cases &nbsp; &nbsp; &nbsp; &nbsp;
              <span className='overview-numbers'>{ new Intl.NumberFormat('en-US').format(this.state.allUSAData.death) }</span> deaths
            </section>
          </h3>
        </section>
        <main>
          <section>
            <USAState 
              date={ this.state.selectedUSAState.date }
            />
          </section>
          <section>
            <Stat 
              icon={ GiCoffin }
              number={ this.state.selectedUSAState.positive }
              title={ 'Cases' }
              details={ 'Some details that we want to display' }
            />
            <Stat 
              icon={ RiVirusFill }
              number={ this.state.selectedUSAState.death }
              title={ 'Deaths' }
              details={ 'Some details that we want to display' }
            />
            <Stat 
              icon={ RiHospitalFill }
              number={ this.state.selectedUSAState.hospitalizedCurrently }
              title={ 'Hospitalizations' }
              details={ 'Some details that we want to display' }
            />
          </section>
          <nav>
            <ComparisonContainer />
          </nav>
        </main>
      </section>
    )
  }
}

export default App;
