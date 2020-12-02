import { createAction, createReducer } from '@reduxjs/toolkit';

// Action creators
export const bugAdded = createAction('bugAdded');
export const bugRemoved = createAction('bugRemoved');

// Reducer
let lastId = 0;

export default createReducer([], {
  bugAdded: (state, action) => {
    state.push({
      id: ++lastId,
      description: action.payload.description
    });
  },
  bugRemoved: (state, action) => {
    return state.filter(obj => obj.id !== action.payload.id);
  }
});
