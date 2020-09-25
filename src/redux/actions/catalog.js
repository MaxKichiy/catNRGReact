import axios from 'axios';

import * as actionTypes from '../actionTypes';

const setData = (data) => ({
  type: actionTypes.FETCHING_CATALOG,
  payload: data,
});

export const fetchingData = () => (dispatch) => {
  axios
    .get('https://dummy-hooks.firebaseio.com/catalog.json')
    .then(({ data }) => dispatch(setData(data)))
    .catch((err) => alert('idiot chto ti delaesh'));
};
