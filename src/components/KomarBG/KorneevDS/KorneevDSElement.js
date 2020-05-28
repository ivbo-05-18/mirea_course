import React from 'react';

export default class KorneevDSElement extends React.Component {
  static currentTime() {
    const date = new Date();
    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
  }

  constructor(props) {
    super(props);

    window.setInterval(this.updateDate.bind(this), 500);

    this.state = {
      time: KorneevDSElement.currentTime(),
    };
  }

  updateDate() {
    this.setState({
      time: KorneevDSElement.currentTime(),
    });
  }

  render() {
    const { time } = this.state;

    return (
      <div className="timeContainer" style={{ width: 500, color: 'black' }}>
        <h1>{time}</h1>
        <p>Current Local Time</p>
      </div>
    );
  }
}
