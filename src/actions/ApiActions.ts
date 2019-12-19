import { Dispatch } from 'redux';
import { FETCH_DATA } from './types';

export const fetchData = () => (dispatch: Dispatch) => {
  // API call goes here
  dispatch({
    type: FETCH_DATA,
    payload: [], /* fetched data goes here */
  });
};
