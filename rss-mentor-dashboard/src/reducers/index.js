import { combineReducers } from 'redux';
import { rootReducer } from './root-reducer';

const commonReducers = combineReducers({
  rootReducer,
});

export default commonReducers;
