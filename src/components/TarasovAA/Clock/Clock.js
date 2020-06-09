import React, { Component } from 'react';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        time: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { time } = this.state;
    return (
      <div>
        <h1>
          {' '}
          Now :
          { time.toLocaleTimeString() }
        </h1>
      </div>
    );
  }
}
