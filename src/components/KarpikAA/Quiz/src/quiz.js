import React, {Fragment} from 'react';
import Header from './Components/Header';
import Quiz from './Components/Quiz';

function QuizApp() {
  return (

    <Fragment>

      {/* header Components */}
      <Header />

      {/* Quiz Components */}
      <Quiz />

    </Fragment>

  );
}

export default QuizApp;
