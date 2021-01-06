import React, {Component} from 'react';
import USAState from '../USAState/USAState';
import ComparisonContainer from '../ComparisonContainer/ComparisonContainer';
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

  render() {
    return(
      <main>
        <h1>COCO</h1>
        <body>
          <section>
            <USAState />
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
