import { combineReducers } from 'redux';

import marketsReducer from './marketsReducer';

/** Combine reducers, if there were more add inside the reducers function */
const reducers = combineReducers({
  markets: marketsReducer,
});

export default reducers;
