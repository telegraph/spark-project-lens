
import {
  FETCH_DATA,
  ReducerActionTypes,
  ReducerState,
} from '../actions/types';

const defaultState = {};

const reducer = (state: ReducerState = defaultState, action: ReducerActionTypes) => {
  switch (action.type) {
    case FETCH_DATA:
      return state = action.payload
    // More actions go here
    default:
      return state
  }
};

export default reducer;
