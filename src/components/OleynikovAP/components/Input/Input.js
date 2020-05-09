import React from 'react'
import './Input.css'

const Input = props => {
    return (
        <div className="Input">
            <input
                type="text"
                onChange={props.onChangeInput}
                value={props.value}
                size={1}
                name={props.name}
            />
            <span>{ props.span || "" }</span>
        </div>
    )
}

export default Input