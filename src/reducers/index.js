import { combineReducers } from 'redux';
import MakeUpReducer from './reducer-makeup.js';

const rootReducer = combineReducers({
  makeUp: MakeUpReducer,
});

export default rootReducer;
