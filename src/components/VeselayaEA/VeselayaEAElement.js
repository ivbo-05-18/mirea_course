import React from 'react';
import ReactPlayer from 'react-player';
import Currency from './Currency';

const VeselayaEAElement = () => (
  <div>
    <Currency />
    <h4>Элемент из github</h4>
    <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" playing />
  </div>
);
export default VeselayaEAElement;
