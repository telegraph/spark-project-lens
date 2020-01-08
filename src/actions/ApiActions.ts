import { Dispatch } from 'redux';
import { FETCH_DATA } from './types';
import * as API from '../adapters/API'

export const fetchData = () => (dispatch: Dispatch) => {
  // API call goes here
  const data = API.allCardData()

  dispatch({
    type: FETCH_DATA,
    payload: data, /* fetched data goes here */
  });
};
