
import React, { Fragment } from "react";
//import ReactDOM from "react-dom";

import "./styles.css";
import Header from "./Components/Header";
import Quiz from "./Components/Quiz";

class App extends React.Component {
  render () {
  return (

    <Fragment>

      {/* header Components */}
        <Header />

      {/* Quiz Components */}
        <Quiz />
      
    </Fragment> 

  )
  }
}

export default App;
//const rootElement = document.getElementById("root");
// reader method for react 
//ReactDOM.render(<App />, rootElement);
