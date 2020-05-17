import React, {useState} from 'react'
import ZolototrubovERElement from './ZolototrubovERElement'

const ZolototrubovERController = () => {
    const [showState, switchState ] = useState({
        show: false
    })

    const switchShowState = () => {
        switchState({
            show: !showState.show
        })
    }

    return (
        <div className="zolototrubov_er">
            <button onClick={switchShowState}> Золототрубов Е.Р. </button>
            {showState.show && <ZolototrubovERElement/>}
        </div>
    )
}

export default ZolototrubovERController
