import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToggleElem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
      buttonLabel: 'Показать',
    };
  }

  toggleHandler = () => {
    const state = { ...this.state };
    state.buttonLabel = state.isShown ? 'Показать' : 'Скрыть';
    state.isShown = !state.isShown;
    this.setState(state);
    return '';
  }

  hasComponentName = () => {
    const { componentName } = this.props;
    if (componentName) { return ` ${componentName}`; }
    return '';
  }

  renderButton = () => {
    const { buttonLabel } = this.state;
    return (
      <button type="button" onClick={this.toggleHandler}>
        {' '}
        {buttonLabel}
        {' '}
        {this.hasComponentName()}
      </button>
    );
  }

  renderChildren = () => {
    const { isShown } = this.state;
    const { children } = this.props;
    if (isShown) { return children; }
    return '';
  }

  render() {
    return (
      <div style={{ marginBottom: '50px' }}>
        {this.renderButton()}
        <main>
          {this.renderChildren()}
        </main>
      </div>
    );
  }
}

ToggleElem.propTypes = {
  componentName: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default ToggleElem;
