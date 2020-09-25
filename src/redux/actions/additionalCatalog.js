import axios from 'axios';

import * as actionTypes from '../actionTypes';

const setAdditionalItems = (data) => ({
  type: actionTypes.FETCHING_ADD_CATALOG,
  payload: data,
});

export const fetchingAdditionalItems = () => (dispatch) => {
  axios
    .get('https://dummy-hooks.firebaseio.com/additionalCatalog.json')
    .then(({ data }) => dispatch(setAdditionalItems(data)))
    .catch((err) => alert('Some erros'));
};
