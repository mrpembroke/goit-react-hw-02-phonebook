import './App.css';
import React, { Component } from 'react';
import shortid from 'shortid';

import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactsList/ContactsList';

import defaultContacts from './db/contacts.json';

class App extends Component {
  state = {
    contacts: defaultContacts,
    name: '',
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    const { contacts } = this.state;
    contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase(),
    )
      ? alert(`${name} is already added.`)
      : this.setState(({ contacts }) => ({ contacts: [...contacts, contact] }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeInput = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;

    return (
      <>
        <div>
          <h2>My phonebook</h2>

          <ContactForm onSubmit={this.addContact} />
          <Filter value={filter} onChange={this.changeInput} />

          <h2>My contacts:</h2>

          <ContactList
            contacts={this.getVisibleContacts()}
            onDelete={this.deleteContact}
          />
        </div>
      </>
    );
  }
}

export default App;
