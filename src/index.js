import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import todoReducer from './reducers/todoReducer'

import App from './App';

const enhancer = compose(
	applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f()
)

const store = createStore(todoReducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
		<App/>
  </Provider>,
  document.getElementById('root'));
