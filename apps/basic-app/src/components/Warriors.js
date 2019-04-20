import React, { Component } from 'react';
import './Warriors.css';

class Warriors extends Component {
    state = {
        title: 'Dragon Ball Z Fighters'
    }

    deleteWarrior = (id) => {
        this.props.deleteWarrior(id);
    }

    render() {
        const { fighters } = this.props;
        
        const fightersList = fighters.map(fighter => {
            return (
                <p key={fighter.id}>
                    {fighter.name} - {fighter.powerlevel}<a href="#" onClick={() => this.deleteWarrior(fighter.id)}>&emsp;❌</a> 
                </p>
            )
        })

        return (
            <div>
                <h3>{ this.state.title }</h3>
                {fightersList}
            </div>
        )
    }
}

export default Warriors;