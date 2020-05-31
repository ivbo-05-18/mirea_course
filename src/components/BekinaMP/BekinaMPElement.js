import React from 'react'
import TimeAgo from 'react-timeago'
import TextTransformer  from './TextTransformer'


const BekinaMPElement = () => {
    const TEXT_STYLE = {
        fontSize    : '25px',
        color       : 'white',
        margin      : '10px 0px'
    }
    
    return (
        <div className="bekina_mp_element">
            <p style={TEXT_STYLE}>Собственный компонент</p>
              < TextTransformer/>
            <p style={TEXT_STYLE}>Компонент из GitHub</p>
            Через сколько мы получим дипломы?<br />
            <TimeAgo date='June 28, 2022'/>
            <p style={TEXT_STYLE}>Компонент другого студента</p>
        </div>
    )
}

export default BekinaMPElement
