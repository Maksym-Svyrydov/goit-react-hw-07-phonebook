import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContactList, postContacts, deleteContact } from './API';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async search => {
    const contacts = await fetchContactList(search);
    return contacts.data;
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async data => {
    const contact = await postContacts(data);
    return contact;
  }
);
export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async contactId => {
    const contact = await deleteContact(contactId);
    return contact.contactId;
  }
);
