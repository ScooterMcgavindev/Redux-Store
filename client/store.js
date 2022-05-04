import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';

/** adding composeWithDevTools to acceess the devtools easily */
const store = createStore(reducers, composeWithDevTools());

export default store;
