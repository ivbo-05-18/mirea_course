import React from 'react'

const field = (props) => {
    return (
        <div className='inputGK' >
            <input type="text" value={props.value} onChange={props.changed} />
        </div >
    );
}
export default field;