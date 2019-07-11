import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import RootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [ReduxThunk];

const store = createStore(RootReducer, composeEnhancers(
  applyMiddleware(...middlewares)
));

export default store;
