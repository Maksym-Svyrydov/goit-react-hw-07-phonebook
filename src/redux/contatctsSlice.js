import { createSlice } from '@reduxjs/toolkit';
// import { isAnyOf } from '@reduxjs/toolkit';
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

  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContacts.pending, handlePending)
      .addCase(addContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(payload);
      })
      .addCase(addContacts.rejected, handleRejected)
      .addCase(deleteContacts.pending, handlePending)
      .addCase(deleteContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.filter(contact => contact.id !== payload);
        state.items.splice(index, 1);
      })
      .addCase(deleteContacts.rejected, handleRejected),

  //  ninjas style:)
  //     .addCase(fetchContacts.fulfilled, (state, { payload }) => {
  //       state.items = payload;
  //     })

  //     .addCase(addContacts.fulfilled, (state, { payload }) => {
  //       state.items.push(payload);
  //     })
  //     .addCase(deleteContacts.fulfilled, (state, { payload }) => {
  //       const index = state.items.filter(contact => contact.id !== payload);
  //       state.items.splice(index, 1);
  //     })
  //     .addMatcher(
  //       isAnyOf(
  //         fetchContacts.pending,
  //         addContacts.pending,
  //         deleteContacts.pending
  //       ),
  //       handlePending
  //     )
  //     .addMatcher(
  //       isAnyOf(
  //         fetchContacts.rejected,
  //         addContacts.rejected,
  //         deleteContacts.rejected
  //       ),
  //       handleRejected
  //     )
  //     .addMatcher(
  //       isAnyOf(
  //         fetchContacts.fulfilled,
  //         addContacts.fulfilled,
  //         deleteContacts.fulfilled
  //       ),
  //       state => {
  //         state.isLoading = false;
  //         state.error = null;
  //       }
  //     ),
});

export const contactsReducer = contactsSlise.reducer;
