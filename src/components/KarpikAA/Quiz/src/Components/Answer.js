import React, { Component, Fragment } from "react";

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
          return <button class="button" onClick={this.onAnswer}> {ans}</button>;
        }) : <button class="button"> {this.state.rightAnaswer}</button>  } 

      </Fragment>
    );
  }
}

export default Answer;
