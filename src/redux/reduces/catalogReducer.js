import * as actionTypes from '../actionTypes';

const initialState = {
  catalog: [],
};

const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_DATA:
      return {
        ...state,
        catalog: action.payload,
      };

    default:
      return state;
  }
};

export default catalogReducer;
