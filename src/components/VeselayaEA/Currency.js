import React, { useEffect, useState } from 'react';

const APP_ID = '44c63c9175ce4468a7c7f64640361804';
const getURL = () => `https://openexchangerates.org/api/latest.json?app_id=${APP_ID}`;
const fetchData = async (currencyUpdate) => {
  try {
    const response = await fetch(getURL());
    const json = await response.json();
    currencyUpdate({
      euro: json.rates.EUR,
      rub: json.rates.RUB,
      bitcoin: json.rates.BTC,
    });
  } catch (error) {
    currencyUpdate({
      euro: 'Ошибка',
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
        {currency.euro}
        {' '}
        <br />
        Рубль:
        {currency.rub}
        {' '}
        <br />
        Биткойн:
        {currency.bitcoin}
        {' '}
        <br />
      </div>
    </div>
  );
};

export default Currency;
