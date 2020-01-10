import reducer from './reducer.ts';
import * as types from '../actions/types.ts';
import { dummyFetch } from '../testData/dummyData';

const mockFetch = jest.fn((fetch) => fetch);

describe('reducer', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([
    ]);
  });

  it('should handle FETCH_DATA', () => {
    expect(reducer([], {
      type: types.FETCH_DATA,
      payload: mockFetch(dummyFetch),
    }));
    expect(mockFetch.mock.calls.length).toBe(1);
  });
});

// TODO: FINISH THIS
