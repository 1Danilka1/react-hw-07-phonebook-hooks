import { useState } from 'react';
import { nanoid } from 'nanoid'
import css from './ContactForm.module.css'

export default function ContactForm( onSubmit ) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const nameInputId = nanoid();
    const telInputId = nanoid();


    const submitForm = e => {
        e.preventDefault();
        onSubmit({ name: name, number: number });
        reset();
      };

      const reset = () => {
        setName('');
        setNumber('');
      };

    return (
        <form onSubmit={submitForm} className={css.main_container}>
         <label htmlFor={nameInputId} className={css.title}>
            Name
         </label>
            <input
            id={nameInputId}
            type="text"
            name="name"
            value={name}
            className={css.input}
            onChange={e => {
                setName(e.currentTarget.value);
            }}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
/>
        <label htmlFor={telInputId} className={css.title}>
            Number
        </label>
            <input
                id={telInputId}
                type="tel"
                name="number"
                value={number}
                className={css.input}
                onChange={e => {
                    setName(e.currentTarget.value);
                }}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
    />
        <button type='submit' className={css.button}>Add contact</button>
    </form>
    )
}