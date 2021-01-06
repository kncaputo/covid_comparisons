import React, { Component } from 'react';
import USAState from '../USAState/USAState';
import ComparisonContainer from '../ComparisonContainer/ComparisonContainer';
import Stat from '../Stat/Stat';
import { fetchCurrentStateData } from '../apiCalls'
import './App.scss';

interface Props { 
}

interface State {
  selectedUSAState: {
    date: number,
    state: string,
    positive: number,
    hospitalizedCurrently: number,
    death: number
  };
}

class App extends Component<Props,State> {
  constructor(props: Props) {
    super(props);
    this.state = {
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
    .then(data => this.setState({ selectedUSAState: data }))
    .catch(error => console.error(error))
  }

  render() {
    return(
      <section>
        <h1>COCO</h1>
        <main>
          <section>
            <USAState />
          </section>
          <section>
            <Stat />
            <Stat />
            <Stat />
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
