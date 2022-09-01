import {configureStore} from '@reduxjs/toolkit';
import notes from './notes';
import notesReducer from './notes';

export const store = configureStore({
  reducer: {
    notesList: notesReducer,
  },
});
