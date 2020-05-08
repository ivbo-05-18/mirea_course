import React, {useState, useEffect} from 'react'
import './Leaderboard.css'
import Leaderboard from './Leaderboard'


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
        </div>
    )
}

export default PetrovSDElement

