import React from 'react';
import Select from 'react-select';
import hello from './Hello';
import Flag from './Flag';

export default class Greetings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGreets: {
        label: 'Russia', value: 'Privet', alphacode: 'RU', curpopulation: '140702000',
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const listItem = hello.map((Greet) => ({
      value: Greet.sayHello,
      label: Greet.countryName,
      alphacode: Greet.countryCode,
      curpopulation: Greet.population,
    }));
    this.setState({
      hello2: listItem,
    });
  }

  handleChange(Greet) {
    this.setState({ currentGreets: Greet });
  }

  render() {
    const { hello2, currentGreets } = this.state;

    const textStyle = {
      color: 'White',
      margin: '15px 10px',
    };
    const SELECTOR = {
      color: 'Black',
      width: 700,
      display: 'inline-block',
    };

    return (
      <div>
        <h2>
          Select country
        </h2>
        <div style={SELECTOR}>
          <Select
            options={hello2}
            value={currentGreets}
            onChange={this.handleChange}
          />
        </div>

        <h3 style={textStyle}>
          In this country, greetings look like this:
          {` ${currentGreets.value}`}
        </h3>
        <h3 style={textStyle}>
          Country flag
          <p>
            {currentGreets && <Flag Greet={currentGreets} />}
          </p>
        </h3>
        <h3 style={textStyle}>
          Country population:
          {` ${currentGreets.curpopulation}`}
        </h3>
      </div>
    );
  }
}
