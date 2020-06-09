import React, { useEffect, useState } from 'react';

const APP_ID = process.env.REACT_APP_CURRENCY;
const getURL = () => `https://openexchangerates.org/api/latest.json?app_id=${APP_ID}`;
const fetchData = async (currencyUpdate) => {
  try {
    const response = await fetch(getURL());
    const json = await response.json();
    currencyUpdate({
      euro: json.rates.EUR || 0,
      rub: json.rates.RUB || 0,
      bitcoin: json.rates.BTC || 0,
    });
  } catch (error) {
    currencyUpdate({
      euro: 'Ошибка',
      rub: 'Ошибка',
      bitcoin: 'Ошибка',
    });
  }
};

const Currency = () => {
  const STYLE = {
    border: '1px solid black',
    padding: '5px',
  };
  const [currency, setCurrency] = useState({
    euro: 0,
    rub: 0,
    bitcoin: 0,
  });
  useEffect(() => {
    fetchData(setCurrency);
  }, []);


  return (
    <div style={STYLE}>
      <h4>1$</h4>
      <div>
        Евро:
        {' '}
        {' '}
        {currency.euro}
        <br />
        Рубль:
        {' '}
        {' '}
        {currency.rub}
        <br />
        Биткойн:
        {' '}
        {' '}
        {currency.bitcoin}
        <br />
      </div>
    </div>
  );
};

export default Currency;
