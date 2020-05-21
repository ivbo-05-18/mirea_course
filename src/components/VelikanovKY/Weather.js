import React, { useEffect, useState } from 'react';
import WindDirection from './WindDirection';

const APP_ID =process.env.REACT_APP_NOT_SECRET_ID;
const getUpdateUrl = (city, countryCode = '') => `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${APP_ID}`;
const fetchData = async (weatherUpdate) => {
  try {
    const response = await fetch(getUpdateUrl('Moscow', 'ru'));
    const json = await response.json();

    weatherUpdate({
      temperature: json.main.temp,
      city: json.name,
      icon: `https://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`,
      feel: json.main.feels_like,
      description: json.weather[0].description,
      wind: json.wind.speed,
      deg: json.wind.deg,
      isLoaded: true,
    });
  } catch (error) {
    weatherUpdate({
      description: "Fetching has failed",
      isLoaded: false,
    })
  }
};

const Weather = () => {
  const STYLE = {
    fontSize: '10pt',
  };
  const DIV_STYLE = {
    border: '1px solid black',
    borderRadius: '25px',
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: '5px',
  };
  const [weather, setWeather] = useState({
    city: 'Moscow,ru',
    isLoaded: false,
    description: "Fetching..."
  });
  useEffect(() => {
    fetchData(setWeather);
  }, []);

  if (weather.isLoaded) {
    return (
      <div style={DIV_STYLE}>
        Weather in
        {' '}
        {weather.city}
        <div>
          <img className="weather-widget__img" src={weather.icon} alt="Weather in Moscow, RU" width="50" height="50" />
          {parseInt(weather.temperature - 273.15, 10)}
          °C
          <br />
          {weather.description}
          , feels like
          {' '}
          {parseInt(weather.feel - 273.15, 10)}
          °C
          <br />
          <div style={STYLE}>
            {weather.wind}
            {' '}
            m/s
            {' '}
            <br />
            {' '}
            <WindDirection deg={weather.deg} />
            {' '}
            (
            {weather.deg}
            )
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h3>
        Weather in
        {weather.city}
      </h3>
      {weather.description}
    </div>
  );
};

export default Weather;
