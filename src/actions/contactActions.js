import { GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT } from './types';
import axios from 'axios';

export const getContacts = () => async dispatch => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');

  dispatch({
    type: GET_CONTACTS,
    payload: res.data
  });
}

export const addContact = (contactData) => async dispatch => {
  const res = await axios.post('https://jsonplaceholder.typicode.com/users', contactData);

  dispatch({
    type: ADD_CONTACT,
    payload: res.data
  });
}

export const deleteContact = (id) => async dispatch => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
  } catch(e) {
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
  }
}
