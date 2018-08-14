import { GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT } from './types';

export const getContacts = () => {
  return {
    type: GET_CONTACTS
  };
}

export const addContact = (contactData) => {
  return {
    type: ADD_CONTACT,
    payload: contactData
  };
}

export const deleteContact = (id) => {
  return {
    type: DELETE_CONTACT,
    payload: id
  };
}
