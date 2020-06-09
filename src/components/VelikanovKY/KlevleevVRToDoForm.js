/* eslint-disable react/no-string-refs */
import React from 'react';
import PropTypes from 'prop-types';

const TEXTINPUT_STYLE = {
  fontSize: '24px',
  padding: '5px 15px',
  borderRadius: '7px',
};

const BUTTON_STYLE = {
  fontSize: '24px',
  borderRadius: '7px',
  padding: '5px 15px',
};

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.refs.itemName.focus();
  }

  onSubmit(event) {
    const { addItem } = this.props;

    event.preventDefault();
    const newItemValue = this.refs.itemName.value;

    if (newItemValue) {
      addItem({ newItemValue });
      this.refs.form.reset();
    }
  }

  render() {
    return (
      <form ref="form" onSubmit={this.onSubmit} className="form-inline">
        <input
          type="text"
          ref="itemName"
          className="form-control"
          placeholder="Новая задача..."
          style={TEXTINPUT_STYLE}
        />
        <button type="submit" className="btn btn-default" style={BUTTON_STYLE}>
          Add
        </button>
      </form>
    );
  }
}

TodoForm.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default TodoForm;
