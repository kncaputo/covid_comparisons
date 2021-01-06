import React, { Component } from 'react';
import USAState from '../USAState/USAState';
import ComparisonContainer from '../ComparisonContainer/ComparisonContainer';
import Stat from '../Stat/Stat';
import { fetchCurrentStateData } from '../apiCalls'
import './App.scss';

interface Props { 
}

interface State {
  selectedUSAState: {};
}

class App extends Component<Props,State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedUSAState: {}
    }
  }

  componentDidMount() {
    fetchCurrentStateData()
    .then(data => this.setState({ selectedUSAState: data }))
    .catch(error => console.error(error))
  }

  render() {
    return(
      <main>
        <h1>COCO</h1>
        <body>
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
        </body>
      </main>
    )
  }
}

export default App;
