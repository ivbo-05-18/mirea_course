import React from 'react';
import Weather from './Weather';
import Trends from './Trends';


const VelikanovKYElement = () => (
  <div>
    <h2> Собственный элемент </h2>
    <Weather />
    <hr />
    <h2>Элемент извне</h2>
    <Trends />
    <hr />
  </div>
);


export default VelikanovKYElement;
