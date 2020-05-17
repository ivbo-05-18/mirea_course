import React, { useState } from 'react'
import MiroshnikGKElement from './MiroshnikGKElement'

const MiroshnikGKController = () => {
    const [showState, switchState] = useState({
        show: false
    })
    const switchShowState = () => {
        switchState({
            show: !showState.show
        })
    }
    return (
        <div className="miroshnik_gk">
            <button onClick={switchShowState}> Мирошник Г.К. </button>
            {showState.show && <MiroshnikGKElement />}
        </div>
    )
}

export default MiroshnikGKController