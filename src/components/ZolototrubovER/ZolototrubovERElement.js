import React from 'react'
import CharInfo from './CharInfo'


const ZolototrubovERElement = () => {
    const TEXT_STYLE = {
        'font-size' : '25px',
        color       : 'white',
        margin      : '10px 0px'
    }

    return (
        <div className="zolototrubov_element">
            <p style={TEXT_STYLE}>Собственный компонент</p>
            <CharInfo/>
        </div>
    )
}

export default ZolototrubovERElement
