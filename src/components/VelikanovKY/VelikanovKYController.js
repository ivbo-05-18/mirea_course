import React, {useState} from 'react';
import VelikanovKYElement from './VelikanovKYElement';

const VelikanovKYController = () => {
    const [showState, switchState ] = useState({
        show: false
    })

    const switchShowState = () => {
        switchState({
            show: !showState.show
        })
    }

    return (
        <div>
            <button onClick={switchShowState}> Великанов К.Ю. </button>
            {showState.show && <VelikanovKYElement />}
        </div>
    )
    
}




export default VelikanovKYController;