// Action types
import { DateTime } from 'luxon';

export const FETCH_DATA = 'FETCH_DATA';

// Action interfaces
export interface FetchDataAction {
  type: typeof FETCH_DATA;
  payload: Task[];
}

export interface Task {
  clientName: string;
  projectname: string;
  campaignID: string;
  currentTask: string;
  dueDate: DateTime;
  projectStatus: string;
  assignedDev: Developer;
  assignedMembers: [Developer];
  testLink: string;
  headshots: [string];
}

export type ReducerActionTypes = FetchDataAction;

// State interfaces
export interface ReducerState {
  tasks: Task[];
}

export interface Developer {
  ID: string;
  avatarDownloadURL: string;
  name: string;
  objCode: string;
}
