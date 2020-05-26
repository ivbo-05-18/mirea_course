import React from 'react';
import Currency from './Currency';
import ReactPlayer from 'react-player'
const VeselayaEAElement = () => {
    
    return (
        <div>
        <Currency/>
        <h4>Элемент из github</h4>
        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />
        </div>
     )

}
export default VeselayaEAElement