import * as actionTypes from '../actionTypes';
import axios from 'axios';

export const sendOrder = (values, func) => (dispatch) => {
  axios.post('http://localhost:3001/orders', values).then((response) =>
    func({
      values: '',
    })
  );
};
