import { connect } from 'react-redux';

import { allTodos } from '../../reducers/selectors';
import { createTodo, destroyTodo, requestTodos, updateTodo } from '../../actions/todo_actions';
import TodoList from './todo_list';

const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  createTodo: todo => dispatch(createTodo(todo)),
  destroyTodo: todo => dispatch(destroyTodo(todo)),
  requestTodos: () => dispatch(requestTodos()),
  updateTodo: todo => dispatch(updateTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
