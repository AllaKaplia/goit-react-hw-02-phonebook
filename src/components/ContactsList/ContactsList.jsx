import { nanoid } from 'nanoid';
import css from '../ContactsList/ContactsList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul className={css.contactsList}>
        {contacts.map(({ name, number }) => (
          <li key={nanoid()} className={css.contactItem}>
            {name}: {number}
            <button type='button' className={css.removeBtn} onClick={() => onDeleteContact(name)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    );
}

export default ContactList;