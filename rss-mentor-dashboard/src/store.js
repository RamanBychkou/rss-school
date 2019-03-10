import { createStore } from 'redux';
import commonReducer from './reducers/index';
import { initialState, rootReducer } from './reducers/root-reducer';

const store = createStore(rootReducer, initialState);

export default store;
