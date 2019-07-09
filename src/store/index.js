import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import RootReducer from './reducers';

const middlewares = [ReduxThunk];

const store = createStore(RootReducer, applyMiddleware(...middlewares));

export default store;
