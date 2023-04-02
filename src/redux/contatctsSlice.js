import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from './operation';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};
export const contactsSlise = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContacts.pending]: handlePending,
    [addContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items.push(payload);
    },
    [addContacts.rejected]: handleRejected,
    [deleteContacts.pending]: handlePending,
    [deleteContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.filter(contact => contact.id !== payload);
      state.items.splice(index, 1);
    },
    [deleteContacts.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlise.reducer;
