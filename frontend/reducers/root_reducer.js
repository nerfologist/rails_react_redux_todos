import { combineReducers } from 'redux';
import todosReducer from './todos_reducer';
import stepsReducer from './steps_reducer';

const rootReducer = combineReducers({
  steps: stepsReducer,
  todos: todosReducer
});

export default rootReducer;
