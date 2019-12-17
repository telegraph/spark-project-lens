import FETCH_DATA from './types';

const fetchData = () => (dispatch) => {
  // API call goes here
  dispatch({
    type: FETCH_DATA,
    payload: [], /* fetched data goes here */
  });
};

export default fetchData;
