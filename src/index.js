import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/App';
import Category from './components/Category';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(logger),
);

render((
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/category" component={Category} />
      </Switch>
    </Router>
  </Provider>
), document.getElementById('root'));
