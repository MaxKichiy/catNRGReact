import { combineReducers } from 'redux';
import addCatalogReducer from './addCatalogReducer';
import catalogReducer from './catalogReducer';

const rootReducer = combineReducers({
  catalog: catalogReducer,
  addCatalog: addCatalogReducer,
});

export default rootReducer;
