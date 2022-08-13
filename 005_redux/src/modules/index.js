import { combineReducers } from 'redux';
import { counterReducer } from './counterModule';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
