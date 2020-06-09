import React from 'react';
import PropTypes from 'prop-types';

const ICON = {
  margin: '6px 10px 6px 0',
  cursor: 'pointer',
};

const DONE = {
  color: 'rgb(255, 77, 77)',
  textDecoration: 'line-through',
};
const UNDONE = {
  color: 'rgb(69, 142, 255)',
};

const LI_STYLE = {
  backgroundColor: '#F5F5F5',
  marginBottom: '10px',
  borderRadius: '5px',
  padding: '5px 30px',
};

const BUTTON_SYLE = {
  margin: '15px',
  textAlign: 'right',
  float: 'right',
  fontSize: '20px',
};

const TASK_STYLE = {
  display: 'flex',
  alignItems: 'center',
};

const TASK_TEXT_STYLE = {
  margin: '5px',
};

const ELEMENT_STYLE = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
  }

  onClickClose() {
    const { index, removeItem } = this.props;
    removeItem(parseInt(index, 10));
  }

  onClickDone() {
    const { index, markTodoDone } = this.props;
    markTodoDone(parseInt(index, 10));
  }

  render() {
    const { item } = this.props;
    const todoClass = item.done ? 'done' : 'undone';
    const TODO_STYLE = item.done ? DONE : UNDONE;

    return (
      <li className="list-group-item " style={LI_STYLE}>
        <div className={todoClass} style={ELEMENT_STYLE}>
          <div style={TODO_STYLE}>
            <div style={TASK_STYLE}>
              <span
                className="icon"
                style={ICON}
                aria-hidden="true"
                onClick={this.onClickDone}
              >
                ✓
              </span>

              <p style={TASK_TEXT_STYLE}>
                {item.value}
              </p>
            </div>

          </div>

          <button type="button" className="close" onClick={this.onClickClose} style={BUTTON_SYLE}>
            &times;
          </button>
        </div>
      </li>
    );
  }
}

TodoListItem.propTypes = {
  item: PropTypes.instanceOf(Array).isRequired,
  index: PropTypes.number.isRequired,
  removeItem: PropTypes.func.isRequired,
  markTodoDone: PropTypes.func.isRequired,
};

export default TodoListItem;
