import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router'
import routes from './routes.jsx';
import configureStore from './store/configureStore';
import initialState from './store/initialState';
import './styles/styles.css';

const store = configureStore(initialState);

render(
  <Provider store={store}>
    <Router history={browserHistory}>{routes}</Router>
  </Provider>
 , document.getElementById('root'));
