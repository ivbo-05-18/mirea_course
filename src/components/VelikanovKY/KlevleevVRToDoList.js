import React from 'react';
import PropTypes from 'prop-types';
import ToDoListItem from './KlevleevlVRToDoListItem';

const UL_STYLE = {
  listStyle: 'none',
  padding: '0px',
};

// eslint-disable-next-line react/prefer-stateless-function
class TodoList extends React.Component {
  render() {
    const { items, removeItem, markTodoDone } = this.props;
    const itemsArray = items.map((item, index) => (
      <ToDoListItem
        key={item.index}
        item={item}
        index={index}
        removeItem={removeItem}
        markTodoDone={markTodoDone}
      />
    ));
    return (
      <ul className="list-group" style={UL_STYLE}>
        {' '}
        {itemsArray}
        {' '}
      </ul>
    );
  }
}

TodoList.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
  removeItem: PropTypes.func.isRequired,
  markTodoDone: PropTypes.func.isRequired,
};


export default TodoList;
