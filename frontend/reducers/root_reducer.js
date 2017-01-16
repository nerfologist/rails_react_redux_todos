import { combineReducers } from 'redux';
import todosReducer from './todos_reducer';
import stepsReducer from './steps_reducer';
import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  steps: stepsReducer,
  todos: todosReducer,
  errors: errorsReducer
});

export default rootReducer;
