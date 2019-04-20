import React, { Component } from 'react';
import './Warriors.css';

class Warriors extends Component {
    state = {
        title: 'Dragon Ball Z Fighters'
    }

    render() {
        const { fighters } = this.props;
        
        const fightersList = fighters.map(fighter => {
            return (
                <p key={fighter.id}>{fighter.name} - {fighter.powerlevel}</p>
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