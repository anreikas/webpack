import { combineReducers } from 'redux';
import { appReducer } from './AppReducer';

const rootReducer = combineReducers({
  appReducer,
});

export default rootReducer;
