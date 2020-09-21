import * as actionTypes from '../actionTypes';

const initialState = {
  addCatalog: [],
};

const addCatalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_ADD_CATALOG:
      return {
        ...state,
        addCatalog: action.payload,
      };

    default:
      return state;
  }
};

export default addCatalogReducer;
