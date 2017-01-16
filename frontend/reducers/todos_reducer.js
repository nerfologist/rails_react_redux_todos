import deepFreeze from 'deep-freeze';
import merge from 'lodash/merge';

import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO } from '../actions/todo_actions';

const _initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  }
};

const todosReducer = (state = _initialState, action) => {
  deepFreeze(state);
  let nextState = merge({}, state);

  switch(action.type) {
    case RECEIVE_TODOS:
      nextState = {};
      action.todos.forEach(todo => nextState[todo.id] = todo);
      return nextState;
    case RECEIVE_TODO: {
      nextState[action.todo.id] = action.todo;
      return nextState;
    }
    case REMOVE_TODO: {
      delete nextState[action.todo.id];
      return nextState;
    }
    default: return nextState;
  }
};

export default todosReducer;
