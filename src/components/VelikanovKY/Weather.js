import React, {useEffect, useState} from 'react';
import WindDirection from './WindDirection';
const fetchData = async (weatherUpdate) => {

    fetch("https://api.openweathermap.org/data/2.5/weather?q=Moscow,ru&appid=719dddbed313225204fd616e1b75e83f")
    .then(response => response.json())
    .then(json => {
        weatherUpdate({
            temperature: json.main.temp,
            city: json.name,
            icon: 'https://openweathermap.org/img/wn/' + json.weather[0].icon +'@2x.png',
            feel: json.main.feels_like,
            description: json.weather[0].description,
            wind: json.wind.speed,
            deg: json.wind.deg,
            isLoading: false

        })
        console.log(json)    
    })
    .catch(error =>
        console.error() );
}

const Weather = (props) => {
    const STYLE = {
        fontSize: '10pt',
    }
    const DIV_STYLE = {
        border:                 '1px solid black',
        borderRadius:                      '25px',
        backgroundColor:  'rgba(255,255,255,0.1)',
        padding:                            '5px',
    }
    const [ weather,setWeather ] = useState({
        city:  'Moscow,ru',
        isLoading:  true    
    })
    useEffect(() => {
        fetchData(setWeather)
    },[])
    
    if (!weather.isLoading){
        return (<div style = {DIV_STYLE}>
            Weather in {weather.city}
            <div>
                <img className="weather-widget__img" src={weather.icon} alt="Weather in Moscow, RU" width="50" height="50" />
                {parseInt(weather.temperature -273.15)}°C <br />
                {weather.description}, feels like {parseInt(weather.feel - 273.15)}°C <br />
                <div style = {STYLE}>{weather.wind} m/s <br /> <WindDirection deg = {weather.deg} /> ({weather.deg})</div>
            </div>
        </div>
        )
    }
    else return <h3>Weather in {weather.city}</h3>
}

export default Weather;