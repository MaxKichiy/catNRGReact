import { combineReducers } from 'redux';
import catalogReducer from './catalogReducer';

const rootReducer = combineReducers({
  catalog: catalogReducer,
});

export default rootReducer;
