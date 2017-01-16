import React from 'react';

import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = ({ todos, receiveTodo, removeTodo }) => (
  <div>
    <ul>
      { todos.map(todo => 
        <TodoListItem todo={todo}
                      key={todo.id}
                      receiveTodo={receiveTodo}
                      removeTodo={removeTodo} />) }
    </ul>
    <TodoForm receiveTodo={receiveTodo} />
  </div>
);

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired,
  receiveTodo: React.PropTypes.func.isRequired,
  removeTodo: React.PropTypes.func.isRequired
};

export default TodoList;
