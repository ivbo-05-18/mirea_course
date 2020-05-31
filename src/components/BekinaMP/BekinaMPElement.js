import React from 'react'



const BekinaMPElement = () => {
    const TEXT_STYLE = {
        fontSize    : '25px',
        color       : 'white',
        margin      : '10px 0px'
    }
    
    return (
        <div className="bekina_mp_element">
            <p style={TEXT_STYLE}>Собственный компонент</p>
            <p style={TEXT_STYLE}>Компонент из GitHub</p>
            <p style={TEXT_STYLE}>Компонент другого студента</p>
        </div>
    )
}

export default BekinaMPElement
