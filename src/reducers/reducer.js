

import { FETCH_DATA } from '../actions/types';
const defaultState = [];

export const reducer = (state = defaultState, action) => {
  switch(action.type) {

    case FETCH_DATA:
      return state = action.payload
    // More actions go here
    default: 
    return state
  }
}