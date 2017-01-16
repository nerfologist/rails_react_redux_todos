import React, { Component, PropTypes } from 'react';

import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends Component {
  componentDidMount() {
    this.props.requestTodos();
  }

  render() {
    const { todos, createTodo, removeTodo } = this.props;

    return (
      <div>
        <ul>
          { todos.map(todo => <TodoListItem todo={todo}
                                            key={todo.id}
                                            createTodo={createTodo}
                                            removeTodo={removeTodo} />) }
        </ul>
        <TodoForm createTodo={createTodo} />
      </div>
    );
  }
}

TodoList.propTypes = {
  createTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  requestTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired
};

export default TodoList;
