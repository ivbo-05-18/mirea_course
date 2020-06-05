import React, { Component, Fragment } from "react";
import styles from '../quiz_styles.module.css';

class Answer extends Component {
 
//  create state
  state = {
    Answers: this.props.anwer,
    Clickcheck:true,
    rightAnaswer: this.props.rightAnaswer
  };

  // Event on button
  onAnswer = () => {
   
    this.setState({ 
      Clickcheck:false
    });
  
  };
  
  render() {
    return (
      <Fragment>
        { this.state.Clickcheck ? this.state.Answers.map(ans => {
          return <button className={styles.button} onClick={this.onAnswer}> {ans}</button>;
        }) : <button className={styles.button}> {this.state.rightAnaswer}</button>  } 

      </Fragment>
    );
  }
}

export default Answer;
