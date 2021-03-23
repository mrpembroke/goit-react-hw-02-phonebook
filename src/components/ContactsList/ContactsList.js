import React from 'react';
import s from './ContactsList.module.css';

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ul className={s.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <span className={s.name}>{name}</span>: {number}
          <button
            type="button"
            className={s.closeBtn}
            onClick={() => onDelete(id)}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
