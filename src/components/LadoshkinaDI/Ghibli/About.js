import React from 'react';

const STYLE = {
  margin: '10px',
  padding: '5px 25px',
  width: 700,
  color: '#000',

};
class QuoteShow extends React.Component {
  render() {
    return (

      <div style={STYLE}>
        <h3>
          {' '}
          {this.props.quote }
          {' '}
        </h3>
        <p>
          {' '}
          {this.props.quote2 }
          {' '}
        </p>
      </div>

    );
  }
}


export default QuoteShow;
