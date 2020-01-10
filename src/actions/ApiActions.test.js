import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './ApiActions.ts';
import * as types from './types.ts';
import { dummyFetch } from '../testData/dummyData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  it('should create an action to fetch the data', () => {
    const expectedAction = {
      type: types.FETCH_DATA,
      payload: dummyFetch,
    };

    const store = mockStore([]);

    return store.dispatch(actions.fetchData()).then(() => {
      expect(store.getActions()).toEqual([expectedAction]);
    });
  });
});
