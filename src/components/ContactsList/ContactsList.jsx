// import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import css from './ContactsList.module.css'

function ContactList({contacts, onDelete}) {  
  return(
    <ul className={css.list_contacts}>
        {contacts.map((contact) => (
            <li id={contact.id} key={nanoid()} className={css.item}>
                <p>{contact.name}: {contact.number}</p>
                <button className={css.btn_delete} onClick={
                  () => {
                    onDelete(contact.id)
                  }
                }>Delete</button>
            </li>
          ))}
      </ul>
  )
}

export default ContactList