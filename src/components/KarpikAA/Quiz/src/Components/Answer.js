import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../quiz_styles.module.css';

class Answer extends Component {
//  create state
  constructor(props) {
    super(props);
    const { anwer, rightAnaswer } = this.props;
    this.state = {
      Answers: anwer,
      Clickcheck: true,
      rightAnaswer,
    };
  }

  // Event on button
  onAnswer = () => {
    this.setState({
      Clickcheck: false,
    });
  };

  render() {
    const { Clickcheck, Answers, rightAnaswer } = this.state;
    return (
      <div>
        { Clickcheck ? Answers.map((ans) => (
          <button type="submit" className={styles.button} onClick={this.onAnswer}>
            {' '}
            {ans}
          </button>
        )) : (
          <button type="submit" className={styles.button}>
            {' '}
            {rightAnaswer}
          </button>
        ) }

      </div>
    );
  }
}

export default Answer;

Answer.propTypes = {
  anwer: PropTypes.string.isRequired,
  rightAnaswer: PropTypes.string.isRequired,
};
