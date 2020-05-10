import React from 'react';
import FlagSelector from './FlagSelector';

const STYLE = {
    background      : '#303040',
    padding         : '0 25px',
    color           : '#CCCCCC'
}
const VelikanovKYController = () => {
        return (
        <div>
            <div style = {STYLE}>
                <h2> Селектор стран</h2>
                <FlagSelector />            
            </div>
            <hr />
         </div>)
    
}



export default VelikanovKYController;