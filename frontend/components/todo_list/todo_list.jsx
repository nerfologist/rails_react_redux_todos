import React, { Component, PropTypes } from 'react';

import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends Component {
  componentDidMount() {
    this.props.requestTodos();
  }

  render() {
    const { todos, createTodo, updateTodo, errors } = this.props;

    return (
      <div>
        <ul>
          { todos.map(todo => <TodoListItem todo={todo}
                                            updateTodo={updateTodo}
                                            key={todo.id} />) }
        </ul>
        <TodoForm createTodo={createTodo}
                  errors={errors} />
      </div>
    );
  }
}

TodoList.propTypes = {
  createTodo: PropTypes.func.isRequired,
  destroyTodo: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  requestTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
  updateTodo: PropTypes.func.isRequired
};

export default TodoList;
