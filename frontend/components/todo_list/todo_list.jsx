import React, { Component, PropTypes } from 'react';

import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends Component {
  componentDidMount() {
    this.props.requestTodos();
  }

  render() {
    const { todos, receiveTodo, removeTodo } = this.props;

    return (
      <div>
        <ul>
          { todos.map(todo => <TodoListItem todo={todo}
                                            key={todo.id}
                                            receiveTodo={receiveTodo}
                                            removeTodo={removeTodo} />) }
        </ul>
        <TodoForm receiveTodo={receiveTodo} />
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  receiveTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  requestTodos: PropTypes.func.isRequired
};

export default TodoList;
