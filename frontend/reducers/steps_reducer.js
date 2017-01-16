import deepFreeze from 'deep-freeze';
import merge from 'lodash/merge';

import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from '../actions/step_actions';

const _initialState = {
  1: {
    id: 1,
    title: 'Buy soap',
    todo_id: 1,
    done: true
  },
  2: {
    id: 2,
    title: 'Buy brush',
    todo_id: 1,
    done: false
  },
  3: {
    id: 3,
    title: 'Buy doggy shampoo',
    todo_id: 2,
    done: false
  }
};

const stepsReducer = (state = _initialState, action) => {
  deepFreeze(state);
  let nextState = merge({}, state);

  switch(action.type) {
    case RECEIVE_STEPS:
      nextState = {};
      action.steps.forEach(step => nextState[step.id] = step);
      return nextState;
    case RECEIVE_STEP:
      nextState[action.step.id] = action.step;
      return nextState;
    case REMOVE_STEP:
      delete nextState[action.step.id];
      return nextState;
    default:
      return nextState;
  }
};

export default stepsReducer;
