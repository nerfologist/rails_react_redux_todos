import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../reducers/root_reducer';
import thunkMiddleware from '../middleware/thunk_middleware';

const configureStore = (preloadedState = {}) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware));

  store.subscribe(() => {
    localStorage.setItem('state', JSON.stringify(store.getState()));
  });

  return store;
};

export default configureStore;
