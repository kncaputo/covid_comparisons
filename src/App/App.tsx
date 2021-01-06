import React, {Component} from 'react';
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
            <Dropdown />
            <p>This is a dropdown</p>
          </nav>
          <section>
            <USAState />
            <p>Hello, This will be the section for the state info</p>
          </section>
        </body>
      </main>
    )
  }
}

export default App;
