import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './ApiActions.ts';
import * as types from './types.ts';
import { dummyFetch } from '../testData/dummyData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockFetch = jest.fn((fetch) => fetch);

describe('actions', () => {
  it('should create an action to fetch the data', () => {
    const expectedAction = {
      type: types.FETCH_DATA,
      payload: mockFetch(dummyFetch),
    };

    const store = mockStore([]);

    return store.dispatch(actions.fetchData()).then(() => {
      expect(store.getActions()).toEqual([expectedAction]);
      expect(mockFetch.mock.calls.length).toBe(1);
    });
  });
});
