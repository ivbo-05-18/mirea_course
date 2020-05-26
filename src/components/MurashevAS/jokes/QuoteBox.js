/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Quotes from './Quotes';
import Buttons from './Buttons';

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setup: '',
      punchline: '',
      newJoke: false,
    };
  }

    componentDidMount = () => {
      this.getNewJoke();
    }

    getNewJoke = () => {
      fetch('https://official-joke-api.appspot.com/jokes/programming/random')
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            setup: data[0].setup,
            punchline: data[0].punchline,
            newJoke: true,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }

    getPunchline = () => {
      this.setState({
        newJoke: false,
      });
    }

    render() {
      return (
        <div className="quote-box" id="quote-box" style={{ width: '100%' }}>

          <Quotes
            setup={this.state.setup}
            punchline={this.state.punchline}
            newJoke={this.state.newJoke}
          />

          <Buttons
            getNewJoke={this.getNewJoke}
            getPunchline={this.getPunchline}
            newJoke={this.state.newJoke}
          />
        </div>
      );
    }
}

export default QuoteBox;
