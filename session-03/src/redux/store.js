import { createStore, combineReducers  } from 'redux';
import reducer from './reducer-default';
import advRed from './reducer-advanced';

const combinedReducer = combineReducers({
    defaultReducer: reducer,
    advancedReducer: advRed
});

const store = createStore(combinedReducer);

export default store;