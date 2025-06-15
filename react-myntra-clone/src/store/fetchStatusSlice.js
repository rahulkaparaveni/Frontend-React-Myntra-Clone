import { createSlice } from '@reduxjs/toolkit';

const fetchSlice = createSlice({
  name: 'fetchStatus',
  initialState: {
    fetching: false, // true - fetching, false - not fetching | useful for loading spinner
    fetchDone: false, // true - DONE, false - PENDING | useful for items fetching
  },
  reducers: {
    markFetchingStarted: (state) => {
      state.fetching = true;
    },
    markFetchingFinished: (state) => {
      state.fetching = false;
    },
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
  },
});

export default fetchSlice;
export const fetchActions = fetchSlice.actions;
