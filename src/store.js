import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import reducer from './reducer';

export default function configureStore(initialState = {}, history) {

  const middleware = [
    thunk,
    routerMiddleware(history),
    createLogger()
  ];

  const store = createStore(
    reducer,
    initialState,
    compose(applyMiddleware(...middleware))
  );

  return store;
}
