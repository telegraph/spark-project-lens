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
  tasks: object;
}
