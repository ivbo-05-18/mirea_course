/* eslint-disable react/static-property-placement */
/* eslint-disable react/require-default-props */
/* eslint-disable react/destructuring-assignment */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './SearchInput.module.css';

export default class SearchInput extends PureComponent {
  static propTypes = {
    textChange: PropTypes.func,
  };

  handleChange = (event) => {
    this.props.textChange(event);
  };

  render() {
    return (
      <div className={styles.component_search_input}>
        <div>
          <input onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}
