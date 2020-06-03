import React from 'react';
import WeatherInfo from './WeatherInfo';
import styles from './weather.module.css';

class Forecast extends React.Component {
  PLACES = [
    { name: 'Moscow', zip: '101000' },
    { name: 'Krasnoyarsk', zip: '660000' },
  ];

  constructor() {
    super();
    this.state = {
      activePlace: 0,
    };
  }

  render() {
    const { activePlace } = this.state;
    return (
      <div className="App">
        {this.PLACES.map((place, index) => (
          <button
            type="button"
            className={styles.button}
            key={index}
            onClick={() => {
              this.setState({ activePlace: index });
            }}
          >
            {place.name}
          </button>
        ))}
        <WeatherInfo
          key={activePlace}
          zip={this.PLACES[activePlace].zip}
        />
      </div>
    );
  }
}

export default Forecast;
