import { nanoid } from 'nanoid'
import './App.css';
import ContactsList from './components/ContactsList/ContactsList.jsx';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import React, { Component } from 'react'

export default class App extends Component {
  state = {
      contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ],
      filter: '',
    }

  handleSubmit = (info) => {
    const alreadyExist = this.state.contacts.find(contact => contact.name.toLowerCase() === info.name.toLowerCase())
    if (alreadyExist) {
      alert(`${info.name} is already in contacts`)
    } else {
      this.setState({
        contacts: [{
          id: nanoid(),
          name: info.name,
          number: info.number,
        }, ...this.state.contacts
      ]
      })
    }
  }

  onDeleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }))
  }

  handleFilter = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

  filterContacts = () => {
    // string преобразуеться в true, кроме пустой строки "" -- false
    if ( this.state.filter) {
      return  this.state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
      );
    }
    return  this.state.contacts;
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit}/>
        <h2>Contacts</h2>
        <Filter onChange={this.handleFilter} filter={this.state.filter}/>
        <ContactsList contacts={this.filterContacts()} onDelete={this.onDeleteContact}/>
      </div>
    )
  }
}

