import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/index'

const initialState = {};
let middleware = [thunk];

/* eslint-disable no-underscore-dangle */
const store = createStore(
    rootReducer,
    initialState,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware)
);
/* eslint-enable */

export default store;