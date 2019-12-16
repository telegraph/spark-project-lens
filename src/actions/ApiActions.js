import { FETCH_DATA } from './types';

export const fetchData = () => (dispatch) => {
  //API call goes here
  dispatch({
    type: FETCH_DATA,
    payload: [] /* fetched data goes here */
  });
}