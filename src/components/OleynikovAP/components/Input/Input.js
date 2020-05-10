import React from 'react'

const Input = props => {
    return (
        <div className={"Input_" + props.name}>
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