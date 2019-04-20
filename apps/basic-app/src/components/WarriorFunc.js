import React from 'react';
import './Warriors.css';

const ZWarriors = (props) => {
    const { fighters } = props;
    
    const fightersList = fighters.map(fighter => {
        return (
            <p key={fighter.id}>{fighter.name} - {fighter.powerlevel}</p>
        )
    })

    return (
        <div>
            <h3>Functional Component</h3>
            {fightersList}
        </div>
    )
}

export default ZWarriors;