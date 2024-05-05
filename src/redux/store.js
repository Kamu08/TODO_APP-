

import { createStore } from 'redux';
import todoReducer from './reducer';
import { loadState, saveState } from './localStorage'; // Import functions for loading and saving state from/to local storage

// Load initial state from local storage
const initialState = loadState();

// Create the Redux store with your reducer and initial state
const store = createStore(todoReducer, initialState);

// Subscribe to store changes and save state to local storage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
