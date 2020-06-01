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
      const { setup } = this.state;
      const { punchline } = this.state;
      const { newJoke } = this.state;
      return (
        <div className="quote-box" id="quote-box" style={{ width: '100%' }}>

          <Quotes
            setup={setup}
            punchline={punchline}
            newJoke={newJoke}
          />

          <Buttons
            getNewJoke={this.getNewJoke}
            getPunchline={this.getPunchline}
            newJoke={this.state}
          />
        </div>
      );
    }
}

export default QuoteBox;
