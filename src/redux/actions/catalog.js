import axios from 'axios';

import * as actionTypes from '../actionTypes';

const setData = (data) => ({
  type: actionTypes.FETCHING_DATA,
  payload: data,
});

export const fetchingData = () => (dispatch) => {
  axios
    .get('http://localhost:3001/data')
    .then(({ data }) => dispatch(setData(data)));
};
