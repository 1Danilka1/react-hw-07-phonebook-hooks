import { nanoid } from 'nanoid'
import React, { Component } from 'react'

export default class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }

    nameId = nanoid()
    telId = nanoid()

    inputChange = (e) =>  {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state)
        this.setState({
            name: '',
            number: '',
        })
    }

  render() {
    return (
    <form onSubmit={this.submitForm}>
        <label htmlFor={this.nameId}>
            Name
        </label>
        <input
            id={this.nameId}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.inputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
/>
        <label htmlFor={this.telId}>
            Number
        </label>
        <input
            id={this.telId}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.inputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
/>
        <button type='submit'>Add contact</button>
    </form>
    )
  }
}
