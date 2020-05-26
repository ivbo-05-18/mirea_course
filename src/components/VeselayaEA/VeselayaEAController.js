import React, {useState} from 'react';
import VeselayaEAElement from './VeselayaEAElement'
const VeselayaEAController = () =>  {
    

    const [showState, switchState ] = useState({
        show: false
    })

    const switchShowState = () => {
        switchState({
            show: !showState.show
        })
    }
    
   
        return (<div className='VeselayaEADiv'>
            <button onClick={ switchShowState }> Веселая Е.А. </button>

            { showState.show && <VeselayaEAElement/> }
        </div>)
    
}



export default VeselayaEAController;