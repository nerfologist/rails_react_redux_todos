import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

// TODO: for testing purposes only
import { requestTodos } from './actions/todo_actions';
window.requestTodos = requestTodos;

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.getItem('state') ?
    JSON.parse(localStorage.getItem('state')) : {};
  const store = configureStore(preloadedState);
  // TODO: for testing purposes only
  window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
