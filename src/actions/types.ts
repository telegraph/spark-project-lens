// Action types
export const FETCH_DATA = 'FETCH_DATA';

// Action interfaces
export interface FetchDataAction {
  type: typeof FETCH_DATA;
  payload: object;
}

export type ReducerActionTypes = FetchDataAction;

// State interfaces
export interface ReducerState {
  // TODO: fill state type out once we know what we are going to hold in here
}
