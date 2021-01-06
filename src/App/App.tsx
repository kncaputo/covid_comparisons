import React, {Component} from 'react';
import USAState from '../USAState/USAState';
import ComparisonDetails from '../ComparisonDetails/ComparisonDetails';
import ComparisonList from '../ComparisonList/ComparisonList';
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
          <nav>
            <Nav />
          </nav>
          <section>
            <USAState />
          </section>
        </body>
      </main>
    )
  }
}

export default App;
