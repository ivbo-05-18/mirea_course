// JavaScript Document
import React from 'react';

class Info extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.quoteMethod}>

        <button type="submit"> refresh </button>
      </form>
    );
  }
}


export default Info;
