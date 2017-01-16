import deepFreeze from 'deep-freeze';
import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions';

const _initialState = {};

const errorsReducer = (state = _initialState, action) => {
  deepFreeze(state);

  switch(action.type) {
    case CLEAR_ERRORS:
      return {};
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default errorsReducer;
