import { connect } from 'react-redux';

import { allTodos } from '../../reducers/selectors';
import { createTodo, removeTodo, requestTodos } from '../../actions/todo_actions';
import TodoList from './todo_list';

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  createTodo: todo => dispatch(createTodo(todo)),
  removeTodo: todo => dispatch(removeTodo(todo)),
  requestTodos: () => dispatch(requestTodos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
