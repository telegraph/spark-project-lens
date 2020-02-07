import {
  FETCH_DATA,
  ReducerActionTypes,
  ReducerState,
} from '../actions/types';

const defaultState: ReducerState = {
  tasks: []
};

const reducer = (state: ReducerState = defaultState, action: ReducerActionTypes): ReducerState => {
  switch (action.type) {
    case FETCH_DATA:
      return {...state, tasks: action.payload};
    // More actions go here
    default:
      return state;
  }
};

export default reducer;
