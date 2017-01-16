import * as TodoAPIUtil from '../util/todo_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

// sync actions
export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos: todos
});

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo: todo
});

export const removeTodo = todo => ({
  type: REMOVE_TODO,
  todo: todo
});

// async actions (thunk)
export const requestTodos = () => dispatch => (
  TodoAPIUtil.fetchTodos().then(todos => dispatch(receiveTodos(todos)))
);

export const createTodo = todo => dispatch => (
  TodoAPIUtil.createTodo(todo).then(
    todo => {
      dispatch(receiveTodo(todo));
      dispatch(clearErrors());
    },
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const destroyTodo = todo => dispatch => (
  TodoAPIUtil.destroyTodo(todo).then(() => dispatch(removeTodo(todo)))
);

export const updateTodo = todo => dispatch => (
  TodoAPIUtil.updateTodo(todo).then(
    todo => dispatch(receiveTodo(todo))
  )
);
