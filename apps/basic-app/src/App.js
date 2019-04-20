import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Warriors from './components/Warriors';

class App extends Component {
  state = {
    fighters: [
      { id: 1, name: 'Goku', kind:'sayen', powerlevel: 1000 },
      { id: 2, name: 'Gohan', kind:'half sayen', powerlevel: 200 },
      { id: 3, name: 'Vegito', kind:'sayen', powerlevel: 980 },
      { id: 4, name: 'Krillan', kind:'human', powerlevel: 20 }
    ]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Warriors fighters={this.state.fighters} />
        </header>
      </div>
    );
  }
}

export default App;
