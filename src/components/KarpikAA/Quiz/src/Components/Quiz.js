import React, { Component } from 'react';
import quizdata from './data';
import Answer from './Answer';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataQuestion: [],
    };
  }

  componentDidMount() {
    this.setStatefunstion();
  }

  setStatefunstion = () => {
    //  use reactjs setState
    this.setState({
      dataQuestion: quizdata,
    });
  }

  render() {
    return (
      <>
        {
          this.state.dataQuestion.map((data) => {
            console.log(data);
            return (
              <div key={data.id} className="mainDiv">
                <h2>
                  {data.quiz}
                </h2>
                <Answer key={data.id} rightAnaswer={data.rightAnaswer} anwer={data.FindAnswer} />
              </div>
            );
          })
        }
      </>
    );
  }
}

export default Quiz;
