import React, { userReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const intialState = {
    contacts: [
      {
        id: 1,
        name: 'Jill Johnson',
        email: 'ted@gmail.com',
        phone: '111-111-1112',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Sarah Watson',
        email: 'sarah@gmail.com',
        phone: '111-111-1112',
        type: 'professional',
      },
      {
        id: 3,
        name: 'Harry White',
        email: 'harry@gmail.com',
        phone: '111-111-1112',
        type: 'professional',
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, intialState);

  //Add Contact

  //Delete Contact

  //Set Current Contact

  //Clear Current Contact

  //Update Contact

  //Filter Contacts

  //Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
