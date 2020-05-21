import React from 'react'
import Leaderboard from './Leaderboard'
import Timer from './Timer'

const PetrovSDElement = () => {
    const TEXT_STYLE = {
        'font-size' : '25px',
        color       : 'white',
        margin      : '10px 0px'
    }
    
    return (
        <div className="petrov_sd_element">
            <p style={TEXT_STYLE}>Собственный компонент</p>
            <Leaderboard/>
            <p style={TEXT_STYLE}>Компонент одногруппника (Передерий В.А.)</p>
            <Timer/>
        </div>
    )
}

export default PetrovSDElement

