import React from 'react';
import PropTypes from 'prop-types';
import ToDoList from './KlevleevVRToDoList';
import ToDoForm from './KlevleevVRToDoForm';

const MAIN_STYLE = {
  width: '600px',
  margin: '0 auto',
};

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.state = { todoItems: props.initItems };
  }

  addItem(todoItem) {
    const { todoItems } = this.state;
    todoItems.unshift({
      index: todoItems.length + 1,
      value: todoItem.newItemValue,
      done: false,
    });
    this.setState({ todoItems });
  }

  removeItem(itemIndex) {
    const { todoItems } = this.state;
    todoItems.splice(itemIndex, 1);
    this.setState({ todoItems });
  }

  markTodoDone(itemIndex) {
    const { todoItems } = this.state;
    const todo = todoItems[itemIndex];
    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;

    if (todo.done) {
      todoItems.push(todo);
    } else {
      todoItems.unshift(todo);
    }

    this.setState({ todoItems });
  }

  render() {
    const { todoItems } = this.state;
    return (
      <div id="main" style={MAIN_STYLE}>
        <h1>To-Do list</h1>

        <ToDoList
          items={todoItems}
          removeItem={this.removeItem}
          markTodoDone={this.markTodoDone}
        />

        <ToDoForm addItem={this.addItem} />
      </div>
    );
  }
}

TodoApp.propTypes = {
  initItems: PropTypes.instanceOf(Array),
};

TodoApp.defaultProps = {
  initItems: [],
};

export default TodoApp;
