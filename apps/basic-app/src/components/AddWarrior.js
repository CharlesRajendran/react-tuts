import React, { Component } from 'react';
import './Warriors.css';

class AddWarrior extends Component {
    state = {
        name: null, 
        kind: null, 
        powerlevel: null
    }

    addItemValue = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    addWarrior = (e) => {
        e.preventDefault();
        this.props.add(this.state);
        this.clearFields();
    }

    clearFields() {
        document.querySelectorAll('input').forEach(input => {
            input.value = '';
            if(input.id === 'name') {
                input.focus();
            }
        });
    }

    render() {

        return (
            <form>
                <input placeholder="Enter the name" id="name" onChange={this.addItemValue} />
                <input placeholder="Enter the kind" id="kind" onChange={this.addItemValue} />
                <input placeholder="Enter the powerlevel" id="powerlevel" onChange={this.addItemValue} />
                <button onClick={this.addWarrior}>ADD</button>
            </form>
        )
    }
}

export default AddWarrior;
