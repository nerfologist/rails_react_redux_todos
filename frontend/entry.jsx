import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

// TODO: for testing purposes only
import { fetchTodos } from './util/todo_api_util';
window.fetchTodos = fetchTodos;

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.getItem('state') ?
    JSON.parse(localStorage.getItem('state')) : {};
  const store = configureStore(preloadedState);

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
