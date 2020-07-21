import storeReducer from './storeReducer';
import itemReducer from './itemReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    store: storeReducer,
    item: itemReducer
  });
  
  export default rootReducer