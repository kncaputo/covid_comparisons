import React, {Component} from 'react';
import './App.css';

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
}

export default App;
