import React from 'react';
import PropTypes from 'prop-types';
import styles from './weather.module.css';

class WeatherInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      weatherData: null,
    };
  }

  componentDidMount() {
    const { zip } = this.props;
    const apiKey = 'b1b35bba8b434a28a0be2a3e1071ae5b';
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${zip}&appid=${apiKey}&units=metric`;
    fetch(URL).then((res) => res.json()).then((json) => {
      this.setState({ weatherData: json });
    });
  }

  render() {
    const { weatherData } = this.state;
    if (!weatherData) { return <div>Loading</div>; }
    const weather = weatherData.weather[0];
    return (
      <div className={styles.mainDiv}>
        <form className={styles.form}>
          <div className={styles.img}>
            <img className={styles.weatherImage} alt="weather" src="https://i.pinimg.com/564x/1a/5e/15/1a5e153490c4fd46cb8d3a8254dbba48.jpg" />
          </div>
          <div className={styles.info}>
            <h1 className={styles.title}>
              {weather.main}
              {' '}
              in
              {' '}
              {weatherData.name}
            </h1>
            <p className={styles.parag}>
              Temprature:
              {(weatherData.main.temp).toFixed(0)}
              °С
            </p>
            <p className={styles.parag}>
              High Temp:
              {(weatherData.main.temp_max).toFixed(0)}
              °С
            </p>
            <p className={styles.parag}>
              Low Temp:
              {(weatherData.main.temp_min).toFixed(0)}
              °С
            </p>
            <p className={styles.parag}>
              Wind Speed:
              {(weatherData.wind.speed).toFixed(0)}
              {' '}
              mi/hr
            </p>
            <p className={styles.parag}>
              Humidity:
              {weatherData.main.humidity}
            </p>
          </div>
        </form>
      </div>
    );
  }
}

WeatherInfo.propTypes = {
  zip: PropTypes.string.isRequired,
};

export default WeatherInfo;
