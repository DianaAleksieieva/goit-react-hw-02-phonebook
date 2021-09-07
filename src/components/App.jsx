import React from 'react';
import { Container} from './App.styled.jsx';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import { v4 as uuidv4 } from 'uuid';
import ContactList from './ContactList/ContactList';

export default class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  }

  addContact = contsctInfo => {
    const newContact = {
      id : uuidv4(),
      name: contsctInfo.name,
      number: contsctInfo.number
    }
    console.log(this.state.contacts.name === contsctInfo.name)
    this.state.contacts.map(
      ({ name }) => ((contsctInfo.name === name) ?
        alert(name + "is already in contacts") :
        this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts] })))
    )
  }

changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
};
  findContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    const filteredContacts = contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(normalizedFilter),
    );
    return filteredContacts
  };
  render() {
    const { filter,contacts } = this.state;
    const filteredContacts = this.findContact();
    return <Container >
       <h2>PhoneBook</h2>
      <Form onSubmit={this.addContact} contactsBook={contacts} />
      <h2>Contacts</h2>
      
      <ContactList contacts={filteredContacts}/>
      <Filter value={filter} onChange={this.changeFilter} />
    </Container>
  }
}


          // type="button"
          // className="TodoList__btn"
          // onClick={() => onDeleteTodo(id)}
      

