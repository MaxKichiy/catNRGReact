import * as actionTypes from '../actionTypes';

const initialState = {
  catalog: [],
};

const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_CATALOG:
      return {
        ...state,
        catalog: action.payload,
      };

    default:
      return state;
  }
};

export default catalogReducer;
