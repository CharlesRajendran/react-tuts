import React, { Component } from 'react';
import logo from './goku.gif';
import './App.css';

import Warriors from './components/Warriors';
import AddWarrior from './components/AddWarrior';

class App extends Component {
  state = {
    nextId: 1,
    fighters: []
  }

  addWarrior = (warrior) => {

    const newWarriorList = [...this.state.fighters, { id: this.state.nextId, ...warrior}];
    this.setState({fighters: newWarriorList, nextId: this.state.nextId + 1});
  }

  deleteWarrior = (warriorId) => {
    let updatedWarriors = this.state.fighters.filter(fighter => fighter.id === warriorId ? false: true);
    this.setState({fighters: updatedWarriors});
  }

  render() {

    const warriorsHtml = this.state.fighters.length > 0 ? (
      <Warriors fighters={this.state.fighters} deleteWarrior={this.deleteWarrior} />
    ) : (
      <h3>No Warriors Yet...</h3>
    )

    return (
      <div className="App">
        <header className="App-header">
          <h2>Universe 7 Team</h2>
          <img src={logo} className="App-logo" alt="logo" />
          <AddWarrior add={this.addWarrior} />
          {warriorsHtml}
        </header>
      </div>
    );
  }
}

export default App;
