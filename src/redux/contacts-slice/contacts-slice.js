import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',

  initialState: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },

  reducers: {
    add: {
      reducer(store, { payload }) {
        const newContacts = [...store.items, payload];
        return { ...store, items: newContacts };
      },
      prepare(data) {
        const newContact = { ...data, id: nanoid() };
        return {
          payload: newContact,
        };
      },
    },

    remove: {
      reducer(store, { payload }) {
        return {
          ...store,
          items: store.items.filter(item => item.id !== payload),
        };
      },
    },
    filter: {
      reducer(store, { payload }) {
        return {
          ...store,
          filter: payload,
        };
      },
    },
  },
});
export const { actions } = contactsSlice;

export default contactsSlice.reducer;
