/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { keyword: '' };
  }

  onInputChangeHandler = (event) => {
    console.log(`event : ${event}`);
    console.log(`event.target.value : ${event.target.value}`);
    const { onKeywordChanged } = this.props;

    this.setState({ keyword: event.target.value });
    onKeywordChanged(event.target.value);
  }

  render() {
    const fontStyle = {
      fontFamily: 'Mansalva',
    };

    return (
      <nav className="navbar navbar-expand
                    navbar-light bg-light
                    mb-3 p-3"
      >
        <h2 className="mb-0">
          <span className="bg-warning text-white p-2 mr-2">猫</span>
          <span
            className="d-none d-md-inline"
            style={fontStyle}
          >
            JapanNekoTube
          </span>
        </h2>
        <form className="form-group my-2 my-lg-0 ml-sm-2 ">
          <input
            onChange={this.onInputChangeHandler}
            value={this.state.keyword}
            className="form-control form-control-lg mr-sm-2"
            type="text"
            placeholder="検索..."
            aria-label="検索..."
          />
        </form>
      </nav>
    );
  }
}

Header.propTypes = {
  onKeywordChanged: PropTypes.func.isRequired,
};

export default Header;
