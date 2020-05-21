// Элемент одногруппника - Передерий В.А.
import React from 'react';
import prettyMs from 'pretty-ms';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      start: Date.now(),
    };
  }

    componentDidMount = () => {
      const { start } = this.state;
      setInterval(() => this.setState({
        time: Date.now() - start,
      }), 1000);
    }

    render() {
      const { time } = this.state;
      return (
        <div>
          <p>
            Элемент существует:
            {' '}
            {prettyMs(time)}
          </p>
        </div>
      );
    }
}

export default Timer;
