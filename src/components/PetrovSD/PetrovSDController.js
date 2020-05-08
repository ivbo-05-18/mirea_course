import React, {useState} from 'react'
import PetrovSDElement from './PetrovSDElement'

const PetrovSDController = () => {
    const [showState, switchState ] = useState({
        show: false
    })

    const switchShowState = () => {
        switchState({
            show: !showState.show
        })
    }

    return (
        <div className="petrov_sd">
            <button onClick={switchShowState}> Петров С.Д. </button>
            {showState.show && <PetrovSDElement/>}
        </div>
    )
}

export default PetrovSDController