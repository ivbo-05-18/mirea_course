import React from 'react';
import Info from './Change';
import QuoteShow from './About';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      film: undefined,
      about: undefined,
    };
  }

getQuote = async (e) => {
  e.preventDefault();
  const i = Math.floor(Math.random(0) * Math.floor(20));
  const URL = await fetch('https://ghibliapi.herokuapp.com/films');
  const data = await URL.json();
  console.log(data);


  this.setState({

    film: data[i].title,
    about: data[i].description,
  });

  console.log(i);
}


render() {
  return (
    <div>
      <Info quoteMethod={this.getQuote} />
      <QuoteShow quote={this.state.film} quote2={this.state.about} />

    </div>

  );
}
}

export default App;
