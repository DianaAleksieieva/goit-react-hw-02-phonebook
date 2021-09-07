import React from 'react';
import { ContactStyledList, P } from '../App.styled.jsx';

const ContactList = ({ contacts }) => (
     <ContactStyledList> {contacts.map(({ id, name, number }) => (
      <li key={id}>
          <P>{name}:</P> <P>{number}</P></li>
      ))}</ContactStyledList>
);

export default ContactList;