import React, { Component } from 'react';
import quizdata from './data';
import Answer from './Answer';
import styles from '../quiz_styles.module.css';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataQuestion: quizdata,
    };
  }

  render() {
    const { dataQuestion } = this.state;
    return (
      <div>
        {
          dataQuestion.map((data) => (
            <div key={data.id} className={styles.mainDiv}>
              <h2>
                {' '}
                { data.quiz}
              </h2>
              <Answer key={data.id} rightAnaswer={data.rightAnaswer} anwer={data.FindAnswer} />
            </div>
          ))
         }

      </div>
    );
  }
}

export default Quiz;
