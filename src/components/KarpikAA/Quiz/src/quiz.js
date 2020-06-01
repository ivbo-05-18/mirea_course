import React, {Fragment} from 'react';
import './quiz_styles.css';
import Header from './Components/Header';
import Quiz from './Components/Quiz';

function App() {
  return (

    <Fragment>

      {/* header Components */}
      <Header />

      {/* Quiz Components */}
      <Quiz />

    </Fragment>

  );
}

export default App;
