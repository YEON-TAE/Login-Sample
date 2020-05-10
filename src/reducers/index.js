import { combineReducers } from 'redux';
import { registration } from './register.reducers';

const rootReducer = combineReducers({
  registration,
});

export default rootReducer;
