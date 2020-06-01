import React, { Component } from 'react';

class Answer extends Component {
  //  create state
  constructor(props) {
    super(props);
    this.state = {
      Answers: this.anwer,
      Clickcheck: true,
      rightAnaswer: this.rightAnaswer,
    };
  }

  // Event on button
  onAnswer = () => {
    this.setState({
      Clickcheck: false,
    });
  };

  render() {
    return (
      <>
        { this.state.Clickcheck ? this.state.Answers.map((ans) => (
          <button type="submit" className="button" onClick={this.onAnswer}>
            {ans}
          </button>
        )) : (
          <button type="submit" className="button">
            {this.state.rightAnaswer}
          </button>
        )}
      </>
    );
  }
}

export default Answer;
