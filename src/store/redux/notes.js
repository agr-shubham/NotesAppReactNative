import {createSlice} from '@reduxjs/toolkit';

const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    notesList: [],
  },
  reducers: {
    newNote: (state, action) => {
      state.notesList.push({
        id: action.payload.id,
        title: '',
        content: '',
        updateTime: JSON.stringify(new Date()),
      });
    },
    removeNote: (state, action) => {
      var idx = state.notesList.findIndex(item => item.id == action.payload.id);
      state.notesList.splice(idx, 1);
    },
    updateNote: (state, action) => {
      var idx = state.notesList.findIndex(item => item.id == action.payload.id);
      if (idx !== -1) {
        state.notesList[idx].title = action.payload.title;
        state.notesList[idx].content = action.payload.content;
        state.notesList[idx].updateTime = JSON.stringify(new Date());
      }
    },
  },
});

export const newNote = notesSlice.actions.newNote;
export const removeNote = notesSlice.actions.removeNote;
export const updateNote = notesSlice.actions.updateNote;
export default notesSlice.reducer;
