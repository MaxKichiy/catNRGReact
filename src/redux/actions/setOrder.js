import * as actionTypes from '../actionTypes';
import axios from 'axios';

export const sendOrder = (values, func) => (dispatch) => {
  axios
    .post('https://dummy-hooks.firebaseio.com/orders.json', values)
    .then((response) =>
      func({
        values: '',
      })
    );
};
