import React, { useState } from 'react';
import { Data } from './data';

/**
 * FlagSelector component
 *
 * [+] State handling
 * [+] Flag image output from countryflags with current value
 * [+] Selector handling
 * [+] Support for initing value to <select /> consume it
 */

export const getImageURL = (code) => `https://www.countryflags.io/${code}/shiny/64.png`;

const FlagSelector = () => {
  const data = Data;
  /**
   * Creates a state
   *
   * @param {any} - creates state with given init value
   * @property currrentFlag - getter
   * @property setCurrentFlag - setter
   */
  const [currentFlag, setCurrentFlag] = useState(data[10]);


  const handleSelect = (e) => {
    setCurrentFlag(data.filter((item) => item.value === e.target.value)[0]);
  };

  const Flag = () => (currentFlag ? (
    <div>
      <h1>{currentFlag.alias}</h1>
      <img
        style={{ maxWidth: '300px' }}
        src={getImageURL(currentFlag.value)}
        alt={currentFlag.alias}
      />
    </div>
  ) : (
    <p>Флаг не выбран</p>
  ));

  return (
    <div>
      <select testing="this" onChange={handleSelect} value={currentFlag.value}>
        {data.map((e) => (
          <option key={e.value} value={e.value}>
            {e.alias}
          </option>
        ))}
      </select>
      <Flag />
    </div>
  );
};

export default FlagSelector;
